
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
        "Contribute to the development and testing of the open-source Responsible AI Toolkit, a key component of the Infosys Topaz Responsible AI Suite",
        "Work with the AI3S framework—Scan, Shield, and Steer—to help enterprises innovate responsibly while addressing ethical challenges in AI adoption",
        "Integrate advanced defensive measures to detect and mitigate risks such as privacy breaches, security attacks, and biased outputs, enhancing trust and transparency in AI systems"
      ]
    },
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: "Data Engineer",
      period: "Jan 2022 – December 2024",
      responsibilities: [
        "Analyzed large financial datasets, identifying trends and anomalies for decision-making, including relative value assessment and deal-specific return calculations",
        "Automated data processing workflows using Python, reducing manual effort by 50% and improving accuracy by 20%",
        "Collaborated with cross-functional teams to enhance data quality by 15%, ensuring data accuracy and completeness for financial operations and reporting",
        "Applied machine learning concepts for data preprocessing and feature engineering for data-driven financial analysis solutions",
        "Worked on data migration from traditional RDBMS (Netezza) to Databricks Delta Lake for data analysis and reporting",
        "Developed and maintained high-performance data ingestion pipelines using Spark SQL",
        "Developed workflows to extract files from Databricks to S3 using Python",
        "Configured Airflow DAGs to automate the data processing workflows, ensuring data accuracy and reliability by maintaining cross DAG dependencies"
      ],
      skills: ["SQL", "Python", "Spark", "Databricks", "Airflow", "Data Analysis", "Machine Learning"]
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
