import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";

export default function TermsPage() {
  const { lang } = useLang();
  const d = BIB_DATA[lang];

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <Header />

      <main className="flex-1 py-16">
        <div className="container-bib max-w-3xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            {d.termsTitle}
          </h1>

          <div className="flex flex-col gap-8">
            {d.termsSections.map((section, i) => (
              <div key={i}>
                <h2 className="text-base font-semibold text-foreground mb-2">
                  {i + 1}. {section.heading}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} className="text-sm text-muted-foreground leading-relaxed mb-2">
                    {para}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-2 flex flex-col gap-1">
                    {section.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
