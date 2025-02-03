import { Mail } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <div className="min-h-[40vh] flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="mb-8">
        <Avatar className="w-40 h-40 border-4 border-white shadow-lg overflow-hidden">
          <AvatarImage 
            src="/lovable-uploads/124de249-6c27-4104-9d37-ba17a92de736.png" 
            alt="Ganesh Kumar"
            className="object-cover object-center w-full h-full"
          />
          <AvatarFallback>GK</AvatarFallback>
        </Avatar>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-blue-900">
        Ganesh Kumar
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-blue-700">
        Data Engineer & AI Engineer
      </p>
      <div className="flex gap-4 mb-8">
        <a href="mailto:ganeshgoud0023@gmail.com" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
          <Mail size={20} />
          <span>Contact Me</span>
        </a>
      </div>
    </div>
  );
};

export default Hero;