import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { Link } from "react-router-dom";

interface Props {
  city: string;
  slug: string;
}

const LocalSEOPage = ({ city, slug }: Props) => {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">{city}, Nevada</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Roofing Company in <span className="gold-gradient-text">{city}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-10">
              Zenith Roofing Solutions is {city}'s trusted choice for premium residential and property management roofing. Our experienced crews deliver expert roof replacement, repairs, inspections, and insurance claim support throughout {city} and surrounding communities.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="space-y-8 text-muted-foreground font-body leading-relaxed">
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Roofing Services in {city}</h2>
                <p>
                  Whether you need a complete roof replacement, emergency repair, or annual inspection, our experienced team handles every project with the care and precision your home deserves. We specialize in the unique demands of the {city} climate — from extreme heat to monsoon seasons.
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Why {city} Homeowners Choose Zenith</h2>
                <ul className="space-y-2 mt-4">
                  {[
                    "Over 35 years of combined roofing experience",
                    "Licensed and insured in the state of Nevada",
                    "Expert insurance claim documentation and support",
                    "Transparent pricing with no hidden fees",
                    "Workmanship warranty on every project",
                    `Roofing materials designed for the ${city} desert climate`,
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-3">Our {city} Roofing Services</h2>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {[
                    { title: "Roof Replacement", href: "/services/roof-replacement" },
                    { title: "Roof Repairs", href: "/services/roof-repairs" },
                    { title: "Inspections & Certifications", href: "/services/inspections-and-certifications" },
                    { title: "Insurance Claim Assistance", href: "/services/insurance-claim-assistance" },
                    { title: "Tile Lift & Relay", href: "/services/tile-lift-and-relay" },
                    { title: "Storm Damage Response", href: "/services/storm-damage-response" },
                  ].map((s) => (
                    <Link key={s.title} to={s.href} className="card-luxury p-5 hover:border-gold/30 transition-colors group">
                      <span className="font-body font-semibold text-sm text-foreground group-hover:text-gold transition-colors">{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default LocalSEOPage;
