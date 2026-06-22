import { useEffect, useMemo, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Project, ProjectCategory } from "@/data/projects";

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  "Tile Roofing": "#C9A24A",        // gold
  "Roof Replacement": "#1F3A68",    // brand navy
  "Roof Repairs": "#5B6470",        // slate
};

const INSURANCE_RING = "#D4AF37";

function makeIcon(color: string, insurance: boolean) {
  const ring = insurance
    ? `<circle cx="16" cy="16" r="14" fill="none" stroke="${INSURANCE_RING}" stroke-width="2.5" stroke-dasharray="3 2"/>`
    : "";
  const html = `
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 32 32" aria-hidden="true">
      ${ring}
      <circle cx="16" cy="16" r="10" fill="${color}" stroke="#FFFFFF" stroke-width="2.5"/>
      <circle cx="16" cy="16" r="3.5" fill="#FFFFFF" />
    </svg>`;
  return L.divIcon({
    html,
    className: "zenith-marker",
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -16],
  });
}

function FitToBounds({ projects }: { projects: Project[] }) {
  const map = useMap();
  useEffect(() => {
    if (!projects.length) return;
    const bounds = L.latLngBounds(projects.map((p) => [p.lat, p.lng] as [number, number]));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
  }, [map, projects]);
  return null;
}

interface Props {
  projects: Project[];
}

const ServiceAreasMap = ({ projects }: Props) => {
  const iconCache = useRef<Map<string, L.DivIcon>>(new Map());

  const markers = useMemo(
    () =>
      projects.map((p) => {
        const key = `${p.category}-${p.insurance}`;
        let icon = iconCache.current.get(key);
        if (!icon) {
          icon = makeIcon(CATEGORY_COLORS[p.category], p.insurance);
          iconCache.current.set(key, icon);
        }
        return { p, icon };
      }),
    [projects],
  );

  return (
    <MapContainer
      center={[36.1, -115.17]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="rounded-lg overflow-hidden"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitToBounds projects={projects} />
      {markers.map(({ p, icon }) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={icon}>
          <Popup>
            <div style={{ minWidth: 220, fontSize: 16, lineHeight: 1.4 }}>
              {p.photos && p.photos[0] && (
                <img
                  src={p.photos[0]}
                  alt={`${p.service} in ${p.neighborhood}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 120,
                    objectFit: "cover",
                    borderRadius: 6,
                    marginBottom: 8,
                  }}
                />
              )}
              <div style={{ fontWeight: 700, fontSize: 17, color: "#1a1a1a", marginBottom: 4 }}>
                {p.service}
              </div>
              <div style={{ color: "#444", marginBottom: 6 }}>
                {p.neighborhood} &middot; {p.date}
              </div>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 10px",
                    borderRadius: 999,
                    background: CATEGORY_COLORS[p.category],
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13,
                  }}
                >
                  {p.category}
                </span>
                {p.insurance && (
                  <span
                    style={{
                      display: "inline-block",
                      padding: "3px 10px",
                      borderRadius: 999,
                      background: "#fff8e1",
                      color: "#8a6d1c",
                      border: "1px solid #d4af37",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Insurance Claim
                  </span>
                )}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ServiceAreasMap;
