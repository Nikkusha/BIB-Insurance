import { Link } from "react-router-dom";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import Header from "@/components/bib/Header";
import Footer from "@/components/bib/Footer";

const NotFound = () => {
  const { lang } = useLang();
  const d = BIB_DATA[lang];

  return (
    <div className="animate-fade-in">
      <Header />
      <section className="section-padding min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-7xl md:text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-xl font-semibold text-foreground mb-2">{d.notFoundTitle}</h2>
          <p className="text-muted-foreground mb-8">{d.notFoundSubtitle}</p>
          <Link
            to={`/?lang=${lang}`}
            className="inline-block rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary-dark transition-colors"
          >
            {d.notFoundBack}
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default NotFound;
