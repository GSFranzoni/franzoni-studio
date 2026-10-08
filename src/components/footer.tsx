import { FranzoniMark, OrangeButton } from "./primitives";
import { Reveal } from "./reveal";

const FOOTER_LINKS = [
  { label: "Company", href: "#studio" },
  { label: "Products", href: "#work" },
  { label: "Technology", href: "#technology" },
  { label: "Founder", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  // TODO: Add verified profile URLs when provided.
  { label: "GitHub", href: "" },
  { label: "LinkedIn", href: "" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-card text-foreground">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-8 pb-12 sm:pb-16 lg:flex-row lg:items-end lg:justify-between lg:pb-20">
          <Reveal className="max-w-2xl">
            <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground sm:mb-8 sm:text-[13px]">
              Contact
            </p>
            <h2 className="text-[clamp(2rem,7vw,4.5rem)] font-medium leading-[1.04] tracking-[-0.04em] sm:text-[clamp(2.5rem,5vw,4.5rem)]">
              Building something in software or AI?
            </h2>
            <p className="mt-5 max-w-xl text-[14px] leading-[1.7] text-muted-foreground sm:text-[16px]">
              For product conversations, partnerships, and startup inquiries, contact Franzoni Studio.
            </p>
          </Reveal>

          <Reveal
            delay={0.14}
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end"
          >
            <OrangeButton label="Email the founder" href="mailto:guilherme@franzoni.tech" />
            <a
              href="mailto:guilherme@franzoni.tech"
              className="text-[14px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              guilherme@franzoni.tech
            </a>
          </Reveal>
        </div>

        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:items-center sm:justify-between sm:py-12">
          <a href="#top" aria-label="Franzoni Studio home" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary text-secondary-foreground sm:h-10 sm:w-10">
              <FranzoniMark className="h-5 w-5 sm:h-6 sm:w-6" />
            </span>
            <span className="text-[15px] font-semibold tracking-tight sm:text-[16px]">
              Franzoni Studio
            </span>
          </a>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            {SOCIAL_LINKS.filter((link) => link.href).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
