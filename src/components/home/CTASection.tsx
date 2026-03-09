import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Subtle gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.06)_0%,transparent_70%)]" />

      <div className="relative container mx-auto px-6 lg:px-8 text-center">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6">
              Ready to Protect Your <span className="gold-gradient-text">Investment</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-10 leading-relaxed">
              Schedule your free roof inspection today. No pressure, no obligations — just honest assessments from experienced professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Request Free Inspection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7028846320" className="btn-outline-gold">
                <Phone className="w-4 h-4" />
                Call 702-884-6320
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
