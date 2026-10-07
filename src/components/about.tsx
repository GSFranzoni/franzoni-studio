export function About() {
  return (
    <section
      id="about"
      className="ambient-glow relative border-t border-border bg-background py-24 sm:py-28 lg:py-32"
    >
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-20 lg:px-8">
        <div>
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
              04
            </span>
            <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
              Behind the studio
            </span>
          </div>
          <h2 className="text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-foreground">
            Hi, I&apos;m Guilherme.
          </h2>
        </div>
        <div className="max-w-2xl rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <p className="text-[17px] font-medium leading-[1.7] text-foreground sm:text-[19px]">
            I&apos;m a full-stack software engineer who enjoys working across the whole product —
            from the details of an interface to the systems behind it.
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px]">
            Franzoni Studio is where I bring together engineering, design, and experimentation to
            build things for the web.
          </p>
          {/* TODO: Add verified GitHub and LinkedIn profile URLs when available. */}
        </div>
      </div>
    </section>
  );
}
