import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const reviews = [
  { name: "Review 1", location: "Verified Google Review", text: "I had some wind damage to my roof, and Zenith took care of the entire process. Very professional attitudes from the owner to the laborers, with quality work and no upselling. My insurance company was being difficult, and Collin handled them like a seasoned professional. Highly recommend Zenith. They were just that good!", rating: 5 },
  { name: "Review 2", location: "Verified Google Review", text: "Outstanding service from start to finish! Collin and Todd were professional, punctual and extremely knowledgeable. Zenith completed the job on time, the quality of workmanship exceeded our expectations and communication was clear throughout the entire process. Highly recommend this roofing company.", rating: 5 },
  { name: "Review 3", location: "Verified Google Review", text: "I am really very satisfied with the professional results that Zenith Roofing Solutions did on my property. They accomplished a very professional job and communicated closely with me on all aspects of the project. If I could rate them a sixth star I would do so without hesitation. They earned it.", rating: 5 },
  { name: "Review 4", location: "Verified Google Review", text: "Collin and his crew are totally awesome. Anybody who needs roofing done, he will work with you to get everything done and get it done right. Collin was totally patient, answered all my questions, and helped me in any way he could to get through this process.", rating: 5 },
  { name: "Review 5", location: "Verified Google Review", text: "I am so impressed by the quality, personnel, and genuine care of Zenith Roofing. They are outstanding in their commitment to me. I am so grateful for the service and recommend to my family and friends how professional and friendly you are.", rating: 5 },
  { name: "Review 6", location: "Verified Google Review", text: "Zenith was great to work with. We had a wonderful relationship throughout the entire process. I'd refer them to anyone that's in need of a reliable roofing company.", rating: 5 },
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
                      <p className="font-display font-bold text-sm">{review.name}</p>
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
