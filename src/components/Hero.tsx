import { GraduationCap, Briefcase, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
        Ganesh Goud
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl">
        Data Scientist & AI Engineer
      </p>
      <div className="flex gap-4 mb-8">
        <a href="mailto:ganeshgoud0023@gmail.com" className="flex items-center gap-2 text-primary hover:text-primary/80">
          <Mail size={20} />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;