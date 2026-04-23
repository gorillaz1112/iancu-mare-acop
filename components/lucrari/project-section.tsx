"use client";

// Portfolio block: text + map/duration, legend, and image carousel; scroll-triggered slide animation.
import { useEffect, useRef, useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { ProjectCarousel } from "./project-carousel";

export interface ProjectSectionProps {
  title: string;
  description: string;
  location: string;
  duration: string;
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
  reversed?: boolean;
}

export function ProjectSection({
  title,
  description,
  location,
  duration,
  images,
  reversed = false,
}: ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:flex-row-reverse" : ""}`}
    >
      <div
        className={`space-y-6 ${reversed ? "lg:order-2" : ""} ${
          isVisible
            ? reversed
              ? "animate-slide-in-right"
              : "animate-slide-in-left"
            : "opacity-0"
        }`}
      >
        <div>
          <h3 className="mb-4 font-display text-2xl font-bold text-foreground md:text-3xl">
            {title}
          </h3>
          <p className="leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 shrink-0 text-primary" />
            <span className="text-foreground">{duration}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground">
            Înainte
          </span>
          <span className="rounded-full bg-primary/12 px-3 py-1.5 text-xs font-medium text-primary">
            Pe parcurs
          </span>
          <span className="rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            Rezultat final
          </span>
        </div>
      </div>

      <div
        className={`${reversed ? "lg:order-1" : ""} ${
          isVisible
            ? reversed
              ? "animate-slide-in-left"
              : "animate-slide-in-right"
            : "opacity-0"
        }`}
      >
        <ProjectCarousel images={images} />
      </div>
    </div>
  );
}
