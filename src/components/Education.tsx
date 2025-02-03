const Education = () => {
  const certifications = [
    "Python for Machine Learning and Databricks AI Fundamentals",
    "Google Certified Cloud Digital Leader",
    "ChatGPT Prompt Engineering for Developers",
    "Databricks Generative AI Fundamentals",
    "Stanford University: Supervised and Unsupervised Learning"
  ];

  return (
    <section className="py-16 px-4 bg-white" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Education</h2>
          <div className="space-y-6">
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl font-semibold text-blue-900">
                Master's in Information Technology
              </p>
              <p className="text-blue-700">Osmania University</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl font-semibold text-blue-900">
                Bachelor in Applied Science
              </p>
              <p className="text-blue-700">Osmania University</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Certifications</h2>
          <div className="grid gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="p-4 bg-blue-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-blue-800">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;