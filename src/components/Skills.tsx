import React from 'react';
import { motion } from 'framer-motion';
import { 
  DiReact, DiNodejs, DiMongodb, DiPython,
  DiJavascript1, DiHtml5, DiCss3, DiGit
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: <DiHtml5 size={50} />, name: 'HTML' },
    { icon: <DiCss3 size={50} />, name: 'CSS' },
    { icon: <DiJavascript1 size={50} />, name: 'JavaScript' },
    { icon: <SiTypescript size={50} />, name: 'TypeScript' },
    { icon: <DiReact size={50} />, name: 'React' },
    { icon: <DiNodejs size={50} />, name: 'Node.js' },
    { icon: <DiMongodb size={50} />, name: 'MongoDB' },
    { icon: <DiPython size={50} />, name: 'Python' },
    { icon: <DiGit size={50} />, name: 'Git' },
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-primary text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Skills</p>
          <p className="py-4">These are the technologies I've worked with</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <div className="mx-auto w-20 py-4">
                {skill.icon}
              </div>
              <p className="my-4">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;