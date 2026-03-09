import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield, RotateCw } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Roof Replacement",
    desc: "Complete tear-off and installation with premium materials designed for the Southern Nevada climate.",
    href: "/services/roof-replacement",
  },
  {
    icon: Grid3X3,
    title: "Tile Roof Services",
    desc: "Expert tile installation, lift & relay, and repair to extend the life of your tile roofing system.",
    href: "/services/tile-lift-and-relay",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Fast, reliable repairs for leaks, storm damage, and general wear — diagnosed and fixed right.",
    href: "/services/roof-repairs",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    desc: "Thorough inspections with detailed photo reports for real estate, insurance, and maintenance.",
    href: "/services/inspections-and-certifications",
  },
  {
    icon: Shield,
    title: "Insurance Claim Support",
    desc: "Expert documentation and adjuster coordination to guide you through the claims process.",
    href: "/services/insurance-claim-assistance",
  },
  {
    icon: RotateCw,
    title: "Roof Maintenance",
    desc: "Proactive maintenance programs to extend roof life and prevent costly future repairs.",
    href: "/services/roof-maintenance",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-28 lg:py-36 bg-background relative" id="services">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal-deep/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Roofing Solutions Built to <span className="gold-gradient-text">Last</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Comprehensive roofing services delivered with precision, integrity, and the care your home deserves.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <Link
                to={service.href}
                className="card-luxury p-8 h-full flex flex-col group hover:border-gold/30 hover:bg-card/80 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center mb-6 group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-400">
                  <service.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-body">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm text-gold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 font-body font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-14">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-body font-semibold text-gold uppercase tracking-wider hover:text-gold-light transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesOverview;
