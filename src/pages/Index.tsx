import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import ContactForm from "@/components/bib/ContactForm";
import LogoCarousel from "@/components/bib/LogoCarousel";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function Index() {
  const { lang } = useLang();
  const d = BIB_DATA[lang];
  const [modalOpen, setModalOpen] = useState(false);

  // Product slider
  const [activeProduct, setActiveProduct] = useState(0);
  const productCount = d.productAccordion.length;
  const productTimerRef = useRef<ReturnType<typeof setInterval>>();

  const startProductTimer = useCallback(() => {
    clearInterval(productTimerRef.current);
    productTimerRef.current = setInterval(() => {
      setActiveProduct((p) => (p + 1) % productCount);
    }, 5000);
  }, [productCount]);

  useEffect(() => {
    startProductTimer();
    return () => clearInterval(productTimerRef.current);
  }, [startProductTimer]);

  const moveProduct = (dir: number) => {
    setActiveProduct((p) => (p + dir + productCount) % productCount);
    startProductTimer();
  };

  return (
    <div className="animate-fade-in">
      <Header />

      {/* ===== HERO STATIC ===== */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "480px",
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-bib relative z-10 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary leading-tight">
              {d.heroSlides[0].title}
            </h1>
            <p className="text-base md:text-lg text-primary/70 mb-8 leading-relaxed">
              {d.heroSlides[0].subtitle}
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-md bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary-dark transition-colors"
              >
                {d.heroCtaPrimary}
              </button>
              <a
                href="#services"
                className="rounded-md border border-primary text-primary px-6 py-3 font-medium hover:bg-primary/10 transition-colors"
              >
                {d.heroCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (4-column with gold dividers) ===== */}
      <section id="services" className="section-padding">
        <div className="container-bib">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-3">{d.servicesTitle}</h2>
          <p className="text-sm text-muted-foreground text-center mb-12 max-w-2xl mx-auto">{d.servicesSubheading}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {d.services.map((s, i) => (
              <div
                key={i}
                className={`px-6 py-4 ${i > 0 ? "lg:border-l" : ""}`}
                style={i > 0 ? { borderLeftColor: "#D6C476" } : undefined}
              >
                <h3 className="font-bold text-foreground mb-2 text-lg">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.body}</p>
                <button
                  onClick={() => setModalOpen(true)}
                  className="text-sm font-medium text-primary border border-primary rounded-md px-4 py-1.5 hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {lang === "ge" ? "დეტალები" : "Details"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS FULL-WIDTH SLIDER ===== */}
      {(() => {
        const productImages: Record<string, string> = {
          "auto-insurance": "/product-auto.png",
          "property-insurance": "/product-property.png",
          "travel-insurance": "/product-auto.png",
          "health-insurance": "/product-health.png",
          "cargo-insurance": "/product-cargo.png",
        };
        return (
          <section className="relative overflow-hidden" style={{ minHeight: "480px" }}>
            {d.productAccordion.map((p, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center transition-opacity duration-700 ${i === activeProduct ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                style={{
                  backgroundImage: `url('${productImages[p.slug] || "/hero.png"}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-primary/75" />
                <div className="container-bib relative z-10 py-16 md:py-24 w-full">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">{p.title}</h3>
                    <p className="text-primary-foreground/80 mb-6 text-base leading-relaxed">{p.desc}</p>
                    <ul className="grid grid-cols-2 gap-3 mb-8">
                      {p.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-center gap-2 text-sm text-primary-foreground/80">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground/50 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/detail/${p.slug}?lang=${lang}`}
                      className="inline-flex items-center gap-2 rounded-md bg-background text-primary px-6 py-3 font-medium hover:bg-muted transition-colors"
                    >
                      {lang === "ge" ? "გაიგეთ მეტი" : "Learn more"} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => moveProduct(-1)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 backdrop-blur p-2 text-primary-foreground hover:bg-background/40 transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => moveProduct(1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 backdrop-blur p-2 text-primary-foreground hover:bg-background/40 transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {d.productAccordion.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveProduct(i); startProductTimer(); }}
                  className={`h-2 rounded-full transition-all ${i === activeProduct ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"}`}
                  aria-label={`Product ${i + 1}`}
                />
              ))}
            </div>
          </section>
        );
      })()}

      {/* ===== PARTNERS (right to left) ===== */}
      <div className="bg-background">
        <LogoCarousel title={d.partnersTitle} items={d.partners} direction="left" />
      </div>

      {/* ===== CLIENTS (left to right) ===== */}
      <div className="bg-muted">
        <LogoCarousel title={d.clientsTitle} items={d.clients} direction="right" />
      </div>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section id="contact" className="section-padding bg-primary">
        <div className="container-bib max-w-lg">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-primary-foreground mb-2">{d.ctaSectionTitle}</h2>
          <p className="text-sm text-primary-foreground/70 text-center mb-8">{d.ctaSectionSubtitle}</p>
          <div className="rounded-lg bg-background p-6 md:p-8 shadow-bib-md">
            <ContactForm showProductSelect />
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/50 backdrop-blur-sm animate-fade-in" onClick={() => setModalOpen(false)}>
          <div className="relative w-full max-w-md mx-4 rounded-lg bg-background p-6 shadow-bib-lg" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModalOpen(false)} className="absolute top-3 right-3 text-muted-foreground hover:text-foreground text-xl">×</button>
            <h2 className="text-lg font-semibold text-foreground mb-4">{d.formLabels.fillForm}</h2>
            <ContactForm showProductSelect />
          </div>
        </div>
      )}
    </div>
  );
}
