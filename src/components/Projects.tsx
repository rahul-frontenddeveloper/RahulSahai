import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "AI Solutions", "Web Design", "Automation", "SEO"];

  const projects = [
    {
      title: "Sydney IT Hub Chat Bot",
      category: "Web Design",
      description: "Modern corporate website with advanced animations and responsive design",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZQEQIdIhKtnkEjY99D80YgbGwmXG8-43Z9k505rdgsFHO8-pWOXg5JK5zEtyiq54ipv8gYBXuOJ1N9es1Z3ZPbHVL0jMrQ_roS_dd9y9_GzatorsmgigIVmZ3vo25LfyPltQnpkDPqe40Rp_EeigoLwyGGcNEfC0GtlW9jlm7Av3LwOm6g-xxz2Ekp_E/s320/chatbot.png",
      link: "https://sydneyithub.sydneyithub.com/",
      tags: ["Web App", "Lead Generation", "Chat Bot"]
    },
    {
      title: "Krishna Education Foundation",
      category: "Web Design",
      description: "Krishna Education Foundation is a trusted education consultancy",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAt3Rax9CryURJ_W8Eyh3Clkr5j3VHAFVodI3_OEheBmrFO1zDsJEHPPQX-tIxTwT-TFVxqEpPgQm8Yy2dFGrnOBC-Xm_z_w7ZKQtafeyjRrVNUV1rMtw7KuJ4vs6SnTAW3SIsV2voMBBkmhiO441gNvYwlHP5PK5TzbDMZJPMMCYBu-ID3UXWtWFRq5Y/s320/ki.png",
      link: "https://kefnepal.com/",
      tags: ["Education", "Consultacy", "Wordpress Website"]

    },
   

     {
      title: "Nepal Swasth Healthcare",
      category: "Web Design",
      description: "Nepal Swasth is a Biggest healthcare service provider based in Nepal",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI6xJ7wc8aHiEj9FYKGLMGNMyFNAt382Eaf5H2_n_QMjbVYLlH6FtnMRqiUsQ3wrrHeXy1Ud-m04428ALEXj7-fF3FUPB9gAICB9_IDTBAt4Gm9Wc9CxDvv4u2r8_u7XOI6e50tze28nr8cXdvhcbt7o5ZuHZcnsGKduRUioHRIi9gq63FYxZQwfGp_PY/s1364/Screenshot%202025-11-10%20104200.png",
      link: "https://nepalswasth.com/",
      tags: ["Professional Website", "Informative Website", "Local SEO"]
    },
     {
      title: "Central Delaware SLP",
      category: "Web Design",
      description: "Professional service website for speech-language pathology practice",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwSl5DZqTM3tqnZyUqgKQN8IXuoypH8DN3ZssWlfrOX-ETaeKrHLejsiftAKcWvawQSbaZt8XRJ4iPsqNVC1jRUHN66SGj_AAcUXq9r4wC7Mfk-cWnHIGByW-W289-LYVr6We0M5zLu29V4R_2GXsXRKIqvNyyF4hLoMHK126lZomX9ElwIYuXpp_-c7c/s320/c-2.png",
      link: "https://centraldelawareslp.com/",
      tags: ["Professional Website", "Booking System", "Local SEO"]
    },
    {
      title: "Eshelman's Lawn Care",

      category: "Web Design",
      description: "Eshelman's Home and Lawn Services is a locally owned and operated in De Kalb Junction, NY",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9ttDEHl5a41M9t7NOv66itWjaxvkhM5PrDQIZGBqzlsp1qGboiCbx-1CxR6UAwyj3Lp4KDka1WC8QiEwoIxnwfiLlOmXLeY5wwRLEXlrNEfGVf7yzyCFLfvo7P3posGORpMltB_O97eGIatHcrh3qvlepFnYn8BtaTlGCaPSNRBp-dGRn3fmxOvCMv9I/s320/Screenshot%202025-10-08%20152514.png",
      link: "https://www.eshelmanslawn.com/",
      tags: ["Small Business", "Lead Generation", "Gardening Business", "Wordpress"]
    },
    {
      title: "KMAC Professional Site",
      category: "Web Design",
      description: "Corporate website with modern design and content management",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgiYF7TlCyoZhP1b6Lbv42A2A9a69rzCvecJ7JJx1h0PIUyHmxH4gEJOkCHIkwlH9jYpAQ1QcuL1tF-MRFrHdea96L1X-WpRU0_daeGZwb5ga7TvmFVGL6_KiEHkzjwWCLKyHAK7MCmVkQf9yCY7bFM91y29yJC1G3XOOOp_MS9Vze2DTCog99nma-vyAQ/s320/Screenshot%202025-10-08%20152711.png",
      link: "https://kmacca.com/",
      tags: ["Corporate", "CMS", "Construction", "Real Estate"]
    },
    {
      title: "Better Line Roof Solutions",
      category: "Web Design",
      description: "Roofing company website with project galleries and contact forms",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhzFpU1DKpEkQJ8D4VnMl5wjxYPKJSZ4gysfrWww_kMnZcoOngBuUMdnwk8E8GszkamzqICvQKail_o59tRD8y-r-cNPkhM-a0QDmBaJNdzjLXk2flcMWKYyoGcy4fKZakM0mufeueZi__CTaMe8uFIzAYNQha8ezTFcAWVm0fukoZT0nsLg8KjG-3HG-s/s320/Screenshot%202025-10-08%20153135.png",
      link: "https://betterlineroof.com/",
      tags: ["Construction", "Portfolio","Roofing"]
    },
    {
      title: "English Conversation Partner",
      category: "AI Solutions",
      description: "Custom SaaS product for AI-powered to practise your communication skill like Microsoft Co-pilot",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkNQ5SnxetbK_WpqhKhNxqH49eGn0OvL00ZZE1Unb3zS0vBeWcouktGyDLxekrTSX1P7q8gq6rIsO-PFdRcyrYiJehpZ_CPo3Lt5lWyKC92Na6V9h_zc8GiuSQ5vQQdRZFexn9roLZ5KgUGWBXvairxJiRPX6zf51QroYZfrZt1FlsJ-EKIBnWPCTGrCE/s320/Screenshot%202025-10-08%20190903.png",
      link: "#",
      tags: ["SaaS", "AI", "LLM","Micorsoft Co-pilot"]
    },
    {
      title: "Business Workflow Automation",
      category: "Automation",
      description: "n8n-powered automation system for enterprise workflows",
      image: "https://media.licdn.com/dms/image/v2/D4D22AQEfh-DM1JouRA/feedshare-shrink_2048_1536/B4DZiZyBx4GgAs-/0/1754926686493?e=1762992000&v=beta&t=K5MOEt2PwL8smdXY0B1Tk7I2xuQagnh1oaa2w-_rZGo",
      link: "#",
      tags: ["n8n", "Integration", "Automation"]
    },

    
     {
      title: "Lead Generation Automation",
      category: "Automation",
      description: "n8n-powered automation system for enterprise workflows",
      image: "https://media.licdn.com/dms/image/v2/D5622AQE63lBU3w3ZXg/feedshare-shrink_2048_1536/B56ZiEonhcHUAs-/0/1754571897995?e=1762992000&v=beta&t=L0AjhfpGlEVBeLdE6lZ7K4-Q1RgcV3ujEYYtOFFP-5c",
      tags: ["n8n", "Integration", "Automation"]
    },

     {
      title: "Rag System Automation",
      category: "Automation",
      description: "Imagine chatting with your own files — and getting smart answers back.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEisYQfw5vdIDhGiAfD3Fp_aWVC3Ti5fkMAkjonhr02LjXxDC-5KKIhfcHIYztc0lUm2na8QxQE_ovLbnhCrR5cjP5T5YGM6Cn9H01VpYcsrVhoRgaVDiFA9i0mmdobNswwID7Ie3cy3Uv9cjqjOODC8litzyep-gY_dkXKAKKmcFbp0ouQLFG1JQ-XhW_8/s844/Screenshot%202025-11-10%20104956.png",
      tags: ["n8n", "Integration", "Automation"]
    },

       {
      title: "Customer Support Automation",
      category: "Automation",
      description: "Built an AI-Powered Customer Support Agent using n8n + Google Gemini + Pinecone",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjn6Qv-ACFiVu0XvaJMJntUt6gvRTagWywaOMp3SWR_9UmX_GpFMUXm5aktdMOR1jWFk4uFHo7MM2HC6k_AT8yU056pUdX8cKBYxn_vz2W6AJhYe_8bnOOtPy3SpzGOX0Z2LRNAj5lioBsXWY-gKsZRh2LVPvjW9hyFY5UIz5PT454CnLldMqmZ6psIMo0/s1054/Screenshot%202025-11-10%20105443.png",
      tags: ["n8n", "Integration", "Automation"]
    },

     {
      title: "LinkedIn Automation Bot",
      category: "Automation",
      description: "I recently built an AI workflow that automatically creates LinkedIn posts — from topic to final draft",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEipL17Y-gmCkTR4KJhmx5XjsWc6osxX6Dde-LMdXP0z6OmkEhbApgTncrKfYrPEULU8JWtLi53VYjV6k6a-TcY6ZcS3HhCZwYkAyoMLS45LJHpfXG3Z4u5DfgwKsb4zEV3fWOO3HMFXN_lSn3R5zkWRTLC_Eos4E2GA0wPjs-eBsm3esJqIqY5SgmtQnYo/s1195/Screenshot%202025-11-10%20110918.png",
      tags: ["n8n", "Integration", "Automation"]
    },

     {
      title: "Bill extraction Agent",
      category: "Automation",
      description: "I recently built an AI agent that automatically extracts invoice details from PDFs — like the invoice number, client info, total amount, and due date — and instantly notifies the billing team.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQu-u-XtaYYtCYl7Ctv4Br2jTu2AKGnVrcX6KcKkJdMt-Ex0WE8unMQkv2uCJbhacZQn3BlZqlmuS7nJXgWrkycInwszZw1Z1kdP4uiM3dFcLXEeo3E48MG1TaMA1OHslBT_4wAXAd1bgQs2vbY7GF7HBIHXlt6YX5zAOP6oVu8IFS8kzfDURWpYvm-do/s928/Screenshot%202025-11-10%20111458.png",
      tags: ["n8n", "Integration", "Automation"]
    },

      {
      title: "RAG CHATBOT FOR BUSINESS OPERATIONS",
      category: "Automation",
      description: "How I made my AI remember every single detail.",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjKEJDYbQpWHBAXQ9KN4V9CFHGKlKrN-0dplFYxCHGW0eeZbYZoKwSLCLfLOPNqTNvmGJSmlNmkL3GOiq8YDFCePVVJnT43HNRdx7tP1pOZbgFJKpJh1_CshMUVPYyk3XAu5a_F8_c6zMQJTAl6DC7IMWAAAqmKyp4peOpNkiFuamIywqOGW58vohRaJo/s744/Screenshot%202025-11-10%20111958.png",
      tags: ["n8n", "Integration", "Automation"]
    },

      {
      title: "Blog Content Generation Automation",
      category: "Automation",
      description: "Automating Blog Content Creation with AI: From Topic to Published Post",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQ0Zmbx21X666d8xKYZuReL_zZUWQGDyIAs0UfvlEzwk0RtIkEqqpjaBchGhxriA7_SCrxZP3KXN7WzsdihmSn7VysJJiC4y8dse0QCXyOy58ccr_zs7RqHrr67viMJw4iMq8c5mMklBWWECRBDbIAr9ysu0619qyZtnB8gBo9aikKat2Nw8i-EfJtmP4/s895/Screenshot%202025-11-10%20113413.png",
      tags: ["n8n", "Integration", "Automation"]
    },

     {
      title: "Product video generation Automation",
      category: "Automation",
      description: "Automating Product Video Creation with AI: From Text to Engaging Videos",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5oNCJJLYFVfTAvopiuh92COYcXT6t-o3xlE2nJgqJRiLLQ66WOkJwlvQaJwkb51oNpVHWhyphenhyphenWBlBvhMa1QU2TuCwS4jOBtKV_qEajEvH37JJgL2WoxdKUgwYgEi7aospY_boQVpBADDNL1rBV1KtXvATLB_Vm_bYZaKGsMJXioysraovj_vO35LMeTFEE/s858/Screenshot%202025-11-10%20112616.png",
      tags: ["n8n", "Integration", "Automation"]
    },

    {
      title: "Clothe Fit AI",
      category: "AI Solutions",
      description: "APP is designed for e-commecre Store where user can try outfit before they Buy",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidvg6UjCVNahkUQWNOWPT3yrgzJthUHmbaSUDeTzKROd6NUma25dztQJ76PJ6YnJVSjeW7KqVv8MFXZwDNALut9fNbRWX1dvrvrzn7fJ1DGxp0BF53ZBSOH2YDrz9pVPSkdskNb-XIe9ai4sMbpgcY0RizVzmn51UPTN516qUODqlgz9Eyi-Y88NRa_b8/s320/Screenshot%202025-09-21%20203924.png",
      link: "#",
      tags: ["RAG", "Generative AI", "Marketing","AI Agent","Google AI Studio"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 animate-fade-up">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              [ Selected Work ]
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter 
                  ? "bg-gradient-to-r from-primary to-accent-blue" 
                  : "border-primary/30 hover:border-primary hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-card border border-border rounded-xl overflow-hidden card-hover animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover Link */}
                  {project.link !== "#" && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <div className="p-4 bg-primary rounded-full">
                        <ExternalLink className="h-6 w-6" />
                      </div>
                    </a>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      [ {project.category} ]
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-1 bg-primary/10 rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
