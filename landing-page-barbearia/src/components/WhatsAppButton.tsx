import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gold hover:bg-gold/90 rounded-full flex items-center justify-center shadow-gold hover:shadow-gold-sm transition-smooth hover:scale-110 animate-scale-in"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
