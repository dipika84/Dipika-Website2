import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone,
  Target,
  Users,
  FileText,
  DollarSign,
  MessageSquare,
  Globe
} from 'lucide-react';

export default function InternationalHelp() {
  const learningPoints = [
    { icon: Target, text: 'Positioning for US/UK clients' },
    { icon: FileText, text: 'Profile / resume upgrades' },
    { icon: MessageSquare, text: 'Outreach scripts' },
    { icon: DollarSign, text: 'Pricing strategy' },
    { icon: Users, text: 'Call communication confidence' },
  ];

  const targetAudience = [
    'CA/CPA students',
    'Bookkeepers',
    'Finance professionals',
    'Freelancers looking to go global',
  ];

  return (
    <div className="pt-24 pb-20 md:pb-0" data-testid="international-help-page">
      {/* Hero Section */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="international-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="badge-gold mb-6">For Professionals</div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Want International Clients? <span className="gold-text">Build Trust</span> Before You Pitch
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Most people fail because they sound needy. I help you position yourself confidently for global clients—without desperation.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-white" data-testid="problem-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                The Problem with Most <span className="gold-text">Outreach</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                You're skilled. You've got the technical knowledge. You can deliver quality work. But when it comes to reaching out to international clients, something goes wrong.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Your messages sound like everyone else's. You come across as desperate for work rather than confident in your value. Clients can sense this—and they pass.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The truth is: <strong>getting international clients isn't about working harder on outreach. It's about working smarter on positioning.</strong>
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1650717721915-d2fab5448365?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTN8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBza3lsaW5lJTIwc3Vuc2V0fGVufDB8fHx8MTc2OTk2NTgzNXww&ixlib=rb-4.1.0&q=85"
                alt="London Skyline"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="learning-section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              What You'll <span className="gold-text">Learn</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A comprehensive approach to positioning yourself for international success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {learningPoints.map((point, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center hover:shadow-md transition-shadow duration-300"
                data-testid={`learning-point-${index}`}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#1E3A5F] flex items-center justify-center">
                  <point.icon size={24} className="text-white" />
                </div>
                <p className="font-medium text-slate-700">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="section-padding bg-white" data-testid="audience-section">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-[#1E3A5F] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Who Is This For?
                </h3>
                <ul className="space-y-4">
                  {targetAudience.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-[#C9A227] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
                Is This <span className="gold-text">Right for You?</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                This coaching is designed for accounting and finance professionals who have the skills but struggle with the business development side of working with international clients.
              </p>
              <p className="text-slate-600 leading-relaxed">
                If you're tired of sending cold emails that get ignored, or if you want to build a sustainable stream of international clients, this is for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="section-padding bg-[#F8F9FA]" data-testid="approach-section">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              My <span className="gold-text">Approach</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#1E3A5F' }}>
                      Audit Your Current Positioning
                    </h3>
                    <p className="text-slate-600">
                      We start by understanding how you currently present yourself—your profile, resume, and outreach approach.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#1E3A5F' }}>
                      Reframe Your Value Proposition
                    </h3>
                    <p className="text-slate-600">
                      Together, we'll craft a positioning that highlights your unique value to international clients.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#C9A227] flex items-center justify-center flex-shrink-0 text-white font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" style={{ color: '#1E3A5F' }}>
                      Implement & Practice
                    </h3>
                    <p className="text-slate-600">
                      You'll get scripts, templates, and practice sessions to build confidence in your client communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F]" data-testid="international-cta">
        <div className="container-custom text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A227] mb-6">
            <Globe size={28} className="text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Book a Free 15-min Discovery Call
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss your goals and see if we're a good fit to work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20want%20to%20learn%20how%20to%20get%20international%20clients."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center justify-center gap-2"
              data-testid="international-cta-call"
            >
              <Phone size={18} />
              Book Free Call
            </a>
            <a
              href="https://wa.me/917999816907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 flex items-center justify-center gap-2"
              data-testid="international-cta-whatsapp"
            >
              WhatsApp Now
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
