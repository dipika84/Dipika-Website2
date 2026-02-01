import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Shield,
  MessageSquare,
  Clock,
  Lock,
  Eye
} from 'lucide-react';

const FOUNDER_PHOTO = "https://customer-assets.emergentagent.com/job_93992b89-37d3-4a04-b63d-8c6e5b7bef9c/artifacts/y1vc58t0_My%20photo.jpeg";

export default function About() {
  const values = [
    {
      icon: Eye,
      title: 'Clarity',
      description: 'Clear communication and transparent processes in every engagement.'
    },
    {
      icon: MessageSquare,
      title: 'Professional Communication',
      description: 'Client-ready communication that meets international standards.'
    },
    {
      icon: Shield,
      title: 'Ethical Approach',
      description: 'Integrity and professional ethics at the core of every decision.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Reliable timelines and consistent delivery you can count on.'
    },
    {
      icon: Lock,
      title: 'Confidentiality',
      description: 'Your data and business information are always protected.'
    },
  ];

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="about-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="about-hero">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge-gold mb-6">About Me</div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Hi, I'm <span className="gold-text">Dipika Gujarati</span>
              </h1>
              <p className="text-xl text-slate-600 mb-4">
                Chartered Accountant & International Accounting Support Partner
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                With a strong foundation in Indian chartered accountancy and extensive exposure to international accounting standards including US GAAP, I help businesses and professionals bridge the gap between local expertise and global standards.
              </p>
              <p className="text-slate-600 leading-relaxed">
                My mission is simple: deliver accurate, reliable accounting support while helping fellow professionals grow their international client base with confidence—without the guesswork or desperation.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
              <img
                src={FOUNDER_PHOTO}
                alt="Dipika Gujarati - Chartered Accountant"
                className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto object-cover"
                data-testid="about-founder-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="section-padding bg-white" data-testid="story-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              My <span className="gold-text">Story</span>
            </h2>

            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                As a Chartered Accountant from India, I've always been passionate about numbers and helping businesses make sense of their financial data. But early in my career, I realized that the accounting world was rapidly becoming global—businesses in the US and UK were looking for skilled professionals who could deliver quality work remotely at competitive rates.
              </p>
              <p>
                I invested heavily in understanding international accounting standards, particularly US GAAP, and mastered cloud accounting platforms like QuickBooks, Xero, and NetSuite. This allowed me to serve clients across time zones with the same quality and professionalism they would expect from local providers.
              </p>
              <p>
                Along the way, I noticed that many talented CA and CPA professionals in India struggled to attract international clients—not because they lacked skills, but because they didn't know how to position themselves effectively. They came across as desperate rather than confident.
              </p>
              <p>
                That's why I now offer coaching and strategy support alongside my accounting services. I want to help fellow professionals build sustainable, international practices with confidence and clarity.
              </p>
            </div>

            <div className="mt-12 p-8 bg-[#F8F9FA] rounded-2xl border-l-4 border-[#C9A227]">
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#1E3A5F' }}>
                My Mission
              </h3>
              <p className="text-slate-600 leading-relaxed">
                To deliver accurate, reliable accounting support to international businesses while empowering fellow professionals to grow their global practices—through better systems, positioning, and confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="values-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Core <span className="gold-text">Values</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These principles guide every engagement and decision in my practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card"
                data-testid={`value-card-${index}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#1E3A5F' }}>
                  {value.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-padding bg-white" data-testid="credentials-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Credentials & <span className="gold-text">Expertise</span>
              </h2>

              <div className="space-y-4">
                {[
                  "Chartered Accountant (CA) from India",
                  "International accounting exposure including US GAAP",
                  "Expertise in ASC 606 (Revenue Recognition) and ASC 842 (Leases)",
                  "Proficient in QuickBooks, Xero, and NetSuite",
                  "Experience serving US, UK, Canada, and Australia clients",
                  "Remote work specialist with professional communication standards"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#C9A227] mt-1 flex-shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1767558031499-26b38d8ea5f9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTF8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eSUyMHNreWxpbmUlMjBidXNpbmVzcyUyMGRpc3RyaWN0fGVufDB8fHx8MTc2OTk2NTgzOHww&ixlib=rb-4.1.0&q=85"
                alt="New York Skyline"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="about-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Let's Work Together
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you need accounting support or want to grow your international practice, I'm here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
              data-testid="about-cta-btn"
            >
              <Phone size={18} />
              Let's Connect
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
