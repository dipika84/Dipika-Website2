# Dipika Gujarati - Professional Business Website PRD

## Project Overview
Premium business website for Dipika Gujarati, a Chartered Accountant from India offering remote accounting and finance services to international clients (US/UK/Canada/Australia), CPA coaching, and international client strategy support.

## User Personas

### 1. International Business Owners
- **Who**: US/UK/Canada/Australia small business owners needing bookkeeping, financial reporting, AR/AP support
- **Needs**: Reliable remote accounting support, QuickBooks/Xero/NetSuite expertise, US GAAP compliance
- **Goals**: Find a trustworthy, cost-effective accounting professional

### 2. CA/CPA Professionals
- **Who**: Indian CA/CPA students and professionals wanting to work with international clients
- **Needs**: Guidance on positioning, outreach scripts, pricing strategy, communication coaching
- **Goals**: Land their first international client, build sustainable global practice

### 3. Finance Professionals
- **Who**: Bookkeepers, finance professionals, freelancers looking to go global
- **Needs**: Profile optimization, LinkedIn strategy, discovery call coaching
- **Goals**: Grow income through international remote work

## Core Requirements

### Design Requirements
- White background with dark navy (#1E3A5F) + gold (#C9A227) accents
- Premium, minimal, modern UI (international style)
- Playfair Display (headings) + Manrope (body) fonts
- Mobile-first responsive design
- Professional animations (light + smooth)

### Technical Requirements
- React frontend with React Router
- FastAPI backend with MongoDB
- Contact form with database storage
- Lead magnet email collection
- Dynamic blog system
- WhatsApp floating button
- SEO-friendly structure

## What's Been Implemented (January 2026)

### Pages Completed
1. **Home** - Hero section, trust strip, 6 service cards, why choose me, 3 testimonials, lead magnet form, 3 FAQ items, CTA section
2. **Services** - 4 categories (Accounting & Finance, Software Expertise, US GAAP Support, Professional Growth)
3. **About** - Professional story, 5 core values, credentials section, founder photo
4. **International Client Help** - Positioning guide, 5 learning points, target audience, 3-step approach
5. **Testimonials** - 6 testimonial cards, Before vs After case study, trust metrics
6. **Blog** - Dynamic blog listing, category filtering, search, 10 sample posts
7. **Contact** - Contact form (Name, Email, Country, Service, Message), WhatsApp/Call buttons, booking placeholder
8. **Admin Dashboard** - Blog post management, contact submissions viewer, lead emails viewer

### Backend APIs
- `POST /api/contact` - Contact form submissions
- `GET /api/contact` - Retrieve all submissions
- `POST /api/leads` - Lead magnet email collection
- `GET /api/leads` - Retrieve all lead emails
- `GET /api/blog` - Get all blog posts (with category filter)
- `POST /api/blog` - Create new blog post
- `GET /api/blog/{slug}` - Get single post
- `PUT /api/blog/{slug}` - Update post
- `DELETE /api/blog/{slug}` - Delete post
- `GET /api/blog-categories` - Get all categories

### Components
- Header (sticky, glassmorphism effect)
- Footer (dark navy with contact info)
- WhatsApp floating button (all pages)
- Mobile CTA (sticky bottom bar)

## Prioritized Backlog

### P0 - Critical (Completed)
- [x] All 7 pages implemented
- [x] Contact form with database storage
- [x] Lead magnet email collection
- [x] WhatsApp integration
- [x] Responsive design

### P1 - High Priority (Completed)
- [x] Blog admin panel for content management (/admin route)
- [ ] Email notifications for new contact submissions
- [ ] Calendly/Cal.com integration for booking

### P2 - Medium Priority (Future)
- [ ] SEO meta tags optimization per page
- [ ] Blog post search functionality
- [ ] Social sharing buttons
- [ ] Newsletter subscription

### P3 - Nice to Have (Future)
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics dashboard
- [ ] Testimonial submission form

## Contact Information
- **Phone/WhatsApp**: +91 7999816907
- **Email**: dipikagujarathi@yahoo.in
- **Location**: India (Remote Services Worldwide)

## Next Tasks
1. Add blog admin panel for easy content management
2. Integrate email service for form notifications
3. Connect Calendly for booking functionality
4. Add individual page meta tags for SEO
