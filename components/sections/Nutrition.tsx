"use client";

import { Utensils, Flame, Check } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { NUTRITION, BRAND } from "@/lib/data";

export function Nutrition() {
  return (
    <section id="nutrition" className="section relative py-24">
      <SectionHeader
        eyebrow="Nutrition Programs"
        title="Fuel your"
        highlight="results"
        subtitle="Gym-approved meal plans with macro tracking and delivery — prepared fresh by our own in-house NFC Café (see the full menu below)."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {NUTRITION.map((n, i) => (
          <Reveal key={n.name} delay={i * 90}>
            <TiltCard className="h-full" intensity={7}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass p-6">
                <div
                  className="absolute -right-10 -top-10 h-36 w-36 rounded-full blur-2xl transition-all group-hover:scale-125"
                  style={{ background: `${n.color}33` }}
                />
                <div className="tilt-inner relative">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: n.color }}>
                    <Utensils className="text-white" size={22} />
                  </div>
                  <span className="mt-4 inline-block rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                    {n.goal}
                  </span>
                  <h3 className="mt-3 text-xl font-bold">{n.name}</h3>
                  <div className="mt-4 space-y-2 text-sm text-muted">
                    <p className="flex items-center gap-2"><Flame size={14} className="text-flame-400" /> {n.kcal} kcal / day</p>
                    <p className="flex items-center gap-2"><Check size={14} className="text-flame-400" /> {n.meals}</p>
                    <p className="flex items-center gap-2"><Check size={14} className="text-flame-400" /> Macro tracking + delivery</p>
                  </div>
                  <div className="mt-5 flex items-end justify-between">
                    <p className="font-display text-3xl font-extrabold">
                      <span className="text-sm text-flame-400">{BRAND.currency} </span>{n.price}
                      <span className="text-sm font-medium text-muted"> /wk</span>
                    </p>
                    <a href="#trial" className="rounded-full bg-flame-gradient px-4 py-2 text-xs font-bold text-white">
                      Subscribe
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
