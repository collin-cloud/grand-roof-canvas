import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense, type ComponentType } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";

// Eagerly-imported page modules (used for SSR + as fallback for the client).
// On the client we re-export them through React.lazy() so each page becomes
// its own code-split chunk. On the server we use the modules directly so the
// prerendered HTML contains the real page content (not a Suspense fallback).
import * as IndexMod from "./pages/Index";
import * as ServicesMod from "./pages/Services";
import * as ServicePageMod from "./pages/ServicePage";
import * as AboutMod from "./pages/About";
import * as ProcessMod from "./pages/Process";
import * as ReviewsMod from "./pages/Reviews";
import * as FAQMod from "./pages/FAQ";
import * as ContactMod from "./pages/Contact";
import * as LocalSEOPageMod from "./pages/LocalSEOPage";
import * as LocationPageMod from "./pages/LocationPage";
import * as BlogIndexMod from "./pages/BlogIndex";
import * as BlogPostMod from "./pages/BlogPost";
import * as ServiceLocationPageMod from "./pages/ServiceLocationPage";
import * as NotFoundMod from "./pages/NotFound";
import { serviceLocationPages } from "./pages/ServiceLocationPage";

const isSSR = typeof window === "undefined";

/**
 * Wrap a static module + a dynamic import so that:
 *  - on the server we render the eagerly-imported component (preserves SSR HTML
 *    and SEO — renderToString does not support React.lazy)
 *  - on the client we use React.lazy() with a dynamic import so the page lands
 *    in its own code-split chunk and isn't downloaded until visited.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function pageComponent<T extends ComponentType<any>>(
  staticMod: { default: T },
  dynamicImport: () => Promise<{ default: T }>,
): T {
  if (isSSR) return staticMod.default;
  return lazy(dynamicImport) as unknown as T;
}

const Index = pageComponent(IndexMod, () => import("./pages/Index"));
const Services = pageComponent(ServicesMod, () => import("./pages/Services"));
const ServicePage = pageComponent(ServicePageMod, () => import("./pages/ServicePage"));
const About = pageComponent(AboutMod, () => import("./pages/About"));
const Process = pageComponent(ProcessMod, () => import("./pages/Process"));
const Reviews = pageComponent(ReviewsMod, () => import("./pages/Reviews"));
const FAQ = pageComponent(FAQMod, () => import("./pages/FAQ"));
const Contact = pageComponent(ContactMod, () => import("./pages/Contact"));
const LocalSEOPage = pageComponent(LocalSEOPageMod, () => import("./pages/LocalSEOPage"));
const LocationPage = pageComponent(LocationPageMod, () => import("./pages/LocationPage"));
const BlogIndex = pageComponent(BlogIndexMod, () => import("./pages/BlogIndex"));
const BlogPost = pageComponent(BlogPostMod, () => import("./pages/BlogPost"));
const ServiceLocationPage = pageComponent(
  ServiceLocationPageMod,
  () => import("./pages/ServiceLocationPage"),
);
const NotFound = pageComponent(NotFoundMod, () => import("./pages/NotFound"));

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

const RouteFallback = () => (
  <div
    className="min-h-screen flex items-center justify-center bg-background"
    aria-label="Loading page"
    role="status"
  >
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 rounded-full border-2 border-gold/20 border-t-gold animate-spin" />
      <span className="font-display text-sm uppercase tracking-[0.3em] text-gold/70 animate-pulse">
        Zenith
      </span>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <AnalyticsTracker />
      <ScrollToTop />
      <Navbar />
      <main>
        <Suspense fallback={<RouteFallback />}>
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
        </Suspense>
      </main>
      <Footer />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
