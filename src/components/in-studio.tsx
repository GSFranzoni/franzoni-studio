import tripsScreenshot from "../assets/desktop-trip.png";
import { Reveal } from "./reveal";

function InStudioEyebrow() {
  return (
    <div className="mb-10 flex items-center gap-3 sm:mb-12 lg:mb-8">
      <span className="flex h-7 min-w-7 items-center justify-center rounded-full border border-border bg-secondary px-2 text-[11px] font-semibold text-secondary-foreground">
        03
      </span>
      <span className="text-[12px] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-[13px]">
        In the studio
      </span>
    </div>
  );
}

export function InStudio() {
  return (
    <>
      <section
        id="work"
        aria-labelledby="intervue-title"
        className="bg-background py-20 sm:py-24 lg:flex lg:min-h-[calc(100svh-var(--site-header-height))] lg:items-center lg:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <InStudioEyebrow />

          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.22fr_0.78fr] lg:gap-16">
            <Reveal className="flex flex-col items-start lg:order-2" delay={0.12}>
              <p className="text-[12px] font-semibold tracking-[0.2em] text-violet-300 sm:text-[13px]">
                INTERVUE
              </p>
              <h2
                id="intervue-title"
                className="mt-5 max-w-lg text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground"
              >
                Practice the interview before it matters.
              </h2>
              <div className="mt-6 max-w-md space-y-5 sm:mt-7">
                <p className="text-[14px] leading-[1.8] text-muted-foreground sm:text-[16px]">
                  An AI-powered interview experience that turns real job requirements into
                  personalized conversations, adaptive follow-up questions, and structured feedback.
                </p>
                <p className="text-[13px] font-medium leading-relaxed text-foreground/75 sm:text-[14px]">
                  Designed and built at Franzoni Studio.
                </p>
              </div>
              <div className="mt-9 flex w-full flex-wrap items-center gap-x-5 gap-y-3 sm:mt-11">
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:text-[11px]">
                  AI · Product · Real-time
                </span>
              </div>
            </Reveal>

            <Reveal className="lg:order-1">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold tracking-[0.16em] text-violet-300 sm:mb-4 sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-300" aria-hidden="true" />
                IN DEVELOPMENT
              </div>
              <div className="overflow-hidden rounded-xl border border-border bg-card sm:rounded-2xl">
                <img
                  src="/intervue-demo.gif"
                  alt="Intervue interview training interface demonstrating a practice interview"
                  className="block h-auto w-full"
                  width={1300}
                  height={932}
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="trips"
        aria-labelledby="trips-title"
        className="bg-background py-20 sm:py-24 lg:flex lg:min-h-[calc(100svh-var(--site-header-height))] lg:items-center lg:py-16"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <InStudioEyebrow />
          <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <Reveal className="flex flex-col items-start">
              <p className="text-[12px] font-semibold tracking-[0.2em] text-violet-300 sm:text-[13px]">
                TRIPS
              </p>
              <h2
                id="trips-title"
                className="mt-5 max-w-lg text-[clamp(2rem,5vw,4.4rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-foreground"
              >
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
            </Reveal>

            <Reveal delay={0.12}>
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
