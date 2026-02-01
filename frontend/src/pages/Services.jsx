import { Link } from 'react-router-dom';
import { 
  Calculator, 
  FileText, 
  CreditCard, 
  TrendingUp,
  BookOpen,
  Globe,
  Users,
  Target,
  CheckCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

export default function Services() {
  const accountingServices = [
    { title: 'Monthly bookkeeping', icon: Calculator },
    { title: 'Bank/credit card reconciliation', icon: CreditCard },
    { title: 'AR/AP support', icon: FileText },
    { title: 'Month-end closing support', icon: TrendingUp },
    { title: 'Reporting packs (P&L, Balance Sheet, Cash Flow)', icon: FileText },
  ];

  const softwareExpertise = [
    { name: 'QuickBooks', description: 'Online bookkeeping, reconciliations, and reporting' },
    { name: 'Xero', description: 'Cloud accounting setup and management' },
    { name: 'NetSuite', description: 'Enterprise-level financial operations' },
  ];

  const gaapServices = [
    { title: 'Revenue Recognition (ASC 606)', description: 'Contract analysis and revenue allocation' },
    { title: 'Lease Accounting (ASC 842)', description: 'Lease classification and measurement' },
    { title: 'Audit-ready schedules and documentation', description: 'Comprehensive workpapers and support' },
  ];

  const growthServices = [
    { title: 'Resume + LinkedIn optimization (international style)', icon: FileText },
    { title: 'International client outreach scripts and strategy', icon: Target },
    { title: 'Discovery call and communication coaching', icon: Users },
    { title: 'CPA support (concept clarity)', icon: BookOpen },
  ];

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="services-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="services-hero">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="badge-gold mb-6">Professional Services</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Services Built for <span className="gold-text">Global Standards</span> — Delivered Remotely
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Comprehensive accounting, finance, and professional growth support designed for US, UK, Canada, and Australia-based businesses and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Accounting & Finance Support */}
      <section className="section-padding bg-white" data-testid="accounting-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                  <Calculator size={24} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                  Accounting & Finance Support
                </h2>
              </div>
              <p className="text-slate-600 mb-8">
                End-to-end accounting support that ensures your books are accurate, compliant, and ready for decision-making.
              </p>

              <div className="space-y-4">
                {accountingServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl" data-testid={`accounting-service-${index}`}>
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm">
                      <service.icon size={20} className="text-[#1E3A5F]" />
                    </div>
                    <span className="font-medium text-slate-700">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Outsource Accounting?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Cost-effective compared to in-house hiring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Access to specialized expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Scalable support as your business grows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-0.5 flex-shrink-0" />
                    <span className="text-white/90">Focus on your core business</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Software Expertise */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="software-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9A227] flex items-center justify-center">
                <Globe size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Software Expertise
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Proficient in the leading cloud accounting platforms used by businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {softwareExpertise.map((software, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center"
                data-testid={`software-card-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#1E3A5F] to-[#2C5282] flex items-center justify-center">
                  <CheckCircle size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1E3A5F' }}>
                  {software.name}
                </h3>
                <p className="text-slate-600">{software.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* US GAAP Support */}
      <section className="section-padding bg-white" data-testid="gaap-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1650717721915-d2fab5448365?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBza3lsaW5lJTIwc3Vuc2V0fGVufDB8fHx8MTc2OTk2NTgzNXww&ixlib=rb-4.1.0&q=85"
                alt="London Skyline"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                  US GAAP / Technical Accounting Support
                </h2>
              </div>
              <p className="text-slate-600 mb-8">
                Specialized support for complex accounting standards and technical requirements.
              </p>

              <div className="space-y-6">
                {gaapServices.map((service, index) => (
                  <div key={index} className="border-l-4 border-[#C9A227] pl-4" data-testid={`gaap-service-${index}`}>
                    <h3 className="font-semibold text-lg mb-1" style={{ color: '#1E3A5F' }}>
                      {service.title}
                    </h3>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Growth Support */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="growth-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#C9A227] flex items-center justify-center">
                <TrendingUp size={24} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Professional Growth Support
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              For CA/CPA professionals looking to attract international clients and grow their practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {growthServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-testid={`growth-service-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                  <service.icon size={22} className="text-white" />
                </div>
                <span className="font-medium text-slate-700">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="services-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Get Started?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Book a free discovery call to discuss your specific needs and how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
              data-testid="services-cta-btn"
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
