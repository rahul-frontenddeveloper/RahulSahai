import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import FeaturedContent from "@/components/FeaturedContent";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import FreeConsulting from "@/components/FreeConsulting";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Projects />
      <FeaturedContent />
      <TechStack />
      <Experience />
      <FreeConsulting />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
