import { ThemeProvider } from "next-themes";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Achievements from "../components/Achievements";
import Navigation from "../components/Navigation";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="container mx-auto pt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;