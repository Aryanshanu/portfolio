import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, LineChart, TrendingUp, Database, Brain } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Agentic Security Protocol",
      description: "Advanced AI governance protocols designed for ethical deployment in enterprise environments. Implements sophisticated security measures and risk assessment frameworks to reduce AI misuse by 25% in production simulations.",
      link: "https://github.com/ganesh-kumar/agentic-security",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/ganesh-kumar/agentic-security",
      tech: ["Python", "AI Governance", "Security Protocols", "Risk Assessment", "MLOps"],
      highlights: [
        "25% reduction in AI misuse through proactive governance",
        "Enterprise-grade security frameworks",
        "Real-time risk assessment and mitigation",
        "Scalable deployment across multiple environments"
      ],
      features: [
        { icon: <Brain className="w-5 h-5" />, text: "AI Ethics Framework" },
        { icon: <Database className="w-5 h-5" />, text: "Risk Assessment Engine" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Performance Monitoring" },
        { icon: <LineChart className="w-5 h-5" />, text: "Analytics Dashboard" }
      ]
    },
    {
      title: "Red Teaming for LLMs (RAI Toolkit)",
      description: "Comprehensive TAP/PAIR adversarial testing toolkit for exposing vulnerabilities in Large Language Models. Detects hallucination, bias, and prompt injection vulnerabilities across enterprise LLM deployments.",
      link: "https://github.com/ganesh-kumar/rai-toolkit",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/ganesh-kumar/rai-toolkit", 
      tech: ["Python", "TAP/PAIR", "LLMs", "Transformers", "Adversarial Testing", "Responsible AI"],
      highlights: [
        "30% reduction in LLM vulnerabilities detected",
        "TAP/PAIR adversarial testing implementation",
        "Automated bias and fairness detection",
        "Enterprise-scale deployment capabilities"
      ],
      features: [
        { icon: <Brain className="w-5 h-5" />, text: "Adversarial Testing" },
        { icon: <Database className="w-5 h-5" />, text: "Bias Detection" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Vulnerability Assessment" },
        { icon: <LineChart className="w-5 h-5" />, text: "Safety Metrics" }
      ]
    },
    {
      title: "Enterprise RAG System", 
      description: "Hybrid retrieval system combining FAISS + BM25 with GPU acceleration for enterprise-grade knowledge retrieval. Features advanced error handling, security checks, and scalable deployment architecture.",
      link: "https://github.com/ganesh-kumar/enterprise-rag",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/ganesh-kumar/enterprise-rag",
      tech: ["Python", "FAISS", "BM25", "GPU Acceleration", "LangChain", "Vector Search"],
      highlights: [
        "Hybrid FAISS + BM25 retrieval architecture",
        "GPU-accelerated processing pipeline",
        "Enterprise security and compliance",
        "Sub-second query response times"
      ],
      features: [
        { icon: <Database className="w-5 h-5" />, text: "Vector Search" },
        { icon: <Brain className="w-5 h-5" />, text: "Hybrid Retrieval" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "GPU Acceleration" },
        { icon: <LineChart className="w-5 h-5" />, text: "Performance Analytics" }
      ]
    },
    {
      title: "NSE Stock Visualization Platform",
      description: "Enterprise-grade financial analytics platform leveraging advanced data visualization and machine learning for institutional investors. Features predictive ML models, real-time market data processing, and interactive dashboards.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/ganesh-kumar/nse-stock-viz",
      tech: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy", "scikit-learn"],
      highlights: [
        "Real-time market data processing with sub-second latency",
        "Advanced technical analysis with 20+ indicators", 
        "ML-powered price prediction models",
        "Interactive dashboards for institutional investors"
      ],
      features: [
        { icon: <LineChart className="w-5 h-5" />, text: "Real-time Technical Analysis" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Predictive Analytics" },
        { icon: <Database className="w-5 h-5" />, text: "Historical Data Analysis" },
        { icon: <Brain className="w-5 h-5" />, text: "ML-Powered Insights" }
      ]
    },
    {
      title: "Sentiment Analysis App",
      description: "Real-time sentiment classification system using fine-tuned Hugging Face models. Deployed with FastAPI backend and React frontend, featuring advanced NLP capabilities and scalable architecture.",
      link: "https://huggingface.co/spaces/Aryanshanu/Sentiment_Analysis",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200&h=800",
      github: "https://github.com/ganesh-kumar/sentiment-analysis",
      tech: ["PyTorch", "Transformers", "FastAPI", "React", "Hugging Face", "Fine-tuning"],
      highlights: [
        "Fine-tuned BERT implementation for high accuracy",
        "Real-time sentiment analysis pipeline",
        "FastAPI + React deployment architecture",
        "Scalable for enterprise workloads"
      ],
      features: [
        { icon: <Brain className="w-5 h-5" />, text: "Fine-tuned Models" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Real-time Processing" },
        { icon: <Database className="w-5 h-5" />, text: "API Integration" },
        { icon: <LineChart className="w-5 h-5" />, text: "Performance Metrics" }
      ]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-background/50 dark:from-background dark:to-background/50" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-12">Key Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`
                group hover:shadow-xl transition-all duration-500 animate-fade-in 
                transform hover:-translate-y-2 hover:scale-[1.02] overflow-hidden
                bg-card text-card-foreground border border-border
                hover:border-primary/50 hover:shadow-primary/10
                ${hoveredProject === index ? 'ring-2 ring-primary shadow-primary/20' : ''}
              `}
              style={{ animationDelay: `${index * 200}ms` }}
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