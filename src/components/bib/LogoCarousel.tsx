const LOGOS = [
  { name: "Aldagi", src: "/logos/aldagi.png" },
  { name: "TBC Insurance", src: "/logos/tbc.png" },
  { name: "GPI", src: "/logos/gpi.png" },
  { name: "Alpha", src: "/logos/alpha.svg" },
  { name: "Imedi L", src: "/logos/imedi.png" },
  { name: "Irao", src: "/logos/irao.png" },
  { name: "Unison", src: "/logos/unison.png" },
  { name: "Ardi", src: "/logos/ardi.png" },
];

interface LogoCarouselProps {
  title: string;
  direction?: "left" | "right";
}

export default function LogoCarousel({ title, direction = "left" }: LogoCarouselProps) {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-bib mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-foreground">{title}</h2>
      </div>
      <div className="relative">
        <div className={`flex gap-8 w-max items-center ${direction === "right" ? "animate-scroll-right" : "animate-scroll-left"}`}>
          {doubled.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 rounded-lg border border-border bg-background px-6 py-4 shadow-bib flex items-center justify-center"
              style={{ width: "140px", height: "72px" }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
