import requests
import sys
from datetime import datetime
import json

class DipikaWebsiteAPITester:
    def __init__(self, base_url="https://dipika-global.preview.emergentagent.com"):
        self.base_url = base_url
        self.api_url = f"{base_url}/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, params=None):
        """Run a single API test"""
        url = f"{self.api_url}/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, params=params)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'test': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'test': name,
                'error': str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "", 200)

    def test_contact_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "country": "USA",
            "service": "Monthly Bookkeeping",
            "message": "This is a test message for contact form"
        }
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        return success, response.get('id') if success else None

    def test_get_contact_submissions(self):
        """Test getting contact submissions"""
        return self.run_test("Get Contact Submissions", "GET", "contact", 200)

    def test_lead_email_submission(self):
        """Test lead magnet email submission"""
        test_data = {
            "email": f"lead_{datetime.now().strftime('%H%M%S')}@example.com",
            "source": "free_guide"
        }
        success, response = self.run_test(
            "Lead Email Submission",
            "POST",
            "leads",
            200,
            data=test_data
        )
        return success, response.get('id') if success else None

    def test_get_lead_emails(self):
        """Test getting lead emails"""
        return self.run_test("Get Lead Emails", "GET", "leads", 200)

    def test_duplicate_lead_email(self):
        """Test duplicate lead email handling"""
        test_email = "duplicate@example.com"
        test_data = {"email": test_email, "source": "free_guide"}
        
        # Submit first time
        self.run_test("First Lead Submission", "POST", "leads", 200, data=test_data)
        
        # Submit duplicate - should return existing record
        return self.run_test("Duplicate Lead Submission", "POST", "leads", 200, data=test_data)

    def test_blog_posts_get(self):
        """Test getting blog posts"""
        return self.run_test("Get Blog Posts", "GET", "blog", 200)

    def test_blog_categories(self):
        """Test getting blog categories"""
        return self.run_test("Get Blog Categories", "GET", "blog-categories", 200)

    def test_create_blog_post(self):
        """Test creating a blog post"""
        timestamp = datetime.now().strftime('%H%M%S')
        test_data = {
            "title": f"Test Blog Post {timestamp}",
            "slug": f"test-blog-post-{timestamp}",
            "excerpt": "This is a test blog post excerpt",
            "content": "This is the full content of the test blog post",
            "category": "International Clients",
            "author": "Dipika Gujarati",
            "published": True
        }
        success, response = self.run_test(
            "Create Blog Post",
            "POST",
            "blog",
            200,
            data=test_data
        )
        return success, response.get('slug') if success else None

    def test_get_blog_post_by_slug(self, slug):
        """Test getting a specific blog post by slug"""
        if not slug:
            print("⚠️  Skipping blog post by slug test - no slug provided")
            return False, {}
        return self.run_test(f"Get Blog Post by Slug ({slug})", "GET", f"blog/{slug}", 200)

    def test_blog_posts_with_category_filter(self):
        """Test getting blog posts with category filter"""
        return self.run_test(
            "Get Blog Posts with Category Filter",
            "GET",
            "blog",
            200,
            params={"category": "International Clients"}
        )

    def test_update_blog_post(self, slug):
        """Test updating a blog post"""
        if not slug:
            print("⚠️  Skipping blog post update test - no slug provided")
            return False, {}
        
        update_data = {
            "title": f"Updated Test Blog Post {datetime.now().strftime('%H%M%S')}",
            "excerpt": "This is an updated test blog post excerpt",
            "content": "This is the updated full content of the test blog post",
            "published": False
        }
        return self.run_test(
            f"Update Blog Post ({slug})",
            "PUT",
            f"blog/{slug}",
            200,
            data=update_data
        )

    def test_delete_blog_post(self, slug):
        """Test deleting a blog post"""
        if not slug:
            print("⚠️  Skipping blog post delete test - no slug provided")
            return False, {}
        
        success, response = self.run_test(
            f"Delete Blog Post ({slug})",
            "DELETE",
            f"blog/{slug}",
            200
        )
        return success

    def test_get_blog_posts_admin(self):
        """Test getting all blog posts including unpublished (for admin)"""
        return self.run_test(
            "Get All Blog Posts (Admin)",
            "GET",
            "blog",
            200,
            params={"published_only": "false"}
        )

    def test_invalid_endpoints(self):
        """Test invalid endpoints return 404"""
        success, _ = self.run_test("Invalid Endpoint", "GET", "nonexistent", 404)
        return success

def main():
    print("🚀 Starting Dipika Gujarati Website API Tests")
    print("=" * 60)
    
    # Setup
    tester = DipikaWebsiteAPITester()
    
    # Run all tests
    print("\n📋 Testing Core API Endpoints...")
    
    # Test API root
    tester.test_root_endpoint()
    
    # Test contact form functionality
    print("\n📞 Testing Contact Form...")
    contact_success, contact_id = tester.test_contact_submission()
    tester.test_get_contact_submissions()
    
    # Test lead magnet functionality
    print("\n📧 Testing Lead Magnet...")
    lead_success, lead_id = tester.test_lead_email_submission()
    tester.test_get_lead_emails()
    tester.test_duplicate_lead_email()
    
    # Test blog functionality
    print("\n📝 Testing Blog Functionality...")
    tester.test_blog_posts_get()
    tester.test_blog_categories()
    blog_success, blog_slug = tester.test_create_blog_post()
    tester.test_get_blog_post_by_slug(blog_slug)
    tester.test_blog_posts_with_category_filter()
    
    # Test admin blog functionality (CRUD operations)
    print("\n🔧 Testing Admin Blog CRUD Operations...")
    tester.test_get_blog_posts_admin()
    if blog_slug:
        tester.test_update_blog_post(blog_slug)
        # Note: We'll delete the post at the end to clean up
        # tester.test_delete_blog_post(blog_slug)
    
    # Test error handling
    print("\n🚫 Testing Error Handling...")
    tester.test_invalid_endpoints()
    
    # Print results
    print("\n" + "=" * 60)
    print(f"📊 Test Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for failed in tester.failed_tests:
            print(f"   - {failed.get('test', 'Unknown')}: {failed}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100 if tester.tests_run > 0 else 0
    print(f"📈 Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())