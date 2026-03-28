import { useParams, useSearchParams, Link, Navigate } from "react-router-dom";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import { useEffect } from "react";

export default function DetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [searchParams] = useSearchParams();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "ge") setLang(urlLang);
  }, [searchParams, setLang]);

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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left: Sticky visual */}
            <aside className="lg:flex-1 lg:sticky lg:top-24 lg:self-start pt-8 lg:pt-12">
              <div className="w-full aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-bib-md flex items-center justify-center">
                {["auto-insurance","property-insurance","travel-insurance","health-insurance","cargo-insurance"].includes(slug) ? (
                  <img
                    src={`/product-${slug.replace("-insurance","")}.png`}
                    alt={page.title}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {page.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{page.title}</p>
                  </div>
                )}
              </div>
            </aside>

            {/* Right: Scrollable content */}
            <main className="lg:flex-1 py-8 lg:py-16 lg:pb-24">
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{page.title}</h1>

              {page.intro && (
                <p className="text-muted-foreground leading-relaxed mb-8 text-base border-b border-border pb-6">
                  {page.intro}
                </p>
              )}

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
              </div>

              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="mt-10 rounded-md bg-foreground px-6 py-3 text-sm font-semibold uppercase tracking-wider text-background hover:bg-primary transition-colors"
              >
                {page.cta || d.formLabels.requestConsultation} →
              </button>
            </main>
          </div>
        </section>
      ) : (
        /* Non-product pages */
        <section className="section-padding flex-1 min-h-[calc(100vh-var(--header-h,80px)-var(--footer-h,200px))]">
          <div className="container-bib">
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl font-bold text-foreground">{page.title}</h1>
              {isBlog && page.date && (
                <p className="mt-2 text-muted-foreground text-sm">{page.date} • {page.author || "BIB Team"}</p>
              )}
            </div>

            <div className="max-w-2xl">
              {page.body && (
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{page.body}</div>
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
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
