import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

const BlogIndex = () => {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      <Helmet>
        <title>Roofing Resources & Blog | Zenith Roofing Solutions</title>
        <meta name="description" content="Expert roofing tips, guides, and industry insights for Las Vegas homeowners. Learn about roof maintenance, insurance claims, and more from Zenith Roofing Solutions." />
        <meta property="og:title" content="Roofing Resources & Blog | Zenith Roofing Solutions" />
        <meta property="og:description" content="Expert roofing tips, guides, and industry insights for Las Vegas homeowners. Learn about roof maintenance, insurance claims, and more from Zenith Roofing Solutions." />
        <link rel="canonical" href="https://zenithroofingsolutions.com/roofing-resources" />
      </Helmet>

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gold font-body font-medium hover:text-gold-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
          </AnimatedSection>
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Resources</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Roofing <span className="gold-gradient-text">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Expert guides and resources for homeowners across the Las Vegas Valley. Learn about roof maintenance, insurance claims, and protecting your home in Southern Nevada's climate.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.06}>
                <Link
                  to={`/roofing-resources/${post.slug}`}
                  className="card-luxury overflow-hidden h-full flex flex-col group hover:border-gold/30 transition-all duration-500 block"
                >
                  <div className="aspect-[16/9] bg-secondary overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center">
                      <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/40">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-semibold mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground font-body leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body font-medium">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Zenith Roofing Solutions - Roofing Resources",
            description: "Expert roofing guides and resources for Las Vegas Valley homeowners.",
            publisher: {
              "@type": "Organization",
              name: "Zenith Roofing Solutions",
            },
            blogPost: blogPosts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: "Collin Martinez",
                jobTitle: "Founder, Zenith Roofing Solutions",
              },
            })),
          }),
        }}
      />
    </>
  );
};

export default BlogIndex;
