import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/home/CTASection";
import { blogPosts, blogAuthor } from "@/data/blogPosts";
import { Calendar, ArrowLeft, ArrowRight, User } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

            {/* Author byline */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                <User className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-foreground">
                  Written by {blogAuthor.name}, {blogAuthor.title}
                </p>
              </div>
            </div>

            <div className="gold-line mb-10" />
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <article className="prose-luxury">
              {renderContent(post.content)}
            </article>
          </AnimatedSection>

          {/* FAQ Section */}
          {post.faqs && post.faqs.length > 0 && (
            <AnimatedSection delay={0.15} className="mt-16">
              <div className="gold-line mb-10" />
              <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-8">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-3">
                {post.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="card-luxury border border-white/5 rounded-lg px-6 hover:border-gold/20 transition-colors"
                  >
                    <AccordionTrigger className="font-body font-semibold text-left text-foreground hover:no-underline py-5 text-sm lg:text-base">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-body leading-relaxed pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </AnimatedSection>
          )}

          {/* Author Bio */}
          <AnimatedSection delay={0.2} className="mt-16">
            <div className="gold-line mb-10" />
            <div className="card-luxury p-6 lg:p-8 border border-white/5">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <User className="w-7 h-7 text-gold" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg text-foreground mb-1">
                    About {blogAuthor.name}
                  </p>
                  <p className="text-xs font-body font-semibold uppercase tracking-wider text-gold/70 mb-3">
                    {blogAuthor.title}
                  </p>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">
                    {blogAuthor.bio}
                  </p>
                </div>
              </div>
            </div>
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
            author: {
              "@type": "Person",
              name: "Collin Martinez",
              jobTitle: "Owner",
            },
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

      {/* FAQ Schema */}
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: post.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
    </>
  );
};

export default BlogPost;
