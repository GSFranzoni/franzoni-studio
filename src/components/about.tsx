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
            Built by a software engineer, not a committee.
          </h2>
        </div>
        <div className="max-w-2xl rounded-xl border border-border bg-card/70 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
          <p className="text-[17px] font-medium leading-[1.7] text-foreground sm:text-[19px]">
            Franzoni Studio was founded by Guilherme Franzoni, a full-stack software engineer with
            6+ years of experience building products for the web.
          </p>
          <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground sm:text-[17px]">
            His work spans product engineering, frontend, backend, real-time systems, and AI-powered
            applications.
          </p>
          <figure className="mt-9 flex items-center gap-5 sm:mt-10">
            <img
              src="/gui.jpg"
              alt="Guilherme Franzoni"
              className="h-20 w-20 shrink-0 rounded-lg object-cover sm:h-24 sm:w-24"
              width="400"
              height="400"
              loading="lazy"
            />
            <figcaption>
              <span className="block text-[16px] font-semibold tracking-[-0.02em] text-foreground sm:text-[18px]">
                Guilherme Franzoni
              </span>
              <span className="mt-1 block text-[13px] text-muted-foreground sm:text-[14px]">
                Founder &amp; Software Engineer
              </span>
            </figcaption>
          </figure>
          {/* TODO: Add verified GitHub and LinkedIn profile URLs when available. */}
        </div>
      </div>
    </section>
  );
}
