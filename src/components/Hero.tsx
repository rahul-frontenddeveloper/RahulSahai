import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedBackground from "./AnimatedBackground";
import Background3D from "./Background3D";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* 3D Background Effects */}
      <Background3D />
      
      {/* Particle Network Animation */}
      <AnimatedBackground />

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg animate-float backdrop-blur-sm bg-primary/5" 
          style={{ transform: "rotateX(45deg) rotateY(45deg)" }} 
        />
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-accent-purple/30 rotate-45 animate-float-slow backdrop-blur-sm bg-accent-purple/5"
          style={{ transform: "rotateX(60deg) rotateZ(45deg)" }}
        />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 border border-primary/20 rounded-full animate-glow-pulse backdrop-blur-sm bg-primary/5" />
        
        {/* Additional 3D Cubes */}
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-accent-blue/40 animate-float backdrop-blur-sm"
          style={{ 
            transform: "rotateX(30deg) rotateY(30deg) rotateZ(30deg)",
            transformStyle: "preserve-3d"
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-up">
          {/* Subtitle Tag */}
          <div className="inline-block">
            <span className="text-muted-foreground text-sm md:text-base font-medium tracking-wider uppercase">
              [ Product Engineer @ Sydney IT Hub ]
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block mb-2">Rahul Sahani</span>
            <span className="block text-gradient glow-text">
              Scaling Businesses
            </span>
          </h1>

          {/* Hook Line */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            with AI automation, No-Code solutions & intelligent workflows
          </p>

          {/* Secondary Description */}
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
            <span className="text-primary font-medium">[ B2B AI Automation Expert ]</span> Building custom SaaS products that deliver real results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="group text-base px-8 py-6 bg-gradient-to-r from-primary to-accent-blue hover:shadow-[var(--glow-primary)] magnetic-hover"
              onClick={() => scrollToSection("projects")}
            >
              View Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base px-8 py-6 border-2 border-primary/30 hover:border-primary hover:bg-primary/10 magnetic-hover"
              onClick={() => scrollToSection("contact")}
            >
              Let's Connect
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer animate-bounce"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;
