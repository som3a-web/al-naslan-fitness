"use client";

import { useState } from "react";
import { memberships } from "@/lib/gymnation-data";
import type { BillingCycle } from "@/lib/gymnation-data";
import { cn } from "@/lib/utils";
import { PricingCard } from "./PricingCard";

export function PricingToggle() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <div>
      <div className="mb-8 inline-flex border border-white/15 bg-white/5 p-1" role="group" aria-label="Billing cycle">
        {(["monthly", "annual"] as BillingCycle[]).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCycle(item)}
            className={cn(
              "px-5 py-2 text-sm font-black uppercase transition",
              cycle === item ? "bg-lime text-carbon" : "text-white hover:text-lime"
            )}
          >
            {item === "monthly" ? "Monthly" : "Annual Save 20%"}
          </button>
        ))}
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {memberships.map((tier) => (
          <PricingCard key={tier.name} tier={tier} cycle={cycle} />
        ))}
      </div>
    </div>
  );
}

