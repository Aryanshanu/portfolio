import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI/ML & LLMs",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "GPT Models", level: 90 },
        { name: "BERT", level: 85 },
        { name: "Transformers", level: 80 },
        { name: "RAG", level: 85 }
      ]
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "Apache Spark", level: 85 },
        { name: "Airflow", level: 80 },
        { name: "SQL", level: 90 },
        { name: "Databricks", level: 85 }
      ]
    },
    {
      title: "Programming",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "FastAPI", level: 75 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Agile", level: 85 }
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