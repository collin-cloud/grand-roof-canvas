import AnimatedSection from "@/components/AnimatedSection";
import { Phone, ClipboardCheck, HardHat, ThumbsUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/home/CTASection";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Schedule Your Free Inspection",
    desc: "Contact us by phone or through our website. We'll schedule a convenient time to assess your roof at no cost and with no obligation.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Receive Your Detailed Proposal",
    desc: "After the inspection, you'll receive a clear, written proposal outlining the scope of work, materials, timeline, and pricing. No hidden fees, no guesswork.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Professional Installation",
    desc: "Our in-house crew handles every phase of the project. We keep your property clean, respect your schedule, and deliver quality craftsmanship you can see.",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "Final Walkthrough & Warranty",
    desc: "We walk you through the completed work to ensure your complete satisfaction. Your project is backed by our workmanship warranty for lasting peace of mind.",
  },
];

const Process = () => {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Process</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              How We <span className="gold-gradient-text">Work</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              A clear, professional process designed to keep you informed and confident from the first call to the final nail.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="card-luxury p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-start">
                  <div className="flex items-center gap-6 shrink-0">
                    <span className="font-display text-5xl font-bold text-gold/20">{step.num}</span>
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-gold" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-semibold mb-3">{step.title}</h2>
                    <p className="text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <Link to="/contact" className="btn-gold">
              Get Started Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Process;
