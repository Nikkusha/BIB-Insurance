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
        className="relative overflow-hidden flex items-center min-h-[520px] md:min-h-[700px]"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
        }}
      >
        {/* Mobile overlay for readability */}
        <div className="absolute inset-0 bg-background/55 md:hidden" />
        <div className="container-bib relative z-10 py-10 md:py-24 w-full">
          <div className="max-w-[900px] flex flex-col gap-7 md:gap-10">
            <div className="flex flex-col gap-3 md:gap-5">
              <h1 className="text-[22px] md:text-[52px] font-bold text-primary leading-tight">
                {d.heroSlides[0].title}
              </h1>
              {d.heroSlides[0].subtitleItems ? (
                <div className="text-sm md:text-lg text-primary/70 leading-relaxed flex flex-col gap-2">
                  <span>{d.heroSlides[0].subtitlePrefix}</span>
                  <ul className="flex flex-col gap-1 mt-1">
                    {d.heroSlides[0].subtitleItems.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-sm md:text-lg text-primary/70 leading-relaxed">
                  {d.heroSlides[0].subtitle}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-lg bg-primary text-primary-foreground px-4 md:px-6 h-[42px] md:h-[50px] text-sm md:text-base font-medium hover:bg-primary-dark transition-colors"
              >
                {d.heroCtaPrimary}
              </button>
              <a
                href="#services"
                className="rounded-lg border border-primary text-primary px-4 md:px-6 h-[42px] md:h-[50px] flex items-center justify-center text-sm md:text-base font-medium hover:bg-primary/10 transition-colors"
              >
                {d.heroCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (4-column dark cards) ===== */}
      <section id="services" className="py-10 md:py-16">
        <div className="container-bib w-full">
          <div className="flex flex-col items-center gap-6 md:gap-10">
            <h2 className="text-lg md:text-[30px] font-bold text-foreground text-center max-w-[760px] leading-snug px-2">
              {d.servicesTitle}
            </h2>

            {/* MOBILE: horizontal scroll */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-3 w-full pb-2 scrollbar-hide">
              {d.services.map((s, i) => (
                <div key={i} className="snap-center shrink-0 w-[78vw] bg-primary rounded-xl p-5 flex flex-col gap-4">
                  <h3 className="font-bold text-primary-foreground text-sm leading-snug">{s.title}</h3>
                  <div className="flex flex-col gap-3">
                    {s.bodyItems
                      ? s.bodyItems.map((para, j) => (
                          <p key={j} className="text-xs text-primary-foreground/70 leading-relaxed">{para}</p>
                        ))
                      : <p className="text-xs text-primary-foreground/70 leading-relaxed">{s.body}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP: 4-column grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {d.services.map((s, i) => (
                <div key={i} className="bg-primary rounded-xl p-6 flex flex-col gap-5">
                  <h3 className="font-bold text-primary-foreground text-base leading-snug">{s.title}</h3>
                  <div className="flex flex-col gap-4">
                    {s.bodyItems
                      ? s.bodyItems.map((para, j) => (
                          <p key={j} className="text-sm text-primary-foreground/70 leading-relaxed">{para}</p>
                        ))
                      : <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.body}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      {(() => {
        const productImages: Record<string, string> = {
          "auto-insurance": "/product-auto.png",
          "property-insurance": "/product-property.png",
          "travel-insurance": "/product-travel.png",
          "health-insurance": "/product-health.png",
          "cargo-insurance": "/product-cargo.png",
          "additional-insurance": "/hero.png",
        };
        return (
          <>
            {/* MOBILE: horizontal scroll cards */}
            <section className="md:hidden py-8 overflow-hidden bg-muted">
              <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 px-4 pb-4 scrollbar-hide">
                {d.productAccordion.map((p, i) => (
                  <div key={i} className="snap-center shrink-0 w-[78vw] rounded-xl overflow-hidden shadow-bib-md flex flex-col">
                    <div
                      className="h-40 shrink-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${productImages[p.slug] || "/hero.png"}')` }}
                    />
                    <div className="bg-primary p-4 flex flex-col gap-2.5 flex-1">
                      <h3 className="text-sm font-bold text-primary-foreground leading-snug">{p.title}</h3>
                      <p className="text-xs text-primary-foreground/80 leading-relaxed line-clamp-3">{p.desc}</p>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-background text-primary px-3 py-2 text-xs font-medium self-start mt-1"
                      >
                        {lang === "ge" ? "შეთავაზება" : "Get a Quote"} <ArrowRight className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* DESKTOP: full-screen slider */}
            <section className="hidden md:block relative overflow-hidden" style={{ minHeight: "700px" }}>
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
                  <div className="container-bib relative z-10 py-16 w-full">
                    <div className="max-w-[600px]">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">{p.title}</h3>
                      <p className="text-primary-foreground/80 mb-6 text-base leading-relaxed">{p.desc}</p>
                      <button
                        onClick={() => setModalOpen(true)}
                        className="inline-flex items-center gap-2 rounded-md bg-background text-primary px-6 py-3 font-medium hover:bg-muted transition-colors"
                      >
                        {lang === "ge" ? "მიიღე შეთავაზება" : "Get a Quote"} <ArrowRight className="h-4 w-4" />
                      </button>
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
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 items-center">
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
          </>
        );
      })()}

      {/* ===== PARTNERS (right to left) ===== */}
      <div className="bg-background">
        <LogoCarousel title={d.partnersTitle} direction="left" />
      </div>

      {/* ===== CLIENTS (left to right) ===== */}
      <div className="bg-primary">
        <LogoCarousel title={d.clientsTitle} direction="right" titleClass="text-primary-foreground" variant="clients" />
      </div>

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
