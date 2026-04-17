import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
    gtag?: (...args: unknown[]) => void;
  }
}

const RECAPTCHA_SITE_KEY = "6LdkWqgqAAAAAH2xJ4kNZwm3hs0N7IvsBgIqhtBr";
const ACCULYNX_ENDPOINT = "https://leads.acculynx.com/api/leads/submit-new-lead?formID=71ea1e9a-8cc1-44bc-b7ab-cea5078cfa51";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  email: z.string().trim().email("Invalid email").max(255),
  address: z.string().trim().max(200).optional(),
  roofType: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
});

type FormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", address: "", roofType: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: typeof errors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as keyof FormData] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    try {
      // Split full name into first/last
      const nameParts = form.name.trim().split(/\s+/);
      const firstName = nameParts[0] || "";
      const lastName = nameParts.slice(1).join(" ") || "-";

      // Strip non-digit characters from phone
      const cleanPhone = form.phone.replace(/\D/g, "");

      // Parse property address into Street, City, State, Zip
      let street = "";
      let city = "";
      let state = "";
      let zip = "";
      const rawAddress = (form.address || "").trim();
      if (rawAddress) {
        const parts = rawAddress.split(",").map((p) => p.trim());
        if (parts.length === 4) {
          street = parts[0];
          city = parts[1];
          state = parts[2];
          zip = parts[3];
        } else if (parts.length === 3) {
          street = parts[0];
          city = parts[1];
          const stateZip = parts[2].trim().split(/\s+/);
          state = stateZip[0] || "";
          zip = stateZip.slice(1).join(" ") || "";
        } else {
          street = rawAddress;
        }
      }

      // Build safety-net Message
      const roofLabel = form.roofType || "Not specified";
      const userMsg = form.message?.trim() || "No message provided";
      const fullMessage = `Property Address: ${rawAddress || "Not provided"}\nRoof Type: ${roofLabel}\n---\n${userMsg}`;

      // Get reCAPTCHA token
      const token = await new Promise<string>((resolve, reject) => {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute(RECAPTCHA_SITE_KEY, { action: "submit" })
            .then(resolve)
            .catch(reject);
        });
      });

      // Build FormData with AccuLynx field names
      const leadData = new window.FormData();
      leadData.append("FirstName", firstName);
      leadData.append("LastName", lastName);
      leadData.append("Email", form.email);
      leadData.append("Phone", cleanPhone);
      leadData.append("Street", street);
      leadData.append("City", city);
      leadData.append("State", state);
      leadData.append("Zip", zip);
      leadData.append("Message", fullMessage);
      leadData.append("RecaptchaToken", token);

      await fetch(ACCULYNX_ENDPOINT, {
        method: "post",
        mode: "no-cors",
        body: leadData,
      });

      // Fire GA4 conversion event
      if (window.gtag) {
        window.gtag("event", "contact_form_submit", {
          event_category: "lead",
          event_label: "contact_page",
        });
      }

      setSubmitted(true);
    } catch (error) {
      console.error("WebLeadForm Submit Error:", error);
      setSubmitError("Something went wrong. Please call us at 702-884-6320 or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full bg-secondary border border-border/50 rounded-md px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors";

  return (
    <>
      <Helmet>
        <title>Contact Zenith Roofing Solutions | Free Roof Inspection Las Vegas</title>
        <meta name="description" content="Contact Zenith Roofing Solutions for a free roof inspection in Las Vegas. Call 702-884-6320 or fill out our online form. Serving all of Southern Nevada." />
        <meta property="og:title" content="Contact Zenith Roofing Solutions | Free Roof Inspection Las Vegas" />
        <meta property="og:description" content="Contact Zenith Roofing Solutions for a free roof inspection in Las Vegas. Call 702-884-6320 or fill out our online form. Serving all of Southern Nevada." />
        <link rel="canonical" href="https://zenithroofingsolutions.com/contact" />
      </Helmet>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/50" />
              <span className="text-xs font-body font-semibold uppercase tracking-[0.3em] text-gold">Contact</span>
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gold-gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-12">
              Ready for a free roof inspection? Have questions? Reach out and we'll respond promptly.
            </p>

            <div className="space-y-6">
              <a href="tel:7028846320" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Phone</p>
                  <p className="font-body font-semibold">702-884-6320</p>
                </div>
              </a>
              <a href="mailto:info@zenithroofingsolutions.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center group-hover:border-gold/50 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Email</p>
                  <p className="font-body font-semibold">info@zenithroofingsolutions.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-body uppercase tracking-wider">Service Area</p>
                  <p className="font-body font-semibold">Southern Nevada</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right">
            {submitted ? (
              <div className="card-luxury p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">Your Message Was Sent!</h3>
                <p className="text-muted-foreground font-body">Thank you — we'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-luxury p-8 lg:p-10 space-y-5">
                <h3 className="font-display text-xl font-semibold mb-2">Request a Free Inspection</h3>
                <div className="gold-line mb-4" />

                {submitError && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-md px-4 py-3 text-sm font-body text-destructive">
                    {submitError}
                  </div>
                )}

                <div>
                  <input type="text" placeholder="Full Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  {errors.name && <p className="text-xs text-destructive mt-1 font-body">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input type="tel" placeholder="Phone *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
                    {errors.phone && <p className="text-xs text-destructive mt-1 font-body">{errors.phone}</p>}
                  </div>
                  <div>
                    <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                    {errors.email && <p className="text-xs text-destructive mt-1 font-body">{errors.email}</p>}
                  </div>
                </div>
                <input type="text" placeholder="Property Address" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className={inputClass} />
                <select value={form.roofType} onChange={(e) => setForm({ ...form, roofType: e.target.value })} className={inputClass}>
                  <option value="">Roof Type</option>
                  <option value="shingle">Shingle</option>
                  <option value="tile">Tile</option>
                  <option value="flat">Flat</option>
                  <option value="other">Other / Not Sure</option>
                </select>
                <textarea placeholder="Message (optional)" rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass + " resize-none"} />
                <button type="submit" className="btn-gold w-full" disabled={submitting}>
                  {submitting ? "Submitting…" : "Submit Request"}
                  {!submitting && <Send className="w-4 h-4" />}
                </button>
                <p className="text-[11px] leading-relaxed text-muted-foreground/70 text-left mt-3">
                  By submitting this form, you consent to being contacted by Zenith Roofing Solutions via phone, email, or text regarding your inquiry. Standard message and data rates may apply.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
      </section>
    </>
  );
};

export default Contact;
