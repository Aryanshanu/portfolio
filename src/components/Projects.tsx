import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NSE Stock Information Visualizations",
      description: "Created an interactive stock analysis tool leveraging NSE data for insights and trend visualizations.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations",
      image: "photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/yourusername/nse-stock-viz",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"]
    },
    {
      title: "Sentiment Analysis for Text Data",
      description: "Designed a web application for real-time sentiment analysis using pre-trained NLP models.",
      link: "https://huggingface.co/spaces/Aryanshanu/Sentiment_Analysis",
      image: "photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com/yourusername/sentiment-analysis",
      tech: ["PyTorch", "Transformers", "FastAPI", "React"]
    },
    {
      title: "Reinforcement Learning with PPO",
      description: "Contributed to Hugging Face's RL environments by training and deploying PPO agents for dynamic tasks.",
      link: "https://huggingface.co/Aryanshanu/ppo-Huggy",
      image: "photo-1487058792275-0ad4aaf24ca7",
      github: "https://github.com/yourusername/ppo-huggy",
      tech: ["Python", "PyTorch", "Stable-Baselines3", "Gym"]
    }
  ];

  return (
    <section className="py-16 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader className="relative overflow-hidden h-48">
                <img
                  src={`https://source.unsplash.com/${project.image}`}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="animate-slide-in-right" style={{ animationDelay: `${i * 100}ms` }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
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