const Education = () => {
  const certifications = [
    "Python for Machine Learning and Databricks AI Fundamentals",
    "Google Certified Cloud Digital Leader",
    "ChatGPT Prompt Engineering for Developers",
    "Databricks Generative AI Fundamentals",
    "Stanford University: Supervised and Unsupervised Learning"
  ];

  return (
    <section className="py-16 px-4" id="education">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Education & Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-700 font-semibold">
                  Master's in Information Technology
                  <br />
                  <span className="text-gray-600">Osmania University</span>
                </p>
              </div>
              <div>
                <p className="text-gray-700 font-semibold">
                  Bachelor in Applied Science
                  <br />
                  <span className="text-gray-600">Osmania University</span>
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-4">Certifications</h3>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="text-gray-700">{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;