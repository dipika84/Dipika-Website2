import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917999816907?text=Hi%20Dipika,%20I%20am%20interested%20in%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      data-testid="whatsapp-float-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
};
