import React from 'react';
import { motion } from 'framer-motion';
import { 
  DiReact, DiNodejs, DiMongodb, DiPython,
  DiJavascript1, DiHtml5, DiCss3, DiGit
} from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'Prompt Engineering & LLMs', items: ['GPT-3/4', 'Hugging Face', 'LangChain', 'RAG'] },
    { name: 'Responsible AI & Safety', items: ['Red Teaming', 'Bias Detection', 'Explainable AI', 'OpenTelemetry'] },
    { name: 'Model Development', items: ['PyTorch', 'TensorFlow', 'RLHF/DPO', 'Transformers'] },
    { name: 'Programming', items: ['Python', 'FastAPI', 'SQL', 'REST APIs'] },
    { name: 'Data Engineering', items: ['ETL Pipelines', 'Spark SQL', 'Databricks', 'Airflow'] },
    { name: 'Certifications', items: ['Azure AI', 'Google Cloud', 'OpenAI', 'ISO/IEC 42001'] },
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
              whileHover={{ scale: 1.02 }}
              className="shadow-md shadow-[#040c16] p-4 hover:bg-[#112240] duration-500"
            >
              <h3 className="text-xl font-bold text-secondary mb-3">{skill.name}</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-sm">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;