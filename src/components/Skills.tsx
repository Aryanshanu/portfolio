import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "Hugging Face", level: 95 },
        { name: "Transformers", level: 90 },
        { name: "OpenAI APIs", level: 85 },
        { name: "LangChain", level: 80 },
        { name: "RAG", level: 85 },
        { name: "Prompt Engineering", level: 90 }
      ]
    },
    {
      title: "Responsible AI & Safety", 
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Red Teaming (TAP/PAIR)", level: 90 },
        { name: "Bias Detection", level: 85 },
        { name: "Explainability (XAI)", level: 80 },
        { name: "RAF Toolkit", level: 85 },
        { name: "AI Governance", level: 80 }
      ]
    },
    {
      title: "MLOps & Deployment",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MLflow", level: 85 },
        { name: "Airflow", level: 90 },
        { name: "Docker", level: 80 },
        { name: "Kubernetes", level: 75 },
        { name: "FastAPI", level: 80 },
        { name: "GitHub Actions", level: 75 }
      ]
    },
    {
      title: "Cloud & Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "PyTorch", level: 85 },
        { name: "TensorFlow", level: 80 },
        { name: "AWS SageMaker", level: 80 },
        { name: "Azure ML", level: 75 },
        { name: "Databricks", level: 90 }
      ]
    }
  ];

  return (
    <section className="py-16 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading text-center mb-12">Key Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="animate-fade-in hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {category.icon}
                </div>
                <CardTitle>{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="animate-slide-in-right" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <Badge variant="secondary">{skill.level}%</Badge>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <div
                          className="bg-primary rounded-full h-2.5 transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;