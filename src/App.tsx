import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense, type ComponentType } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import { serviceLocationPages } from "./pages/ServiceLocationPage";

/**
 * Route-based code splitting.
 *
 *  - On the CLIENT: every page is loaded via React.lazy() so each route lands
 *    in its own JS chunk and is fetched on demand.
 *  - On the SERVER (SSR / prerender): renderToString does not support
 *    React.lazy(), so we synchronously require each page module via Vite's
 *    `ssrLoadModule`-friendly pattern. The `import.meta.env.SSR` branch is
 *    removed from the client bundle by Vite, so this does NOT defeat code
 *    splitting on the client.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyComp = ComponentType<any>;

function makePage<T extends AnyComp>(
  // Async import used on the client (becomes its own chunk).
  dynamicImport: () => Promise<{ default: T }>,
  // Eagerly-loaded server module — only referenced under `import.meta.env.SSR`.
  ssrModule: { default: T } | undefined,
): T {
  if (import.meta.env.SSR && ssrModule) {
    return ssrModule.default;
  }
  return lazy(dynamicImport) as unknown as T;
}

// SSR-only eager imports. Vite tree-shakes this whole block out of the client
// bundle because it's behind `import.meta.env.SSR`.
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
const ssrPages: Record<string, { default: AnyComp } | undefined> = (() => {
  if (!import.meta.env.SSR) return {};
  return {
    Index: require("./pages/Index"),
    Services: require("./pages/Services"),
    ServicePage: require("./pages/ServicePage"),
    About: require("./pages/About"),
    Process: require("./pages/Process"),
    Reviews: require("./pages/Reviews"),
    FAQ: require("./pages/FAQ"),
    Contact: require("./pages/Contact"),
    LocalSEOPage: require("./pages/LocalSEOPage"),
    LocationPage: require("./pages/LocationPage"),
    BlogIndex: require("./pages/BlogIndex"),
    BlogPost: require("./pages/BlogPost"),
    ServiceLocationPage: require("./pages/ServiceLocationPage"),
    NotFound: require("./pages/NotFound"),
  };
})();
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

const Index = makePage(() => import("./pages/Index"), ssrPages.Index);
const Services = makePage(() => import("./pages/Services"), ssrPages.Services);
const ServicePage = makePage(() => import("./pages/ServicePage"), ssrPages.ServicePage);
const About = makePage(() => import("./pages/About"), ssrPages.About);
const Process = makePage(() => import("./pages/Process"), ssrPages.Process);
const Reviews = makePage(() => import("./pages/Reviews"), ssrPages.Reviews);
const FAQ = makePage(() => import("./pages/FAQ"), ssrPages.FAQ);
const Contact = makePage(() => import("./pages/Contact"), ssrPages.Contact);
const LocalSEOPage = makePage(() => import("./pages/LocalSEOPage"), ssrPages.LocalSEOPage);
const LocationPage = makePage(() => import("./pages/LocationPage"), ssrPages.LocationPage);
const BlogIndex = makePage(() => import("./pages/BlogIndex"), ssrPages.BlogIndex);
const BlogPost = makePage(() => import("./pages/BlogPost"), ssrPages.BlogPost);
const ServiceLocationPage = makePage(
  () => import("./pages/ServiceLocationPage"),
  ssrPages.ServiceLocationPage,
);
const NotFound = makePage(() => import("./pages/NotFound"), ssrPages.NotFound);

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
