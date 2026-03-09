import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";

const areas = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "North Las Vegas",
  "Spring Valley",
  "Enterprise",
  "Paradise",
  "Green Valley",
  "Anthem",
  "Mountains Edge",
];

const ServiceAreas = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Service Areas</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Proudly Serving <span className="gold-gradient-text">Southern Nevada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Proudly serving homeowners and property managers throughout Southern Nevada.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <AnimatedSection key={area} delay={i * 0.05}>
              <div className="card-luxury p-6 text-center group hover:border-gold/30 transition-all duration-500">
                <MapPin className="w-5 h-5 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-body font-semibold text-sm">{area}</h3>
                <p className="text-xs text-muted-foreground font-body mt-1">Nevada</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
