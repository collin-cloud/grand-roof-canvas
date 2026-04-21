import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import heroImage from "@/assets/hero-roof.jpg";

const trustItems = [
  "35+ Years Combined Roofing Experience",
  "Residential & Property Management Solutions",
  "Insurance Claim Guidance",
  "Serving the Las Vegas Valley & Southern Nevada",
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0.9]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={heroImage}
          alt="Premium roofing on a luxury Southern Nevada home"
          className="w-full h-[120%] object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/85 to-charcoal-deep/60"
        style={{ opacity: overlayOpacity }}
      />

      {/* Animated light gradient sweep */}
      <div className="absolute inset-0 hero-gradient opacity-60" />
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_40%,hsl(var(--gold)/0.06)_0%,transparent_70%)]" />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_70%_30%,hsl(var(--gold)/0.04)_0%,transparent_60%)]"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Gold accent lines */}
      <motion.div
        className="absolute top-0 left-[20%] w-px h-full"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.08), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-[50%] w-px h-full"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.06), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.4, ease: "easeOut" }}
      />
      <motion.div
        className="absolute top-0 left-[80%] w-px h-full"
        style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.08), transparent)" }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 1.6, ease: "easeOut" }}
      />

      <div className="relative container mx-auto px-6 lg:px-8 pt-32 pb-28">
        <div className="max-w-3xl">
          {/* Tagline with animated line */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-4 mb-8"
          >
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
              Driven by Integrity. Defined by Service.
            </span>
          </motion.div>

          {/* Headline — staggered word reveal */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              {["Premium", "Roofing", "Solutions"].map((word, i) => (
                <motion.span
                  key={word}
                  className="inline-block mr-[0.3em]"
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.5 + i * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="inline-block"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.86,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                Across{" "}
                <span className="gold-gradient-text">Southern Nevada</span>
              </motion.span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-4 font-body"
          >
            Experienced roofing professionals delivering quality craftsmanship, honest guidance, and reliable protection for homes and properties throughout the Las Vegas Valley.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="text-base font-display italic text-gold mb-12"
          >
            Driven by Integrity. Defined by Service.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-gold group">
              Request Free Inspection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:7028846320" className="btn-outline-gold">
              <Phone className="w-4 h-4" />
              Call 702-884-6320
            </a>
          </motion.div>
        </div>
      </div>

      {/* Trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-0 left-0 right-0 bg-charcoal-deep/80 backdrop-blur-md border-t border-gold/10"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/10">
            {trustItems.map((item, i) => (
              <motion.div
                key={item}
                className="py-5 px-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + i * 0.1 }}
              >
                <span className="text-xs sm:text-sm font-body font-medium uppercase tracking-wider text-gold/80">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
