import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A5F] text-white pt-16 pb-8" data-testid="main-footer">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Dipika Gujarati
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Chartered Accountant providing premium remote accounting, finance, and CPA coaching services to international clients.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300"
                data-testid="footer-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#C9A227] transition-colors duration-300"
                data-testid="footer-youtube"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-services">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-about">
                  About
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-testimonials">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/blog" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link hover:text-[#C9A227]" data-testid="footer-link-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="footer-link hover:text-[#C9A227]">
                  Monthly Bookkeeping
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link hover:text-[#C9A227]">
                  QuickBooks Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link hover:text-[#C9A227]">
                  US GAAP Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="footer-link hover:text-[#C9A227]">
                  CPA Coaching
                </Link>
              </li>
              <li>
                <Link to="/international-help" className="footer-link hover:text-[#C9A227]">
                  International Client Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#C9A227] font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#C9A227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Phone / WhatsApp</p>
                  <a href="tel:+917999816907" className="hover:text-[#C9A227]" data-testid="footer-phone">
                    +91 7999816907
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#C9A227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a href="mailto:dipikagujarathi@yahoo.in" className="hover:text-[#C9A227]" data-testid="footer-email">
                    dipikagujarathi@yahoo.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#C9A227] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Location</p>
                  <span>India (Remote Services Worldwide)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Dipika Gujarati. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/contact" className="text-white/60 hover:text-[#C9A227]">
              Privacy Policy
            </Link>
            <Link to="/contact" className="text-white/60 hover:text-[#C9A227]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
