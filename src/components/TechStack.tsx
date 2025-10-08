const TechStack = () => {
  const technologies = [
    { name: "WordPress", category: "CMS" },
    { name: "Python", category: "Backend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "LangChain", category: "AI" },
    { name: "OpenAI", category: "AI" },
    { name: "RAG", category: "AI" },
    { name: "n8n", category: "Automation" },
    { name: "HubSpot", category: "Marketing" },
    { name: "React", category: "Frontend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Git", category: "Version Control" }
  ];

  return (
    <section id="tech-stack" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Technologies & Tools ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Tech <span className="text-gradient">Stack</span>
            </h2>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="group p-6 bg-card border border-border rounded-xl text-center card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {tech.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="text-center pt-8 space-y-6">
            <h3 className="text-2xl font-bold">Certifications</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-primary/10 rounded-lg border border-primary/20">
                <span className="font-semibold">HubSpot Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
