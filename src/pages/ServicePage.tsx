import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import ProjectGallery, { type ProjectPhoto } from "@/components/ProjectGallery";
import { ArrowRight, Layers, Grid3X3, Wrench, Search, Shield, RotateCw, Hammer, CloudLightning, Wind, Sun } from "lucide-react";

/**
 * Per-service project gallery configuration.
 * Add a new entry here to enable an "Our Work" section on a service page.
 * Replace the empty `{}` photo slots with `{ src, alt, caption }` as real
 * project photography becomes available — the page will pick it up automatically.
 */
const galleryBySlug: Record<
  string,
  { eyebrow?: string; heading?: string; columns?: 2 | 3 | 4; photos: ProjectPhoto[] }
> = {
  "roof-replacement": {
    eyebrow: "Recent Projects",
    heading: "Our Work",
    columns: 4,
    photos: [{}, {}, {}, {}],
  },
  "roof-repairs": {
    eyebrow: "Recent Projects",
    heading: "Our Work",
    columns: 4,
    photos: [{}, {}, {}, {}],
  },
  "tile-lift-and-relay": {
    eyebrow: "Recent Projects",
    heading: "Our Work",
    columns: 4,
    photos: [{}, {}, {}, {}],
  },
  "inspections-and-certifications": {
    eyebrow: "Recent Projects",
    heading: "Our Work",
    columns: 3,
    photos: [{}, {}, {}],
  },
};

const serviceData: Record<string, {
  icon: typeof Layers;
  title: string;
  headline: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  details: string[];
  features: string[];
  relatedSlugs: string[];
}> = {
  "roof-replacement": {
    icon: Layers,
    title: "Roof Replacement",
    headline: "Complete Roof Replacement",
    metaTitle: "Roof Replacement Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Professional roof replacement in Las Vegas. Quality materials, experienced crews, and honest guidance from start to finish. Call 702-884-6320 for a free inspection.",
    intro: "When repairs are no longer enough, a full roof replacement protects your home for decades to come. Zenith Roofing Solutions delivers premium replacement services with quality materials designed for the Southern Nevada climate.",
    details: [
      "Our team conducts a thorough assessment to determine the best replacement approach for your property. We walk you through material options, timelines, and pricing before any work begins.",
      "From full tear-off and disposal to final cleanup, every phase is managed with experienced oversight. We use manufacturer-recommended installation methods to ensure your warranty is fully valid.",
      "Whether you're dealing with an aging shingle roof or a tile system past its prime, we deliver lasting results backed by our workmanship warranty.",
    ],
    features: ["Full tear-off and disposal", "Premium architectural shingles", "Tile & flat roof systems", "Manufacturer warranty", "Desert-rated materials", "Clean job site guarantee"],
    relatedSlugs: ["new-roof-installation", "roof-repairs", "inspections-and-certifications"],
  },
  "new-roof-installation": {
    icon: Hammer,
    title: "New Roof Installation",
    headline: "New Construction Roofing",
    metaTitle: "New Roof Installation Southern Nevada | Zenith Roofing Solutions",
    metaDesc: "New roof installation for homes and commercial properties in Southern Nevada. Quality materials and expert installation. Call 702-884-6320.",
    intro: "Building a new home or adding to an existing property? Zenith Roofing Solutions provides expert new roof installation with materials and systems built to last in the desert climate.",
    details: [
      "We work directly with homeowners, builders, and general contractors to ensure your new roof meets code requirements and exceeds expectations. Material selection guidance helps you choose the right system for your budget and aesthetic goals.",
      "Our experienced crews handle installation with precision, following manufacturer specifications to protect your warranty. From underlayment to ridge cap, every component is installed with care.",
      "We coordinate scheduling to keep your project on track and communicate clearly throughout the process.",
    ],
    features: ["New construction roofing", "Addition & remodel roofing", "Builder coordination", "Material selection guidance", "Code-compliant installation", "Manufacturer warranty"],
    relatedSlugs: ["roof-replacement", "attic-ventilation-upgrades", "skylight-installation-and-repair"],
  },
  "roof-repairs": {
    icon: Wrench,
    title: "Roof Repairs",
    headline: "Professional Roof Repair",
    metaTitle: "Roof Repairs Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Expert roof repair services in Las Vegas. Leaks, storm damage, missing shingles, and more. Fast response times. Call 702-884-6320.",
    intro: "Leaks, storm damage, or general wear — whatever the issue, Zenith Roofing Solutions provides fast, reliable roof repairs with honest diagnostics and quality workmanship.",
    details: [
      "We start with a thorough inspection to identify the root cause of the problem, not just the symptoms. You'll receive a clear explanation of what we found and what we recommend.",
      "Our repair crews carry the materials and expertise to handle most repairs quickly. From a single missing shingle to complex flashing failures, we fix it right the first time.",
      "For properties with recurring issues, we'll recommend preventive measures to avoid future problems and extend the life of your existing roof.",
    ],
    features: ["Leak detection & repair", "Storm damage restoration", "Emergency service", "Flashing repairs", "Shingle & tile repair", "Preventive solutions"],
    relatedSlugs: ["storm-damage-response", "roof-maintenance", "inspections-and-certifications"],
  },
  "inspections-and-certifications": {
    icon: Search,
    title: "Inspections & Certifications",
    headline: "Roof Inspections & Certifications",
    metaTitle: "Roof Inspections & Certifications Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Certified roof inspections in Las Vegas for home buyers, sellers, and insurance purposes. Detailed reports you can trust. Call 702-884-6320.",
    intro: "Whether you're buying a home, selling a property, filing an insurance claim, or simply checking condition — our detailed roof inspections give you the honest information you need.",
    details: [
      "Every inspection includes a comprehensive walkthrough with photo documentation of all findings. We assess overall condition, identify problem areas, and estimate remaining roof life.",
      "Our certification reports are accepted by real estate agents, insurance companies, and property managers throughout Southern Nevada.",
      "We provide honest assessments — if your roof has years of life remaining, we'll tell you. If it needs attention, we'll explain your options clearly.",
    ],
    features: ["Comprehensive photo report", "Real estate inspections", "Insurance documentation", "Certification reports", "Annual maintenance checks", "Honest assessments"],
    relatedSlugs: ["roof-maintenance", "insurance-claim-assistance", "roof-repairs"],
  },
  "insurance-claim-assistance": {
    icon: Shield,
    title: "Insurance Claim Assistance",
    headline: "Insurance Claim Support",
    metaTitle: "Roofing Insurance Claim Help Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Expert insurance claim assistance for roof damage in Las Vegas. We guide you through the entire claims process. Call 702-884-6320.",
    intro: "Navigating a roofing insurance claim can be overwhelming. Zenith Roofing Solutions guides you through every step — from initial documentation to project completion.",
    details: [
      "We start with a thorough damage assessment and create detailed documentation with photos and measurements that meet insurance company requirements.",
      "Our team coordinates directly with your insurance adjuster, ensuring nothing is overlooked in the scope of the claim. We advocate for fair coverage on your behalf.",
      "Once approved, we manage the entire restoration project, keeping you informed at every stage. You focus on your life — we handle the roof.",
    ],
    features: ["Damage documentation", "Adjuster coordination", "Claim filing support", "Scope review", "Full project management", "Fair coverage advocacy"],
    relatedSlugs: ["storm-damage-response", "roof-replacement", "inspections-and-certifications"],
  },
  "tile-lift-and-relay": {
    icon: Grid3X3,
    title: "Tile Lift & Relay",
    headline: "Tile Lift & Relay Services",
    metaTitle: "Tile Lift & Relay Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Professional tile lift and relay services in Las Vegas. Protect your tile roof with proper underlayment replacement. Call 702-884-6320 for an inspection.",
    intro: "Your tile may have decades of life left, but the underlayment beneath it doesn't. Tile lift and relay lets us replace the waterproofing layer while preserving your existing tiles.",
    details: [
      "We carefully remove your tiles, store them safely, replace the deteriorated underlayment with modern materials, and precision-relay the original tiles back into place.",
      "This process extends the life of your tile roof significantly at a fraction of the cost of full replacement. It's one of the smartest investments a tile roof homeowner can make.",
      "Any broken tiles found during the process are replaced with matching tiles to maintain a uniform appearance.",
    ],
    features: ["Careful tile removal", "Underlayment replacement", "Precision re-laying", "Broken tile replacement", "Cost-effective solution", "Extended roof life"],
    relatedSlugs: ["roof-replacement", "roof-maintenance", "inspections-and-certifications"],
  },
  "roof-maintenance": {
    icon: RotateCw,
    title: "Roof Maintenance",
    headline: "Proactive Roof Maintenance",
    metaTitle: "Roof Maintenance Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Preventive roof maintenance services in Las Vegas. Extend your roof's lifespan with regular professional inspections and care. Call 702-884-6320.",
    intro: "Prevention is always more affordable than repair. Our maintenance programs keep your roof in peak condition, catch small issues before they become big problems, and extend overall roof life.",
    details: [
      "We offer scheduled maintenance plans tailored to your roof type and age. Regular inspections, debris removal, sealant maintenance, and minor repairs keep your roof performing at its best.",
      "For property managers with multiple buildings, our maintenance programs provide consistent oversight across your entire portfolio with detailed reporting.",
      "Every maintenance visit includes a condition summary so you always know the status of your roof.",
    ],
    features: ["Scheduled inspection plans", "Debris removal", "Sealant touch-ups", "Minor repair inclusion", "Detailed reporting", "Portfolio management"],
    relatedSlugs: ["inspections-and-certifications", "roof-repairs", "tile-lift-and-relay"],
  },
  "storm-damage-response": {
    icon: CloudLightning,
    title: "Storm Damage Response",
    headline: "Emergency Storm Damage Response",
    metaTitle: "Storm Damage Roof Repair Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Emergency storm damage roof repair in Las Vegas. Fast response, thorough assessment, and full insurance claim support. Call 702-884-6320.",
    intro: "When severe weather strikes, you need a fast, reliable response. Zenith Roofing Solutions provides emergency storm damage services to protect your property and start the restoration process immediately.",
    details: [
      "Our team responds quickly with emergency tarping and temporary protection to prevent further damage to your home or building interior.",
      "We conduct a thorough storm damage assessment with detailed documentation suitable for insurance claim filing. Every area of concern is photographed and noted.",
      "From emergency response through full restoration, we manage the entire process — including insurance coordination — so you can focus on getting back to normal.",
    ],
    features: ["Emergency tarping", "Rapid response", "Thorough damage assessment", "Insurance documentation", "Full restoration", "Wind & hail damage"],
    relatedSlugs: ["insurance-claim-assistance", "roof-repairs", "roof-replacement"],
  },
  "attic-ventilation-upgrades": {
    icon: Wind,
    title: "Attic Ventilation Upgrades",
    headline: "Attic Ventilation Solutions",
    metaTitle: "Attic Ventilation Upgrades Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Attic ventilation upgrades for Las Vegas homes. Reduce energy costs, prevent moisture damage, and extend your roof's life. Call 702-884-6320.",
    intro: "In the extreme heat of Southern Nevada, proper attic ventilation is critical. It reduces energy costs, extends shingle life, and prevents moisture buildup that can cause structural damage.",
    details: [
      "We assess your current ventilation system and design upgrades that create balanced airflow — proper intake at the soffits and exhaust at the ridge.",
      "Options include ridge vents, soffit vents, powered ventilators, and solar-powered fans. We recommend the right solution based on your roof design and attic configuration.",
      "Proper ventilation can significantly reduce cooling costs in the summer and prevent ice damming and moisture issues year-round.",
    ],
    features: ["Ridge & soffit vents", "Powered ventilators", "Solar-powered options", "Energy efficiency", "Heat reduction", "Moisture prevention"],
    relatedSlugs: ["new-roof-installation", "roof-maintenance", "roof-replacement"],
  },
  "skylight-installation-and-repair": {
    icon: Sun,
    title: "Skylight Installation & Repair",
    headline: "Skylight Installation & Repair",
    metaTitle: "Skylight Installation & Repair Las Vegas | Zenith Roofing Solutions",
    metaDesc: "Professional skylight installation and leak-free repair in Las Vegas. Brighten your home with expert skylight solutions. Call 702-884-6320.",
    intro: "Bring natural light into your home with professionally installed skylights. From new installations to leak repair and replacement, we ensure a watertight, beautiful result.",
    details: [
      "We help you choose the right skylight for your space — fixed, venting, or tubular — and install it with proper flashing and sealing to prevent leaks.",
      "If your existing skylight is leaking, cloudy, or damaged, we provide expert repair and replacement services. Most skylight leaks are caused by deteriorated flashing, not the skylight itself.",
      "Energy-efficient skylight options can reduce your lighting costs while adding architectural beauty to any room.",
    ],
    features: ["New installations", "Replacement & upgrades", "Leak repair", "Energy-efficient options", "Proper flashing", "Tubular skylights"],
    relatedSlugs: ["new-roof-installation", "roof-repairs", "attic-ventilation-upgrades"],
  },
};

const allServices = Object.entries(serviceData).map(([slug, data]) => ({
  slug,
  title: data.title,
}));

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground font-body mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn-gold">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;
  const relatedServices = service.relatedSlugs
    .map((s) => serviceData[s] ? { slug: s, title: serviceData[s].title } : null)
    .filter(Boolean) as { slug: string; title: string }[];

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <meta property="og:title" content={service.metaTitle} />
        <meta property="og:description" content={service.metaDesc} />
        <link rel="canonical" href={`https://zenithroofingsolutions.com/services/${slug}`} />
      </Helmet>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <Link to="/services" className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold hover:text-gold-light transition-colors">
                Services
              </Link>
              <span className="text-gold/30">/</span>
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">{service.title}</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold">
                {service.headline.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="gold-gradient-text">{service.headline.split(" ").pop()}</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
              {service.intro}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-6 text-muted-foreground font-body leading-relaxed mb-12">
              {service.details.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="card-luxury p-8 lg:p-10 mb-12">
              <h2 className="font-display text-2xl font-semibold mb-6">
                What's <span className="gold-gradient-text">Included</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-sm text-muted-foreground font-body">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Related Services */}
          <AnimatedSection>
            <h3 className="font-display text-xl font-semibold mb-6">Related Services</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {relatedServices.map((rs) => (
                <Link
                  key={rs.slug}
                  to={`/services/${rs.slug}`}
                  className="card-luxury p-5 text-center hover:border-gold/30 transition-all duration-300 group"
                >
                  <span className="font-body font-semibold text-sm group-hover:text-gold transition-colors">{rs.title}</span>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default ServicePage;
