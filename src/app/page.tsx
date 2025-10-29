
import Hero from "@/app/component/web/Hero";
import Projects from "@/app/component/web/Projects";
import About from "@/app/component/web/About";
import Contact from "@/app/component/web/Contact";
import Header from "./static/header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header  />
      
      <Hero />
      <Projects />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};

export default Index;
