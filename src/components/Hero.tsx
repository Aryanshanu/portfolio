import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full"
      >
        <p className="text-secondary">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white mt-4">
          [Your Name]
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400 mt-4">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-400 py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building exceptional digital experiences.
          Currently, I'm focused on building responsive full-stack web applications.
        </p>
        <div className="flex">
          <Link to="projects" smooth={true} duration={500}>
            <button className="btn-primary">
              View Work
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;