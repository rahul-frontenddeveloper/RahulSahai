import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const FreeConsulting = () => {
  const whatsappNumber = "9779823919260";
  
  // Pre-filled WhatsApp message for consulting
  const message = encodeURIComponent(
    "Hello! I'm interested in your free business consulting service. I'd like to discuss how AI automation can help scale my business."
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const consultingBenefits = [
    "Strategic AI automation roadmap",
    "No-code solution recommendations",
    "Process optimization insights",
    "SaaS product strategy",
    "Workflow automation planning",
    "Technology stack guidance"
  ];

  return (
    <section id="consulting" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                [ Limited Time Offer ]
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Free Business <span className="text-gradient">Consulting Services</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get expert advice on scaling your business with AI automation — completely free, no strings attached
            </p>
          </div>

          {/* Main Content Card */}
          <div className="relative group animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-blue to-accent-purple rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
            
            <div className="relative p-8 md:p-12 bg-card border-2 border-primary/30 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
              </div>

              <div className="relative space-y-8">
                {/* What's Included */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle2 className="h-7 w-7 text-primary" />
                    What You'll Get:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {consultingBenefits.map((benefit, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="pt-8 border-t border-border">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                      <p className="text-lg font-semibold mb-2">Ready to scale your business?</p>
                      <p className="text-muted-foreground">
                        Schedule a free consultation call via WhatsApp
                      </p>
                    </div>
                    <Button
                      size="lg"
                      onClick={handleWhatsAppClick}
                      className="group text-base md:text-lg px-8 md:px-10 py-6 md:py-7 bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    >
                      <MessageCircle className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                      Chat on WhatsApp
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm text-muted-foreground">✓ No commitment required</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm text-muted-foreground">✓ 100% Free consultation</span>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <span className="text-sm text-muted-foreground">✓ Expert guidance included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsulting;

