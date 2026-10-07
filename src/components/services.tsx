const SERVICES = [
  {
    title: "Websites",
    description:
      "Websites with a strong point of view — thoughtfully designed, fast, responsive, and built around the business behind them.",
  },
  {
    title: "Software",
    description:
      "Digital products and custom applications shaped around real workflows, real users, and real problems.",
  },
  {
    title: "AI & Automation",
    description:
      "AI where it adds something useful — from intelligent product experiences to tools and workflows that remove repetitive work.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="ambient-glow relative flex min-h-[80svh] items-center justify-center overflow-hidden border-t border-border bg-background py-24"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
              02
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
              What I do
            </span>
          </div>
          <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground">
            From the first idea to the final build.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-accent/60 sm:p-8"
            >
              <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                {service.title}
              </h3>
              <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
