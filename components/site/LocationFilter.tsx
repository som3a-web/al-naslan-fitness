"use client";

import { useMemo, useState } from "react";
import type { Emirate, GymLocation } from "@/lib/gymnation-data";
import { emirates } from "@/lib/gymnation-data";
import { cn } from "@/lib/utils";
import { GymCard } from "./GymCard";

type LocationFilterProps = {
  locations: GymLocation[];
  initialEmirate?: Emirate | "All";
  limit?: number;
};

export function LocationFilter({ locations, initialEmirate = "Dubai", limit }: LocationFilterProps) {
  const [active, setActive] = useState<Emirate | "All">(initialEmirate);

  const filtered = useMemo(() => {
    const items = active === "All" ? locations : locations.filter((location) => location.emirate === active);
    return limit ? items.slice(0, limit) : items;
  }, [active, limit, locations]);

  return (
    <div>
      <div className="mb-7 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter locations by emirate">
        {(["All", ...emirates] as Array<Emirate | "All">).map((emirate) => (
          <button
            key={emirate}
            type="button"
            role="tab"
            aria-selected={active === emirate}
            onClick={() => setActive(emirate)}
            className={cn(
              "shrink-0 border px-4 py-2 text-sm font-black uppercase transition",
              active === emirate
                ? "border-lime bg-lime text-carbon"
                : "border-white/15 bg-white/5 text-white hover:border-lime hover:text-lime"
            )}
          >
            {emirate}
          </button>
        ))}
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((location) => (
          <GymCard key={location.slug} location={location} />
        ))}
      </div>
    </div>
  );
}

