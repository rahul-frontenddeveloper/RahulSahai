import { Brain, Code2, TrendingUp, Workflow } from "lucide-react";
import rahulPhoto from "@/assets/rahul-photo.png";
import Background3D from "./Background3D";

const About = () => {
  const strengths = [
    {
      icon: Brain,
      title: "MLOps & Generative AI",
      description: "Implementation of advanced AI systems and LLM deployments"
    },
    {
      icon: Workflow,
      title: "RAG Systems & Automation",
      description: "Building intelligent workflows that scale businesses"
    },
    {
      icon: Code2,
      title: "No-Code Specialist",
      description: "Rapid development with n8n and modern no-code platforms"
    },
    {
      icon: TrendingUp,
      title: "SEO & Digital Strategy",
      description: "Data-driven marketing and business growth solutions"
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-50">
        <Background3D />
      </div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header with Photo */}
          <div className="text-center space-y-8 animate-fade-up">
            {/* Professional Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent-blue to-accent-purple rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={rahulPhoto} 
                    alt="Rahul Sahani - Product Engineer" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Who I Am ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Product Engineer specializing in
              <span className="text-gradient"> AI-driven automation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I build solutions that deliver real results — without the tech headaches
            </p>
          </div>

          {/* Strengths Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {strengths.map((strength, index) => (
              <div 
                key={index}
                className="group p-8 bg-card border border-border rounded-xl card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold">{strength.title}</h3>
                    <p className="text-muted-foreground">{strength.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Tag */}
          <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-secondary/50 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
              <span className="text-sm font-medium">Based in Biratnagar, Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
