const Education = () => {
  const certifications = [
    "Databricks AI Fundamentals",
    "Databricks Generative AI Fundamentals", 
    "Infosys Certified Responsible AI Practitioner",
    "OpenAI Certified Prompt Engineer",
    "Google Cloud Certified Innovator",
    "Google Certified Cloud Digital Leader",
    "Stanford Online: Supervised & Unsupervised Learning"
  ];

  return (
    <section className="py-16 px-4 bg-background" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading text-center mb-8">Education</h2>
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in">
              <p className="text-xl font-semibold text-foreground">
                Master's in Information Technology
              </p>
              <p className="text-muted-foreground">Osmania University</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "200ms" }}>
              <p className="text-xl font-semibold text-foreground">
                Bachelor in Applied Science
              </p>
              <p className="text-muted-foreground">Osmania University</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-heading text-center mb-8">Certifications</h2>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-card-foreground">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;