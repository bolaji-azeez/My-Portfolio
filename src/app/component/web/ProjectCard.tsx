"use client";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData | string;
  tags: string[];
  link?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  link,
}: ProjectCardProps) => {
  const hasDims =
    typeof image !== "string" && "width" in image && "height" in image;

  return (
    <Card className="group overflow-hidden border-none shadow-lg hover:shadow-primary transition-all duration-500 bg-card">
      <div className="relative overflow-hidden aspect-[4/3]">
        {hasDims ? (
          // If the imported image has width/height metadata, use them (preferred)
          <Image
            src={image as StaticImageData}
            alt={title}
            width={(image as StaticImageData).width}
            height={(image as StaticImageData).height}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          // Fallback: use `fill` so we don't need explicit width/height
          // Parent must have explicit dimensions — you already have aspect-[4/3].
          <Image
            src={
              typeof image === "string" ? image : (image as StaticImageData).src
            }
            alt={title}
          
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-110"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
          {link && (
            <a
              href={link}
              className="text-white flex items-center gap-2 font-semibold"
              target="_blank"
              rel="noopener noreferrer">
              View Project <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
