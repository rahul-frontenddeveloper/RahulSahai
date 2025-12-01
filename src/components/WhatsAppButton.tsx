import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {

  // WhatsApp number - Format: country code + number, no + or spaces
  const whatsappNumber = "9779823919260";
  
  // Pre-filled message
  const message = encodeURIComponent(
    "Hello! I came across your portfolio and I'm interested in discussing potential opportunities."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact via WhatsApp"
      title="Chat on WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
      
      {/* Main button */}
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group-hover:bg-[#20BA5A]">
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2.5} />
        
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-card border border-border rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
          <p className="text-sm font-medium text-foreground">Chat on WhatsApp</p>
          <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-card" />
        </div>
      </div>
    </button>
  );
};

export default WhatsAppButton;

