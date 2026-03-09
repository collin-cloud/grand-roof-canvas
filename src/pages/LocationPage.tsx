import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { ArrowRight, Phone, Shield, Search, Wrench, Layers, RotateCw, CloudLightning } from "lucide-react";

interface Props {
  city: string;
  slug: string;
}

const services = [
  { title: "Roof Replacement", slug: "roof-replacement", icon: Layers, desc: "Complete tear-off and premium roof installation" },
  { title: "Roof Repairs", slug: "roof-repairs", icon: Wrench, desc: "Fast, reliable repairs for leaks and damage" },
  { title: "Tile Lift & Relay", slug: "tile-lift-and-relay", icon: RotateCw, desc: "Underlayment replacement with tile preservation" },
  { title: "Inspections & Certifications", slug: "inspections-and-certifications", icon: Search, desc: "Professional inspections with detailed reports" },
  { title: "Insurance Claim Assistance", slug: "insurance-claim-assistance", icon: Shield, desc: "Expert guidance through the claims process" },
  { title: "Storm Damage Response", slug: "storm-damage-response", icon: CloudLightning, desc: "Rapid response for weather-related damage" },
];

const LocationPage = ({ city, slug }: Props) => {
  return (
    <>
      <Helmet>
        <title>Roofing Contractor in {city}, NV | Zenith Roofing Solutions</title>
        <meta name="description" content={`Zenith Roofing Solutions is ${city}'s trusted roofing contractor. We provide roof replacement, repair, tile services, inspections, and insurance claim support throughout ${city} and Southern Nevada. Call 702-884-6320.`} />
        <meta property="og:title" content={`Roofing Contractor in ${city} | Zenith Roofing Solutions`} />
        <meta property="og:description" content={`Professional roofing services in ${city}, Nevada. Roof replacement, repairs, inspections, and insurance claim support.`} />
        <link rel="canonical" href={`https://zenithroofingsolutions.com/roofing-contractor-${slug}`} />
      </Helmet>

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">{city}, Nevada</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Roofing Contractor in <span className="gold-gradient-text">{city}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-6 max-w-3xl">
              Zenith Roofing Solutions is {city}'s trusted choice for residential and property management roofing. With over 35 years of combined experience, our team delivers expert roof replacement, repairs, inspections, and insurance claim support throughout {city} and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-gold">Request Free Inspection</Link>
              <a href="tel:7028846320" className="btn-outline-gold"><Phone className="w-4 h-4" /> 702-884-6320</a>
            </div>
          </AnimatedSection>

          <div className="gold-line mb-16" />

          <AnimatedSection>
            <div className="space-y-12 text-muted-foreground font-body leading-relaxed">
              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Residential Roofing Services in {city}</h2>
                <p>
                  Whether you're dealing with a roof that's past its prime, storm damage from a recent monsoon, or simply need a professional inspection before buying or selling a home, Zenith Roofing Solutions has you covered. We specialize in the unique demands of the {city} climate — from extreme summer heat that deteriorates roofing materials faster than in most parts of the country to monsoon winds and occasional hail events.
                </p>
                <p className="mt-4">
                  Our team approaches every project in {city} with careful planning, experienced oversight, and a commitment to doing things the right way. We explain your options clearly, provide transparent pricing, and follow through on every promise.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Roof Replacement in {city}</h2>
                <p>
                  When your roof has reached the end of its useful life, a complete <Link to="/services/roof-replacement" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">roof replacement</Link> is the most effective long-term investment. We install premium roofing systems using materials specifically rated for the Southern Nevada climate — including high-wind shingles, concrete and clay tile systems, and energy-efficient options that help reduce cooling costs.
                </p>
                <p className="mt-4">
                  Every roof replacement in {city} includes a complete tear-off, thorough deck inspection, new synthetic underlayment, precision installation, and a detailed final walkthrough. We stand behind our workmanship with comprehensive warranties.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Tile Roof Repair and Lift & Relay</h2>
                <p>
                  Tile roofing is one of the most common systems in {city} and throughout the Las Vegas Valley. While tiles themselves can last 40+ years, the underlayment beneath them typically deteriorates after 20-25 years in the desert climate.
                </p>
                <p className="mt-4">
                  Our <Link to="/services/tile-lift-and-relay" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">tile lift and relay</Link> service preserves your existing tiles while replacing the deteriorated underlayment — saving you significant cost compared to a full replacement. Not sure which option is right for your {city} home? Read our guide: <Link to="/roofing-resources/tile-lift-relay-vs-full-roof-replacement" className="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">Tile Lift and Relay vs Full Roof Replacement</Link>.
                </p>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Why {city} Homeowners Trust Zenith</h2>
                <ul className="space-y-3 mt-4">
                  {[
                    "Over 35 years of combined roofing experience",
                    "Licensed and insured in the state of Nevada",
                    "Expert insurance claim documentation and support",
                    "Transparent pricing with no hidden fees",
                    "Workmanship warranty on every project",
                    `Roofing materials designed for the ${city} desert climate`,
                    "Honest evaluations — we recommend what's genuinely best for your home",
                    "Serving residential homeowners and property managers",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-6">Our {city} Roofing Services</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((s) => (
                    <Link
                      key={s.title}
                      to={`/services/${s.slug}`}
                      className="card-luxury p-6 hover:border-gold/30 transition-all duration-500 group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/5 transition-all duration-300">
                          <s.icon className="w-5 h-5 text-gold" />
                        </div>
                        <span className="font-body font-semibold text-sm text-foreground group-hover:text-gold transition-colors">{s.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground font-body">{s.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-semibold text-foreground mb-4">Schedule Your Free Roof Inspection</h2>
                <p>
                  Whether your roof is showing signs of wear, you've recently experienced storm damage, or you simply want a professional evaluation, our team is ready to help. We provide complimentary roof inspections with detailed photo documentation and honest recommendations — no pressure, no obligations.
                </p>
                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/contact" className="btn-gold">
                    Request Free Inspection <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:7028846320" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call 702-884-6320</a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Zenith Roofing Solutions",
            telephone: "702-884-6320",
            email: "info@zenithroofingsolutions.com",
            url: "https://zenithroofingsolutions.com",
            areaServed: { "@type": "City", name: city, addressRegion: "NV" },
            description: `Professional roofing services in ${city}, Nevada. Roof replacement, repairs, inspections, and insurance claim support.`,
          }),
        }}
      />
    </>
  );
};

export default LocationPage;
