import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Product Engineer",
      company: "Sydney IT Hub",
      period: "July 2024 - Present",
      type: "Full-time",
      description: "Leading AI automation projects and building custom SaaS solutions for B2B clients"
    },
    {
      title: "Website Developer",
      company: "Upwork (Freelance)",
      period: "June 2020 - April 2024",
      type: "Freelance",
      description: "Delivered 50+ web projects with focus on WordPress, SEO, and digital marketing"
    },
    {
      title: "Digital Marketing Specialist",
      company: "Digital Blue dot PVT LTD",
      period: "July 2023 - January 2024",
      type: "Contract",
      description: "Managed SEO campaigns and social media strategies for multiple clients"
    }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Journey ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary to-transparent" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start gap-8 animate-fade-up ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-[0_0_20px_rgba(74,144,226,0.5)]" />

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="p-6 bg-card border border-border rounded-xl card-hover">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex-1">
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            [ {exp.type} ]
                          </span>
                          <h3 className="text-xl font-bold mt-1">{exp.title}</h3>
                          <p className="text-primary font-semibold">{exp.company}</p>
                        </div>
                        <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="pt-12">
            <div className="p-8 bg-card border border-border rounded-xl animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    [ Education ]
                  </span>
                  <h3 className="text-xl font-bold mt-1">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-primary font-semibold">Tribhuvan University</p>
                  <p className="text-sm text-muted-foreground mt-2">Computer Science & Information Technology</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Badges */}
          <div className="text-center space-y-6 pt-8">
            <h3 className="text-2xl font-bold">Top Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["MLOps", "Generative AI", "LLMs", "RAG Systems", "No-Code", "SEO", "Python", "JavaScript"].map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-5 py-2 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-full text-sm font-semibold border border-primary/30 hover:border-primary transition-colors magnetic-hover"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
