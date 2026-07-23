import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className="eyebrow mb-4">{eyebrow}</span>
      <h2 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
        {title} {highlight && <span className="flame-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-base text-muted sm:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
