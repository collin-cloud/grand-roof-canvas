import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const projects = [
  {
    title: "Tile Lift & Relay",
    location: "Henderson, NV",
    type: "Residential",
  },
  {
    title: "Roof Replacement",
    location: "Summerlin, NV",
    type: "Residential",
  },
  {
    title: "Roof Repair",
    location: "Las Vegas, NV",
    type: "Residential",
  },
  {
    title: "Tile Underlayment Replacement",
    location: "Green Valley, NV",
    type: "Property Management",
  },
  {
    title: "Storm Damage Repair",
    location: "North Las Vegas, NV",
    type: "Residential",
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
            <AnimatedSection key={project.title + project.location} delay={i * 0.08}>
              <div className="card-luxury p-8 h-full flex flex-col group hover:border-gold/30 transition-all duration-500">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/60 mb-3">
                  {project.type}
                </span>
                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-auto text-sm text-muted-foreground font-body">
                  <MapPin className="w-4 h-4 text-gold/70" />
                  {project.location}
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
