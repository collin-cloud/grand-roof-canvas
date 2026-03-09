import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Michael T.",
    location: "Las Vegas, NV",
    text: "Zenith replaced our tile roof and the quality of work was outstanding. The crew was professional, on time, and the communication throughout was exceptional. Highly recommend.",
    rating: 5,
  },
  {
    name: "Sarah & David K.",
    location: "Henderson, NV",
    text: "We had storm damage and Zenith handled everything — the inspection, insurance paperwork, and the full replacement. It was seamless. Our new roof looks incredible.",
    rating: 5,
  },
  {
    name: "Robert L.",
    location: "Las Vegas, NV",
    text: "What stood out was the transparency. No hidden fees, no surprises. They showed up when they said they would and the finished product speaks for itself.",
    rating: 5,
  },
  {
    name: "Jennifer M.",
    location: "Henderson, NV",
    text: "I've dealt with contractors who subcontract everything. Zenith's in-house crew made all the difference. You can tell they take pride in their work.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 lg:py-32 section-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Testimonials</span>
            <div className="h-px w-8 bg-gold/50" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
            What Our Clients <span className="gold-gradient-text">Say</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.1}>
              <div className="card-luxury p-8 h-full">
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
                    <p className="font-body font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground font-body">{review.location}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
