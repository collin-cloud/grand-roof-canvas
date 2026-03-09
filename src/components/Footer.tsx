import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal-deep border-t border-border/30">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-bold gold-gradient-text">ZENITH</span>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mt-1 mb-4">Roofing Solutions</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Driven by Integrity. Defined by Service.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium roofing solutions for Southern Nevada homeowners and property managers.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { name: "Roof Replacement", slug: "roof-replacement" },
                { name: "Roof Repairs", slug: "roof-repairs" },
                { name: "Inspections & Certifications", slug: "inspections-and-certifications" },
                { name: "Insurance Claim Assistance", slug: "insurance-claim-assistance" },
                { name: "Tile Lift & Relay", slug: "tile-lift-and-relay" },
              ].map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {["Las Vegas", "Henderson", "Summerlin", "North Las Vegas", "Spring Valley", "Enterprise"].map((area) => (
                <li key={area}>
                  <span className="text-sm text-muted-foreground">{area}, NV</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:7028846320" className="hover:text-foreground transition-colors">702-884-6320</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:info@zenithroofingsolutions.com" className="hover:text-foreground transition-colors">info@zenithroofingsolutions.com</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                <span>Serving Southern Nevada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-line mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Zenith Roofing Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
