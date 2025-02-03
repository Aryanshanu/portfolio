const Achievements = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white" id="achievements">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Achievements</h2>
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-blue-800">Ranked in the Top 1% in Hugging Face competitions for reinforcement learning models.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-blue-800">Delivered AI innovations, reducing pipeline latency and onboarding time across multiple projects.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Interests</h2>
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-blue-800">Advancing multimodal AI models and time-series forecasting.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <p className="text-blue-800">Exploring cutting-edge applications in Generative AI and reinforcement learning.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;