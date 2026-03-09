import AnimatedSection from "@/components/AnimatedSection";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const services = [
  {
    icon: Layers,
    title: "Shingle Roof Replacement",
    slug: "shingle-roof-replacement",
    desc: "Complete tear-off and replacement with premium architectural shingles designed to withstand the extreme Las Vegas heat. Our in-house crews ensure flawless installation with meticulous attention to every detail.",
    features: ["Full tear-off and disposal", "Premium architectural shingles", "Manufacturer warranty", "Desert-rated materials"],
  },
  {
    icon: Grid3X3,
    title: "Tile Roof Services",
    slug: "tile-roof-services",
    desc: "Expert installation, repair, and maintenance of concrete and clay tile roofing systems. Tile roofs are a staple of Southern Nevada homes, and our crews specialize in keeping them performing at their best.",
    features: ["Concrete & clay tile", "Underlayment replacement", "Re-roofing & new installs", "Broken tile repair"],
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    slug: "roof-repairs",
    desc: "Fast, reliable repairs for leaks, storm damage, and general wear. We diagnose the problem accurately, explain your options clearly, and fix it right the first time.",
    features: ["Leak detection & repair", "Storm damage restoration", "Emergency repairs", "Preventive maintenance"],
  },
  {
    icon: Search,
    title: "Roof Inspections",
    slug: "roof-inspections",
    desc: "Thorough roof inspections with detailed photo documentation and honest assessments. Whether buying a home, filing a claim, or just checking condition, we've got you covered.",
    features: ["Comprehensive photo report", "Real estate inspections", "Insurance documentation", "Annual maintenance checks"],
  },
  {
    icon: Shield,
    title: "Insurance Claim Support",
    slug: "insurance-claim-support",
    desc: "Navigating insurance claims can be overwhelming. We handle the documentation, coordinate with adjusters, and ensure you receive the coverage you're entitled to.",
    features: ["Damage documentation", "Adjuster coordination", "Claim filing support", "Full project management"],
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
              Residential Roofing <span className="gold-gradient-text">Excellence</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Every service delivered by trained, in-house professionals who take pride in their craft. No subcontractors. No compromises.
            </p>
          </AnimatedSection>

          <div className="space-y-12">
            {services.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.1}>
                <div id={service.slug} className="card-luxury p-8 lg:p-12 grid lg:grid-cols-3 gap-8 scroll-mt-32">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-8 h-8 text-gold" />
                      <h2 className="font-display text-2xl lg:text-3xl font-semibold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground font-body leading-relaxed">{service.desc}</p>
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-sm uppercase tracking-wider text-gold mb-4">What's Included</h3>
                    <ul className="space-y-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground font-body">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
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
