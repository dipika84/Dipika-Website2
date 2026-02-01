import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  Calculator, 
  Globe, 
  FileText, 
  BookOpen, 
  Users, 
  Target,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Star,
  Phone,
  Download
} from 'lucide-react';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const FOUNDER_PHOTO = "https://customer-assets.emergentagent.com/job_93992b89-37d3-4a04-b63d-8c6e5b7bef9c/artifacts/y1vc58t0_My%20photo.jpeg";

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const services = [
    {
      icon: Calculator,
      title: 'Monthly Bookkeeping',
      description: 'Accurate and timely bookkeeping services tailored for US/UK businesses.',
    },
    {
      icon: Globe,
      title: 'QuickBooks / Xero / NetSuite',
      description: 'Expert support for leading accounting software platforms.',
    },
    {
      icon: FileText,
      title: 'Financial Reporting & Insights',
      description: 'Comprehensive P&L, Balance Sheet, and Cash Flow reporting.',
    },
    {
      icon: BookOpen,
      title: 'US GAAP Support (ASC 606/842)',
      description: 'Technical accounting support for revenue recognition and lease accounting.',
    },
    {
      icon: Users,
      title: 'CPA Coaching Support',
      description: 'Guidance and concept clarity for CPA exam preparation.',
    },
    {
      icon: Target,
      title: 'International Client Strategy',
      description: 'Learn how to attract and retain global clients confidently.',
    },
  ];

  const testimonials = [
    {
      quote: "Extremely professional and detail-oriented. Monthly reporting improved immediately.",
      author: "US Client",
      role: "Small Business Owner"
    },
    {
      quote: "Clear communication and timely delivery. Highly recommended.",
      author: "UK Client",
      role: "E-commerce Business"
    },
    {
      quote: "Very structured and supportive approach. Helped me understand US GAAP clearly.",
      author: "Finance Professional",
      role: "CA from India"
    }
  ];

  const faqs = [
    {
      question: "Do you work with international clients?",
      answer: "Yes, I specialize in working with US, UK, Canada, and Australia-based businesses. I provide remote support with professional communication and timely delivery aligned with your timezone requirements."
    },
    {
      question: "Which softwares do you support?",
      answer: "I have expertise in QuickBooks Online, Xero, and NetSuite. I can help with setup, ongoing bookkeeping, reconciliations, and custom reporting within these platforms."
    },
    {
      question: "Can you help me get my first international client?",
      answer: "Absolutely! I offer coaching and strategy sessions specifically designed to help CA/CPA professionals position themselves for international clients. This includes profile optimization, outreach scripts, and communication coaching."
    }
  ];

  const handleLeadSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setIsSubmitting(true);
    try {
      await axios.post(`${API}/leads`, { email, source: 'free_guide' });
      toast.success('Thank you! Check your email for the free guide.');
      setEmail('');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20 md:pb-0" data-testid="home-page">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center pt-24 pb-16 hero-gradient" data-testid="hero-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fadeInUp">
              <div className="badge-gold mb-6">Chartered Accountant | India</div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Work with US/UK Clients with <span className="gold-text">Confidence</span> — Without Guesswork
              </h1>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                I help businesses and professionals improve their bookkeeping, financial reporting, and accounting systems—while also guiding CA/CPA professionals to attract and retain international clients using their skills.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-[#C9A227]" />
                  <span>Chartered Accountant (India)</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-[#C9A227]" />
                  <span>International accounting exposure including US GAAP</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700">
                  <CheckCircle size={20} className="text-[#C9A227]" />
                  <span>Remote support | Professional & confidential delivery</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20book%20a%20free%20discovery%20call."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2"
                  data-testid="hero-cta-primary"
                >
                  <Phone size={18} />
                  Book a Free Discovery Call
                </a>
                <a
                  href="https://wa.me/917999816907"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2"
                  data-testid="hero-cta-secondary"
                >
                  WhatsApp Now
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="animate-fadeInUp stagger-2 hidden lg:block">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-[#1E3A5F]/10 rounded-full blur-3xl"></div>
                <img
                  src={FOUNDER_PHOTO}
                  alt="Dipika Gujarati - Chartered Accountant"
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
                  data-testid="hero-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-6 bg-[#1E3A5F]" data-testid="trust-strip">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Star size={20} className="text-[#C9A227]" />
              <span>Trusted by professionals, freelancers & business owners working globally</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-[#C9A227]" />
              <span>Remote support for US/UK/Canada/Australia clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white" data-testid="services-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Services Built for <span className="gold-text">Global Standards</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Comprehensive accounting and finance support tailored for international businesses and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card-service animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`service-card-${index}`}
              >
                <div className="service-icon">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1E3A5F' }}>
                  {service.title}
                </h3>
                <p className="text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-secondary inline-flex items-center gap-2" data-testid="view-all-services">
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="why-choose-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                You don't need more hustle. You need <span className="gold-text">better systems</span> and positioning.
              </h2>
              <p className="text-slate-600 mb-8">
                Working with me means working with someone who understands both the technical requirements and the business context of international accounting.
              </p>
              
              <div className="space-y-4">
                {[
                  "Qualified Chartered Accountant with strong professional experience",
                  "International accounting exposure including US accounting and US GAAP",
                  "Client-ready communication and professional timelines",
                  "Secure handling of client data",
                  "Guidance + execution, not generic advice"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:block">
              <img
                src="https://images.unsplash.com/photo-1666718621210-e662947b5dc3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBtaW5pbWFsJTIwd2hpdGUlMjBvZmZpY2UlMjBpbnRlcmlvciUyMGJyaWdodHxlbnwwfHx8fDE3Njk5NjU4MTR8MA&ixlib=rb-4.1.0&q=85"
                alt="Professional Office"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="section-padding bg-white" data-testid="testimonials-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              What <span className="gold-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-testimonial animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`testimonial-card-${index}`}
              >
                <div className="quote-mark mb-2">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold" style={{ color: '#1E3A5F' }}>— {testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/testimonials" className="btn-secondary inline-flex items-center gap-2" data-testid="view-all-testimonials">
              View All Testimonials
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="lead-magnet-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A227] mb-6">
              <Download size={28} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Free Guide: How to Get International Clients Without Sounding Desperate
            </h2>
            <p className="text-white/80 mb-8">
              Practical steps + outreach templates + LinkedIn checklist. Start attracting global clients today.
            </p>

            <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-3 rounded-full text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                data-testid="lead-email-input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold whitespace-nowrap disabled:opacity-50"
                data-testid="lead-submit-btn"
              >
                {isSubmitting ? 'Sending...' : 'Get the Free Guide'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section-padding bg-white" data-testid="faq-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Frequently Asked <span className="gold-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-0">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item" data-testid={`faq-item-${index}`}>
                  <button
                    className="faq-question"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`faq-toggle-${index}`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="faq-answer animate-fadeInUp">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="cta-section">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
            Ready to Take the <span className="gold-text">Next Step?</span>
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Whether you need accounting support or want to grow your international client base, let's discuss how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20book%20a%20free%20discovery%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center justify-center gap-2"
              data-testid="cta-book-call"
            >
              <Phone size={18} />
              Book a Free Discovery Call
            </a>
            <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2" data-testid="cta-contact">
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
