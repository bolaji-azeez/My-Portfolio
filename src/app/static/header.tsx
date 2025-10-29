"use client";

import type { Dispatch, SetStateAction } from "react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}

export default function Header({
  activeSection,
  setActiveSection,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-6  flex items-center justify-between">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold text-[#283673]">
            Bolaji OLuwatoisn Azeez
          </h1>
          <p className="text-sm text-[#283673]">Product Designer</p>
        </div>

        <nav className="flex gap-8">
          {["work", "information", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`text-sm font-medium transition-colors capitalize ${
                activeSection === section
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}>
              {section}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
