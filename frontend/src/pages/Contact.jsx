import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Monthly Bookkeeping',
    'QuickBooks / Xero / NetSuite Support',
    'Financial Reporting',
    'US GAAP Support',
    'CPA Coaching',
    'International Client Strategy',
    'Other'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Thank you! Your message has been sent. I will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        country: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again or contact via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="contact-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="contact-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-gold mb-6">Get in Touch</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Let's Talk — Book a <span className="gold-text">Free Discovery Call</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you need accounting support or want to grow your international practice, I'm here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white" data-testid="contact-form-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8">
                Reach out through any of these channels. I typically respond within 24 hours.
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1E3A5F' }}>Phone / WhatsApp</h3>
                    <a href="tel:+917999816907" className="text-slate-600 hover:text-[#C9A227]" data-testid="contact-phone">
                      +91 7999816907
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1E3A5F' }}>Email</h3>
                    <a href="mailto:dipikagujarathi@yahoo.in" className="text-slate-600 hover:text-[#C9A227]" data-testid="contact-email">
                      dipikagujarathi@yahoo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: '#1E3A5F' }}>Location</h3>
                    <p className="text-slate-600">India (Remote Services Worldwide)</p>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20book%20a%20free%20discovery%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#1da851] transition-colors duration-300"
                  data-testid="whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>

                <a
                  href="tel:+917999816907"
                  className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-[#1E3A5F] text-white rounded-xl font-medium hover:bg-[#0F172A] transition-colors duration-300"
                  data-testid="call-btn"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>

              {/* Booking Calendar Placeholder */}
              <div className="mt-10 p-6 bg-[#F8F9FA] rounded-xl border border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar size={24} className="text-[#C9A227]" />
                  <h3 className="font-semibold" style={{ color: '#1E3A5F' }}>Book a Discovery Call</h3>
                </div>
                <p className="text-slate-600 mb-4 text-sm">
                  Schedule a free 15-minute discovery call to discuss your needs.
                </p>
                <a
                  href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20schedule%20a%20discovery%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-center flex items-center justify-center gap-2"
                  data-testid="book-call-btn"
                >
                  <Calendar size={18} />
                  Schedule via WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5" data-testid="contact-form">
                  <div>
                    <label className="form-label">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div>
                    <label className="form-label">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label className="form-label">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="e.g., USA, UK, India"
                      data-testid="input-country"
                    />
                  </div>

                  <div>
                    <label className="form-label">Service Interested In</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input"
                      data-testid="input-service"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="form-label">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="form-input min-h-[150px] resize-none"
                      placeholder="Tell me about your needs..."
                      required
                      data-testid="input-message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                    data-testid="submit-btn"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Info Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="contact-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Working Across Time Zones
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            I provide remote support for clients in the US, UK, Canada, and Australia. 
            Flexible scheduling to accommodate your timezone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              WhatsApp Now
            </a>
            <Link to="/services" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center gap-2">
              View Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
