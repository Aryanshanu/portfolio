import React from 'react';
import { motion } from 'framer-motion';

// Replace these with your actual project images
const projects = [
  {
    title: "Agentic Security",
    description: "Designed governance protocols for ethical AI with OpenTelemetry & OpenFGA integration, reducing misuse incidents by 25% in simulations.",
    image: "https://via.placeholder.com/400x300?text=Agentic+Security",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Red Teaming in LLMs",
    description: "Developed TAP/PAIR adversarial tests to expose hallucination, bias, and injection vulnerabilities in enterprise chatbots.",
    image: "https://via.placeholder.com/400x300?text=Red+Teaming+LLMs",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Responsible AI Dashboard",
    description: "Built a dashboard tracking risk scores, review status, and approvals for 50+ initiatives, enabling executive visibility and compliance reporting.",
    image: "https://via.placeholder.com/400x300?text=RAI+Dashboard",
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Sentiment Analysis Web App",
    description: "Real-time text sentiment classifier using fine-tuned Hugging Face models with FastAPI backend.",
    image: "https://via.placeholder.com/400x300?text=Sentiment+Analysis",
    demoLink: "#",
    codeLink: "#"
  }
];

const Projects = () => {
  return (
    <div id="projects" className="w-full min-h-screen bg-primary text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Projects</p>
          <p className="py-6">Check out some of my recent work</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group shadow-lg shadow-[#040c16] rounded-md overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full object-cover" />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-[#0a192fe6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;