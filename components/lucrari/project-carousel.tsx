"use client";

// Image strip with Embla: prev/next, labels, responsive framing for portfolio items.
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type ProjectImage = {
  src: string;
  alt: string;
  label: string;
};

type ProjectCarouselProps = {
  images: ProjectImage[];
};

/** Label chips: muted / primary tint / solid primary to match project legend. */
function labelStyle(label: string) {
  const t = label.toLowerCase();
  if (t.includes("înainte") || t.includes("inainte")) {
    return "bg-muted text-muted-foreground";
  }
  if (t.includes("rezultat") || t.includes("final")) {
    return "bg-primary text-primary-foreground";
  }
  return "bg-primary/12 font-medium text-primary";
}

export function ProjectCarousel({ images }: ProjectCarouselProps) {
  if (images.length === 0) return null;

  return (
    <div className="relative w-full px-2 sm:px-10">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
        aria-label="Galerie proiect"
      >
        <CarouselContent className="-ml-2 sm:-ml-4">
          {images.map((img) => (
            <CarouselItem
              key={img.src}
              className="basis-full pl-2 sm:pl-4 sm:basis-full"
            >
              <div className="card-elev overflow-hidden rounded-2xl border border-border/80 bg-card shadow-sm">
                <div className="relative aspect-4/3 w-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="border-t border-border bg-card px-3 py-2">
                  <span
                    className={cn(
                      "inline-block rounded-full px-3 py-1 text-xs font-medium",
                      labelStyle(img.label),
                    )}
                  >
                    {img.label}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          variant="outline"
          className="left-0 top-1/2 z-10 -translate-y-1/2 border-border bg-card/95 text-foreground shadow-sm hover:bg-card sm:left-1"
        />
        <CarouselNext
          variant="outline"
          className="right-0 top-1/2 z-10 -translate-y-1/2 border-border bg-card/95 text-foreground shadow-sm hover:bg-card sm:right-1"
        />
      </Carousel>
    </div>
  );
}
