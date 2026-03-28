interface LogoCarouselProps {
  title: string;
  items: string[];
  direction?: "left" | "right";
}

export default function LogoCarousel({ title, items, direction = "left" }: LogoCarouselProps) {
  const doubled = [...items, ...items];

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-bib mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-center text-foreground">{title}</h2>
      </div>
      <div className="relative">
        <div className={`flex gap-6 w-max ${direction === "right" ? "animate-scroll-right" : "animate-scroll-left"}`}>
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex-shrink-0 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-primary shadow-bib whitespace-nowrap"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
