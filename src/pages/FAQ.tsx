import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CTASection from "@/components/home/CTASection";

const faqs = [
  { q: "Do you use subcontractors?", a: "No. Every member of our crew works directly for Zenith Roofing Solutions. This ensures consistent quality, accountability, and clear communication on every project." },
  { q: "How long does a typical roof replacement take?", a: "Most residential roof replacements are completed in 1–3 days depending on the size and complexity of the project. We'll provide a clear timeline in your proposal." },
  { q: "Do you help with insurance claims?", a: "Absolutely. We provide thorough documentation, meet with adjusters, and guide you through the entire insurance claim process from start to finish." },
  { q: "What areas do you serve?", a: "We serve Las Vegas and Henderson, Nevada. Our team specializes in the unique roofing needs of the Southern Nevada climate." },
  { q: "Do you offer free inspections?", a: "Yes. We provide complimentary roof inspections with detailed assessments and honest recommendations — no pressure, no obligations." },
  { q: "What types of roofing materials do you work with?", a: "We work with shingle, tile, and flat roofing systems. We'll recommend the best materials for your specific needs, budget, and the Las Vegas climate." },
  { q: "How do I know if my roof needs to be replaced?", a: "Common signs include missing or curling shingles, leaks, granule loss, sagging, and age (most shingle roofs last 20–30 years). Our free inspection will give you a clear picture." },
  { q: "Do you offer financing?", a: "We can discuss payment options during your consultation. Contact us to learn about the options available for your project." },
  { q: "Are you licensed and insured?", a: "Yes. Zenith Roofing Solutions is fully licensed and insured in the state of Nevada. We carry comprehensive liability and workers' compensation coverage." },
  { q: "What warranty do you offer?", a: "We offer a workmanship warranty on all our installations in addition to manufacturer material warranties. Specific terms are outlined in your proposal." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">FAQ</span>
              <div className="h-px w-8 bg-gold/50" />
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked <span className="gold-gradient-text">Questions</span>
            </h1>
          </AnimatedSection>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.03}>
                <div className="card-luxury overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-body font-semibold text-sm pr-4">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-muted-foreground font-body leading-relaxed">{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <CTASection />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
};

export default FAQ;
