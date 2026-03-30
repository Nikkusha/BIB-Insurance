import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import FormModal from "./FormModal";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const { lang, toggleLang } = useLang();
  const d = BIB_DATA[lang];
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleMouseEnter = (key: string) => {
    clearTimeout(dropdownTimeout.current);
    setOpenDropdown(key);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const navLink = (slug: string) => `/detail/${slug}?lang=${lang}`;

  const DropdownMenu = ({ label, items, id }: { label: string; items: { label: string; slug: string }[]; id: string }) => (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter(id)}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
        aria-expanded={openDropdown === id}
        aria-haspopup="true"
      >
        {label}
        <ChevronDown className="h-3.5 w-3.5" />
      </button>
      {openDropdown === id && (
        <div className="absolute top-full left-0 mt-1 w-56 rounded-md bg-background border border-border shadow-bib-md py-1 z-50 animate-fade-in">
          {items.map((item) => (
            <Link
              key={item.slug}
              to={navLink(item.slug)}
              className="block px-4 py-2 text-sm text-foreground hover:bg-primary-light hover:text-primary transition-colors"
              onClick={() => { setOpenDropdown(null); setMobileOpen(false); }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-bib flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={`/?lang=${lang}`}>
            <img src="/bib-logo.png" alt="BIB Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            <DropdownMenu label={d.nav.company} items={d.companyDropdown} id="company" />
            <DropdownMenu label={d.nav.products} items={d.productsDropdown} id="products" />
            <a href={`/blog.html?lang=${lang}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {d.nav.blog}
            </a>
            <Link to={`/contact?lang=${lang}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              {d.nav.contact}
            </Link>
          </nav>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted transition-colors"
            >
              {d.nav.langToggle}
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-dark transition-colors"
            >
              {d.nav.cta}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container-bib py-4 space-y-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{d.nav.company}</p>
              {d.companyDropdown.map((item) => (
                <Link key={item.slug} to={navLink(item.slug)} onClick={() => setMobileOpen(false)} className="block pl-2 text-sm text-foreground hover:text-primary py-1">
                  {item.label}
                </Link>
              ))}
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pt-2">{d.nav.products}</p>
              {d.productsDropdown.map((item) => (
                <Link key={item.slug} to={navLink(item.slug)} onClick={() => setMobileOpen(false)} className="block pl-2 text-sm text-foreground hover:text-primary py-1">
                  {item.label}
                </Link>
              ))}
              <a href={`/blog.html?lang=${lang}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary py-1">
                {d.nav.blog}
              </a>
              <Link to={`/contact?lang=${lang}`} onClick={() => setMobileOpen(false)} className="block text-sm font-medium text-foreground hover:text-primary py-1">
                {d.nav.contact}
              </Link>
              <div className="flex gap-2 pt-2">
                <button onClick={toggleLang} className="rounded-md border border-border px-3 py-1.5 text-xs font-semibold">{d.nav.langToggle}</button>
                <button onClick={() => { setModalOpen(true); setMobileOpen(false); }} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">{d.nav.cta}</button>
              </div>
            </div>
          </div>
        )}
      </header>
      <FormModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
