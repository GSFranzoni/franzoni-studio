export function Studio() {
  return (
    <section id="studio" className="border-t border-border bg-background py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-3 sm:mb-10">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
            01
          </span>
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
            The studio
          </span>
        </div>

        <h2 className="mx-auto mb-12 max-w-5xl text-center text-[clamp(2rem,5.4vw,4.5rem)] font-semibold leading-[1.03] tracking-[-0.04em] text-foreground sm:mb-16">
          Ideas are easy.
          <br />
          Making them work is the interesting part.
        </h2>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 md:gap-12">
          <p className="max-w-xl text-[16px] font-medium leading-[1.75] text-foreground sm:text-[18px]">
            Franzoni Studio is an independent software studio by Guilherme Franzoni, built around a
            simple idea: good digital products should feel as considered as they are well
            engineered.
          </p>
          <p className="max-w-xl text-[15px] leading-[1.75] text-muted-foreground sm:text-[17px]">
            I work across design and engineering to turn ideas into websites, software, and digital
            products that are useful, distinctive, and built to last.
          </p>
        </div>
      </div>
    </section>
  );
}
