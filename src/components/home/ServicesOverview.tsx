import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Wrench, Search, Shield, Hammer, Grid3X3 } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Roof Replacement",
    desc: "Complete roof removal and installation with premium materials built for the Southern Nevada climate.",
    href: "/services/roof-replacement",
  },
  {
    icon: Hammer,
    title: "New Roof Installation",
    desc: "Expert installation for new construction, additions, and remodels with lasting quality.",
    href: "/services/new-roof-installation",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Fast, reliable repairs for leaks, storm damage, and general wear from experienced crews.",
    href: "/services/roof-repairs",
  },
  {
    icon: Search,
    title: "Inspections & Certifications",
    desc: "Thorough inspections with detailed reports to keep your investment protected.",
    href: "/services/inspections-and-certifications",
  },
  {
    icon: Shield,
    title: "Insurance Claim Assistance",
    desc: "We guide you through every step of the insurance claim process with expert documentation.",
    href: "/services/insurance-claim-assistance",
  },
  {
    icon: Grid3X3,
    title: "Tile Lift & Relay",
    desc: "Expert tile removal, underlayment replacement, and precision re-laying to extend roof life.",
    href: "/services/tile-lift-and-relay",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background" id="services">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            Roofing Solutions Built to <span className="gold-gradient-text">Last</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Comprehensive roofing services delivered with precision, integrity, and care your home deserves.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link
                to={service.href}
                className="card-luxury p-8 h-full flex flex-col group hover:border-gold/30 transition-all duration-500"
              >
                <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 font-body">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 mt-6 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body font-medium">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
