import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  serviceLocationPages,
  type ServiceLocationConfig,
} from "@/data/serviceLocationData";

// Re-export so existing imports of `serviceLocationPages` from this module
// keep working during the migration. New code should import from the data file.
export { serviceLocationPages };
export type { ServiceLocationConfig };

const ServiceLocationPage = ({ config }: { config: ServiceLocationConfig }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDesc} />
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDesc} />
      </Helmet>

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">{config.city}, Nevada</span>
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              {config.h1.split(config.city)[0]}
              <span className="gold-gradient-text">{config.city}</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              {config.intro}
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link to="/contact" className="btn-gold">Request Free Inspection</Link>
              <a href="tel:7028846320" className="btn-outline-gold"><Phone className="w-4 h-4" /> 702-884-6320</a>
            </div>
          </AnimatedSection>

          <div className="gold-line mb-12" />

          <div className="space-y-10">
            {config.sections.map((section, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4">{section.heading}</h2>
                <p className="text-muted-foreground font-body leading-relaxed">{section.content}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-3">
              {config.faqs.map((faq, i) => (
                <AnimatedSection key={i} delay={i * 0.03}>
                  <div className="card-luxury overflow-hidden">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-body font-semibold text-sm pr-4">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                          <div className="px-6 pb-6 text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Related */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <AnimatedSection>
              <h3 className="font-display text-lg font-semibold mb-4">Related Services</h3>
              <div className="space-y-2">
                {config.relatedServices.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                    <ArrowRight className="w-3 h-3 text-gold" /> {s.title}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h3 className="font-display text-lg font-semibold mb-4">Related Articles</h3>
              <div className="space-y-2">
                {config.relatedArticles.map((a) => (
                  <Link key={a.slug} to={`/roofing-resources/${a.slug}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-gold transition-colors font-body">
                    <ArrowRight className="w-3 h-3 text-gold" /> {a.title}
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12">
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Schedule Your Free Inspection</h2>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">
                Ready to get started? Contact Zenith Roofing Solutions for a complimentary roof inspection and honest guidance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-gold">Request Free Inspection <ArrowRight className="w-4 h-4" /></Link>
                <a href="tel:7028846320" className="btn-outline-gold"><Phone className="w-4 h-4" /> Call 702-884-6320</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: `${config.service} in ${config.city}`,
              provider: { "@type": "RoofingContractor", name: "Zenith Roofing Solutions", telephone: "702-884-6320" },
              areaServed: { "@type": "City", name: config.city, addressRegion: "NV" },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: config.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
};

export default ServiceLocationPage;
