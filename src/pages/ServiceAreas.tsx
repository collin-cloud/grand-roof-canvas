import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { lazy, Suspense, useEffect, useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { projects, type ProjectCategory } from "@/data/projects";

const ServiceAreasMap = lazy(() => import("@/components/ServiceAreasMap"));

type Filter = "All" | ProjectCategory | "Insurance Claims";

const FILTERS: { label: Filter; swatch?: string }[] = [
  { label: "All" },
  { label: "Tile Roofing", swatch: "#C9A24A" },
  { label: "Roof Replacement", swatch: "#1F3A68" },
  { label: "Roof Repairs", swatch: "#5B6470" },
  { label: "Insurance Claims", swatch: "#D4AF37" },
];

const schemaJson = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Zenith Roofing Solutions",
  telephone: "+1-702-884-6320",
  email: "collin@zenithroofingsolutions.com",
  slogan: "Driven by Integrity. Defined by Service.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 36.1699, longitude: -115.1398 },
  areaServed: [
    "Las Vegas, NV",
    "Henderson, NV",
    "Summerlin, NV",
    "North Las Vegas, NV",
    "Spring Valley, NV",
    "Enterprise, NV",
    "Paradise, NV",
    "Centennial Hills, NV",
  ].map((name) => ({ "@type": "City", name })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roofing Services",
    itemListElement: [
      "Shingle Roof Replacement",
      "Tile Roof Lift and Relay",
      "Tile Roof Replacement",
      "Flat Roof Replacement",
      "Roof Repair",
      "Storm Damage & Insurance Claim Assistance",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const ServiceAreas = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Insurance Claims") return projects.filter((p) => p.insurance);
    return projects.filter((p) => p.category === filter);
  }, [filter]);

  const areaCounts = useMemo(() => {
    const counts = new Map<string, number>();
    projects.forEach((p) => counts.set(p.neighborhood, (counts.get(p.neighborhood) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, []);

  return (
    <>
      <Helmet>
        <title>Roofing Service Areas in Las Vegas Valley | Zenith Roofing Solutions</title>
        <meta
          name="description"
          content="Explore the Las Vegas Valley neighborhoods we serve. See an interactive map of our completed roofing projects across Las Vegas, Henderson, Summerlin, and more."
        />
        <link rel="canonical" href="https://zenithroofingsolutions.com/service-areas" />
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      <section className="pt-32 pb-16 lg:pt-40 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">
                Service Areas
              </span>
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Our Roofing Service Areas Across the{" "}
              <span className="gold-gradient-text">Las Vegas Valley</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-4">
              We've completed roofing projects across Las Vegas, Henderson, Summerlin, North Las Vegas,
              Spring Valley, Enterprise, Centennial Hills, Paradise, and surrounding communities throughout
              the Las Vegas Valley.
            </p>
            <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed">
              Southern Nevada's relentless sun, monsoon winds, and dramatic temperature swings demand roofing
              that is built for the desert. Every pin on the map below represents a finished project — a roof
              we stand behind for the long run.
            </p>
          </AnimatedSection>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-3" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => {
              const active = filter === f.label;
              return (
                <button
                  key={f.label}
                  onClick={() => setFilter(f.label)}
                  className={`min-h-[44px] px-5 py-2.5 rounded-full border text-base font-body font-semibold inline-flex items-center gap-2 transition-all ${
                    active
                      ? "bg-gold text-charcoal border-gold"
                      : "bg-card text-foreground border-border hover:border-gold/60 hover:text-gold"
                  }`}
                  aria-pressed={active}
                >
                  {f.swatch && (
                    <span
                      className="inline-block w-3.5 h-3.5 rounded-full border border-white/40"
                      style={{ background: f.swatch }}
                      aria-hidden="true"
                    />
                  )}
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Map */}
          <div
            className="relative w-full mx-auto rounded-lg overflow-hidden border border-border bg-card"
            style={{ maxWidth: 1100 }}
          >
            <div
              className="w-full"
              style={{ height: "min(70vh, 700px)", minHeight: 450 }}
            >
              {mounted ? (
                <Suspense
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body">
                      Loading map…
                    </div>
                  }
                >
                  <ServiceAreasMap projects={filtered} />
                </Suspense>
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground font-body">
                  Loading map…
                </div>
              )}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-base font-body" aria-label="Map legend">
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 rounded-full" style={{ background: "#C9A24A" }} />
              Tile Roofing
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 rounded-full" style={{ background: "#1F3A68" }} />
              Roof Replacement
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-4 h-4 rounded-full" style={{ background: "#5B6470" }} />
              Roof Repairs
            </span>
            <span className="inline-flex items-center gap-2">
              <span
                className="w-4 h-4 rounded-full border-2 border-dashed"
                style={{ borderColor: "#D4AF37" }}
              />
              Insurance Claim
            </span>
            <span className="text-muted-foreground">
              Showing {filtered.length} of {projects.length} projects
            </span>
          </div>
        </div>
      </section>

      {/* Where we work */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Where We <span className="gold-gradient-text">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Completed projects grouped by neighborhood across the Las Vegas Valley.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {areaCounts.map(([area, count]) => (
              <div
                key={area}
                className="card-luxury p-5 flex items-center gap-4 hover:border-gold/40 transition-colors"
              >
                <MapPin className="w-6 h-6 text-gold shrink-0" />
                <div>
                  <div className="font-display text-lg font-semibold">{area}</div>
                  <div className="text-base text-muted-foreground font-body">
                    {count} completed project{count === 1 ? "" : "s"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <div className="gold-line mx-auto mb-8 w-24" />
          <h2 className="font-display text-3xl lg:text-5xl font-bold mb-5">
            Get Your <span className="gold-gradient-text">Free Roof Assessment</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground font-body leading-relaxed mb-10">
            See your home on our map next. Schedule a no-pressure inspection with the Zenith team today.
          </p>
          <Link
            to="/contact"
            className="btn-gold inline-flex items-center gap-2 min-h-[56px] text-base px-8"
          >
            Request Your Free Inspection
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-10 text-sm uppercase tracking-[0.3em] text-gold/80 font-body">
            Driven by Integrity. Defined by Service.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServiceAreas;
