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
          minHeight: "800px",
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container-bib relative z-10 py-16 md:py-24 w-full">
          <div className="max-w-[620px] flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl md:text-[52px] font-bold text-primary leading-tight">
                {d.heroSlides[0].title}
              </h1>
              <p className="text-base md:text-lg text-primary/70 leading-relaxed">
                {d.heroSlides[0].subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="rounded-lg bg-primary text-primary-foreground px-6 h-[50px] min-w-[188px] font-medium hover:bg-primary-dark transition-colors"
              >
                {d.heroCtaPrimary}
              </button>
              <a
                href="#services"
                className="rounded-lg border border-primary text-primary px-6 h-[50px] min-w-[164px] flex items-center justify-center font-medium hover:bg-primary/10 transition-colors"
              >
                {d.heroCtaSecondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (4-column with gold dividers) ===== */}
      <section id="services" className="py-16 px-4 md:px-8">
        <div className="container-bib w-full">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-5 text-center max-w-[540px]">
              <h2 className="text-2xl md:text-[30px] font-bold text-foreground">{d.servicesTitle}</h2>
              <p className="text-sm text-muted-foreground">{d.servicesSubheading}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {(() => {
                const serviceSlugs = ["consulting", "negotiation", "claims", "reinsurance"];
                return d.services.map((s, i) => (
                  <div key={i} className="flex flex-row gap-[30px]">
                    {/* gold accent bar */}
                    <div className="w-px self-stretch shrink-0" style={{ backgroundColor: "#d6c476" }} />
                    {/* content */}
                    <div className="flex flex-col gap-[62px] w-[256px] max-w-full">
                      <div className="flex flex-col gap-5">
                        <h3 className="font-bold text-foreground text-lg leading-snug">{s.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed h-[100px] overflow-hidden">{s.body}</p>
                      </div>
                      <a
                        href={`/service-detail.html?slug=${serviceSlugs[i]}&lang=${lang}`}
                        className="self-start text-[13px] text-primary border border-primary rounded-md px-4 h-[34px] flex items-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {lang === "ge" ? "დეტალები" : "Details"}
                      </a>
                    </div>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS FULL-WIDTH SLIDER ===== */}
      {(() => {
        const productImages: Record<string, string> = {
          "auto-insurance": "/product-auto.png",
          "property-insurance": "/product-property.png",
          "travel-insurance": "/product-travel.png",
          "health-insurance": "/product-health.png",
          "cargo-insurance": "/product-cargo.png",
        };
        return (
          <section className="relative overflow-hidden" style={{ minHeight: "700px" }}>
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
                <div className="container-bib relative z-10 py-16 w-full">
                  <div className="max-w-3xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">{p.title}</h3>
                    <p className="text-primary-foreground/80 mb-6 text-base leading-relaxed">{p.desc}</p>
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
        );
      })()}

      {/* ===== PARTNERS (right to left) ===== */}
      <div className="bg-background">
        <LogoCarousel title={d.partnersTitle} direction="left" />
      </div>

      {/* ===== CLIENTS (left to right) ===== */}
      <div className="bg-muted">
        <LogoCarousel title={d.clientsTitle} direction="right" />
      </div>

      {/* ===== BLOG PREVIEW ===== */}
      <section id="blog" className="py-16 px-4 md:px-8 bg-background">
        <div className="container-bib w-full">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col items-center gap-4 text-center max-w-[540px]">
              <h2 className="text-2xl md:text-[30px] font-bold text-foreground">{d.blogTitle}</h2>
              <p className="text-sm text-muted-foreground">{d.blogSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {(["blog-1", "blog-2", "blog-3"] as const).map((slug) => {
                const post = d.pages[slug];
                if (!post) return null;
                const bodyExcerpt = post.body ? post.body.split("\n\n")[0].substring(0, 140) + "…" : "";
                return (
                  <article
                    key={slug}
                    className="bg-background border border-border/50 rounded-xl p-5 flex flex-col gap-3 hover:shadow-bib-md transition-shadow"
                  >
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <a href={`/blog-detail.html?slug=${slug}&lang=${lang}`}>
                      <h3 className="text-base font-medium text-foreground leading-snug hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                    </a>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{bodyExcerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                      <a
                        href={`/blog-detail.html?slug=${slug}&lang=${lang}`}
                        className="text-sm font-medium text-primary hover:opacity-75 transition-opacity"
                      >
                        {lang === "ge" ? "გაიგე მეტი →" : "Read more →"}
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
            <a
              href={`/blog.html?lang=${lang}`}
              className="text-sm font-medium text-primary border border-primary rounded-lg px-6 h-[42px] flex items-center hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {lang === "ge" ? "ყველა სტატია →" : "All articles →"}
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT FORM SECTION ===== */}
      <section
        id="contact"
        className="relative overflow-hidden min-h-[640px] pt-12 pb-16 px-4 md:px-8"
        style={{
          backgroundImage: "url('/contact-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 mx-auto w-full max-w-[480px]">
          <h2 className="text-xl md:text-[26px] font-semibold text-center text-primary-foreground mb-3">{d.ctaSectionTitle}</h2>
          <p className="text-sm text-primary-foreground/70 text-center mb-8">{d.ctaSectionSubtitle}</p>
          <div className="rounded-[12px] bg-background p-8 shadow-[0px_8px_32px_rgba(0,0,0,0.16)]">
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
