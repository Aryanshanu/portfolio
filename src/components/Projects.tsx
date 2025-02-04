import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, LineChart, TrendingUp, Database, Brain } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NSE Stock Information Visualizations",
      description: "Enterprise-grade financial analytics platform leveraging advanced data visualization and machine learning for real-time stock market insights. Features include technical indicator analysis, predictive modeling, and interactive dashboards for institutional investors.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/yourusername/nse-stock-viz",
      tech: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy", "scikit-learn"],
      highlights: [
        "Real-time market data processing with sub-second latency",
        "Advanced technical analysis with 20+ indicators",
        "ML-powered price prediction models",
        "Interactive dashboards with drill-down capabilities"
      ],
      features: [
        { icon: <LineChart className="w-5 h-5" />, text: "Real-time Technical Analysis" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Predictive Analytics" },
        { icon: <Database className="w-5 h-5" />, text: "Historical Data Analysis" },
        { icon: <Brain className="w-5 h-5" />, text: "ML-Powered Insights" }
      ]
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
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground animate-fade-in">
          Key Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`
                group hover:shadow-xl transition-all duration-300 animate-fade-in 
                transform hover:-translate-y-2 overflow-hidden
                bg-card dark:bg-card text-card-foreground dark:text-card-foreground
                border border-border dark:border-border
                ${hoveredProject === index ? 'ring-2 ring-primary dark:ring-primary' : ''}
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
                <CardTitle className="mb-2 text-xl text-foreground dark:text-foreground">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-muted-foreground dark:text-muted-foreground">
                  {project.description}
                </CardDescription>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-secondary/80 dark:bg-secondary/20 text-secondary-foreground dark:text-secondary-foreground animate-slide-in-right" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    {project.features?.map((feature, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground"
                      >
                        {feature.icon}
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground"
                      >
                        <Star className="h-4 w-4 text-primary dark:text-primary" />
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
                    className="flex items-center gap-2 text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary dark:text-primary hover:text-primary/80 dark:hover:text-primary/80 transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
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