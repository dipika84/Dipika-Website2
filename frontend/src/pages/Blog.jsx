import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  ArrowLeft,
  Search,
  Tag
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Sample blog posts for initial display
const samplePosts = [
  {
    id: '1',
    title: 'How to Get Your First US Client as a CA from India',
    slug: 'how-to-get-first-us-client-ca-india',
    excerpt: 'A step-by-step guide for Indian Chartered Accountants looking to break into the US market and land their first international client.',
    content: '',
    category: 'International Clients',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1767558031499-26b38d8ea5f9?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    title: '7 Mistakes That Make You Look Unprofessional to International Clients',
    slug: '7-mistakes-unprofessional-international-clients',
    excerpt: 'Avoid these common pitfalls that can cost you international clients. Learn how to present yourself professionally.',
    content: '',
    category: 'Professional Growth',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1650717721915-d2fab5448365?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'QuickBooks Month-End Closing Checklist',
    slug: 'quickbooks-month-end-closing-checklist',
    excerpt: 'A comprehensive checklist to ensure your QuickBooks month-end close is accurate and complete every time.',
    content: '',
    category: 'Accounting Tips',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1666718621210-e662947b5dc3?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Xero vs QuickBooks vs NetSuite: Which One is Better?',
    slug: 'xero-vs-quickbooks-vs-netsuite-comparison',
    excerpt: 'A detailed comparison of the three most popular cloud accounting platforms to help you choose the right one.',
    content: '',
    category: 'Software',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1565791380709-49e529c8b073?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'ASC 606 Explained with Simple Examples',
    slug: 'asc-606-explained-simple-examples',
    excerpt: 'Understand the revenue recognition standard ASC 606 with practical examples that make complex concepts simple.',
    content: '',
    category: 'US GAAP',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1764437018245-2dbf4d199d81?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'ASC 842 Leases Simplified',
    slug: 'asc-842-leases-simplified',
    excerpt: 'A beginner-friendly guide to understanding the lease accounting standard ASC 842 and its implementation.',
    content: '',
    category: 'US GAAP',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1650717721915-d2fab5448365?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'How to Price Your Accounting Services for US/UK Clients',
    slug: 'how-to-price-accounting-services-international',
    excerpt: 'Learn the strategies for pricing your services competitively for international clients without underselling yourself.',
    content: '',
    category: 'International Clients',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1767558031499-26b38d8ea5f9?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '8',
    title: 'How to Talk to Clients Confidently on Calls',
    slug: 'how-to-talk-clients-confidently-calls',
    excerpt: 'Master the art of client communication with these practical tips for conducting professional discovery calls.',
    content: '',
    category: 'Professional Growth',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1666718621210-e662947b5dc3?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '9',
    title: 'How to Write an International Resume for Accounting Roles',
    slug: 'how-to-write-international-resume-accounting',
    excerpt: 'Create a resume that stands out to international employers and positions you as a global accounting professional.',
    content: '',
    category: 'Professional Growth',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1650717721915-d2fab5448365?w=800',
    created_at: new Date().toISOString(),
  },
  {
    id: '10',
    title: 'How to Maintain Client Trust Long-Term',
    slug: 'how-to-maintain-client-trust-long-term',
    excerpt: 'Building lasting relationships with clients is key to a successful practice. Learn how to nurture trust over time.',
    content: '',
    category: 'Client Relationships',
    author: 'Dipika Gujarati',
    image_url: 'https://images.unsplash.com/photo-1565791380709-49e529c8b073?w=800',
    created_at: new Date().toISOString(),
  },
];

const categories = [
  'All',
  'International Clients',
  'US GAAP',
  'Accounting Tips',
  'Software',
  'Professional Growth',
  'Client Relationships'
];

export default function Blog() {
  const [posts, setPosts] = useState(samplePosts);
  const [filteredPosts, setFilteredPosts] = useState(samplePosts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [selectedCategory, searchQuery, posts]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/blog`);
      if (response.data && response.data.length > 0) {
        setPosts(response.data);
      } else {
        setPosts(samplePosts);
      }
    } catch (error) {
      console.log('Using sample posts');
      setPosts(samplePosts);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="blog-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="blog-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-gold mb-6">Blog</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              International Clients + <span className="gold-text">Accounting Insights</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Practical guides, tips, and insights for accounting professionals working with international clients.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-slate-100" data-testid="blog-filters">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:border-[#1E3A5F]"
                data-testid="blog-search-input"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  data-testid={`category-btn-${category.toLowerCase().replace(' ', '-')}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-white" data-testid="blog-grid">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="spinner"></div>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-600">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id || index}
                  className="blog-card bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
                  data-testid={`blog-card-${index}`}
                >
                  <div className="blog-card-image h-48">
                    <img
                      src={post.image_url || 'https://images.unsplash.com/photo-1666718621210-e662947b5dc3?w=800'}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                      <span className="badge-gold text-xs">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3 line-clamp-2" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-slate-500">
                        <Calendar size={14} />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-[#C9A227] font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200"
                        data-testid={`read-more-${index}`}
                      >
                        Read More
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="blog-newsletter">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Stay Updated
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Get the latest insights on international accounting and client acquisition delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2"
            data-testid="blog-contact-btn"
          >
            Subscribe Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
