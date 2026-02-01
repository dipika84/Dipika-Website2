import { Link } from 'react-router-dom';
import { Star, ArrowRight, Phone, Quote } from 'lucide-react';

export default function Testimonials() {
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
              Real feedback from businesses and professionals I have had the privilege to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white" data-testid="testimonials-grid">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Testimonial 1 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-0">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                Extremely professional and detail-oriented. Monthly reporting improved immediately. Dipika attention to detail is exceptional.
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>Sarah Mitchell</p>
                <p className="text-sm text-slate-500">Small Business Owner</p>
                <p className="text-sm text-[#C9A227]">California, USA</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-1">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                Clear communication and timely delivery. Highly recommended for any business looking for reliable accounting support.
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>James Thompson</p>
                <p className="text-sm text-slate-500">E-commerce Business</p>
                <p className="text-sm text-[#C9A227]">London, UK</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-2">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                Very structured and supportive approach. Helped me understand US GAAP clearly and apply it in my practice.
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>Priya Sharma</p>
                <p className="text-sm text-slate-500">Chartered Accountant</p>
                <p className="text-sm text-[#C9A227]">India</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-3">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                The coaching sessions completely changed how I approach international clients. I landed my first US client within a month!
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>Rahul Mehta</p>
                <p className="text-sm text-slate-500">Finance Professional</p>
                <p className="text-sm text-[#C9A227]">India</p>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-4">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                QuickBooks reconciliation used to take me hours. With Dipika help, our month-end close is now seamless.
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>Michael Chen</p>
                <p className="text-sm text-slate-500">Startup Founder</p>
                <p className="text-sm text-[#C9A227]">Toronto, Canada</p>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-[#F8F9FA] p-8 rounded-2xl border-l-4 border-[#C9A227] hover:shadow-lg transition-shadow duration-300" data-testid="testimonial-card-5">
              <div className="flex gap-1 mb-4">
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
                <Star size={18} className="text-[#C9A227] fill-[#C9A227]" />
              </div>
              <Quote size={32} className="text-[#C9A227]/30 mb-4" />
              <p className="text-slate-700 mb-6 leading-relaxed">
                ASC 606 implementation was overwhelming until Dipika walked us through it step by step. Invaluable support.
              </p>
              <div>
                <p className="font-semibold" style={{ color: '#1E3A5F' }}>Emma Williams</p>
                <p className="text-sm text-slate-500">Finance Director</p>
                <p className="text-sm text-[#C9A227]">Sydney, Australia</p>
              </div>
            </div>

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
                From Struggle to Success: A Finance Professional Journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ color: '#1E3A5F' }}>
                  <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">X</span>
                  Before Working Together
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    Sending 50+ cold emails per week with zero responses
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    LinkedIn profile looked generic and unprofessional
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    No clarity on pricing for international clients
                  </li>
                  <li className="flex items-start gap-3 text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></span>
                    Struggling to communicate value on calls
                  </li>
                </ul>
              </div>

              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#C9A227] text-white flex items-center justify-center text-sm font-bold">Y</span>
                  After Working Together
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0"></span>
                    Landed 3 international clients in 2 months
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0"></span>
                    Optimized LinkedIn profile attracting inbound leads
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0"></span>
                    Confident pricing strategy with clear packages
                  </li>
                  <li className="flex items-start gap-3 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mt-2 flex-shrink-0"></span>
                    Smooth discovery calls that convert
                  </li>
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
            Let us discuss how I can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907"
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
