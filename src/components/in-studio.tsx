import tripsScreenshot from "../assets/desktop-trip.png";

export function InStudio() {
  return (
    <section id="work" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center gap-3 sm:mb-12">
          <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
            03
          </span>
          <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
            In the studio
          </span>
        </div>

        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <div className="flex flex-col items-start">
            <p className="text-[12px] font-semibold tracking-[0.2em] text-violet-300 sm:text-[13px]">
              TRIPS
            </p>
            <h2 className="mt-5 max-w-lg text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground">
              A new way to discover
              <br className="hidden sm:block" /> your next journey.
            </h2>
            <div className="mt-6 max-w-md space-y-5 sm:mt-7">
              <p className="text-[14px] leading-[1.8] text-muted-foreground sm:text-[16px]">
                A travel discovery experience exploring how destinations, trips, and stories can
                come together in a more thoughtful way on the web.
              </p>
              <p className="text-[13px] font-medium leading-relaxed text-foreground/75 sm:text-[14px]">
                Designed and built at Franzoni Studio.
              </p>
            </div>

            <div className="mt-9 flex w-full flex-wrap items-center gap-x-5 gap-y-3 sm:mt-11">
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                Product · Web · Travel
              </span>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-end gap-2 text-[10px] font-semibold tracking-[0.16em] text-violet-300 sm:mb-4 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-300" aria-hidden="true" />
              COMING SOON
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-card sm:rounded-2xl">
              <img
                src={tripsScreenshot}
                alt="Trips product interface displaying a travel detail page for the Amalfi Coast"
                className="block h-auto w-full"
                width={1591}
                height={935}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
