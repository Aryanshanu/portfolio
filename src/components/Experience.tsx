const Experience = () => {
  const experiences = [
    {
      company: "Infosys",
      location: "Hyderabad, India",
      position: "Data Engineer",
      period: "Jan 2022 – Present",
    },
    {
      company: "24/7.1i",
      location: "Hyderabad, India",
      position: "Research Analyst",
      period: "August 2021 - December 2021",
      achievements: [
        "Designed conversational AI models using Dialog Flow, improving customer satisfaction by 15%.",
        "Conducted performance evaluations of AI solutions, providing actionable insights to stakeholders"
      ]
    }
  ];

  return (
    <section className="py-16 px-4" id="experience">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-primary mb-2">{exp.position}</h3>
              <p className="text-gray-600 mb-2">
                {exp.company} | {exp.location} | {exp.period}
              </p>
              {exp.achievements && (
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;