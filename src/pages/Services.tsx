import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield, RotateCw, Hammer, CloudLightning, Wind, Sun } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: Layers,
    title: "Roof Replacement",
    slug: "roof-replacement",
    desc: "Complete tear-off and replacement with premium materials designed to withstand the extreme Southern Nevada climate. Every detail handled with precision.",
    features: ["Full tear-off and disposal", "Premium materials", "Manufacturer warranty", "Desert-rated systems"],
  },
  {
    icon: Hammer,
    title: "New Roof Installation",
    slug: "new-roof-installation",
    desc: "Expert installation for new construction and additions. We work with builders, homeowners, and property managers to deliver lasting roofing systems.",
    features: ["New construction roofing", "Builder partnerships", "Material selection guidance", "Code-compliant installation"],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    slug: "roof-repairs",
    desc: "Fast, reliable repairs for leaks, storm damage, and general wear. We diagnose the problem accurately, explain your options, and fix it right the first time.",
    features: ["Leak detection & repair", "Storm damage restoration", "Emergency repairs", "Preventive maintenance"],
  },
  {
    icon: Search,
    title: "Inspections & Certifications",
    slug: "inspections-and-certifications",
    desc: "Thorough roof inspections with detailed photo documentation and honest assessments. Real estate, insurance, and annual maintenance inspections.",
    features: ["Comprehensive photo report", "Real estate inspections", "Certification reports", "Annual maintenance checks"],
  },
  {
    icon: Shield,
    title: "Insurance Claim Assistance",
    slug: "insurance-claim-assistance",
    desc: "Navigating insurance claims can be overwhelming. We handle the documentation, coordinate with adjusters, and ensure you receive the coverage you're entitled to.",
    features: ["Damage documentation", "Adjuster coordination", "Claim filing support", "Full project management"],
  },
  {
    icon: Grid3X3,
    title: "Tile Lift & Relay",
    slug: "tile-lift-and-relay",
    desc: "Expert tile removal, underlayment replacement, and precision re-laying of existing tiles. Extend the life of your tile roof without a full replacement.",
    features: ["Tile removal & storage", "Underlayment replacement", "Precision re-laying", "Broken tile replacement"],
  },
  {
    icon: RotateCw,
    title: "Roof Maintenance",
    slug: "roof-maintenance",
    desc: "Proactive maintenance programs to extend roof life and prevent costly repairs. Regular inspections, cleaning, and minor repairs keep your roof performing.",
    features: ["Scheduled inspections", "Debris removal", "Sealant touch-ups", "Gutter maintenance"],
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Response",
    slug: "storm-damage-response",
    desc: "Rapid response for monsoon, wind, and hail damage. Emergency tarping, thorough assessment, and full restoration to protect your property fast.",
    features: ["Emergency tarping", "Rapid damage assessment", "Insurance documentation", "Full restoration"],
  },
  {
    icon: Wind,
    title: "Attic Ventilation Upgrades",
    slug: "attic-ventilation-upgrades",
    desc: "Proper ventilation is critical in the desert heat. We design and install ventilation systems that reduce energy costs and extend roof life.",
    features: ["Ridge & soffit vents", "Powered ventilators", "Energy efficiency", "Heat reduction"],
  },
  {
    icon: Sun,
    title: "Skylight Installation & Repair",
    slug: "skylight-installation-and-repair",
    desc: "Bring natural light into your home with expert skylight installation, replacement, and leak repair. Quality products with watertight installation.",
    features: ["New skylight installation", "Replacement & upgrades", "Leak repair", "Energy-efficient options"],
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
