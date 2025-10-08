import { Bot, Globe, Megaphone, Sparkles, Blocks, LineChart } from "lucide-react";

const Services = () => {
  const services = [
    {
      category: "AI & Automation",
      icon: Bot,
      items: [
        "AI Chatbots & Workflow Automation",
        "LLM & RAG Deployments",
        "Custom AI Solutions",
        "Generative AI Integration"
      ]
    },
    {
      category: "Web Development",
      icon: Globe,
      items: [
        "Website Design (WordPress, Custom)",
        "No-Code App Development",
        "SaaS Product Development",
        "Responsive Web Applications"
      ]
    },
    {
      category: "Digital Growth",
      icon: Megaphone,
      items: [
        "SEO & Google My Business",
        "Social Media Marketing",
        "Branding & Graphics",
        "Content Strategy"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ What I Do ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Services That <span className="text-gradient">Scale Your Business</span>
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-xl card-hover relative overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Category */}
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">
                      [ {service.category} ]
                    </span>
                    <h3 className="text-2xl font-bold mt-2 group-hover:text-primary transition-colors">
                      {service.category}
                    </h3>
                  </div>

                  {/* Service Items */}
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Services Tags */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            {["HubSpot Certified", "WordPress Expert", "n8n Specialist", "Python & JavaScript"].map((tag, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
