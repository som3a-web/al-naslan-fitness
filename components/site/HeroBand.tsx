import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "./Button";

type HeroBandProps = {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  children?: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function HeroBand({
  eyebrow,
  title,
  copy,
  image,
  alt,
  children,
  primaryHref = "/join",
  primaryLabel = "Start Free Trial",
  secondaryHref,
  secondaryLabel,
}: HeroBandProps) {
  return (
    <section className="relative min-h-[64vh] overflow-hidden pt-32">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/78 to-carbon/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-black/40" />
      <div className="section relative z-10 pb-16 pt-16 sm:pb-20 lg:pt-24">
        <div className="max-w-4xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="display-heading mt-5 text-6xl text-white sm:text-7xl lg:text-8xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200">{copy}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg">
              {primaryLabel}
            </ButtonLink>
            {secondaryHref && secondaryLabel ? (
              <ButtonLink href={secondaryHref} size="lg" variant="ghost">
                {secondaryLabel}
              </ButtonLink>
            ) : null}
          </div>
        </div>
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  );
}

