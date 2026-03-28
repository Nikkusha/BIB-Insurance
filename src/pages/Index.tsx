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

  // Hero slider
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = d.heroSlides.length;
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slideCount);
    }, 5000);
  }, [slideCount]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const moveSlide = (dir: number) => {
    setCurrentSlide((p) => (p + dir + slideCount) % slideCount);
    startTimer();
  };

  // Product slider
  const [activeProduct, setActiveProduct] = useState(0);
  const productCount = d.productAccordion.length;

  return (
    <div className="animate-fade-in">
      <Header />

      {/* ===== HERO SLIDER ===== */}
      <section className="relative bg-primary overflow-hidden" style={{ minHeight: "480px" }}>
        {d.heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center transition-opacity duration-700 ${i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            <div className="absolute inset-0 bg-primary" />
            <div className="container-bib relative z-10 py-16 md:py-24">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 text-primary-foreground leading-tight">
                  {slide.title}
                </h1>
                <p className="text-base md:text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="rounded-md bg-background text-primary px-6 py-3 font-medium hover:bg-muted transition-colors"
                  >
                    {d.heroCtaPrimary}
                  </button>
                  <a
                    href="#services"
                    className="rounded-md border border-primary-foreground/30 text-primary-foreground px-6 py-3 font-medium hover:bg-primary-foreground/10 transition-colors"
                  >
                    {d.heroCtaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => moveSlide(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 backdrop-blur p-2 text-primary-foreground hover:bg-background/40 transition-colors" aria-label="Previous slide">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => moveSlide(1)} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-background/20 backdrop-blur p-2 text-primary-foreground hover:bg-background/40 transition-colors" aria-label="Next slide">
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {d.heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentSlide(i); startTimer(); }}
              className={`h-2 rounded-full transition-all ${i === currentSlide ? "w-6 bg-primary-foreground" : "w-2 bg-primary-foreground/40"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
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
                <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS FULL-WIDTH SLIDER ===== */}
      <section className="section-padding bg-muted">
        <div className="container-bib">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-10">{d.productsTitle}</h2>

          <div className="relative">
            {/* Slider content */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeProduct * 100}%)` }}
              >
                {d.productAccordion.map((p, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-2">
                    <div className="rounded-lg bg-primary p-8 md:p-12 text-primary-foreground">
                      <div className="max-w-3xl mx-auto">
                        <span className="text-primary-foreground/30 text-5xl font-bold block mb-2">{i + 1}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
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
              </div>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={() => setActiveProduct((p) => (p - 1 + productCount) % productCount)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 rounded-full bg-background border border-border shadow-bib p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActiveProduct((p) => (p + 1) % productCount)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 rounded-full bg-background border border-border shadow-bib p-2 text-foreground hover:bg-muted transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {d.productAccordion.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProduct(i)}
                  className={`h-2 rounded-full transition-all ${i === activeProduct ? "w-6 bg-primary" : "w-2 bg-border"}`}
                  aria-label={`Product ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-dark transition-colors"
            >
              {d.productCtaLabel}
            </button>
          </div>
        </div>
      </section>

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
        <div className="container-bib max-w-2xl">
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
            <ContactForm />
          </div>
        </div>
      )}
    </div>
  );
}
