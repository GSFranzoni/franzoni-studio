"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";

import { cn } from "cn";

import { FranzoniMark, OrangeButton } from "./primitives";
import { Reveal } from "./reveal";

const NAV_LINKS = [
  { label: "Studio", href: "#studio" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const appRoot = document.getElementById("root");
    const previousInert = appRoot?.inert ?? false;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    if (appRoot) appRoot.inert = true;
    const panel = menuPanelRef.current;
    const controls = panel?.querySelectorAll<HTMLElement>("button, a");
    controls?.[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (event.key !== "Tab" || !controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      if (appRoot) appRoot.inert = previousInert;
      document.removeEventListener("keydown", onKeyDown);
      menuButton?.focus({ preventScroll: true });
    };
  }, [menuOpen]);

  return (
    <>
      <section
        id="top"
        className="ambient-glow relative z-10 flex min-h-dvh flex-col overflow-hidden bg-background pt-24 pb-14"
      >
        <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
          <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center gap-6">
              <a href="#top" aria-label="Franzoni Studio home" className="flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-secondary-foreground">
                  <FranzoniMark className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-foreground sm:text-[16px]">
                  Franzoni Studio
                </span>
              </a>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-[13px] text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground md:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </nav>
        </header>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 text-center sm:px-8 lg:px-12">
          <div className="w-full">
            <Reveal delay={0.05} distance={16}>
              <span className="mb-6 block text-[12px] font-medium tracking-[0.2em] text-muted-foreground sm:text-[13px]">
                FRANZONI STUDIO
              </span>
            </Reveal>
            <Reveal delay={0.17} distance={42}>
              <h1 className="mx-auto max-w-6xl text-[clamp(2.5rem,7.2vw,6.75rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-foreground">
                Software, websites, and digital experiences <br className="hidden sm:block" />
                built with care.
              </h1>
            </Reveal>

            <Reveal delay={0.36} distance={20}>
              <div className="mt-10 flex flex-col items-center gap-4">
                <OrangeButton label="Start a project" href="#contact" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {createPortal(
        <div
          inert={!menuOpen}
          aria-hidden={!menuOpen}
          className={cn(
            "fixed inset-0 z-50 transition-opacity duration-500 md:hidden",
            menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 w-full bg-black/60"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-menu"
            ref={menuPanelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className={cn(
              "absolute inset-x-0 bottom-0 mx-3 mb-3 rounded-2xl bg-card p-6 shadow-xl transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              menuOpen ? "translate-y-0" : "translate-y-full",
            )}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-muted text-foreground"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center text-[28px] font-medium leading-[32px] text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <OrangeButton
              label="Start a project"
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 w-full justify-between"
            />
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
