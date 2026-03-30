import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import ContactForm from "@/components/bib/ContactForm";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "ge") setLang(urlLang);
  }, [searchParams, setLang]);

  const d = BIB_DATA[lang];

  const infoItems = [
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      label: lang === "ge" ? "მისამართი" : "Address",
      value: d.footerContact.address,
      href: undefined,
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      label: lang === "ge" ? "ტელეფონი" : "Phone",
      value: d.footerContact.phone,
      href: `tel:${d.footerContact.phone}`,
    },
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      label: lang === "ge" ? "ელ-ფოსტა" : "Email",
      value: d.footerContact.email,
      href: `mailto:${d.footerContact.email}`,
    },
  ];

  return (
    <div className="animate-fade-in">
      <Header />

      {/* Form section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="mx-auto w-full max-w-[480px]">
          <h2 className="text-xl md:text-[26px] font-semibold text-center text-foreground mb-3">
            {d.ctaSectionTitle}
          </h2>
          <p className="text-sm text-muted-foreground text-center mb-8">
            {d.ctaSectionSubtitle}
          </p>
          <div className="rounded-[12px] bg-background border border-border/50 p-8 shadow-[0px_8px_32px_rgba(0,0,0,0.10)]">
            <ContactForm showProductSelect />
          </div>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="py-12 px-4 md:px-8 bg-muted">
        <div className="container-bib">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border/50 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors break-all">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium text-foreground">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
