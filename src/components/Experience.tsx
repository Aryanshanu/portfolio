
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Briefcase, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: "Responsible AI Engineer",
      period: "Jan 2025 – Present",
      responsibilities: [
        "Contributed to Responsible AI Toolkit under Infosys Topaz Suite, implementing fairness, explainability, and bias mitigation modules",
        "Led TAP/PAIR adversarial red teaming, reducing vulnerabilities by 30% across enterprise LLM deployments",
        "Integrated AI3S (Scan, Shield, Steer) framework for ethical innovation in GenAI adoption",
        "Built dashboards in Power BI for monitoring drift, adversarial triggers, and explainability at scale"
      ],
      skills: ["TAP/PAIR", "Red Teaming", "Responsible AI", "Power BI", "AI Governance", "Explainability"]
    },
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: "Data Engineer",
      period: "Jan 2022 – Dec 2024",
      responsibilities: [
        "Migrated Netezza → Databricks Delta Lake, improving scalability & reliability of reporting systems",
        "Automated ETL workflows with Airflow DAGs, cutting manual processing by 50% and improving data quality by 20%",
        "Developed Spark SQL pipelines and workflows for financial compliance data with 100% reliability",
        "Built Python-based ingestion systems exporting data to AWS S3 for model training & reporting",
        "American Family Insurance (Fortune 500) – Automated Python-based ETL pipelines, reduced manual effort 50%, boosted accuracy 20%",
        "Northwestern Mutual (Fortune 500) – Led cloud data migration, developed Spark SQL + Airflow pipelines for financial datasets"
      ],
      skills: ["SQL", "Python", "Spark", "Databricks", "Airflow", "AWS S3", "Delta Lake", "ETL"]
    },
    {
      company: "[24]7.ai",
      location: "Hyderabad, India", 
      position: "Research Analyst",
      period: "Aug 2021 – Dec 2021",
      responsibilities: [
        "Developed NLP chatbot models (Dialogflow), improving accuracy by 22% across 10k+ interactions",
        "Designed SaaS-integrated APIs and training materials for conversational AI adoption",
        "Managed a small team of 3 researchers to prototype enterprise-ready NLP solutions"
      ],
      skills: ["NLP", "Dialogflow", "APIs", "Team Leadership", "Conversational AI"]
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
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {exp.responsibilities.map((responsibility, i) => (
                        <li key={i} className="animate-slide-in-right" style={{ animationDelay: `${i * 100}ms` }}>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                    {exp.skills && (
                      <div className="mt-4">
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="bg-primary/10">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
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
