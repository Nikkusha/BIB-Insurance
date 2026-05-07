import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import { useEffect, useState } from "react";
import FormModal from "@/components/bib/FormModal";

export default function DetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "ge") setLang(urlLang);
  }, [searchParams, setLang]);

  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  useEffect(() => {
    setExpanded(false);
    setModalOpen(false);
    setOpenAccordion(null);
  }, [slug]);

  const toggleAccordion = (i: number) => setOpenAccordion(openAccordion === i ? null : i);

  if (!slug) return <Navigate to="/" />;

  const page = BIB_DATA[lang].pages[slug];
  if (!page) return <Navigate to="/not-found" />;

  const d = BIB_DATA[lang];
  const isProduct = !!(page.covers || page.features || page.consider);
  const isBlog = slug.startsWith("blog-");

  return (
    <div className="animate-fade-in flex flex-col min-h-screen">
      <Header />

      {/* Split layout for products */}
      {isProduct ? (
        <section className="container-bib">
          <div className={`flex flex-col lg:flex-row gap-8 lg:gap-12 ${expanded ? "lg:items-start" : "lg:items-center"}`}>
            {/* Left: Sticky visual */}
            <aside className={`lg:w-1/2 lg:flex-none ${expanded ? "pt-8 lg:pt-12 lg:sticky lg:top-24 lg:self-start" : "py-8 lg:py-12"}`}>
              <div className="w-full flex items-center justify-center min-h-[300px] overflow-hidden">
                {["auto-insurance", "property-insurance", "travel-insurance", "health-insurance", "cargo-insurance", "additional-insurance"].includes(slug) ? (
                  <img
                    src={`/detail-${slug.replace("-insurance", "")}.png`}
                    alt={page.title}
                    className="w-full h-auto object-contain max-h-[500px] transform hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10">
                      <span className="text-4xl font-bold text-primary/40">
                        {page.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground/60">{page.title}</p>
                  </div>
                )}
              </div>
            </aside>

            {/* Right: Scrollable content */}
            <main className={`lg:w-1/2 lg:flex-none min-w-0 py-8 ${expanded ? "lg:py-16 lg:pb-24" : "lg:py-12 lg:flex lg:flex-col lg:justify-center"}`}>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight">{page.title}</h1>

              {page.intro && (
                <div className={expanded ? "mb-6" : ""}>
                  <p className={`text-muted-foreground leading-relaxed text-[15px] ${expanded ? "" : "mb-8"}`}>{page.intro}</p>
                  {!expanded && (page.covers || page.features || page.consider) && (
                    <button
                      onClick={() => setExpanded(true)}
                      className="rounded-md border border-primary text-primary px-6 py-2.5 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {lang === "ge" ? "გაიგე მეტი ↓" : "Learn more ↓"}
                    </button>
                  )}
                </div>
              )}

              {expanded && (
                <div className="space-y-8">
                  {page.covers && (
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">{d.accordionLabels.covers}</h2>
                      <ul className="space-y-3 ml-4">
                        {page.covers.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {page.features && (
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">{d.accordionLabels.features}</h2>
                      <ul className="space-y-3 ml-4">
                        {page.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {page.consider && (
                    <div>
                      <h2 className="text-lg md:text-xl font-semibold text-foreground mb-4">{d.accordionLabels.consider}</h2>
                      <ul className="space-y-3 ml-4">
                        {page.consider.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-muted-foreground">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div className="pt-4">
                    <button
                      onClick={() => setModalOpen(true)}
                      className="rounded-md bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {lang === "ge" ? "დაგვიკავშირდით" : "Get a Quote"}
                    </button>
                  </div>
                </div>
              )}
            </main>
          </div>
        </section>
      ) : (
        /* Non-product pages */
        <section className="section-padding flex-1 min-h-[calc(100vh-var(--header-h,80px)-var(--footer-h,200px))]">
          <div className="container-bib">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{page.title}</h1>
              {isBlog && page.date && (
                <p className="mt-2 text-muted-foreground text-sm">{page.date} • {page.author || "BIB Team"}</p>
              )}
            </div>

            <div className="max-w-2xl">
              {page.body && (
                <div
                  className="page-body text-foreground leading-relaxed whitespace-pre-line text-[15px]"
                  dangerouslySetInnerHTML={{ __html: page.body }}
                />
              )}
              {page.bodyExtra && (
                <div
                  className="mt-6 text-foreground leading-relaxed whitespace-pre-line text-[15px]"
                  dangerouslySetInnerHTML={{ __html: page.bodyExtra }}
                />
              )}
              {page.subcategories && (
                <ul className="space-y-3 mt-6">
                  {page.subcategories.map((sc, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0" />
                      {sc}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {page.pageAccordion && (
              <div className="flex flex-col gap-3 mt-8 w-full">
                {page.pageAccordion.map((item, i) => (
                  <div
                    key={i}
                    className="border border-border rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-background hover:bg-muted transition-colors"
                    >
                      <span className="font-semibold text-foreground text-base leading-snug">
                        {item.title}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${openAccordion === i ? "rotate-180" : ""
                          }`}
                      />
                    </button>

                    {openAccordion === i && (
                      <div className="px-6 pb-5 pt-1 bg-background border-t border-border">
                        {item.content.split("\n\n").map((para, j) => (
                          <p
                            key={j}
                            className="text-muted-foreground text-sm leading-relaxed mt-3 first:mt-0"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
