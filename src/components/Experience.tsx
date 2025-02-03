import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: "Data Engineer",
      period: "Jan 2022 – Present",
      responsibilities: [
        "Developed and maintained data pipelines using Apache Spark and Airflow",
        "Implemented ML models for predictive analytics",
        "Optimized database queries improving performance by 40%"
      ]
    },
    {
      company: "24/7.1i",
      location: "Hyderabad, India",
      position: "Research Analyst",
      period: "August 2021 - December 2021",
      responsibilities: [
        "Designed conversational AI models using Dialog Flow, improving customer satisfaction by 15%",
        "Conducted performance evaluations of AI solutions, providing actionable insights to stakeholders",
        "Led a team of 3 researchers in developing NLP solutions"
      ]
    }
  ];

  return (
    <section className="py-16 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading text-center mb-12">Professional Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 items-center md:items-start ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                
                <Card className={`w-full md:w-[calc(50%-2rem)] p-6 animate-fade-in hover:shadow-lg transition-shadow duration-300`}>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold text-primary">{exp.position}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="animate-slide-in-right" style={{ animationDelay: `${i * 100}ms` }}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;