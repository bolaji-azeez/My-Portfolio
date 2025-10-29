"use client";

import ProjectCard from "./ProjectCard";
import project1 from "../../../../public/assets/Onboarding.png";
import project2 from "../../../../public/assets/dope-removebg-preview.png";
import project3 from "../../../../public/assets/Overview.png";
import project4 from "../../../../public/assets/Driver's Dashboard.png";
import project5 from "../../../../public/assets/kode10xlandingpage.png";
import project6 from "../../../../public/assets/User Timeline.png";

const projects = [
  {
    title: "Famous Store E-Commerce Platform",
    description:
      "Modern e-commerce website design with seamless shopping experience. Integrated advanced filtering and personalized recommendations.",
    image: project2,
    tags: ["Web Design", "E-Commerce", "Prototyping"],
    link: "https://www.famouzstore.com",
  },
  {
    title: "Mid View Portal App",
    description:
      "Complete redesign of a mobile application with focus on user experience and modern aesthetics. Improved user flow and increased engagement by 40%.",
    image: project1,
    tags: ["UI/UX", "Mobile", "Figma"],
    link: "https://apps.apple.com/us/app/my-mid-view-portal/id6502463931",
  },

  {
    title: "Analytics Dashboard",
    description:
      "Data visualization dashboard for business intelligence. Clean interface for complex data analysis with real-time updates.",
    image: project3,
    tags: ["Dashboard", "Data Viz", "SaaS"],
    link: "#",
  },
  {
    title: "Ambulance Tracking App",
    description:
      "Real-time ambulance tracking application with GPS integration, emergency alerts, and route optimization.",
    image: project4,
    tags: ["Mobile", "Health Tech", "iOS"],
    link: "https://ambulcare.com/",
  },
  {
    title: "Kode10x Job Portal",
    description:
      "Modern job portal application focusing on user experience, job matching, and application tracking.",
    image: project5,
    tags: ["FinTech", "Mobile", "Security"],
    link: "https://www.kode10x.com",
  },
  {
    title: "Kodamora Estate IoT Dashboard",
    description:
      "IoT dashboard for smart home devices with intuitive controls and automation features. Centralized control for all connected devices.",
    image: project6,
    tags: ["IoT", "Dashboard", "Tablet"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured{" "}
            <span className="bg-gradient-primary bg-clip-text text-[#283673]">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and see how I transform ideas into beautiful,
            functional designs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard {...{ ...project, image: project.image.src }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
