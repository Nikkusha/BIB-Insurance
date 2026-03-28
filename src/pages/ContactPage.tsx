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

  return (
    <div className="animate-fade-in">
      <Header />
      <section className="bg-primary text-primary-foreground">
        <div className="container-bib py-10 md:py-16">
          <h1 className="text-2xl md:text-4xl font-bold text-primary-foreground">{d.contactPageTitle}</h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-bib">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Map placeholder */}
            <div className="rounded-lg border border-border bg-muted p-8 flex flex-col justify-center min-h-[320px]">
              <div className="bg-primary-light rounded-lg p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">{lang === "ge" ? "ჩვენი ოფისი" : "Our Office"}</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    {d.footerContact.address}
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href={`tel:${d.footerContact.phone}`} className="hover:text-primary transition-colors">{d.footerContact.phone}</a>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href={`mailto:${d.footerContact.email}`} className="hover:text-primary transition-colors">{d.footerContact.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-lg border border-border bg-background p-6 md:p-8 shadow-bib">
              <h2 className="text-lg font-semibold text-foreground mb-6">{d.formLabels.requestConsultation}</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
