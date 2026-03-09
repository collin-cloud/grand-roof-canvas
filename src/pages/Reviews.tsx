import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const reviews = [
  { name: "Michael T.", location: "Las Vegas, NV", text: "Zenith replaced our tile roof and the quality of work was outstanding. The crew was professional, on time, and the communication throughout was exceptional. Highly recommend.", rating: 5 },
  { name: "Sarah & David K.", location: "Henderson, NV", text: "We had storm damage and Zenith handled everything — the inspection, insurance paperwork, and the full replacement. It was seamless. Our new roof looks incredible.", rating: 5 },
  { name: "Robert L.", location: "Las Vegas, NV", text: "What stood out was the transparency. No hidden fees, no surprises. They showed up when they said they would and the finished product speaks for itself.", rating: 5 },
  { name: "Jennifer M.", location: "Henderson, NV", text: "Zenith's team was professional and thorough from start to finish. The experience and integrity really showed — you can tell they take pride in every project.", rating: 5 },
  { name: "Carlos R.", location: "Las Vegas, NV", text: "From the initial inspection to the final walkthrough, everything was professional and well-organized. Our shingle replacement looks fantastic and was done in two days.", rating: 5 },
  { name: "Amanda P.", location: "Henderson, NV", text: "The insurance claim process was so much easier with Zenith. They documented everything thoroughly and worked directly with our insurance company. Couldn't be happier.", rating: 5 },
  { name: "Tom & Linda W.", location: "Las Vegas, NV", text: "We got quotes from five companies. Zenith wasn't the cheapest, but they were the most thorough and transparent. The quality of their work justified every penny.", rating: 5 },
  { name: "Maria S.", location: "Summerlin, NV", text: "Our roof had been leaking for months. Zenith found the issue quickly, explained our options, and had it repaired the same week. Professional and reliable.", rating: 5 },
];

const Reviews = () => {
  return (
    <>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Reviews</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Client <span className="gold-gradient-text">Testimonials</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Don't just take our word for it. Here's what Southern Nevada homeowners and property managers say about working with Zenith Roofing Solutions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, i) => (
              <AnimatedSection key={review.name} delay={i * 0.05}>
                <div className="card-luxury p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/90 font-body leading-relaxed mb-6 italic">"{review.text}"</p>
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
      <CTASection />
    </>
  );
};

export default Reviews;
