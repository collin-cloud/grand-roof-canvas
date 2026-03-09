import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, ArrowRight } from "lucide-react";

const BlogPreview = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-28 lg:py-36 bg-background relative">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-charcoal-deep/50 to-transparent" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
              Resources
            </span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Roofing <span className="gold-gradient-text">Insights</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
            Expert guides and resources for homeowners across the Las Vegas Valley.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post, i) => (
            <AnimatedSection key={post.slug} delay={i * 0.08}>
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
                  <h3 className="font-display text-base font-semibold mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
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

        <AnimatedSection className="text-center mt-12" delay={0.3}>
          <Link to="/roofing-resources" className="btn-outline-gold">
            View All Resources <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BlogPreview;
