import { Helmet } from "react-helmet-async";
import Hero from "@/components/home/Hero";
import BrandPositioning from "@/components/home/BrandPositioning";
import ServicesOverview from "@/components/home/ServicesOverview";
import ProcessSection from "@/components/home/ProcessSection";
import ProjectsSection from "@/components/home/ProjectsSection";
import ServiceAreas from "@/components/home/ServiceAreas";
import ReviewsSection from "@/components/home/ReviewsSection";
import BlogPreview from "@/components/home/BlogPreview";
import FAQPreview from "@/components/home/FAQPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Zenith Roofing Solutions | Las Vegas Roofing Contractor</title>
        <meta name="description" content="Las Vegas roofing contractor with 35+ years combined experience. Roof replacement, repairs, tile work & insurance claims. Call 702-884-6320 for a free inspection." />
        <meta property="og:title" content="Zenith Roofing Solutions | Las Vegas Roofing Contractor" />
        <meta property="og:description" content="Las Vegas roofing contractor with 35+ years combined experience. Roof replacement, repairs, tile work & insurance claims. Call 702-884-6320 for a free inspection." />
        <link rel="canonical" href="https://zenithroofingsolutions.com" />
      </Helmet>

      <Hero />
      <BrandPositioning />
      <ServicesOverview />
      <ProcessSection />
      <ProjectsSection />
      <ServiceAreas />
      <ReviewsSection />
      <BlogPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
};

export default Index;
