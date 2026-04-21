import AnimatedSection from "@/components/AnimatedSection";
import { Camera } from "lucide-react";

export interface ProjectPhoto {
  /** Image source. Leave empty to render an "coming soon" placeholder slot. */
  src?: string;
  alt?: string;
  /** Optional caption shown subtly under the image. */
  caption?: string;
}

interface ProjectGalleryProps {
  /** Section heading, e.g. "Recent Projects" or "Our Work". */
  heading?: string;
  /** Optional eyebrow label above the heading. */
  eyebrow?: string;
  /** Optional subheading shown beneath the heading. */
  subheading?: string;
  /** Photo slots — empty entries render as themed placeholders. */
  photos: ProjectPhoto[];
  /** Number of columns on large screens (default: 4). Mobile is always 2. */
  columns?: 2 | 3 | 4;
}

const colsClass: Record<2 | 3 | 4, string> = {
  2: "lg:grid-cols-2",
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

/**
 * Reusable project photo gallery used on service pages.
 * Mobile: 2 cols. Desktop: 3 or 4 cols. Subtle hover zoom on each tile.
 * Empty photo slots render as a "Project photos coming soon" placeholder
 * styled to match the site's dark luxury theme.
 */
const ProjectGallery = ({
  heading = "Our Work",
  eyebrow = "Recent Projects",
  subheading,
  photos,
  columns = 4,
}: ProjectGalleryProps) => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
              {eyebrow}
            </span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
            {heading.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gold-gradient-text">{heading.split(" ").pop()}</span>
          </h2>
          {subheading && (
            <p className="text-base text-muted-foreground font-body leading-relaxed mb-10 max-w-2xl">
              {subheading}
            </p>
          )}
        </AnimatedSection>

        <div className={`grid grid-cols-2 ${colsClass[columns]} gap-4 lg:gap-6 mt-8`}>
          {photos.map((photo, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="relative group aspect-[4/3] overflow-hidden rounded-lg border border-gold/10 bg-charcoal-deep/40">
                {photo.src ? (
                  <>
                    <img
                      src={photo.src}
                      alt={photo.alt ?? "Zenith Roofing Solutions project photo"}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                    />
                    {photo.caption && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal-deep/95 to-transparent p-4">
                        <span className="text-xs font-body uppercase tracking-wider text-gold/80">
                          {photo.caption}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-center px-4">
                    <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                      <Camera className="w-4 h-4 text-gold/60" />
                    </div>
                    <span className="text-[11px] font-body uppercase tracking-[0.2em] text-muted-foreground/70">
                      Project photos
                      <br />
                      coming soon
                    </span>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
