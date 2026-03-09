import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSection from "@/components/home/ProcessSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProcessSection />
      <ReviewsSection />
      <ServiceAreas />
      <FAQPreview />
      <CTASection />
    </>
  );
};

export default Index;
