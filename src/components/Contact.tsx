import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "rahulsahanii.com@gmail.com",
      link: "mailto:rahulsahanii.com@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rahul-sahanii",
      link: "https://www.linkedin.com/in/rahul-sahanii"
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Let's Connect ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Ready to scale your business
              <br />
              <span className="text-gradient">with AI automation?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              DM me — ready when you are to build solutions that deliver real results
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group p-6 bg-card border border-border rounded-xl card-hover flex items-center gap-4 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-left">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">
                    {method.label}
                  </span>
                  <p className="font-semibold group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Location */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-secondary/50 rounded-full border border-primary/20">
              <MapPin className="h-5 w-5 text-primary" />
              <div className="text-left">
                <span className="text-xs text-muted-foreground uppercase tracking-wider block">Location</span>
                <span className="font-semibold">Biratnagar, Nepal</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-8">
            <Button 
              size="lg" 
              className="group text-lg px-10 py-7 bg-gradient-to-r from-primary via-accent-blue to-accent-purple hover:shadow-[var(--glow-primary)] magnetic-hover"
              onClick={() => window.location.href = 'mailto:rahulsahaniind@gmail.com'}
            >
              Let's Build Something Amazing
              <Mail className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Tagline */}
          <div className="text-center pt-8 space-y-4">
            <p className="text-lg text-muted-foreground italic">
              "From Biratnagar to the World"
            </p>
            <p className="text-sm text-muted-foreground">
              Building the future, one intelligent solution at a time
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
