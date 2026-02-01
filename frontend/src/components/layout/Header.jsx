import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'International Help', path: '/international-help' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`header-sticky py-4 transition-all duration-300 ${
        isScrolled ? 'header-scrolled' : 'bg-white/80 backdrop-blur-sm'
      }`}
      data-testid="main-header"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" data-testid="logo-link">
            <span className="text-2xl font-semibold tracking-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#1E3A5F' }}>
              Dipika Gujarati
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm ${isActive(link.path) ? 'active text-[#C9A227]' : ''}`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://wa.me/917999816907"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm flex items-center gap-2"
              data-testid="header-cta-btn"
            >
              <Phone size={16} />
              Book Free Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#1E3A5F]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-slate-200 pt-4" data-testid="mobile-nav">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-base font-medium ${
                    isActive(link.path) ? 'text-[#C9A227]' : 'text-[#1E3A5F]'
                  }`}
                  data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/917999816907"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-sm text-center flex items-center justify-center gap-2 mt-4"
                data-testid="mobile-cta-btn"
              >
                <Phone size={16} />
                Book Free Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
