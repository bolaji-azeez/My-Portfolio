"use client"

import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroImage from "../../../../public/assets/dp.jpg";
import Image from "next/image";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/BolajiProductDesigner.pdf"; // path inside /public
  link.download = "BolajiProductDesigner.pdf"; // name that will show in Save dialog
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
      <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-2 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ">
          {/* Left Side - Text Content */}
          <div className="animate-fade-up space-y-6">
            
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-[#283673]">
              Creating Digital
              <span className="block bg-gradient-primary text-[#283673] mt-2">
                Experiences That Matter
              </span>
            </h1>

           

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadCV}
                className="min-w-[200px]"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
              <Button 
                variant="default" 
                size="lg"
                onClick={scrollToProjects}
                className="min-w-[200px] bg-[#283673] hover:bg-gradient-primary/90"
              >
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative animate-scale-in order-first lg:order-last ">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <Image 
                src={heroImage} 
                alt="Product Designer" 
                className="w-full h-[500px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-primary opacity-10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
