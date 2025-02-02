const Achievements = () => {
  return (
    <section className="py-16 px-4" id="achievements">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading">Achievements & Interests</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-4">Achievements</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">Ranked in the Top 1% in Hugging Face competitions for reinforcement learning models.</li>
              <li className="text-gray-700">Delivered AI innovations, reducing pipeline latency and onboarding time across multiple projects.</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-bold text-primary mb-4">Interests</h3>
            <ul className="space-y-2">
              <li className="text-gray-700">Advancing multimodal AI models and time-series forecasting.</li>
              <li className="text-gray-700">Exploring cutting-edge applications in Generative AI and reinforcement learning.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;