import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/roofing-resources" replace />;

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  // Simple markdown-like rendering
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let listItems: string[] = [];
    let listKey = 0;

    const flushList = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${listKey++}`} className="space-y-2 my-6">
            {listItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-muted-foreground font-body leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                <span dangerouslySetInnerHTML={{ __html: processInlineLinks(item) }} />
              </li>
            ))}
          </ul>
        );
        listItems = [];
      }
    };

    const processInlineLinks = (text: string): string => {
      // Convert [text](url) to <a> tags
      return text.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-gold hover:text-gold-light underline underline-offset-2 transition-colors">$1</a>'
      ).replace(
        /\*\*([^*]+)\*\*/g,
        '<strong class="text-foreground font-semibold">$1</strong>'
      ).replace(
        /\*([^*]+)\*/g,
        '<em>$1</em>'
      );
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) {
        flushList();
        continue;
      }

      if (line.startsWith("- **") || line.startsWith("- ")) {
        listItems.push(line.replace(/^- /, ""));
        continue;
      }

      flushList();

      if (line.startsWith("# ")) {
        // Skip H1, already rendered in header
        continue;
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="font-display text-xl font-semibold mt-10 mb-4">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="font-display text-2xl lg:text-3xl font-semibold mt-12 mb-5">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("[") && line.includes("→")) {
        const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (match) {
          elements.push(
            <div key={i} className="mt-8">
              <Link to={match[2]} className="btn-gold">
                {match[1]}
              </Link>
            </div>
          );
        }
      } else if (line.match(/^\d+\./)) {
        // Numbered list item
        listItems.push(line.replace(/^\d+\.\s*/, ""));
      } else {
        elements.push(
          <p
            key={i}
            className="text-muted-foreground font-body leading-relaxed my-4"
            dangerouslySetInnerHTML={{ __html: processInlineLinks(line) }}
          />
        );
      }
    }
    flushList();
    return elements;
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Zenith Roofing Solutions</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Zenith Roofing Solutions`} />
        <meta property="og:description" content={post.excerpt} />
        <link rel="canonical" href={`https://zenithroofingsolutions.com/roofing-resources/${post.slug}`} />
      </Helmet>

      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <Link
              to="/roofing-resources"
              className="inline-flex items-center gap-2 text-sm text-gold font-body font-medium mb-8 hover:text-gold-light transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Resources
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/70 bg-gold/5 px-3 py-1 rounded-full border border-gold/10">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-body">
                <Calendar className="w-3 h-3" />
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="gold-line mb-10" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="prose-luxury">
              {renderContent(post.content)}
            </article>
          </AnimatedSection>

          {/* Related Articles */}
          <div className="mt-20">
            <div className="gold-line mb-12" />
            <AnimatedSection>
              <h2 className="font-display text-2xl font-semibold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {otherPosts.map((related, i) => (
                  <AnimatedSection key={related.slug} delay={i * 0.08}>
                    <Link
                      to={`/roofing-resources/${related.slug}`}
                      className="card-luxury p-6 h-full flex flex-col group hover:border-gold/30 transition-all duration-500 block"
                    >
                      <span className="text-xs font-body font-semibold uppercase tracking-wider text-gold/60 mb-2">
                        {related.category}
                      </span>
                      <h3 className="font-display text-base font-semibold mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                        {related.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-body font-medium mt-auto">
                        Read <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Zenith Roofing Solutions" },
            publisher: {
              "@type": "Organization",
              name: "Zenith Roofing Solutions",
              url: "https://zenithroofingsolutions.com",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://zenithroofingsolutions.com/roofing-resources/${post.slug}`,
            },
          }),
        }}
      />
    </>
  );
};

export default BlogPost;
