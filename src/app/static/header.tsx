"use client";

import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/BolajiProductDesigner.pdf";
    link.download = "BolajiProductDesigner.pdf";
    link.click();
    setIsMobileMenuOpen(false); // Close mobile menu after download
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Main Header Row */}
          <div className="flex items-center justify-between">
            {/* Logo/Name Section */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex flex-col text-left hover:opacity-80 transition-opacity">
              <h1 className="text-2xl font-bold text-[#283673] tracking-tight">
                Bolaji Ouwatoisin Azeez
              </h1>
              <p className="text-sm text-[#283673]/80 mt-0.5">
                Product Designer
              </p>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {["projects", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-[#283673] transition-colors font-medium capitalize text-sm">
                  {section}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={downloadCV}
                className="border-[#283673] text-[#283673] hover:bg-[#283673] hover:text-white">
                <Download className="mr-2 h-4 w-4" />
                CV
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-[#283673]" />
              ) : (
                <Menu className="h-6 w-6 text-[#283673]" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen
                ? "max-h-64 opacity-100 py-4"
                : "max-h-0 opacity-0"
            }`}>
            <nav className="flex flex-col gap-4 border-t border-gray-200 pt-4">
              {["projects", "about", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-foreground hover:text-[#283673] transition-colors font-medium capitalize text-lg py-2 text-left">
                  {section}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={downloadCV}
                className="border-[#283673] text-[#283673] hover:bg-[#283673] hover:text-white w-full justify-center mt-2">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
