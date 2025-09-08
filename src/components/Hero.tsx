import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="min-h-[40vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
        <Avatar className="w-48 h-48 border-4 border-primary/20 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <AvatarImage 
            src="/lovable-uploads/124de249-6c27-4104-9d37-ba17a92de736.png" 
            alt="Ganesh Kumar"
            className="object-cover object-center w-full h-full scale-110"
          />
          <AvatarFallback>GK</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground animate-fade-in">
        Ganesh Kumar
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-slide-in-right">
        Applied AI Scientist & Responsible AI Engineer
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <span className="text-sm text-muted-foreground">📧 ganeshgoud0023@gmail.com</span>
        <span className="text-sm text-muted-foreground">📞 +91 7995686260</span>
      </div>
      <div className="flex gap-4 mb-8">
        <a 
          href="mailto:ganeshgoud0023@gmail.com" 
          className="flex items-center gap-2 text-primary hover:text-primary/80 hover:scale-105 transition-all duration-300"
        >
          <Mail size={20} />
          <span>Contact Me</span>
        </a>
      </div>
      <div className="flex gap-6">
        <a href="https://linkedin.com/in/ganesh-kumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-300">
          <span className="font-medium">LinkedIn</span>
        </a>
        <a href="https://huggingface.co/ganesh-kumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-300">
          <span className="font-medium">Hugging Face</span>
        </a>
        <a href="https://github.com/ganesh-kumar" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 hover:scale-110 transition-all duration-300">
          <span className="font-medium">GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;