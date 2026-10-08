import { Reveal } from "./reveal";

export function Studio() {
  return (
    <section
      id="studio"
      className="border-t border-border bg-background py-24 sm:py-28 lg:flex lg:min-h-[calc(100svh-var(--site-header-height))] lg:items-center lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
            01
          </span>
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
            About Franzoni Studio
          </span>
        </div>

        <Reveal className="mx-auto mb-12 max-w-5xl sm:mb-16">
          <h2 className="text-center text-[clamp(2rem,5.4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-foreground">
            A small technology company, built around products.
          </h2>
        </Reveal>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-12">
          <Reveal delay={0.08}>
            <p className="max-w-xl text-[16px] font-medium leading-[1.75] text-foreground sm:text-[18px]">
              Founded in 2026 by software engineer Guilherme Franzoni, Franzoni Studio is an
              early-stage startup focused on software, SaaS, and artificial intelligence.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-[17px]">
              We explore focused problems, build products around them, and improve those products
              over time. The goal is to make technology useful, dependable, and ready to grow.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
