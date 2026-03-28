import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "@/data/bibData";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: "ge",
  toggleLang: () => {},
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem("bib-lang");
    return (stored === "en" ? "en" : "ge") as Lang;
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("bib-lang", l);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ge" ? "en" : "ge");
  }, [lang, setLang]);

  return (
    <LangContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
