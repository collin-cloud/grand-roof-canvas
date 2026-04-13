import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reviews = [
  {
    name: "Review 1",
    location: "Verified Google Review",
    text: "I had some wind damage to my roof, and Zenith took care of the entire process. Very professional attitudes from the owner to the laborers, with quality work and no upselling. My insurance company was being difficult, and Collin handled them like a seasoned professional. Highly recommend Zenith. They were just that good!",
    rating: 5,
  },
  {
    name: "Review 2",
    location: "Verified Google Review",
    text: "Outstanding service from start to finish! Collin and Todd were professional, punctual and extremely knowledgeable. Zenith completed the job on time, the quality of workmanship exceeded our expectations and communication was clear throughout the entire process. Highly recommend this roofing company.",
    rating: 5,
  },
  {
    name: "Review 3",
    location: "Verified Google Review",
    text: "I am really very satisfied with the professional results that Zenith Roofing Solutions did on my property. They accomplished a very professional job and communicated closely with me on all aspects of the project. If I could rate them a sixth star I would do so without hesitation. They earned it.",
    rating: 5,
  },
  {
    name: "Review 4",
    location: "Verified Google Review",
    text: "Collin and his crew are totally awesome. Anybody who needs roofing done, he will work with you to get everything done and get it done right. Collin was totally patient, answered all my questions, and helped me in any way he could to get through this process.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 lg:py-36 section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,hsl(var(--gold)/0.03)_0%,transparent_50%)]" />

      <div className="relative container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Testimonials</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-5">
            Trusted by Homeowners Throughout the{" "}
            <span className="gold-gradient-text">Las Vegas Valley</span>
          </h2>
        </AnimatedSection>

        {/* Google rating banner */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="card-luxury inline-flex items-center gap-4 px-8 py-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <div className="h-6 w-px bg-border/50" />
            <div className="text-left">
              <p className="font-display text-lg font-bold leading-tight">4.7</p>
              <p className="text-xs text-muted-foreground font-body">Based on 18 Google Reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <div className="card-luxury p-8 h-full hover:border-gold/20 transition-colors duration-500">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 font-body leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-gold text-sm">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{review.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
