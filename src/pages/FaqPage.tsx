import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";

export default function FaqPage() {
  const { lang } = useLang();
  const d = BIB_DATA[lang];
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="min-h-screen flex flex-col animate-fade-in">
      <Header />

      <main className="flex-1">
        {/* Accordion */}
        <section className="py-16">
          <div className="container-bib max-w-3xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">{d.faqTitle}</h1>
            </div>

          <div className="flex flex-col gap-3">
              {d.faq.map((item, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-background hover:bg-muted transition-colors"
                  >
                    <span className="font-semibold text-foreground text-base leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        open === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open === i && (
                    <div className="px-6 pb-5 pt-1 bg-background border-t border-border">
                      {item.a.split("\n\n").map((para, j) => (
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
