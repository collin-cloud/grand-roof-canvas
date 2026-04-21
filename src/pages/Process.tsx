import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, ClipboardCheck, HardHat, ThumbsUp, ArrowRight, FileCheck2, MessagesSquare, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "@/components/home/CTASection";

const whyPoints = [
  {
    icon: FileCheck2,
    title: "100% Paperless",
    desc: "Every document, contract, and update is digital. No lost paperwork, no delays.",
  },
  {
    icon: MessagesSquare,
    title: "Clear Communication",
    desc: "You'll always know exactly where your project stands. No guessing, no chasing.",
  },
  {
    icon: Eye,
    title: "Experienced Oversight",
    desc: "Every project is personally overseen from first inspection to final walkthrough.",
  },
];

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
    desc: "Our experienced crew handles every phase of the project with precision and care. We keep your property clean, respect your schedule, and deliver quality craftsmanship.",
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
      <Helmet>
        <title>Our Roofing Process | Zenith Roofing Solutions</title>
        <meta name="description" content="See how Zenith Roofing Solutions handles your project from start to finish. Fully paperless process, clear communication, and experienced oversight at every step." />
        <meta property="og:title" content="Our Roofing Process | Zenith Roofing Solutions" />
        <meta property="og:description" content="See how Zenith Roofing Solutions handles your project from start to finish. Fully paperless process, clear communication, and experienced oversight at every step." />
        <link rel="canonical" href="https://zenithroofingsolutions.com/process" />
      </Helmet>
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
              A clear, professional process designed to keep you informed and confident from the first call to the final walkthrough.
            </p>
          </AnimatedSection>

          {/* Timeline-connected steps */}
          <div className="relative">
            {/* Vertical connecting line — left rail on mobile, centered between number/icon and content on desktop */}
            <div
              aria-hidden="true"
              className="absolute left-8 lg:left-[3.25rem] top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gold/25 to-transparent"
            />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="relative pl-0">
                    {/* Connector node dot */}
                    <span
                      aria-hidden="true"
                      className="absolute left-8 lg:left-[3.25rem] top-12 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gold shadow-[0_0_0_4px_hsl(var(--background)),0_0_12px_hsl(var(--gold)/0.5)]"
                    />
                    <div className="card-luxury p-8 lg:p-12 flex flex-col lg:flex-row gap-8 items-start">
                      <div className="flex items-center gap-6 shrink-0">
                        <span className="font-display text-5xl font-bold text-gold/20">{step.num}</span>
                        <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center bg-background">
                          <step.icon className="w-7 h-7 text-gold" />
                        </div>
                      </div>
                      <div>
                        <h2 className="font-display text-2xl font-semibold mb-3">{step.title}</h2>
                        <p className="text-muted-foreground font-body leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Why Our Process Matters */}
          <AnimatedSection className="mt-24 lg:mt-28">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
                  Why It Matters
                </span>
                <div className="h-px w-8 bg-gold/50" />
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold">
                Why Our Process <span className="gold-gradient-text">Matters</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {whyPoints.map((point, i) => (
                <AnimatedSection key={point.title} delay={i * 0.1}>
                  <div className="card-luxury p-8 h-full text-center group hover:border-gold/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-full border border-gold/20 flex items-center justify-center mx-auto mb-5 group-hover:border-gold/40 transition-colors">
                      <point.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-3">{point.title}</h3>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed">{point.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Ready to Get Started CTA */}
          <AnimatedSection className="mt-20 lg:mt-24">
            <div className="relative overflow-hidden rounded-lg border border-gold/20 bg-charcoal-deep/60 p-10 lg:p-14 text-center">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,hsl(var(--gold)/0.12)_0%,transparent_70%)]"
              />
              <div className="relative">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold/50" />
                  <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
                    Let's Talk
                  </span>
                  <div className="h-px w-8 bg-gold/50" />
                </div>
                <h2 className="font-display text-3xl lg:text-5xl font-bold mb-4">
                  Ready to <span className="gold-gradient-text">Get Started?</span>
                </h2>
                <p className="text-base lg:text-lg text-muted-foreground font-body leading-relaxed max-w-xl mx-auto mb-8">
                  Schedule your free inspection today and experience the Zenith difference from your very first call.
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
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default Process;
