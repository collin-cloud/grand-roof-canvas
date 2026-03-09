import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Shingle Roof Replacement",
    desc: "Complete shingle roof removal and installation with premium materials built for Las Vegas heat.",
    href: "/services/shingle-roof-replacement",
  },
  {
    icon: Grid3X3,
    title: "Tile Roof Services",
    desc: "Expert tile roof installation, repair, and maintenance for lasting desert protection.",
    href: "/services/tile-roof-services",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    desc: "Fast, reliable repairs for leaks, storm damage, and general wear from experienced crews.",
    href: "/services/roof-repairs",
  },
  {
    icon: Search,
    title: "Roof Inspections",
    desc: "Thorough inspections with detailed reports to keep your investment protected.",
    href: "/services/roof-inspections",
  },
  {
    icon: Shield,
    title: "Insurance Claim Support",
    desc: "We guide you through every step of the insurance claim process with expert documentation.",
    href: "/services/insurance-claim-support",
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
            Every service delivered by our in-house crews with the precision and care your home deserves.
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
