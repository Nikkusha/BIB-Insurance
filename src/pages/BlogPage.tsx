import { useSearchParams, Link } from "react-router-dom";
import { useEffect } from "react";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";

const BLOG_SLUGS = [
  "blog-1", "blog-2", "blog-3", "blog-4", "blog-5", "blog-6", "blog-7",
];

function excerpt(text: string, max: number) {
  if (!text) return "";
  const plain = text.replace(/\n/g, " ");
  return plain.length > max ? plain.slice(0, max).trimEnd() + "…" : plain;
}

export default function BlogPage() {
  const [searchParams] = useSearchParams();
  const { lang, setLang } = useLang();

  useEffect(() => {
    const urlLang = searchParams.get("lang");
    if (urlLang === "en" || urlLang === "ge") setLang(urlLang);
  }, [searchParams, setLang]);

  const d = BIB_DATA[lang];

  return (
    <div className="animate-fade-in flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Page title */}
        <section className="pt-10 pb-4 bg-white">
          <div className="container-bib">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              {d.blogTitle}
            </h1>
            <p className="text-sm text-muted-foreground">{d.blogSubtitle}</p>
          </div>
        </section>

        {/* Blog grid */}
        <section className="py-6 pb-16 md:pb-20">
          <div className="container-bib">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {BLOG_SLUGS.map((slug) => {
                const post = d.pages[slug];
                if (!post) return null;
                const ex = excerpt(post.body || "", 140);
                const href = `/detail/${slug}?lang=${lang}`;
                return (
                  <article
                    key={slug}
                    className="bg-background border border-border rounded-xl flex flex-col overflow-hidden transition-all duration-200 hover:shadow-bib-md hover:-translate-y-0.5"
                    style={{ padding: "20px 20px 0 20px", gap: "10px" }}
                  >
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <Link to={href}>
                      <h2 className="text-base font-bold text-foreground leading-snug hover:text-primary transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{ex}</p>
                    <div
                      className="flex items-center justify-between mt-auto -mx-5 px-5 py-3 bg-primary"
                    >
                      <span className="text-sm font-medium text-white/80">{post.author}</span>
                      <Link to={href} className="text-sm font-medium text-white hover:opacity-75 transition-opacity">
                        {lang === "ge" ? "გაიგე მეტი →" : "Read more →"}
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
