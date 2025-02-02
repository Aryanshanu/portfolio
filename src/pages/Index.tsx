import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
      </main>
    </div>
  );
};

export default Index;