import { motion, useInView } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="cta-section" className="py-28 lg:py-36 bg-background relative overflow-hidden">
      {/* Layered gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.08)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_100%,hsl(var(--gold)/0.04)_0%,transparent_40%)]" />

      {/* Gold accent lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 gold-line"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold mb-6">
            Driven by Integrity. Defined by Service.
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
            Protect Your Home with Roofing You Can{" "}
            <span className="gold-gradient-text">Trust</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body mb-12 leading-relaxed">
            When it comes to protecting your home, experience and integrity matter. Our team is ready to provide honest guidance and dependable roofing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold group">
              Request Free Inspection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:7028846320" className="btn-outline-gold">
              <Phone className="w-4 h-4" />
              Call 702-884-6320
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 gold-line"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      />
    </section>
  );
};

export default CTASection;
