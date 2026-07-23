import { Check, Star } from "lucide-react";
import type { BillingCycle, MembershipTier } from "@/lib/gymnation-data";
import { cn } from "@/lib/utils";
import { ButtonLink } from "./Button";

type PricingCardProps = {
  tier: MembershipTier;
  cycle: BillingCycle;
};

export function PricingCard({ tier, cycle }: PricingCardProps) {
  const price = cycle === "monthly" ? tier.monthlyPrice : tier.annualMonthlyPrice;

  return (
    <article
      className={cn(
        "relative flex h-full flex-col border p-6 transition duration-300 hover:-translate-y-1",
        tier.popular ? "border-lime bg-lime text-carbon shadow-[0_0_40px_rgba(215,255,0,0.2)]" : "site-card text-white"
      )}
    >
      {tier.popular ? (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 bg-carbon px-3 py-1 text-xs font-black uppercase text-lime">
          <Star aria-hidden="true" size={14} />
          Most Popular
        </div>
      ) : null}
      <h3 className="text-2xl font-black uppercase">{tier.name}</h3>
      <p className={cn("mt-3 min-h-12 text-sm leading-6", tier.popular ? "text-carbon/75" : "text-neutral-300")}>
        {tier.tagline}
      </p>
      <div className="mt-6">
        <p className="flex items-end gap-2">
          <span className="display-heading text-6xl">AED {price}</span>
          <span className={cn("pb-2 text-sm font-bold uppercase", tier.popular ? "text-carbon/70" : "text-neutral-400")}>
            /mo
          </span>
        </p>
        {cycle === "annual" ? (
          <p className={cn("mt-2 text-xs font-bold uppercase", tier.popular ? "text-carbon/70" : "text-neutral-400")}>
            AED {tier.annualTotal.toLocaleString("en-AE")} billed annually
          </p>
        ) : (
          <p className={cn("mt-2 text-xs font-bold uppercase", tier.popular ? "text-carbon/70" : "text-neutral-400")}>
            Monthly billing
          </p>
        )}
      </div>
      <ul className="mt-6 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-sm leading-6">
            <Check aria-hidden="true" className={cn("mt-1 shrink-0", tier.popular ? "text-carbon" : "text-lime")} size={17} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href={`/join?plan=${encodeURIComponent(tier.name)}`}
        variant={tier.popular ? "dark" : "primary"}
        className="mt-auto w-full"
      >
        Join
      </ButtonLink>
    </article>
  );
}

