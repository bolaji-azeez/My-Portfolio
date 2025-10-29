"use client";

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Twitter, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-up space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Let's{" "}
              <span className="bg-gradient-primary bg-clip-text text-[#283673]">
                Connect
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind or just want to chat about design? I'm
              always open to discussing new opportunities and ideas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                variant="default"
                size="lg"
                className="min-w-[200px] bg-[#283673] hover:bg-gradient-primary/90"
                asChild>
                <a href="mailto:azoluwatoisn860@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>

            <div className="flex gap-6 justify-center pt-8">
              <a
                href="https://www.linkedin.com/in/bolaji-oluwatosin/"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-[#283673] hover:text-white transition-all duration-300"
                aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1F66KeqfSr"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-[#283673] hover:text-white transition-all duration-300"
                aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/TosinPHP?t=P0zgNytl3tLdi7YxgNBVqA&s=09"
                className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary text-primary hover:bg-[#283673] hover:text-white transition-all duration-300"
                aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Product Designer. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
