import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield, RotateCw, CloudLightning, Wind, Sun } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Roof Replacement",
    desc: "Complete tear-off and replacement using premium roofing systems designed to withstand the extreme Southern Nevada climate. Every layer installed with precision and long-term durability in mind.",
    href: "/services/roof-replacement",
  },
  {
    icon: Grid3X3,
    title: "Tile Roof Services",
    desc: "Expert installation, repair, and maintenance for concrete and clay tile roofing systems commonly found throughout Southern Nevada homes. From broken tiles to full underlayment replacement.",
    href: "/services/tile-lift-and-relay",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Fast and reliable repairs for leaks, storm damage, and everyday roof wear. Our team quickly identifies the problem, explains your options clearly, and delivers dependable repairs.",
    href: "/services/roof-repairs",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    desc: "Professional roof inspections with detailed photo documentation and honest evaluations. Ideal for home buyers, insurance claims, and preventative maintenance.",
    href: "/services/inspections-and-certifications",
  },
  {
    icon: Shield,
    title: "Insurance Claim Support",
    desc: "We assist homeowners with documenting roof damage, coordinating with insurance adjusters, and helping navigate the claims process.",
    href: "/services/insurance-claim-assistance",
  },
  {
    icon: RotateCw,
    title: "Roof Maintenance",
    desc: "Preventative maintenance services designed to extend the life of your roof and identify issues before they become major repairs.",
    href: "/services/roof-maintenance",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Response",
    desc: "Rapid response for roofs affected by wind, debris, or severe weather events across Southern Nevada.",
    href: "/services/storm-damage-response",
  },
  {
    icon: Wind,
    title: "Attic Ventilation Upgrades",
    desc: "Improve energy efficiency and roof performance with proper attic ventilation designed for the intense desert climate.",
    href: "/services/attic-ventilation-upgrades",
  },
  {
    icon: Sun,
    title: "Skylight Installation & Repair",
    desc: "Professional skylight installation and repair services that enhance natural lighting while protecting the integrity of your roofing system.",
    href: "/services/skylight-installation-and-repair",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-28 lg:py-36 bg-background relative" id="services-section">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal-deep/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Roofing Solutions Built to Last
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Comprehensive roofing services delivered with precision, integrity, and the care your home deserves.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.06}>
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
          <Link to="/services" className="btn-outline-gold">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesOverview;
