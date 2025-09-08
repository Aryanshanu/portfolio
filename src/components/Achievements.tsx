const Achievements = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20" id="achievements">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="section-heading text-center mb-8">Strategic Achievements</h2>
          <div className="space-y-4">
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale">
              <p className="text-card-foreground font-medium">Responsible AI Strategy – Implemented governance & compliance frameworks at Infosys, ensuring ethical AI deployment.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale" style={{ animationDelay: "200ms" }}>
              <p className="text-card-foreground font-medium">Efficiency Gains – Delivered 30% operational efficiency through optimized AI workflows.</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale" style={{ animationDelay: "400ms" }}>
              <p className="text-card-foreground font-medium">AI Risk Reduction – Reduced enterprise AI model risks by 25% via agentic security protocols and adversarial testing.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="section-heading text-center mb-8">Recognition & Interests</h2>
          <div className="space-y-4">
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale">
              <p className="text-card-foreground font-medium">🏆 Top 1% Hugging Face Competitions & Top 2% Google AI Hackathon</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale" style={{ animationDelay: "200ms" }}>
              <p className="text-card-foreground font-medium">🔬 Responsible AI, Governance & Compliance in enterprise environments</p>
            </div>
            <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow animate-fade-in hover-scale" style={{ animationDelay: "400ms" }}>
              <p className="text-card-foreground font-medium">🚀 Multimodal AI research (text, image, video) and time-series forecasting in finance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;