import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Calendar, 
  User, 
  ArrowLeft,
  Share2,
  Tag
} from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/blog/${slug}`);
      setPost(response.data);
    } catch (error) {
      // Use sample content for demo
      setPost({
        title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        slug: slug,
        excerpt: 'This is a sample blog post excerpt.',
        content: `
          <p>This article provides valuable insights for accounting professionals looking to grow their international client base.</p>
          
          <h2>Key Takeaways</h2>
          <ul>
            <li>Position yourself as a specialist, not a generalist</li>
            <li>Build trust through consistent, quality communication</li>
            <li>Understand the specific needs of international clients</li>
            <li>Price your services appropriately for the market</li>
          </ul>
          
          <p>Working with international clients requires a different approach than local clients. The key is to understand their specific pain points and position your services accordingly.</p>
          
          <h2>Getting Started</h2>
          <p>The first step is to audit your current positioning. How do you present yourself on LinkedIn? What does your website say about your expertise? Are you clearly communicating the value you provide to international clients?</p>
          
          <p>Contact me to learn more about how you can improve your international client acquisition strategy.</p>
        `,
        category: 'Professional Growth',
        author: 'Dipika Gujarati',
        image_url: 'https://images.unsplash.com/photo-1666718621210-e662947b5dc3?w=800',
        created_at: new Date().toISOString(),
      });
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <div className="pt-24 pb-20 md:pb-0 min-h-screen flex items-center justify-center">
        <div className="spinner"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="pt-24 pb-20 md:pb-0 min-h-screen">
        <div className="container-custom text-center py-20">
          <h1 className="text-2xl font-semibold mb-4" style={{ color: '#1E3A5F' }}>Post Not Found</h1>
          <Link to="/blog" className="text-[#C9A227] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="blog-post-page">
      {/* Header */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="post-header">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#1E3A5F] mb-6 hover:text-[#C9A227] transition-colors" data-testid="back-to-blog">
              <ArrowLeft size={18} />
              Back to Blog
            </Link>

            <div className="badge-gold mb-4">{post.category}</div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-slate-600">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(post.created_at)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-custom -mt-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
            data-testid="post-featured-image"
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white" data-testid="post-content">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg max-w-none"
              style={{ 
                color: '#4B5563',
                lineHeight: '1.8'
              }}
            >
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-slate-600">Share this article:</span>
                  <button className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-[#C9A227] hover:text-white transition-colors" data-testid="share-btn">
                    <Share2 size={18} />
                  </button>
                </div>
                <Link to="/contact" className="btn-primary text-sm" data-testid="contact-author-btn">
                  Contact Author
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="post-cta">
        <div className="container-custom text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
            Want More Insights?
          </h2>
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Book a free discovery call to discuss your specific needs.
          </p>
          <a
            href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20learning%20more."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
            data-testid="post-book-call-btn"
          >
            Book Free Call
          </a>
        </div>
      </section>
    </div>
  );
}
