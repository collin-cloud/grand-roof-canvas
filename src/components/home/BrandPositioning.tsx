import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BrandPositioning = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 section-dark relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,hsl(var(--gold)/0.03)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,hsl(var(--gold)/0.02)_0%,transparent_40%)]" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Decorative line */}
          <motion.div
            className="gold-line mb-16"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
            {/* Left — Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
                  Our Foundation
                </span>
              </motion.div>

              <motion.h2
                className="font-display text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                A Higher Standard in{" "}
                <span className="gold-gradient-text">Roofing</span>
              </motion.h2>
            </div>

            {/* Right — Copy */}
            <div className="space-y-6">
              {[
                "Zenith Roofing Solutions was built on a simple belief — homeowners deserve honesty, transparency, and craftsmanship they can rely on.",
                "With decades of combined roofing experience, our team approaches every project with careful planning, experienced oversight, and a commitment to doing things the right way.",
                "We're not focused on being the biggest roofing company in Southern Nevada — we're focused on being the most trusted.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  className="text-muted-foreground font-body leading-relaxed text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
                >
                  {text}
                </motion.p>
              ))}

              <motion.p
                className="font-display text-xl font-semibold text-gold italic pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.85 }}
              >
                Driven by Integrity. Defined by Service.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="gold-line mt-16"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </section>
  );
};

export default BrandPositioning;
