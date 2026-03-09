import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    setSubmitted(true);
  };

  const inputClass = "w-full bg-secondary border border-border/50 rounded-md px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors";

  return (
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
                <h3 className="font-display text-2xl font-semibold mb-3">Message Received</h3>
                <p className="text-muted-foreground font-body">Thank you for reaching out. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-luxury p-8 lg:p-10 space-y-5">
                <h3 className="font-display text-xl font-semibold mb-2">Request a Free Inspection</h3>
                <div className="gold-line mb-4" />

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
                <button type="submit" className="btn-gold w-full">
                  Submit Request
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
