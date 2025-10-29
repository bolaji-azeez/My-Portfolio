"use client"


import { Card } from "@/components/ui/card";
import { Palette, Figma, Lightbulb, Users } from "lucide-react";

const skills = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love"
  },
  {
    icon: Figma,
    title: "Prototyping",
    description: "Rapid prototyping and interactive design mockups"
  },
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description: "User-centered approach to problem solving"
  },
  {
    icon: Users,
    title: "User Research",
    description: "Understanding user needs through research and testing"
  }
];

const About = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 ">
              About <span className="bg-gradient-primary bg-clip-text text-[#283673]">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm a passionate product designer with over 5 years of experience creating 
              digital products that users love. I believe great design is about solving 
              problems, not just making things look pretty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-primary transition-all duration-300 hover:-translate-y-2 border-none bg-card animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#283673] rounded-2xl mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </Card>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap gap-3 justify-center">
              {["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research", "Wireframing", "Design Systems", "Responsive Design"].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-[#d8dae6] text-[#283673] rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
