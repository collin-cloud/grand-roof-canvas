// src/data/projects.ts
// Completed project pins for the /service-areas map.
// PRIVACY: neighborhood-level only. No addresses, names, prices, or payment methods.
// To add a job later, append an object below — it auto-appears on the map.

export type ProjectCategory = "Tile Roofing" | "Roof Replacement" | "Roof Repairs";

export interface Project {
  id: string;
  service: string;          // public-facing label
  category: ProjectCategory;
  insurance: boolean;       // true => show "Insurance Claim" badge
  neighborhood: string;
  lat: number;
  lng: number;
  date: string;             // e.g. "May 2026"
  photos?: string[];
}

export const projects: Project[] = [
  { id: "p38", service: "Flat Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Pahrump", lat: 36.20931, lng: -115.98298, date: "June 2026" },
  { id: "p37", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "West Las Vegas", lat: 36.17975, lng: -115.16105, date: "May 2026", photos: ["/projects/garnet-after-1.jpg", "/projects/garnet-after-2.jpg"] },
  { id: "p21", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "North Las Vegas", lat: 36.24329, lng: -115.15241, date: "April 2026" },
  { id: "p31", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Northwest Las Vegas", lat: 36.19508, lng: -115.20232, date: "March 2026" },
  { id: "p35", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Summerlin", lat: 36.18169, lng: -115.29712, date: "March 2026" },
  { id: "p36", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Enterprise", lat: 36.03971, lng: -115.14646, date: "March 2026" },
  { id: "p32", service: "Full Tile Roof Replacement", category: "Tile Roofing", insurance: false, neighborhood: "Henderson", lat: 36.06291, lng: -115.05937, date: "January 2026" },
  { id: "p33", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "East Las Vegas", lat: 36.15415, lng: -115.10904, date: "January 2026" },
  { id: "p34", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Enterprise", lat: 36.041, lng: -115.1483, date: "December 2025" },
  { id: "p12", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Northwest Las Vegas", lat: 36.19784, lng: -115.20286, date: "November 2025" },
  { id: "p25", service: "Tile Roof Replacement", category: "Tile Roofing", insurance: true, neighborhood: "Henderson", lat: 36.03502, lng: -114.94598, date: "September 2025" },
  { id: "p26", service: "Tile Roof Replacement", category: "Tile Roofing", insurance: true, neighborhood: "Enterprise", lat: 36.04177, lng: -115.14659, date: "September 2025" },
  { id: "p28", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Spring Valley", lat: 36.06162, lng: -115.29285, date: "September 2025" },
  { id: "p29", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Spring Valley", lat: 36.13107, lng: -115.26327, date: "September 2025" },
  { id: "p30", service: "Tile Roof Replacement", category: "Tile Roofing", insurance: false, neighborhood: "Enterprise", lat: 36.01124, lng: -115.20182, date: "September 2025" },
  { id: "p27", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Enterprise", lat: 36.06079, lng: -115.24926, date: "August 2025" },
  { id: "p24", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Downtown Las Vegas", lat: 36.16452, lng: -115.12855, date: "July 2025" },
  { id: "p22", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Northwest Las Vegas", lat: 36.20173, lng: -115.20884, date: "June 2025" },
  { id: "p23", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Centennial Hills", lat: 36.28776, lng: -115.25272, date: "June 2025" },
  { id: "p17", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "North Las Vegas", lat: 36.27499, lng: -115.1604, date: "May 2025" },
  { id: "p18", service: "Flat Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Henderson", lat: 36.03895, lng: -114.94422, date: "May 2025" },
  { id: "p06", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Summerlin", lat: 36.15902, lng: -115.26623, date: "April 2025" },
  { id: "p20", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Spring Valley", lat: 36.13353, lng: -115.26201, date: "April 2025" },
  { id: "p15", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Whitney", lat: 36.08759, lng: -115.05773, date: "February 2025" },
  { id: "p19", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Spring Valley", lat: 36.07812, lng: -115.21031, date: "February 2025" },
  { id: "p02", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "North Las Vegas", lat: 36.20236, lng: -115.12447, date: "January 2025" },
  { id: "p11", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Northwest Las Vegas", lat: 36.19848, lng: -115.2033, date: "January 2025" },
  { id: "p13", service: "Tile Lift & Relay", category: "Tile Roofing", insurance: false, neighborhood: "Summerlin", lat: 36.20477, lng: -115.29916, date: "January 2025" },
  { id: "p01", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "North Las Vegas", lat: 36.20476, lng: -115.12638, date: "December 2024" },
  { id: "p04", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Northwest Las Vegas", lat: 36.1994, lng: -115.20545, date: "December 2024" },
  { id: "p05", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Northwest Las Vegas", lat: 36.19722, lng: -115.20786, date: "December 2024" },
  { id: "p14", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Summerlin", lat: 36.20827, lng: -115.3031, date: "December 2024" },
  { id: "p16", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Henderson", lat: 36.00264, lng: -115.0767, date: "December 2024" },
  { id: "p03", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "Paradise", lat: 36.11849, lng: -115.0887, date: "November 2024" },
  { id: "p07", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: true, neighborhood: "East Las Vegas", lat: 36.16296, lng: -115.05658, date: "November 2024" },
  { id: "p08", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Henderson", lat: 36.06174, lng: -114.96306, date: "November 2024" },
  { id: "p09", service: "Shingle Roof Replacement", category: "Roof Replacement", insurance: false, neighborhood: "Northeast Las Vegas", lat: 36.22853, lng: -115.05582, date: "November 2024" },
  { id: "p10", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Summerlin", lat: 36.17617, lng: -115.33193, date: "November 2024" },
  { id: "p39", service: "Roof Repair", category: "Roof Repairs", insurance: false, neighborhood: "Enterprise", lat: 36.06147, lng: -115.24727, date: "October 2024" },
];
