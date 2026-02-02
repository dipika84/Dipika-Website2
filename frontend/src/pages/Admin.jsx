import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Plus, 
  Edit2, 
  Trash2, 
  Eye,
  Save,
  X,
  ArrowLeft,
  FileText,
  Mail,
  Users
} from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Admin() {
  const [activeTab, setActiveTab] = useState('blog');
  const [posts, setPosts] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: 'International Clients',
    image_url: '',
    meta_title: '',
    meta_description: '',
    published: true
  });

  const categories = [
    'International Clients',
    'US GAAP',
    'Accounting Tips',
    'Software',
    'Professional Growth',
    'Client Relationships'
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      if (activeTab === 'blog') {
        const response = await axios.get(`${API}/blog?published_only=false`);
        setPosts(response.data);
      } else if (activeTab === 'contacts') {
        const response = await axios.get(`${API}/contact`);
        setContacts(response.data);
      } else if (activeTab === 'leads') {
        const response = await axios.get(`${API}/leads`);
        setLeads(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title)
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      if (editingPost) {
        await axios.put(`${API}/blog/${editingPost.slug}`, formData);
        toast.success('Blog post updated successfully');
      } else {
        await axios.post(`${API}/blog`, formData);
        toast.success('Blog post created successfully');
      }
      
      resetForm();
      fetchData();
    } catch (error) {
      toast.error(error.response?.data?.detail || 'Error saving post');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      image_url: post.image_url || '',
      meta_title: post.meta_title || '',
      meta_description: post.meta_description || '',
      published: post.published
    });
    setShowEditor(true);
  };

  const handleDelete = async (slug) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await axios.delete(`${API}/blog/${slug}`);
      toast.success('Blog post deleted');
      fetchData();
    } catch (error) {
      toast.error('Error deleting post');
    }
  };

  const resetForm = () => {
    setShowEditor(false);
    setEditingPost(null);
    setFormData({
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      category: 'International Clients',
      image_url: '',
      meta_title: '',
      meta_description: '',
      published: true
    });
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="pt-24 pb-20 md:pb-0 min-h-screen bg-[#F8F9FA]" data-testid="admin-page">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#1E3A5F] mb-4">
              <ArrowLeft size={18} />
              Back to Website
            </Link>
            <h1 className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Admin Dashboard
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('blog')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === 'blog' 
                ? 'bg-[#1E3A5F] text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
            data-testid="tab-blog"
          >
            <FileText size={18} />
            Blog Posts ({posts.length})
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === 'contacts' 
                ? 'bg-[#1E3A5F] text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
            data-testid="tab-contacts"
          >
            <Mail size={18} />
            Contact Forms ({contacts.length})
          </button>
          <button
            onClick={() => setActiveTab('leads')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
              activeTab === 'leads' 
                ? 'bg-[#1E3A5F] text-white' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
            data-testid="tab-leads"
          >
            <Users size={18} />
            Lead Emails ({leads.length})
          </button>
        </div>

        {/* Blog Tab Content */}
        {activeTab === 'blog' && !showEditor && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold" style={{ color: '#1E3A5F' }}>
                Manage Blog Posts
              </h2>
              <button
                onClick={() => setShowEditor(true)}
                className="btn-gold flex items-center gap-2"
                data-testid="create-post-btn"
              >
                <Plus size={18} />
                Create New Post
              </button>
            </div>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="spinner"></div>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <FileText size={48} className="mx-auto mb-4 text-slate-300" />
                <p className="text-slate-600 mb-4">No blog posts yet</p>
                <button
                  onClick={() => setShowEditor(true)}
                  className="btn-primary"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-slate-600">Title</th>
                      <th className="text-left p-4 font-medium text-slate-600">Category</th>
                      <th className="text-left p-4 font-medium text-slate-600">Status</th>
                      <th className="text-left p-4 font-medium text-slate-600">Date</th>
                      <th className="text-right p-4 font-medium text-slate-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post, index) => (
                      <tr key={post.id || index} className="border-b last:border-b-0 hover:bg-slate-50">
                        <td className="p-4">
                          <p className="font-medium" style={{ color: '#1E3A5F' }}>{post.title}</p>
                          <p className="text-sm text-slate-500">{post.slug}</p>
                        </td>
                        <td className="p-4">
                          <span className="badge-gold text-xs">{post.category}</span>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.published 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {post.published ? 'Published' : 'Draft'}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-slate-600">
                          {formatDate(post.created_at)}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/blog/${post.slug}`}
                              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
                              title="View"
                            >
                              <Eye size={18} />
                            </Link>
                            <button
                              onClick={() => handleEdit(post)}
                              className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
                              title="Edit"
                            >
                              <Edit2 size={18} />
                            </button>
                            <button
                              onClick={() => handleDelete(post.slug)}
                              className="p-2 hover:bg-red-50 rounded-lg text-red-500"
                              title="Delete"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Blog Editor */}
        {activeTab === 'blog' && showEditor && (
          <div className="bg-white rounded-xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold" style={{ color: '#1E3A5F' }}>
                {editingPost ? 'Edit Blog Post' : 'Create New Blog Post'}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleTitleChange}
                    className="form-input"
                    placeholder="Blog post title"
                    required
                    data-testid="input-post-title"
                  />
                </div>
                <div>
                  <label className="form-label">Slug</label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleChange}
                    className="form-input bg-slate-50"
                    placeholder="auto-generated-slug"
                    data-testid="input-post-slug"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="form-input"
                    data-testid="input-post-category"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="form-label">Featured Image URL</label>
                  <input
                    type="text"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
              </div>

              <div>
                <label className="form-label">Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  className="form-input min-h-[80px] resize-none"
                  placeholder="Brief description for blog listing"
                  required
                  data-testid="input-post-excerpt"
                />
              </div>

              <div>
                <label className="form-label">Content *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  className="form-input min-h-[300px] resize-y"
                  placeholder="Full blog post content (HTML supported)"
                  required
                  data-testid="input-post-content"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="form-label">Meta Title (SEO)</label>
                  <input
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="SEO title"
                  />
                </div>
                <div>
                  <label className="form-label">Meta Description (SEO)</label>
                  <input
                    type="text"
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="SEO description"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="published"
                  id="published"
                  checked={formData.published}
                  onChange={handleChange}
                  className="w-5 h-5 rounded border-slate-300"
                />
                <label htmlFor="published" className="font-medium text-slate-700">
                  Publish immediately
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2"
                  data-testid="save-post-btn"
                >
                  <Save size={18} />
                  {editingPost ? 'Update Post' : 'Create Post'}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="btn-secondary"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Contacts Tab Content */}
        {activeTab === 'contacts' && (
          <div>
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>
              Contact Form Submissions
            </h2>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="spinner"></div>
              </div>
            ) : contacts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <Mail size={48} className="mx-auto mb-4 text-slate-300" />
                <p className="text-slate-600">No contact submissions yet</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {contacts.map((contact, index) => (
                  <div key={contact.id || index} className="bg-white rounded-xl p-6 border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-semibold text-lg" style={{ color: '#1E3A5F' }}>{contact.name}</h3>
                        <p className="text-slate-500">{contact.email}</p>
                      </div>
                      <span className="text-sm text-slate-500">
                        {formatDate(contact.created_at)}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-slate-500">Country:</span>
                        <p className="font-medium">{contact.country || 'Not specified'}</p>
                      </div>
                      <div>
                        <span className="text-sm text-slate-500">Service:</span>
                        <p className="font-medium">{contact.service || 'Not specified'}</p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-slate-500">Message:</span>
                      <p className="mt-1 text-slate-700">{contact.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Leads Tab Content */}
        {activeTab === 'leads' && (
          <div>
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1E3A5F' }}>
              Lead Magnet Emails
            </h2>

            {loading ? (
              <div className="flex justify-center py-20">
                <div className="spinner"></div>
              </div>
            ) : leads.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <Users size={48} className="mx-auto mb-4 text-slate-300" />
                <p className="text-slate-600">No lead emails collected yet</p>
              </div>
            ) : (
              <div className="bg-white rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b">
                    <tr>
                      <th className="text-left p-4 font-medium text-slate-600">Email</th>
                      <th className="text-left p-4 font-medium text-slate-600">Source</th>
                      <th className="text-left p-4 font-medium text-slate-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((lead, index) => (
                      <tr key={lead.id || index} className="border-b last:border-b-0 hover:bg-slate-50">
                        <td className="p-4 font-medium" style={{ color: '#1E3A5F' }}>{lead.email}</td>
                        <td className="p-4">
                          <span className="badge-gold text-xs">{lead.source}</span>
                        </td>
                        <td className="p-4 text-sm text-slate-600">
                          {formatDate(lead.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
