import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import aboutImage from "@/assets/about-roof.jpg";
import founderImage from "@/assets/founder-collin.jpg";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Zenith Roofing Solutions | Meet Founder Collin Martinez</title>
        <meta name="description" content="Meet the team behind Zenith Roofing Solutions. Founded by Collin Martinez, bringing premium service standards from luxury real estate to Las Vegas roofing." />
        <meta property="og:title" content="About Zenith Roofing Solutions | Meet Founder Collin Martinez" />
        <meta property="og:description" content="Meet the team behind Zenith Roofing Solutions. Founded by Collin Martinez, bringing premium service standards from luxury real estate to Las Vegas roofing." />
        <link rel="canonical" href="https://zenithroofingsolutions.com/about" />
      </Helmet>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">About Us</span>
              </div>
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                Roofing Done <span className="gold-gradient-text">Right</span>
              </h1>
              <p className="text-lg text-muted-foreground font-body leading-relaxed italic">
                Over 35 years of combined roofing knowledge. A commitment to integrity that never wavers.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <img
                  src={aboutImage}
                  alt="Zenith Roofing Solutions premium craftsmanship on a Southern Nevada home"
                  className="w-full h-[500px] object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
              </div>
            </AnimatedSection>
          </div>

          {/* Meet the Founder */}
          <AnimatedSection className="mt-16 lg:mt-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection direction="left">
                <div className="relative">
                  <div className="w-full h-[600px] lg:h-[750px] overflow-hidden rounded-lg border border-gold/20 bg-background">
                    <img
                      src={founderImage}
                      alt="Collin Martinez, Founder of Zenith Roofing Solutions, on a Southern Nevada job site"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
                  <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
                </div>
              </AnimatedSection>

              <AnimatedSection direction="right">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-8 bg-gold/50" />
                  <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Meet the Founder</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold mb-3">
                  Meet <span className="gold-gradient-text">Collin Martinez</span>
                </h2>
                <p className="font-body text-base text-muted-foreground italic mb-8">
                  Founder, Zenith Roofing Solutions
                </p>
                <div className="space-y-5 text-muted-foreground font-body leading-relaxed">
                  <p>
                    Before Collin Martinez ever set foot on a rooftop, he spent years in two industries that demand one thing above all else: an exceptional client experience.
                  </p>
                  <p>
                    Collin's career began in Las Vegas hospitality, where he learned firsthand what it takes to deliver premium, detail-oriented service. That foundation carried him into luxury real estate at Huntington & Ellis, where he earned the designation of Luxury Agent, closed over 100 transactions, and was recognized four consecutive years as a Top 20 Real Estate Agent by Deluxe Version Magazine (2019–2022). His portfolio included multi-million dollar homes in Summerlin and MacDonald Highlands — including setting the record for highest price per square foot in Canyon Fairways history.
                  </p>
                  <p>
                    That experience gave Collin something most roofing contractors don't have: a deep understanding of what a home represents. He's sat across the table from homeowners making the biggest financial decision of their lives. He knows what's at stake when it comes to protecting that investment — and he saw firsthand how often the roofing industry falls short on communication, transparency, and follow-through.
                  </p>
                  <p>
                    Collin founded Zenith Roofing Solutions in 2024 to bring a different standard to residential roofing in Southern Nevada. Zenith operates with a fully paperless, streamlined process, clear communication at every step, and a team of experienced professionals who treat every project like their own home is on the line. From roof replacements to insurance claim support, Zenith delivers the kind of service Collin built his entire career around — because your roof isn't just shingles and underlayment. It's the first line of defense for everything that matters to you.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>

          {/* Story content */}
          <AnimatedSection className="mt-20 max-w-3xl mx-auto">
            <div className="space-y-8 text-muted-foreground font-body leading-relaxed text-lg">
              <p>
                At Zenith Roofing Solutions, we bring over 35 years of combined roofing knowledge and hands-on experience to every project we take on. Decades in the field have taught us more than just how to install a quality roof — they've shown us what truly matters: doing the right thing, standing behind your word, and putting people first.
              </p>

              <div className="gold-line" />

              <p>
                In an industry where honesty and accountability are often hard to come by, we've built Zenith on a different foundation — one rooted in integrity, transparency, and service. Whether we're working on a single-family home or an entire multi-building complex, our commitment remains the same: clear communication, quality products, and results you can rely on.
              </p>

              <p>
                We understand the importance of a roof — not just as a structure, but as protection for everything that matters underneath it. That's why every project is approached with careful planning, experienced oversight, and a commitment to quality that never cuts corners. We guide our clients through the process with honesty, explain every step, and follow through on what we promise — every time.
              </p>

              <div className="gold-line" />

              <p>
                Proudly serving homeowners and property managers across Southern Nevada, Zenith Roofing Solutions exists to raise the bar for what a roofing company should be. We don't aim to be the biggest — we aim to be the most trusted.
              </p>
            </div>
          </AnimatedSection>

          {/* Promise */}
          <AnimatedSection className="mt-20 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="gold-line mb-10" />
              <p className="text-sm font-body font-semibold uppercase tracking-[0.3em] text-gold mb-4">Our Promise</p>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                Driven by <span className="gold-gradient-text">Integrity</span>. Defined by <span className="gold-gradient-text">Service</span>.
              </h2>
              <div className="gold-line mt-10" />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <CTASection />
    </>
  );
};

export default About;
