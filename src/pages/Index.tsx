import Hero from "@/components/home/Hero";
import BrandPositioning from "@/components/home/BrandPositioning";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSection from "@/components/home/ProcessSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Hero />
      <BrandPositioning />
      <ServicesOverview />
      <ProcessSection />
      <ServiceAreas />
      <ReviewsSection />
      <FAQPreview />
      <CTASection />
    </>
  );
};

export default Index;
