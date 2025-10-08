const FeaturedContent = () => {
  return (
    <section id="featured-content" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Latest Updates ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Featured <span className="text-gradient">Content</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recent projects and insights from my work
            </p>
          </div>

          {/* LinkedIn Embed Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* First LinkedIn Post */}
            <div className="group p-6 bg-card border border-border rounded-xl card-hover animate-fade-up">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    [ SaaS Product Demo ]
                  </span>
                </div>
                
                <div className="relative rounded-lg overflow-hidden bg-secondary/30">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7381380879396433920?compact=1" 
                    height="399" 
                    width="100%" 
                    frameBorder="0" 
                    allowFullScreen
                    title="Rahul Sahani - SaaS Product Demo"
                    className="w-full"
                  />
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    AI-Powered SaaS Solution
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Custom SaaS product showcase demonstrating AI automation capabilities
                  </p>
                </div>
              </div>
            </div>

            {/* Second LinkedIn Post */}
            <div className="group p-6 bg-card border border-border rounded-xl card-hover animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    [ Project Highlight ]
                  </span>
                </div>
                
                <div className="relative rounded-lg overflow-hidden bg-secondary/30">
                  <iframe 
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7375545569982922752?compact=1" 
                    height="399" 
                    width="100%" 
                    frameBorder="0" 
                    allowFullScreen
                    title="Rahul Sahani - Project Update"
                    className="w-full"
                  />
                </div>

                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    Recent Development Project
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Latest project update showcasing development expertise
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center pt-8">
            <a 
              href="https://www.linkedin.com/in/rahul-sahanii" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors magnetic-hover"
            >
              <span className="font-medium">Follow for more updates on LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
