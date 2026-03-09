import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Subtle map-like background pattern */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Service Areas</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Proudly Serving Homeowners Across{" "}
            <span className="gold-gradient-text">Southern Nevada</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Zenith Roofing Solutions proudly serves homeowners and property managers throughout the Las Vegas Valley and surrounding Southern Nevada communities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
              className="card-luxury p-5 text-center group hover:border-gold/30 hover:bg-card/80 transition-all duration-500 cursor-default"
            >
              <MapPin className="w-5 h-5 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-body font-semibold text-sm">{area}</h3>
              <p className="text-xs text-muted-foreground font-body mt-0.5">Nevada</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
