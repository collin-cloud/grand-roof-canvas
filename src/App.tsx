import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicePage from "./pages/ServicePage";
import About from "./pages/About";
import Process from "./pages/Process";
import Reviews from "./pages/Reviews";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import LocalSEOPage from "./pages/LocalSEOPage";
import LocationPage from "./pages/LocationPage";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import ServiceLocationPage, { serviceLocationPages } from "./pages/ServiceLocationPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Map service+location pages to URL slugs
const serviceLocationRoutes = [
  { urlSlug: "roof-replacement-las-vegas", configIndex: 0 },
  { urlSlug: "roof-repair-las-vegas", configIndex: 1 },
  { urlSlug: "tile-roof-repair-las-vegas", configIndex: 2 },
  { urlSlug: "tile-roof-lift-and-relay-las-vegas", configIndex: 3 },
  { urlSlug: "roof-inspection-las-vegas", configIndex: 4 },
  { urlSlug: "insurance-roof-claim-las-vegas", configIndex: 5 },
  { urlSlug: "tile-roof-underlayment-replacement-las-vegas", configIndex: 6 },
];

/** Track SPA route changes + phone clicks in GA4 (client-only, safe under SSR) */
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  // Global phone-click tracking
  useEffect(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest?.('a[href^="tel:"]');
      if (anchor && window.gtag) {
        window.gtag("event", "phone_click", {
          event_category: "engagement",
          link_url: (anchor as HTMLAnchorElement).href,
        });
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <AnalyticsTracker />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roofing-resources" element={<BlogIndex />} />
          <Route path="/roofing-resources/:slug" element={<BlogPost />} />

          {/* Location pages */}
          <Route path="/roofing-contractor-las-vegas" element={<LocationPage city="Las Vegas" slug="las-vegas" />} />
          <Route path="/roofing-contractor-henderson" element={<LocationPage city="Henderson" slug="henderson" />} />
          <Route path="/roofing-contractor-summerlin" element={<LocationPage city="Summerlin" slug="summerlin" />} />
          <Route path="/roofing-contractor-north-las-vegas" element={<LocationPage city="North Las Vegas" slug="north-las-vegas" />} />
          <Route path="/roofing-contractor-spring-valley" element={<LocationPage city="Spring Valley" slug="spring-valley" />} />
          <Route path="/roofing-contractor-green-valley" element={<LocationPage city="Green Valley" slug="green-valley" />} />
          <Route path="/roofing-contractor-enterprise" element={<LocationPage city="Enterprise" slug="enterprise" />} />

          {/* Service + Location pages */}
          {serviceLocationRoutes.map((route) => (
            <Route
              key={route.urlSlug}
              path={`/${route.urlSlug}`}
              element={<ServiceLocationPage config={serviceLocationPages[route.configIndex]} />}
            />
          ))}

          {/* Legacy location pages */}
          <Route path="/roofing-company-las-vegas" element={<LocalSEOPage city="Las Vegas" slug="las-vegas" />} />
          <Route path="/roofing-company-henderson" element={<LocalSEOPage city="Henderson" slug="henderson" />} />
          <Route path="/roofing-company-summerlin" element={<LocalSEOPage city="Summerlin" slug="summerlin" />} />
          <Route path="/roofing-company-north-las-vegas" element={<LocalSEOPage city="North Las Vegas" slug="north-las-vegas" />} />
          <Route path="/roofing-company-spring-valley" element={<LocalSEOPage city="Spring Valley" slug="spring-valley" />} />
          <Route path="/roofing-company-enterprise" element={<LocalSEOPage city="Enterprise" slug="enterprise" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
