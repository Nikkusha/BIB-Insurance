import { Link } from "react-router-dom";
import BIB_DATA from "@/data/bibData";
import { useLang } from "@/contexts/LangContext";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { lang } = useLang();
  const d = BIB_DATA[lang];

  const navLink = (slug: string) => `/detail/${slug}?lang=${lang}`;

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-bib section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <Link to={`/?lang=${lang}`} className="text-xl font-bold text-primary-foreground mb-3 inline-block">BIB</Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{d.footerAbout}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-foreground">{lang === "ge" ? "სწრაფი ბმულები" : "Quick Links"}</h4>
            <ul className="space-y-2">
              {d.footerQuickLinks.map((link) => (
                <li key={link.slug}>
                  <Link to={link.slug === "blog" ? `/?lang=${lang}#blog` : navLink(link.slug)} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-foreground">{d.nav.products}</h4>
            <ul className="space-y-2">
              {d.footerProducts.map((link) => (
                <li key={link.slug}>
                  <Link to={navLink(link.slug)} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-primary-foreground">{d.nav.contact}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                {d.footerContact.address}
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <a href={`tel:${d.footerContact.phone}`} className="hover:text-primary-foreground transition-colors">{d.footerContact.phone}</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <a href={`mailto:${d.footerContact.email}`} className="hover:text-primary-foreground transition-colors">{d.footerContact.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-bib py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <div className="flex gap-4">
            <span>{d.footerBottom.privacy}</span>
            <span>{d.footerBottom.terms}</span>
          </div>
          <span>{d.footerBottom.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
