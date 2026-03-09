import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle } from "lucide-react";
import CTASection from "@/components/home/CTASection";
import aboutImage from "@/assets/about-roof.jpg";

const About = () => {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">About Us</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                Roofing Done <span className="gold-gradient-text">Right</span>
              </h1>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Zenith Roofing Solutions was built on a straightforward commitment: deliver premium roofing services with in-house crews, transparent pricing, and clear communication at every step.
                </p>
                <p>
                  We don't use subcontractors. Every person on your job site works directly for us. That means accountability, consistency, and craftsmanship you can see in the finished product.
                </p>
                <p>
                  Based in Las Vegas and serving the greater Henderson area, we specialize in residential roofing — from full replacements to repairs and inspections. We also guide homeowners through insurance claims with expert documentation and support.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Zenith Roofing Solutions premium craftsmanship on a Las Vegas home"
                  className="w-full h-[500px] object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection className="mt-24">
            <div className="gold-line mb-16" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-10 text-center">
              Our <span className="gold-gradient-text">Values</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Craftsmanship", desc: "We take pride in every nail, every shingle, every seam. Quality isn't a goal — it's a standard." },
                { title: "Transparency", desc: "Clear pricing, honest assessments, and real-time updates. You'll always know what's happening." },
                { title: "Accountability", desc: "In-house crews mean we stand behind every project. No finger-pointing, no excuses." },
              ].map((v) => (
                <div key={v.title} className="card-luxury p-8 text-center">
                  <CheckCircle className="w-8 h-8 text-gold mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{v.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
