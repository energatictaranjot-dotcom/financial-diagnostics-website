import React, { useState } from "react";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { Testimonial } from "@/config/siteConfig";
import { useLocation } from "wouter";
import { CheckCircle, Plus, Trash2, ArrowLeft, Save } from "lucide-react";

export default function Admin() {
  const { config, updateConfig } = useSiteConfig();
  const [form, setForm] = useState({ ...config });
  const [saved, setSaved] = useState(false);
  const [, setLocation] = useLocation();

  const set = (key: string, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const setTestimonial = (idx: number, field: keyof Testimonial, value: string) => {
    const updated = form.testimonials.map((t, i) =>
      i === idx ? { ...t, [field]: value } : t
    );
    set("testimonials", updated);
  };

  const addTestimonial = () =>
    set("testimonials", [...form.testimonials, { name: "", profession: "", quote: "" }]);

  const removeTestimonial = (idx: number) =>
    set("testimonials", form.testimonials.filter((_, i) => i !== idx));

  const handleSave = () => {
    updateConfig(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <button
              onClick={() => setLocation("/")}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-3"
            >
              <ArrowLeft size={16} /> Back to Website
            </button>
            <h1 className="font-serif text-3xl font-bold gold-gradient-text">Site Settings</h1>
            <p className="text-muted-foreground mt-1">Update your website details. Changes save instantly.</p>
          </div>
          <button
            onClick={handleSave}
            data-testid="button-save"
            className="flex items-center gap-2 px-6 py-3 rounded-sm bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold hover:opacity-90 transition-opacity"
          >
            {saved ? <CheckCircle size={18} /> : <Save size={18} />}
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        {/* Section: Contact Info */}
        <Section title="Contact Information">
          <Field label="Phone Number (with country code, e.g. +919873200740)">
            <input data-testid="input-phone" value={form.phone} onChange={e => set("phone", e.target.value)}
              className="admin-input" placeholder="+919873200740" />
          </Field>
          <Field label="WhatsApp Number (digits only, e.g. 919873200740)">
            <input data-testid="input-whatsapp" value={form.whatsapp} onChange={e => set("whatsapp", e.target.value)}
              className="admin-input" placeholder="919873200740" />
          </Field>
          <Field label="Email Address">
            <input data-testid="input-email" value={form.email} onChange={e => set("email", e.target.value)}
              className="admin-input" placeholder="you@example.com" />
          </Field>
          <Field label="Office Address">
            <input data-testid="input-address" value={form.address} onChange={e => set("address", e.target.value)}
              className="admin-input" placeholder="Full office address" />
          </Field>
          <Field label="City for Google Maps (e.g. Noida,Delhi+NCR)">
            <input data-testid="input-maps" value={form.mapsQuery} onChange={e => set("mapsQuery", e.target.value)}
              className="admin-input" placeholder="Noida,Delhi+NCR" />
          </Field>
        </Section>

        {/* Section: Company Stats */}
        <Section title="Hero Statistics">
          <div className="grid grid-cols-3 gap-4">
            <Field label="Assets Managed (₹ Cr)">
              <input data-testid="input-assets" value={form.statAssets} onChange={e => set("statAssets", e.target.value)}
                className="admin-input" placeholder="500" />
            </Field>
            <Field label="Happy Families">
              <input data-testid="input-families" value={form.statFamilies} onChange={e => set("statFamilies", e.target.value)}
                className="admin-input" placeholder="2000" />
            </Field>
            <Field label="Years Experience">
              <input data-testid="input-years" value={form.statYears} onChange={e => set("statYears", e.target.value)}
                className="admin-input" placeholder="15" />
            </Field>
          </div>
        </Section>

        {/* Section: Company Info */}
        <Section title="Company Details">
          <Field label="Founded Year">
            <input data-testid="input-founded" value={form.foundedYear} onChange={e => set("foundedYear", e.target.value)}
              className="admin-input" placeholder="2009" />
          </Field>
          <Field label="Tagline (shown in footer)">
            <input data-testid="input-tagline" value={form.tagline} onChange={e => set("tagline", e.target.value)}
              className="admin-input" placeholder="Your Trusted Financial Partner" />
          </Field>
          <Field label="AMFI ARN Number">
            <input data-testid="input-amfi" value={form.amfiArn} onChange={e => set("amfiArn", e.target.value)}
              className="admin-input" placeholder="ARN-187276" />
          </Field>
          <Field label="">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                data-testid="input-irda"
                type="checkbox"
                checked={form.irdaCertified}
                onChange={e => set("irdaCertified", e.target.checked)}
                className="w-5 h-5 accent-[#C9A84C] rounded"
              />
              <span className="text-white font-medium">IRDA Certified Advisor</span>
            </label>
          </Field>
        </Section>

        {/* Section: Social Media */}
        <Section title="Social Media Links">
          <Field label="Instagram URL">
            <input data-testid="input-instagram" value={form.instagram} onChange={e => set("instagram", e.target.value)}
              className="admin-input" placeholder="https://instagram.com/yourhandle" />
          </Field>
          <Field label="LinkedIn URL">
            <input data-testid="input-linkedin" value={form.linkedin} onChange={e => set("linkedin", e.target.value)}
              className="admin-input" placeholder="https://linkedin.com/in/yourprofile" />
          </Field>
          <Field label="Twitter / X URL">
            <input data-testid="input-twitter" value={form.twitter} onChange={e => set("twitter", e.target.value)}
              className="admin-input" placeholder="https://twitter.com/yourhandle" />
          </Field>
          <Field label="Facebook URL">
            <input data-testid="input-facebook" value={form.facebook} onChange={e => set("facebook", e.target.value)}
              className="admin-input" placeholder="https://facebook.com/yourpage" />
          </Field>
        </Section>

        {/* Section: Testimonials */}
        <Section title="Client Testimonials">
          <p className="text-muted-foreground text-sm mb-4">Add real client testimonials to build trust.</p>
          {form.testimonials.map((t, idx) => (
            <div key={idx} className="glass-card p-5 rounded-xl mb-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-primary font-semibold text-sm">Testimonial {idx + 1}</span>
                <button
                  data-testid={`button-remove-testimonial-${idx}`}
                  onClick={() => removeTestimonial(idx)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <Field label="Client Name">
                  <input data-testid={`input-testimonial-name-${idx}`} value={t.name}
                    onChange={e => setTestimonial(idx, "name", e.target.value)}
                    className="admin-input" placeholder="Rahul S." />
                </Field>
                <Field label="Profession & City">
                  <input data-testid={`input-testimonial-profession-${idx}`} value={t.profession}
                    onChange={e => setTestimonial(idx, "profession", e.target.value)}
                    className="admin-input" placeholder="Business Owner, Delhi" />
                </Field>
              </div>
              <Field label="Quote">
                <textarea data-testid={`input-testimonial-quote-${idx}`} value={t.quote}
                  onChange={e => setTestimonial(idx, "quote", e.target.value)}
                  rows={3} className="admin-input resize-none" placeholder="What the client said..." />
              </Field>
            </div>
          ))}
          <button
            data-testid="button-add-testimonial"
            onClick={addTestimonial}
            className="flex items-center gap-2 text-primary hover:text-[#F0D090] transition-colors text-sm font-medium mt-2"
          >
            <Plus size={16} /> Add Testimonial
          </button>
        </Section>

        {/* Save at bottom too */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            data-testid="button-save-bottom"
            className="flex items-center gap-2 px-8 py-3 rounded-sm bg-gradient-to-r from-[#C9A84C] to-[#E2B96F] text-background font-semibold hover:opacity-90 transition-opacity"
          >
            {saved ? <CheckCircle size={18} /> : <Save size={18} />}
            {saved ? "Saved!" : "Save All Changes"}
          </button>
        </div>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-serif text-xl font-semibold text-white mb-5 pb-3 border-b border-primary/20">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      {label && <label className="block text-muted-foreground text-sm mb-1.5">{label}</label>}
      {children}
    </div>
  );
}
