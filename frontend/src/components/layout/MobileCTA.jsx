import { Phone } from 'lucide-react';

export const MobileCTA = () => {
  return (
    <div className="mobile-cta-fixed md:hidden" data-testid="mobile-cta-fixed">
      <a
        href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20would%20like%20to%20book%20a%20free%20discovery%20call."
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold w-full text-center flex items-center justify-center gap-2"
        data-testid="mobile-book-call-btn"
      >
        <Phone size={18} />
        Book Free Discovery Call
      </a>
    </div>
  );
};
