const PARTNER_LOGOS = [
  { name: "Benefits", src: "/logos/partner-benefits.png" },
  { name: "Ardi", src: "/logos/partner-ardi.png" },
  { name: "Imedi L", src: "/logos/partner-imedi.png" },
  { name: "Aldagi", src: "/logos/partner-aldagi.png" },
  { name: "Alpha", src: "/logos/partner-alpha.png" },
  { name: "Irao", src: "/logos/partner-irao.png" },
  { name: "GPI", src: "/logos/partner-gpi.png" },
  { name: "TBC Insurance", src: "/logos/partner-tbc.png" },
];

const CLIENT_LOGOS = [
  { name: "Bene Group", src: "/logos/client-bene-group.png" },
  { name: "Bene Comfort", src: "/logos/client-bene-comfort.png" },
  { name: "Bene Exclusive", src: "/logos/client-bene-exclusive.png" },
  { name: "Kairos", src: "/logos/client-kairos.png" },
  { name: "Dagi", src: "/logos/client-dagi.png" },
  { name: "Albioni", src: "/logos/client-albioni.png" },
  { name: "Wizer", src: "/logos/client-wizer.png" },
];

interface LogoCarouselProps {
  title: string;
  direction?: "left" | "right";
  titleClass?: string;
  variant?: "partners" | "clients";
  paddingTop?: number;
}

export default function LogoCarousel({ title, direction = "left", titleClass, variant = "partners", paddingTop = 40 }: LogoCarouselProps) {
  const logos = variant === "clients" ? CLIENT_LOGOS : PARTNER_LOGOS;
  const doubled = [...logos, ...logos];

  return (
    <section className="section-padding overflow-hidden" style={{ paddingTop }}>
      <div className="container-bib mb-8">
        <h2 className={`text-base md:text-[30px] font-bold text-center ${titleClass ?? "text-foreground"}`}>{title}</h2>
      </div>
      <div 
        className="relative flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
        }}
      >
        <div className={`flex gap-8 w-max items-center ${direction === "right" ? "animate-scroll-right" : "animate-scroll-left"}`}>
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className="flex-shrink-0 h-16 w-auto object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
