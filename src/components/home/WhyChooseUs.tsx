import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";
import aboutImage from "@/assets/about-roof.jpg";

const reasons = [
  { title: "In-House Crews", desc: "Every team member works directly for us — no subcontractors, no surprises." },
  { title: "Clear Communication", desc: "Real-time updates from start to finish. You'll never be left wondering." },
  { title: "Licensed & Insured", desc: "Fully licensed in Nevada with comprehensive insurance coverage." },
  { title: "Workmanship Warranty", desc: "We stand behind our work with a solid workmanship warranty." },
  { title: "Insurance Experts", desc: "We handle the documentation and coordination for your insurance claims." },
  { title: "Las Vegas Specialists", desc: "We understand the unique roofing challenges of the desert climate." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Modern luxury home with premium tile roofing in Henderson Nevada"
                className="w-full h-[500px] object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-lg border border-gold/10" />
              {/* Gold corner accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Why Zenith</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Built on <span className="gold-gradient-text">Integrity</span>
            </h2>
            <p className="text-muted-foreground mb-10 font-body leading-relaxed">
              We founded Zenith Roofing Solutions on a simple belief: homeowners deserve better. Better craftsmanship, better communication, and a better experience from start to finish.
            </p>
            <div className="grid gap-5">
              {reasons.map((r, i) => (
                <div key={r.title} className="flex gap-4 items-start group">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-body font-semibold text-sm mb-1">{r.title}</h4>
                    <p className="text-sm text-muted-foreground font-body">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
