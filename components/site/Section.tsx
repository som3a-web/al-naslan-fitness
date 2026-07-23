import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  copy?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
};

export function Section({
  id,
  eyebrow,
  title,
  copy,
  children,
  className,
  innerClassName,
  align = "left",
  tone = "dark",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className={cn("section", innerClassName)}>
        {(eyebrow || title || copy) && (
          <div className={cn("mb-10 max-w-3xl", align === "center" && "mx-auto text-center")}>
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            {title ? (
              <h2 className={`display-heading mt-4 text-5xl sm:text-6xl lg:text-7xl ${tone === "light" ? "text-carbon" : "text-white"}`}>
                {title}
              </h2>
            ) : null}
            {copy ? (
              <p className={`mt-5 text-base leading-7 sm:text-lg ${tone === "light" ? "text-neutral-700" : "text-neutral-300"}`}>{copy}</p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
