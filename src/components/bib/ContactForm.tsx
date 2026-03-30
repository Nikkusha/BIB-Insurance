import { useState, type FormEvent } from "react";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";

interface ContactFormProps {
  compact?: boolean;
  showProductSelect?: boolean;
}

export default function ContactForm({ compact = false, showProductSelect = false }: ContactFormProps) {
  const { lang } = useLang();
  const t = BIB_DATA[lang].formLabels;
  const products = BIB_DATA[lang].productsDropdown;
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = (fd.get("name") as string || "").trim();
    const phone = (fd.get("phone") as string || "").trim();
    const consent = fd.get("consent");

    const newErrors: Record<string, string> = {};
    if (!name) newErrors.name = t.required;
    if (!phone) newErrors.phone = t.required;
    if (!consent) newErrors.consent = t.required;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg bg-primary-light p-6 text-center">
        <p className="text-primary font-medium">{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="cf-name" className="block text-sm font-medium text-foreground mb-1">{t.name} *</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
          maxLength={100}
          className="w-full rounded-lg border border-[#e4d8c9] bg-[#f7f5f0] px-3 h-10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={t.name}
        />
        {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="cf-phone" className="block text-sm font-medium text-foreground mb-1">{t.phone} *</label>
        <input
          id="cf-phone"
          name="phone"
          type="tel"
          required
          maxLength={20}
          className="w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label={t.phone}
        />
        {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
      </div>
      {showProductSelect && (
        <div>
          <label htmlFor="cf-product" className="block text-sm font-medium text-foreground mb-1">{t.insuranceType}</label>
          <select
            id="cf-product"
            name="product"
            className="w-full rounded-lg border border-[#e4d8c9] bg-[#f7f5f0] px-3 h-10 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={t.insuranceType}
            defaultValue=""
          >
            <option value="" disabled>{t.insuranceTypePlaceholder}</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>{p.label}</option>
            ))}
          </select>
        </div>
      )}
      {!compact && (
        <div>
          <label htmlFor="cf-msg" className="block text-sm font-medium text-foreground mb-1">{t.message}</label>
          <textarea
            id="cf-msg"
            name="message"
            rows={3}
            maxLength={1000}
            className="w-full rounded-lg border border-[#e4d8c9] bg-[#f7f5f0] px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            aria-label={t.message}
          />
        </div>
      )}
      <div className="flex items-start gap-2">
        <input
          id="cf-consent"
          name="consent"
          type="checkbox"
          value="yes"
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
          aria-label={t.consent}
        />
        <label htmlFor="cf-consent" className="text-xs text-muted-foreground leading-snug">{t.consent}</label>
      </div>
      {errors.consent && <p className="text-destructive text-xs">{errors.consent}</p>}
      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-5 h-11 text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-colors"
      >
        {t.submit}
      </button>
    </form>
  );
}
