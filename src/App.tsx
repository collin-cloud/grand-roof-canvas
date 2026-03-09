import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
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

            {/* Location pages - new SEO architecture */}
            <Route path="/roofing-contractor-las-vegas" element={<LocationPage city="Las Vegas" slug="las-vegas" />} />
            <Route path="/roofing-contractor-henderson" element={<LocationPage city="Henderson" slug="henderson" />} />
            <Route path="/roofing-contractor-summerlin" element={<LocationPage city="Summerlin" slug="summerlin" />} />
            <Route path="/roofing-contractor-north-las-vegas" element={<LocationPage city="North Las Vegas" slug="north-las-vegas" />} />
            <Route path="/roofing-contractor-spring-valley" element={<LocationPage city="Spring Valley" slug="spring-valley" />} />
            <Route path="/roofing-contractor-green-valley" element={<LocationPage city="Green Valley" slug="green-valley" />} />
            <Route path="/roofing-contractor-enterprise" element={<LocationPage city="Enterprise" slug="enterprise" />} />

            {/* Service + Location pages */}
            {serviceLocationPages.map((config) => (
              <Route
                key={`${config.serviceSlug}-${config.citySlug}`}
                path={`/${config.serviceSlug === "roof-replacement" ? "roof-replacement" : config.serviceSlug === "roof-repairs" ? "roof-repair" : config.serviceSlug === "tile-lift-and-relay" && config.service === "Tile Roof Repair" ? "tile-roof-repair" : config.serviceSlug === "tile-lift-and-relay" && config.service === "Tile Roof Lift and Relay" ? "tile-roof-lift-and-relay" : config.serviceSlug === "inspections-and-certifications" ? "roof-inspection" : "insurance-roof-claim"}-${config.citySlug}`}
                element={<ServiceLocationPage config={config} />}
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
