import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield, RotateCw, Hammer, CloudLightning, Wind, Sun } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: Layers,
    title: "Roof Replacement",
    slug: "roof-replacement",
    desc: "Complete tear-off and replacement using premium roofing systems designed to withstand the extreme Southern Nevada climate. Every layer of your new roof is installed with precision and long-term durability in mind.",
    features: ["Full tear-off and disposal", "Premium materials", "Manufacturer warranty", "Desert-rated systems"],
  },
  {
    icon: Grid3X3,
    title: "Tile Roof Services",
    slug: "tile-lift-and-relay",
    desc: "Expert installation, repair, and maintenance for concrete and clay tile roofing systems commonly found throughout Southern Nevada homes. From broken tiles to full underlayment replacement, we help extend the life of your tile roof.",
    features: ["Tile lift & relay", "Underlayment replacement", "Broken tile repair", "Precision re-laying"],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    slug: "roof-repairs",
    desc: "Fast and reliable repairs for leaks, storm damage, and everyday roof wear. Our team quickly identifies the problem, explains your options clearly, and delivers dependable repairs.",
    features: ["Leak detection & repair", "Storm damage restoration", "Emergency repairs", "Preventive solutions"],
  },
  {
    icon: Search,
    title: "Inspections & Certifications",
    slug: "inspections-and-certifications",
    desc: "Professional roof inspections with detailed photo documentation and honest evaluations. Ideal for home buyers, insurance claims, and preventative maintenance.",
    features: ["Comprehensive photo report", "Real estate inspections", "Certification reports", "Annual maintenance checks"],
  },
  {
    icon: Shield,
    title: "Insurance Claim Support",
    slug: "insurance-claim-assistance",
    desc: "We assist homeowners with documenting roof damage, coordinating with insurance adjusters, and helping navigate the claims process.",
    features: ["Damage documentation", "Adjuster coordination", "Claim filing support", "Full project management"],
  },
  {
    icon: RotateCw,
    title: "Roof Maintenance",
    slug: "roof-maintenance",
    desc: "Preventative maintenance services designed to extend the life of your roof and identify issues before they become major repairs.",
    features: ["Scheduled inspections", "Debris removal", "Sealant touch-ups", "Gutter maintenance"],
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Response",
    slug: "storm-damage-response",
    desc: "Rapid response for roofs affected by wind, debris, or severe weather events across Southern Nevada.",
    features: ["Emergency tarping", "Rapid assessment", "Insurance documentation", "Full restoration"],
  },
  {
    icon: Wind,
    title: "Attic Ventilation Upgrades",
    slug: "attic-ventilation-upgrades",
    desc: "Improve energy efficiency and roof performance with proper attic ventilation designed for the intense desert climate.",
    features: ["Ridge & soffit vents", "Powered ventilators", "Energy efficiency", "Heat reduction"],
  },
  {
    icon: Sun,
    title: "Skylight Installation & Repair",
    slug: "skylight-installation-and-repair",
    desc: "Professional skylight installation and repair services that enhance natural lighting while protecting the integrity of your roofing system.",
    features: ["New installations", "Replacement & upgrades", "Leak repair", "Energy-efficient options"],
  },
];

const Services = () => {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Services</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Roofing <span className="gold-gradient-text">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Comprehensive roofing solutions for residential and property management clients across Southern Nevada. Quality products, experienced crews, and results you can count on.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.05}>
                <Link
                  to={`/services/${service.slug}`}
                  className="card-luxury p-8 h-full flex flex-col group hover:border-gold/30 transition-all duration-500 block"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="font-display text-xl lg:text-2xl font-semibold group-hover:text-gold transition-colors duration-300">{service.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-4">{service.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.map((f) => (
                      <span key={f} className="text-xs font-body text-gold/70 bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body font-medium">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Services;
