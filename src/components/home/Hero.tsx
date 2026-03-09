import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-roof.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium roofing on a luxury Las Vegas home at sunset"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/95 via-charcoal-deep/80 to-charcoal-deep/50" />
        <div className="absolute inset-0 hero-gradient opacity-60" />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
              No Subs, No Compromises
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8"
          >
            Premium Roofing in{" "}
            <span className="gold-gradient-text">Las Vegas</span>
            {" "}& <span className="gold-gradient-text">Henderson</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 font-body"
          >
            In-house crews. No subcontractors. Clear communication from inspection to final walkthrough.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact" className="btn-gold">
              Request Free Inspection
              <ArrowRight className="w-4 h-4" />
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="absolute bottom-0 left-0 right-0 bg-charcoal-deep/80 backdrop-blur-sm border-t border-gold/10"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold/10">
            {[
              "In-House Crews Only",
              "Licensed & Insured",
              "Insurance Claim Specialists",
              "Workmanship Warranty",
            ].map((item) => (
              <div key={item} className="py-5 px-4 text-center">
                <span className="text-xs sm:text-sm font-body font-medium uppercase tracking-wider text-gold/80">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
