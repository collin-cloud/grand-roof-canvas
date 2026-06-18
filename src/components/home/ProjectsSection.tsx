import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { MapPin, ShieldCheck } from "lucide-react";

interface Project {
  title: string;
  location: string;
  type: string;
  image?: string;
  gallery?: { src: string; alt: string }[];
  beforeAfter?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  };
  description?: string;
  alt?: string;
  insuranceClaim?: boolean;
}

const projects: Project[] = [
  {
    title: "Full Shingle Roof Replacement — Las Vegas",
    location: "Las Vegas, NV",
    type: "Residential",
    image: "/projects/DJI_0543.jpg",
    description:
      "Complete tear-off and replacement with architectural shingles. Insurance claim project.",
    alt: "Full shingle roof replacement completed by Zenith Roofing Solutions in Las Vegas, NV",
    insuranceClaim: true,
  },
  {
    title: "Full Shingle Roof Replacement — Las Vegas",
    location: "Las Vegas, NV",
    type: "Residential",
    image: "/projects/DJI_0572.jpg",
    description:
      "Insurance-covered full roof replacement with premium architectural shingles.",
    alt: "Full shingle roof replacement completed by Zenith Roofing Solutions in Las Vegas, NV",
    insuranceClaim: true,
  },
  {
    title: "Complete Shingle Roof Replacement — Garnet",
    location: "Garnet, Las Vegas, NV",
    type: "Residential",
    gallery: [
      {
        src: "/projects/garnet-1.jpg",
        alt: "Completed shingle roof replacement on a single-story Garnet home by Zenith Roofing Solutions, Las Vegas, NV",
      },
      {
        src: "/projects/garnet-2.jpg",
        alt: "Aerial view of finished architectural shingle roof in the Garnet neighborhood of Las Vegas, NV",
      },
    ],
    description:
      "Full shingle roof replacement on a single-story home in the Garnet neighborhood. Fully covered by homeowner's insurance.",
    insuranceClaim: true,
  },
  {
    title: "Complete Shingle Roof Replacement — Gerlach",
    location: "Gerlach, Las Vegas, NV",
    type: "Residential",
    beforeAfter: {
      before: {
        src: "/projects/gerlach-before-1.jpg",
        alt: "Storm-damaged shingle roof with missing shingles before replacement, Gerlach neighborhood, Las Vegas, NV",
      },
      after: {
        src: "/projects/gerlach-after-1.jpg",
        alt: "New architectural shingle roof after full replacement by Zenith Roofing Solutions, Gerlach, Las Vegas, NV",
      },
    },
    description:
      "Severe storm damage and missing shingles replaced with brand new architectural shingles. Fully covered by homeowner's insurance.",
    insuranceClaim: true,
  },
  {
    title: "Tile Underlayment Replacement",
    location: "Green Valley, NV",
    type: "Property Management",
  },
];

const GalleryMedia = ({ photos }: { photos: { src: string; alt: string }[] }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep/40">
      <img
        key={photos[active].src}
        src={photos[active].src}
        alt={photos[active].alt}
        loading="lazy"
        decoding="async"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none" />
      {photos.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setActive(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-gold" : "w-2 bg-ivory/60 hover:bg-ivory"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects-section" className="py-28 lg:py-36 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal-deep/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
              Our Work
            </span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Recent Roofing Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            A selection of recent projects across Southern Nevada — each one completed with precision, quality materials, and honest service.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title + project.location + i} delay={i * 0.08}>
              <div className="card-luxury h-full flex flex-col group hover:border-gold/30 transition-all duration-500 overflow-hidden">
                {project.beforeAfter ? (
                  <BeforeAfterSlider
                    beforeSrc={project.beforeAfter.before.src}
                    afterSrc={project.beforeAfter.after.src}
                    beforeAlt={project.beforeAfter.before.alt}
                    afterAlt={project.beforeAfter.after.alt}
                  />
                ) : project.gallery ? (
                  <GalleryMedia photos={project.gallery} />
                ) : project.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-deep/40">
                    <img
                      src={project.image}
                      alt={project.alt ?? project.title}
                      loading="lazy"
                      decoding="async"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 group-hover:ring-gold/30 transition-all duration-500 pointer-events-none" />
                  </div>
                ) : null}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/60">
                      {project.type}
                    </span>
                    {project.insuranceClaim && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-body font-semibold uppercase tracking-wider rounded border border-gold/30 bg-gold/10 text-gold">
                        <ShieldCheck className="w-3 h-3" />
                        Insurance Claim
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.description && (
                    <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                      {project.description}
                    </p>
                  )}
                  <div className="flex items-center gap-2 mt-auto text-sm text-muted-foreground font-body">
                    <MapPin className="w-4 h-4 text-gold/70" />
                    {project.location}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
