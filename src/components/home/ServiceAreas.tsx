import AnimatedSection from "@/components/AnimatedSection";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {[
            { city: "Las Vegas", href: "/roofing-company-las-vegas", desc: "Comprehensive roofing services throughout the Las Vegas valley." },
            { city: "Henderson", href: "/roofing-company-henderson", desc: "Expert roofing solutions for Henderson homeowners and businesses." },
          ].map((area, i) => (
            <AnimatedSection key={area.city} delay={i * 0.1}>
              <Link
                to={area.href}
                className="card-luxury p-10 text-center group hover:border-gold/30 transition-all duration-500 block"
              >
                <MapPin className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-2xl font-semibold mb-2">{area.city}, Nevada</h3>
                <p className="text-sm text-muted-foreground font-body">{area.desc}</p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
