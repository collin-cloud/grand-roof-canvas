import AnimatedSection from "@/components/AnimatedSection";
import { Phone, ClipboardCheck, HardHat, ThumbsUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    num: "01",
    title: "Free Inspection",
    desc: "Schedule a no-obligation roof inspection. We'll assess your roof's condition and answer all your questions.",
  },
  {
    icon: ClipboardCheck,
    num: "02",
    title: "Detailed Proposal",
    desc: "Receive a clear, written proposal with scope, timeline, and pricing — no hidden fees or surprises.",
  },
  {
    icon: HardHat,
    num: "03",
    title: "Expert Installation",
    desc: "Our in-house crew handles every detail of the installation with precision and professionalism.",
  },
  {
    icon: ThumbsUp,
    num: "04",
    title: "Final Walkthrough",
    desc: "We walk you through the completed project, ensure your satisfaction, and back it with our warranty.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Process</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            From Inspection to <span className="gold-gradient-text">Completion</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            A clear, structured process that keeps you informed and confident every step of the way.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 0.15}>
              <div className="text-center group">
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full border border-gold/20 mb-6 group-hover:border-gold/50 transition-colors duration-300">
                  <step.icon className="w-8 h-8 text-gold" />
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 right-0 w-full">
                  {/* Connecting line handled via layout */}
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
