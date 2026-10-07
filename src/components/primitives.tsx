import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "cn";

// House easing for the text-roll / arrow-rotate hover motion.
export const EASE = "ease-[cubic-bezier(0.25,0.1,0.25,1)]";

/** Uses the supplied SVG as a mask so the mark follows its surrounding text color. */
export function FranzoniMark({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("franzoni-mark block shrink-0", className)} />;
}

/**
 * Hover text-roll: two stacked copies inside a 20px window that slide up by
 * exactly one line on group-hover.
 */
export function RollText({ children }: { children: ReactNode }) {
  return (
    <span className="block h-[20px] overflow-hidden">
      <span
        className={cn(
          "flex flex-col transition-transform duration-500 group-hover:-translate-y-1/2",
          EASE,
        )}
      >
        <span className="block h-[20px] leading-[20px]">{children}</span>
        <span className="block h-[20px] leading-[20px]" aria-hidden="true">
          {children}
        </span>
      </span>
    </span>
  );
}

/** Brand pill CTA with the shared text-roll + arrow-rotate hover. */
export function OrangeButton({
  label,
  className,
  href,
  onClick,
}: {
  label: string;
  className?: string;
  href: string;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full bg-brand py-2 ps-5 pe-2 text-[13px] font-medium text-white transition-colors hover:bg-brand/90 sm:ps-6 sm:text-[14px]",
        className,
      )}
    >
      <RollText>{label}</RollText>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white sm:h-8 sm:w-8">
        <ArrowRight
          size={16}
          className={cn(
            "text-brand transition-transform duration-500 group-hover:-rotate-45",
            EASE,
          )}
        />
      </span>
    </a>
  );
}
