import { Link } from 'react-router-dom';
import { 
  Star, 
  ArrowRight, 
  Phone,
  Quote
} from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Extremely professional and detail-oriented. Monthly reporting improved immediately. Dipika's attention to detail is exceptional.",
      author: "Sarah Mitchell",
      role: "Small Business Owner",
      location: "California, USA",
      rating: 5
    },
    {
      quote: "Clear communication and timely delivery. Highly recommended for any business looking for reliable accounting support.",
      author: "James Thompson",
      role: "E-commerce Business",
      location: "London, UK",
      rating: 5
    },
    {
      quote: "Very structured and supportive approach. Helped me understand US GAAP clearly and apply it in my practice.",
      author: "Priya Sharma",
      role: "Chartered Accountant",
      location: "India",
      rating: 5
    },
    {
      quote: "The coaching sessions completely changed how I approach international clients. I landed my first US client within a month!",
      author: "Rahul Mehta",
      role: "Finance Professional",
      location: "India",
      rating: 5
    },
    {
      quote: "QuickBooks reconciliation used to take me hours. With Dipika's help, our month-end close is now seamless.",
      author: "Michael Chen",
      role: "Startup Founder",
      location: "Toronto, Canada",
      rating: 5
    },
    {
      quote: "ASC 606 implementation was overwhelming until Dipika walked us through it step by step. Invaluable support.",
      author: "Emma Williams",
      role: "Finance Director",
      location: "Sydney, Australia",
      rating: 5
    },
  ];

  const caseStudy = {
    title: "From Struggle to Success: A Finance Professional's Journey",
    before: [
      "Sending 50+ cold emails per week with zero responses",
      "LinkedIn profile looked generic and unprofessional",
      "No clarity on pricing for international clients",
      "Struggling to communicate value on calls"
    ],
    after: [
      "Landed 3 international clients in 2 months",
      "Optimized LinkedIn profile attracting inbound leads",
      "Confident pricing strategy with clear packages",
      "Smooth discovery calls that convert"
    ]
  };

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="testimonials-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="testimonials-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-gold mb-6">Testimonials</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              What <span className="gold-text">Clients Say</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Real feedback from businesses and professionals I've had the privilege to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white" data-testid="testimonials-grid">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300"
                data-testid={`testimonial-card-${index}`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#C9A227] fill-[#C9A227]" />
                  ))}
                </div>
                <Quote size={32} className="text-[#C9A227]/30 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold" style={{ color: '#1E3A5F' }}>
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                  <p className="text-sm text-[#C9A227]">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="case-study-section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Case Study: <span className="gold-text">Before vs After</span>
              </h2>
              <p className="text-slate-600">
                {caseStudy.title}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ color: '#1E3A5F' }}>
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                    ✕
                  </span>
                  Before Working Together
                </h3>
                <ul className="space-y-4">
                  {caseStudy.before.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C9A227] text-white flex items-center justify-center text-sm font-bold">
                    ✓
                  </span>
                  After Working Together
                </h3>
                <ul className="space-y-4">
                  {caseStudy.after.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white" data-testid="trust-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Why Clients <span className="gold-text">Trust Me</span>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-6">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">100%</div>
                <p className="text-slate-600 text-sm">Client Satisfaction</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">4+</div>
                <p className="text-slate-600 text-sm">Countries Served</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">CA</div>
                <p className="text-slate-600 text-sm">Qualified Accountant</p>
              </div>
              <div className="p-6">
                <div className="text-4xl font-bold text-[#C9A227] mb-2">24/7</div>
                <p className="text-slate-600 text-sm">Remote Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="testimonials-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Be the Next Success Story?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20read%20your%20testimonials%20and%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
              data-testid="testimonials-cta-btn"
            >
              <Phone size={18} />
              Book a Free Discovery Call
            </a>
            <Link to="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center gap-2">
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
