import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileText, ClipboardList, HardHat, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    num: "01",
    title: "Inspection & Evaluation",
    desc: "We start with a thorough assessment of your roof's condition, documenting everything with photos and honest findings.",
  },
  {
    icon: FileText,
    num: "02",
    title: "Clear Recommendations",
    desc: "You'll receive straightforward options with transparent pricing — no pressure, no hidden costs, no surprises.",
  },
  {
    icon: ClipboardList,
    num: "03",
    title: "Detailed Planning",
    desc: "We plan materials, timeline, and logistics to ensure a smooth project with minimal disruption to your routine.",
  },
  {
    icon: HardHat,
    num: "04",
    title: "Professional Installation",
    desc: "Experienced crews execute every phase with precision, keeping your property clean and your project on schedule.",
  },
  {
    icon: ShieldCheck,
    num: "05",
    title: "Final Walkthrough & Protection",
    desc: "We walk you through the completed work, confirm your satisfaction, and back it with our workmanship warranty.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="process-section" className="py-28 lg:py-36 section-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(var(--gold)/0.04)_0%,transparent_60%)]" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Our Approach</span>
            <div className="h-px w-8 bg-gold/50" />
          </motion.div>
          <motion.h2
            className="font-display text-4xl lg:text-5xl font-bold mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A Process You Can <span className="gold-gradient-text">Trust</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Every project follows a structured approach designed to keep you informed and confident from start to finish.
          </motion.p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connecting line (desktop) */}
          <motion.div
            className="hidden lg:block absolute left-[39px] top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.2), hsl(var(--gold) / 0.2), transparent)" }}
            initial={{ scaleY: 0, transformOrigin: "top" }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          />

          <div className="space-y-6 lg:space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative flex gap-6 lg:gap-10 items-start"
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
              >
                {/* Step number circle */}
                <div className="relative z-10 shrink-0">
                  <div className="w-20 h-20 rounded-full border border-gold/20 bg-charcoal-deep flex items-center justify-center group">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gold text-primary-foreground text-xs font-body font-bold flex items-center justify-center">
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-3 pb-2">
                  <h3 className="font-display text-xl lg:text-2xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed max-w-lg">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
