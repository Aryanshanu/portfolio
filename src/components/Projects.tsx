import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "NSE Stock Information Visualizations",
      description: "Created an interactive stock analysis tool leveraging NSE data for insights and trend visualizations.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations",
      image: "https://source.unsplash.com/photo-1488590528505-98d2b5aba04b",
      github: "https://github.com/yourusername/nse-stock-viz",
      tech: ["Python", "Streamlit", "Pandas", "Plotly"]
    },
    {
      title: "Sentiment Analysis for Text Data",
      description: "Designed a web application for real-time sentiment analysis using pre-trained NLP models.",
      link: "https://huggingface.co/spaces/Aryanshanu/Sentiment_Analysis",
      image: "https://source.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      github: "https://github.com/yourusername/sentiment-analysis",
      tech: ["PyTorch", "Transformers", "FastAPI", "React"]
    },
    {
      title: "Reinforcement Learning with PPO",
      description: "Contributed to Hugging Face's RL environments by training and deploying PPO agents for dynamic tasks.",
      link: "https://huggingface.co/Aryanshanu/ppo-Huggy",
      image: "https://source.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      github: "https://github.com/yourusername/ppo-huggy",
      tech: ["Python", "PyTorch", "Stable-Baselines3", "Gym"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fade-in overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="mb-2 text-xl text-blue-900">{project.title}</CardTitle>
                <CardDescription className="mb-4 text-blue-700">{project.description}</CardDescription>
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
                <div className="flex justify-between items-center">
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