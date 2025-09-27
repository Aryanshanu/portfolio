import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  return (
    <div id="contact" className="w-full min-h-screen bg-primary flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-secondary">
            Contact
          </p>
          <p className="text-gray-300 py-4">Submit the form below or shoot me an email</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-[600px] w-full"
      >
        <form className="flex flex-col max-w-[600px] w-full">
          <input
            className="bg-[#122547] p-2 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#122547] text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#122547] p-2 text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="btn-primary my-8 mx-auto px-8">
            Let's Collaborate
          </button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center space-x-8 mt-8"
      >
        <a
          href="mailto:your.email@example.com"
          className="text-gray-300 hover:text-secondary transition-colors"
        >
          <FiMail size={30} />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-secondary transition-colors"
        >
          <FiGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-secondary transition-colors"
        >
          <FiLinkedin size={30} />
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;