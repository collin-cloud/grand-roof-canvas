import AnimatedSection from "@/components/AnimatedSection";
import { Star } from "lucide-react";
import CTASection from "@/components/home/CTASection";

const reviews = [
  { name: "Andrew Mauro", location: "Verified Google Review", text: "I had some wind damage to my roof, and Zenith took care of the entire process. Very professional attitudes from the owner to the laborers, with quality work and no upselling. My insurance company was being difficult, and Collin handled them like a seasoned professional. Highly recommend Zenith. They were just that good!", rating: 5 },
  { name: "Brysen Kokubun", location: "Verified Google Review", text: "Outstanding service from start to finish! Collin and Todd were professional, punctual and extremely knowledgeable. Zenith completed the job on time, the quality of workmanship exceeded our expectations and communication was clear throughout the entire process. Highly recommend this roofing company.", rating: 5 },
  { name: "David Sablan", location: "Verified Google Review", text: "I am really very satisfied with the professional results that Zenith Roofing Solutions did on my property. They accomplished a very professional job and communicated closely with me on all aspects of the project. If I could rate them a sixth star I would do so without hesitation. They earned it.", rating: 5 },
  { name: "Brenda Phillips", location: "Verified Google Review", text: "Collin and his crew are totally awesome. Anybody who needs roofing done, he will work with you to get everything done and get it done right. Collin was totally patient, answered all my questions, and helped me in any way he could to get through this process.", rating: 5 },
  { name: "Bridget Lund", location: "Verified Google Review", text: "I am so impressed by the quality, personnel, and genuine care of Zenith Roofing. They are outstanding in their commitment to me. I am so grateful for the service and recommend to my family and friends how professional and friendly you are.", rating: 5 },
  { name: "Carlos Diaz Del Valle", location: "Verified Google Review", text: "Zenith was great to work with. We had a wonderful relationship throughout the entire process. I'd refer them to anyone that's in need of a reliable roofing company.", rating: 5 },
  { name: "Valerie Elaine Metcalf", location: "Verified Google Review", text: "My husband and I give Five Stars to Zenith Roofing for their beautiful work and how quickly everything was completed! The entire process was smooth and stress-free. A special thank you to Collin Martinez, who was absolutely great to work with—very patient and understanding as we were traveling during the process. That level of communication and flexibility meant a lot to us. Thank you to Zenith Roofing for doing such an amazing job. They come Highly recommended.", rating: 5 },
  { name: "Roman Garcia", location: "Verified Google Review", text: "Very grateful for the Zenith Roofing team for all they were able to accomplish for my home in a very efficient amount of time. They made the entire process from start to finish so easy for us. They did all the communication with my insurance and made sure my insurance would cover everything to get my roof replaced, including the plywood deck sheets, made sure any and all supplements were covered like removing my AC unit to replace damaged wood underneath, having solar panels removed and reinstalled. They thought of everything and they worked quick. Couldn't be happier with the outcome and would highly recommend these guys for any roof needs. Ask for Colin and or Edwin they were the best.", rating: 5 },
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
