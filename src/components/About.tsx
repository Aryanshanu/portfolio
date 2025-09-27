import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-primary text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8"
        >
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-secondary">
              About
            </p>
          </div>
          <div></div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ganesh Kumar, an AI Scientist based in Hyderabad, India.</p>
          </div>
          <div>
            <p className="text-gray-300">
              I specialize in Responsible AI and Applied AI solutions, with a focus on LLM evaluation,
              red teaming, and bias mitigation. As part of Infosys' first ISO/IEC 42001–certified team,
              I've led AI risk assessments for 50+ initiatives across Finance, Healthcare, and Government sectors.
              I'm ranked in the Top 1% on Hugging Face and Top 2% at Google AI Hackathon 2025.
            </p>
            <p className="mt-4 text-gray-300">
              Contact: ganeshgoud0023@gmail.com | +91 7995686260
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;