import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Image, Star } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NSE Stock Information Visualizations",
      description: "Created an interactive stock analysis tool leveraging NSE data for insights and trend visualizations. Features real-time data processing and interactive charts for market analysis.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/nse-stock-viz",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"],
      highlights: ["Real-time data processing", "Interactive visualizations", "Market trend analysis"]
    },
    {
      title: "Sentiment Analysis for Text Data",
      description: "Designed a web application for real-time sentiment analysis using pre-trained NLP models. Implements BERT-based architecture for accurate sentiment classification.",
      link: "https://huggingface.co/spaces/Aryanshanu/Sentiment_Analysis",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/sentiment-analysis",
      tech: ["PyTorch", "Transformers", "FastAPI", "React"],
      highlights: ["BERT implementation", "Real-time analysis", "High accuracy"]
    },
    {
      title: "Reinforcement Learning with PPO",
      description: "Contributed to Hugging Face's RL environments by training and deploying PPO agents for dynamic tasks. Achieved top 1% performance in benchmark tests.",
      link: "https://huggingface.co/Aryanshanu/ppo-Huggy",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
      github: "https://github.com/yourusername/ppo-huggy",
      tech: ["Python", "PyTorch", "Stable-Baselines3", "Gym"],
      highlights: ["Top 1% performance", "Custom environment design", "Optimal policy convergence"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12 animate-fade-in">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`
                group hover:shadow-xl transition-all duration-300 animate-fade-in 
                transform hover:-translate-y-2 overflow-hidden
                ${hoveredProject === index ? 'ring-2 ring-blue-400' : ''}
              `}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl text-blue-900">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-blue-700">{project.description}</CardDescription>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-blue-100 text-blue-800 animate-slide-in-right" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-blue-600"
                      >
                        <Star size={16} />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;