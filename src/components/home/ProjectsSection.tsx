import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

interface Project {
  title: string;
  location: string;
  type: string;
  image?: string;
  description?: string;
  alt?: string;
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
  },
  {
    title: "Full Shingle Roof Replacement — Las Vegas",
    location: "Las Vegas, NV",
    type: "Residential",
    image: "/projects/DJI_0572.jpg",
    description:
      "Insurance-covered full roof replacement with premium architectural shingles.",
    alt: "Full shingle roof replacement completed by Zenith Roofing Solutions in Las Vegas, NV",
  },
  {
    title: "Tile Underlayment Replacement",
    location: "Green Valley, NV",
    type: "Property Management",
  },
];

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
                {project.image && (
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
                )}
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/60 mb-3">
                    {project.type}
                  </span>
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
