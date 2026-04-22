import { Helmet } from "react-helmet-async";
import { useEffect, useRef } from "react";
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
import heroImage from "@/assets/hero-roof.jpg";

const RETURN_SECTION_KEY = "homepageReturnSection";

const Index = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Capture clicks on links/buttons within homepage body sections and remember
  // which section they came from, so the destination page's "← Back" can
  // restore that section on return.
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button");
      if (!interactive) return;

      // Anchor links (in-page jumps) and external links shouldn't trigger
      // the return-section behavior. We only care about internal navigation.
      if (interactive.tagName === "A") {
        const href = (interactive as HTMLAnchorElement).getAttribute("href") || "";
        if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) {
          return;
        }
      }

      const section = interactive.closest("section");
      if (section && section.id) {
        sessionStorage.setItem(RETURN_SECTION_KEY, section.id);
      }
    };

    wrapper.addEventListener("click", handleClick);
    return () => wrapper.removeEventListener("click", handleClick);
  }, []);

  // On mount, if we have a saved section, scroll to it after the page settles.
  useEffect(() => {
    const returnSection = sessionStorage.getItem(RETURN_SECTION_KEY);
    if (!returnSection) return;
    sessionStorage.removeItem(RETURN_SECTION_KEY);

    // Wait for layout & ScrollToTop's reset to complete, then scroll smoothly.
    const timeout = window.setTimeout(() => {
      const el = document.getElementById(returnSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);

    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <div ref={wrapperRef}>
      <Helmet>
        <title>Zenith Roofing Solutions | Las Vegas Roofing Contractor</title>
        <meta name="description" content="Las Vegas roofing contractor with 35+ years combined experience. Roof replacement, repairs, tile work & insurance claims. Call 702-884-6320 for a free inspection." />
        <meta property="og:title" content="Zenith Roofing Solutions | Las Vegas Roofing Contractor" />
        <meta property="og:description" content="Las Vegas roofing contractor with 35+ years combined experience. Roof replacement, repairs, tile work & insurance claims. Call 702-884-6320 for a free inspection." />
        <link rel="canonical" href="https://zenithroofingsolutions.com" />
        <link rel="preload" as="image" href={heroImage} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Zenith Roofing Solutions",
            image: `https://zenithroofingsolutions.com${heroImage}`,
            url: "https://zenithroofingsolutions.com",
            telephone: "702-884-6320",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Las Vegas",
              addressRegion: "NV",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 36.1699,
              longitude: -115.1398,
            },
            areaServed: [
              "Las Vegas",
              "Henderson",
              "Summerlin",
              "North Las Vegas",
              "Spring Valley",
              "Green Valley",
              "Enterprise",
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.7",
              reviewCount: "19",
            },
            priceRange: "$$",
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "07:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.instagram.com/zenithroofingsolutions/",
              "https://www.facebook.com/Zenithroofingsolutions/",
            ],
            founder: {
              "@type": "Person",
              name: "Collin Martinez",
              jobTitle: "Founder",
            },
            description:
              "Las Vegas roofing contractor specializing in roof replacement, repairs, tile work, inspections, and insurance claim assistance. 4.7 stars on Google.",
          })}
        </script>
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
    </div>
  );
};

export default Index;
