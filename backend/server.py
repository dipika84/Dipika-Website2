from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# ==================== MODELS ====================

# Contact Form Model
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    country: str
    service: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    country: str
    service: str
    message: str

# Lead Magnet Model
class LeadEmail(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: EmailStr
    source: str = "free_guide"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class LeadEmailCreate(BaseModel):
    email: EmailStr
    source: str = "free_guide"

# Blog Post Model
class BlogPost(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    author: str = "Dipika Gujarati"
    image_url: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    published: bool = True
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class BlogPostCreate(BaseModel):
    title: str
    slug: str
    excerpt: str
    content: str
    category: str
    author: str = "Dipika Gujarati"
    image_url: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    published: bool = True

class BlogPostUpdate(BaseModel):
    title: Optional[str] = None
    slug: Optional[str] = None
    excerpt: Optional[str] = None
    content: Optional[str] = None
    category: Optional[str] = None
    image_url: Optional[str] = None
    meta_title: Optional[str] = None
    meta_description: Optional[str] = None
    published: Optional[bool] = None

# ==================== ROUTES ====================

@api_router.get("/")
async def root():
    return {"message": "Dipika Gujarati API - Welcome"}

# Contact Form Routes
@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact_submission(input: ContactSubmissionCreate):
    submission_obj = ContactSubmission(**input.model_dump())
    doc = submission_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.contact_submissions.insert_one(doc)
    return submission_obj

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    for sub in submissions:
        if isinstance(sub['created_at'], str):
            sub['created_at'] = datetime.fromisoformat(sub['created_at'])
    return submissions

# Lead Magnet Routes
@api_router.post("/leads", response_model=LeadEmail)
async def create_lead_email(input: LeadEmailCreate):
    # Check if email already exists
    existing = await db.lead_emails.find_one({"email": input.email}, {"_id": 0})
    if existing:
        if isinstance(existing['created_at'], str):
            existing['created_at'] = datetime.fromisoformat(existing['created_at'])
        return LeadEmail(**existing)
    
    lead_obj = LeadEmail(**input.model_dump())
    doc = lead_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.lead_emails.insert_one(doc)
    return lead_obj

@api_router.get("/leads", response_model=List[LeadEmail])
async def get_lead_emails():
    leads = await db.lead_emails.find({}, {"_id": 0}).to_list(1000)
    for lead in leads:
        if isinstance(lead['created_at'], str):
            lead['created_at'] = datetime.fromisoformat(lead['created_at'])
    return leads

# Blog Routes
@api_router.post("/blog", response_model=BlogPost)
async def create_blog_post(input: BlogPostCreate):
    # Check if slug already exists
    existing = await db.blog_posts.find_one({"slug": input.slug}, {"_id": 0})
    if existing:
        raise HTTPException(status_code=400, detail="Blog post with this slug already exists")
    
    post_obj = BlogPost(**input.model_dump())
    doc = post_obj.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    doc['updated_at'] = doc['updated_at'].isoformat()
    await db.blog_posts.insert_one(doc)
    return post_obj

@api_router.get("/blog", response_model=List[BlogPost])
async def get_blog_posts(category: Optional[str] = None, published_only: bool = True):
    query = {}
    if category:
        query["category"] = category
    if published_only:
        query["published"] = True
    
    posts = await db.blog_posts.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for post in posts:
        if isinstance(post['created_at'], str):
            post['created_at'] = datetime.fromisoformat(post['created_at'])
        if isinstance(post['updated_at'], str):
            post['updated_at'] = datetime.fromisoformat(post['updated_at'])
    return posts

@api_router.get("/blog/{slug}", response_model=BlogPost)
async def get_blog_post(slug: str):
    post = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not post:
        raise HTTPException(status_code=404, detail="Blog post not found")
    if isinstance(post['created_at'], str):
        post['created_at'] = datetime.fromisoformat(post['created_at'])
    if isinstance(post['updated_at'], str):
        post['updated_at'] = datetime.fromisoformat(post['updated_at'])
    return post

@api_router.put("/blog/{slug}", response_model=BlogPost)
async def update_blog_post(slug: str, input: BlogPostUpdate):
    existing = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not existing:
        raise HTTPException(status_code=404, detail="Blog post not found")
    
    update_data = {k: v for k, v in input.model_dump().items() if v is not None}
    update_data['updated_at'] = datetime.now(timezone.utc).isoformat()
    
    await db.blog_posts.update_one({"slug": slug}, {"$set": update_data})
    
    updated = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if isinstance(updated['created_at'], str):
        updated['created_at'] = datetime.fromisoformat(updated['created_at'])
    if isinstance(updated['updated_at'], str):
        updated['updated_at'] = datetime.fromisoformat(updated['updated_at'])
    return updated

@api_router.delete("/blog/{slug}")
async def delete_blog_post(slug: str):
    result = await db.blog_posts.delete_one({"slug": slug})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Blog post not found")
    return {"message": "Blog post deleted successfully"}

# Blog Categories
@api_router.get("/blog-categories")
async def get_blog_categories():
    categories = await db.blog_posts.distinct("category")
    return {"categories": categories}

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
