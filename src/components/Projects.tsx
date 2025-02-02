const Projects = () => {
  const projects = [
    {
      title: "NSE Stock Information Visualizations",
      description: "Created an interactive stock analysis tool leveraging NSE data for insights and trend visualizations. Used advanced visualization techniques to improve data-driven decision-making for financial analysis.",
      link: "https://huggingface.co/spaces/Aryanshanu/NSE_Stock_Info_Visualizations"
    },
    {
      title: "Sentiment Analysis for Text Data",
      description: "Designed a web application for real-time sentiment analysis using pre-trained NLP models. Improved accuracy by implementing fine-tuned models on Hugging Face.",
      link: "https://huggingface.co/spaces/Aryanshanu/Sentiment_Analysis"
    },
    {
      title: "Reinforcement Learning with PPO",
      description: "Contributed to Hugging Face's RL environments by training and deploying PPO agents for dynamic tasks. Leveraged stable-baselines3 and Hugging Face integrations for high-performing agents.",
      link: "https://huggingface.co/Aryanshanu/ppo-Huggy"
    }
  ];

  return (
    <section className="py-16 px-4" id="projects">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;