const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "AI/ML & LLMs: Fine-tuning GPT models, BERT, Transformer architectures, RAG",
        "Data Techniques: Knowledge graphs, Graph RAGs, text classification",
        "AI/ML Frameworks: TensorFlow, PyTorch, Vertex AI",
        "Programming Languages: Python, SQL",
        "Cloud Platforms: GCP (Vertex AI, BigQuery), AWS (S3), Azure",
        "Data Tools & Infrastructure: Spark SQL, Airflow, Databricks Delta Lake, GitLab"
      ]
    },
    {
      title: "Collaborative Skills",
      skills: [
        "Agile methodologies",
        "Cross-functional team leadership",
        "Customer outreach",
        "Automated prompt optimization"
      ]
    }
  ];

  return (
    <section className="py-16 px-4" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Key Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-primary mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;