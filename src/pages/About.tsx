import AnimatedSection from "@/components/AnimatedSection";
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
              <p className="text-lg text-muted-foreground font-body leading-relaxed italic">
                Over 35 years of combined roofing knowledge. A commitment to integrity that never wavers.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Zenith Roofing Solutions premium craftsmanship on a Southern Nevada home"
                  className="w-full h-[500px] object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
              </div>
            </AnimatedSection>
          </div>

          {/* Story content */}
          <AnimatedSection className="mt-20 max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                At Zenith Roofing Solutions, we bring over 35 years of combined roofing knowledge and hands-on experience to every project we take on. Decades in the field have taught us more than just how to install a quality roof — they've shown us what truly matters: doing the right thing, standing behind your word, and putting people first.
              </p>

              <div className="gold-line" />

              <p>
                In an industry where honesty and accountability are often hard to come by, we've built Zenith on a different foundation — one rooted in integrity, transparency, and service. Whether we're working on a single-family home or an entire multi-building complex, our commitment remains the same: clear communication, quality products, and results you can rely on.
              </p>

              <p>
                We understand the importance of a roof — not just as a structure, but as protection for everything that matters underneath it. That's why every project is approached with careful planning, experienced oversight, and a commitment to quality that never cuts corners. We guide our clients through the process with honesty, explain every step, and follow through on what we promise — every time.
              </p>

              <div className="gold-line" />

              <p>
                Proudly serving homeowners and property managers across Southern Nevada, Zenith Roofing Solutions exists to raise the bar for what a roofing company should be. We don't aim to be the biggest — we aim to be the most trusted.
              </p>
            </div>
          </AnimatedSection>

          {/* Promise */}
          <AnimatedSection className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="gold-line mb-10" />
              <p className="text-sm font-body font-semibold uppercase tracking-[0.3em] text-gold mb-4">Our Promise</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                Driven by <span className="gold-gradient-text">Integrity</span>. Defined by <span className="gold-gradient-text">Service</span>.
              </h2>
              <div className="gold-line mt-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
