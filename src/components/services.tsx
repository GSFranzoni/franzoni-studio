import * as m from "motion/react-m";

import { Reveal } from "./reveal";

const SERVICES = [
  {
    title: "Product engineering",
    description:
      "End-to-end software engineering for digital products, from clear interfaces to reliable application foundations.",
  },
  {
    title: "SaaS platforms",
    description:
      "Subscription software designed around specific user needs, with room to evolve as those needs change.",
  },
  {
    title: "Applied AI",
    description:
      "AI features built into useful product experiences, with a focus on practical workflows and clear outcomes.",
  },
];

export function Services() {
  return (
    <section
      id="technology"
      className="ambient-glow relative flex min-h-[80svh] items-center justify-center overflow-hidden border-t border-border bg-background py-24 lg:min-h-[calc(100svh-var(--site-header-height))]"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
              02
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
              Technology & expertise
            </span>
          </div>
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-[clamp(2rem,5vw,4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground">
              Engineering products from the problem up.
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {SERVICES.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.09} className="h-full">
              <m.article
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="h-full rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/30 hover:bg-accent/60 sm:p-8"
              >
                <h3 className="text-[22px] font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-sm text-[15px] leading-[1.7] text-muted-foreground sm:text-base">
                  {service.description}
                </p>
              </m.article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-muted-foreground">
          Current web stack: React · TypeScript · Vite
        </p>
      </div>
    </section>
  );
}
