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
            <p>Hi. I'm [Your Name], nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;