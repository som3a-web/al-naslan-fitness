import { PARTNERS } from "@/lib/data";

export function Partners() {
  const row = [...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS];
  return (
    <section className="relative py-16">
      <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">
        Trusted partners
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee flex w-max gap-4">
          {row.map((p, i) => (
            <div
              key={i}
              className="flex h-16 items-center justify-center whitespace-nowrap rounded-2xl glass px-8 text-sm font-bold tracking-wide text-muted transition hover:text-flame-400"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
