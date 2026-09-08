"use client";

import { useState } from "react";
import { Baby, CalendarDays, Check, Clock, Dumbbell, Star, Ticket, Users } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { BRAND, MEMBERSHIP_FEATURES, PRICING, type TierKey } from "@/lib/data";

const fmt = (n: number) => n.toLocaleString();

export function Membership() {
  const [tier, setTier] = useState<TierKey>("internal");
  const t = PRICING.tiers[tier];

  return (
    <section id="membership" className="section relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-flame-500/20 blur-[120px]" />
      <SectionHeader
        eyebrow="Membership & Pricing"
        title="Choose your"
        highlight="commitment"
        subtitle="Transparent pricing in AED, with Internal and External rates. Not sure which tier applies to you? Ask our team on WhatsApp."
      />

      {/* Tier toggle */}
      <Reveal className="mt-10 flex justify-center">
        <div className="inline-flex rounded-full border border-white/10 glass p-1.5">
          {(Object.keys(PRICING.tiers) as TierKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setTier(key)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition ${
                tier === key ? "bg-flame-gradient text-white shadow-flame" : "text-muted hover:text-flame-400"
              }`}
              aria-pressed={tier === key}
            >
              {PRICING.tiers[key].label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Effective date + timing */}
      <Reveal className="mt-6">
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2 rounded-2xl border border-flame-500/25 bg-flame-500/[0.07] px-5 py-3 text-center text-sm sm:flex-row sm:gap-6">
          <span className="flex items-center gap-2 font-semibold">
            <CalendarDays size={15} className="text-flame-400" /> Pricing effective from {PRICING.effectiveFrom}
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <Clock size={15} className="text-flame-400" /> Men&apos;s timing: {PRICING.maleTiming} daily
          </span>
        </div>
      </Reveal>

      <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-3">
        {/* Adult membership */}
        <Reveal>
          <TiltCard className="h-full" intensity={8}>
            <div className="relative flex h-full flex-col rounded-3xl border-2 border-flame-500/60 bg-gradient-to-b from-flame-500/15 to-transparent p-7 shadow-flame-lg">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-flame-gradient px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-flame">
                <Star className="mr-1 inline" size={12} /> Adult Membership
              </span>
              <div className="tilt-inner flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                    <Dumbbell size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Adult</h3>
                    <p className="text-sm text-muted">{t.label} rate</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.adult.map((p) => (
                    <li
                      key={p.duration}
                      className={`flex items-center justify-between rounded-2xl border p-4 ${
                        p.best ? "border-flame-500/50 bg-flame-500/10" : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{p.duration}</p>
                        {p.note && <p className="text-xs font-bold text-flame-400">{p.note}</p>}
                      </div>
                      <p className="font-display text-2xl font-extrabold">
                        <span className="text-xs text-flame-400">{BRAND.currency} </span>
                        {fmt(p.price)}
                      </p>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {MEMBERSHIP_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame-500/15">
                        <Check size={12} className="text-flame-400" />
                      </span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${BRAND.whatsappLink}?text=${encodeURIComponent(`Hi NFC, I'd like to join with an Adult ${t.label} membership.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-full bg-flame-gradient py-3 text-center text-sm font-bold text-white transition hover:shadow-flame-lg"
                >
                  Join as Adult
                </a>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Personal training */}
        <Reveal delay={90}>
          <TiltCard className="h-full" intensity={5}>
            <div className="relative flex h-full flex-col rounded-3xl glass p-7">
              <div className="tilt-inner flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                    <Users size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Personal Training</h3>
                    <p className="text-sm text-muted">1-to-1 coaching · {t.label} rate</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {t.pt.map((p) => (
                    <li
                      key={p.classes}
                      className={`flex items-center justify-between rounded-2xl border p-4 ${
                        p.popular ? "border-flame-500/50 bg-flame-500/10" : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <div>
                        <p className="font-semibold">{p.classes} Classes</p>
                        {p.popular && <p className="text-xs font-bold text-flame-400">Most popular</p>}
                      </div>
                      <p className="font-display text-2xl font-extrabold">
                        <span className="text-xs text-flame-400">{BRAND.currency} </span>
                        {fmt(p.price)}
                      </p>
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {[
                    "Certified personal trainers",
                    "Custom program for your goal",
                    "Technique work & progress reviews",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame-500/15">
                        <Check size={12} className="text-flame-400" />
                      </span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${BRAND.whatsappLink}?text=${encodeURIComponent(`Hi NFC, I'd like to book Personal Training (${t.label} rate).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-full py-3 text-center text-sm font-bold btn-ghost"
                >
                  Book Personal Training
                </a>
              </div>
            </div>
          </TiltCard>
        </Reveal>

        {/* Kids + passes */}
        <Reveal delay={180}>
          <TiltCard className="h-full" intensity={5}>
            <div className="relative flex h-full flex-col rounded-3xl glass p-7">
              <div className="tilt-inner flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                    <Baby size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Kids & Passes</h3>
                    <p className="text-sm text-muted">{t.label} rate</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div>
                      <p className="font-semibold">Kids Membership</p>
                      <p className="text-xs text-muted">1 month</p>
                    </div>
                    <p className="font-display text-2xl font-extrabold">
                      <span className="text-xs text-flame-400">{BRAND.currency} </span>
                      {fmt(t.kidsMonthly)}
                    </p>
                  </li>
                  <li className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <div>
                      <p className="font-semibold">Daily Pass</p>
                      <p className="text-xs text-muted">Full-day gym access</p>
                    </div>
                    <p className="font-display text-2xl font-extrabold">
                      <span className="text-xs text-flame-400">{BRAND.currency} </span>
                      {fmt(PRICING.dailyPass)}
                    </p>
                  </li>
                  <li className="flex items-center justify-between rounded-2xl border border-flame-500/40 bg-flame-500/[0.07] p-4">
                    <div>
                      <p className="font-semibold">Family Discount</p>
                      <p className="text-xs text-muted">Off each family member&apos;s plan</p>
                    </div>
                    <p className="font-display text-2xl font-extrabold">
                      <span className="text-xs text-flame-400">{BRAND.currency} </span>
                      {fmt(PRICING.familyDiscount)}
                      <span className="text-xs font-medium text-muted"> /person</span>
                    </p>
                  </li>
                </ul>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {[
                    "Kids swimming, karate & junior fitness",
                    "Try the gym first with a day pass",
                    "One destination for the whole family",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame-500/15">
                        <Check size={12} className="text-flame-400" />
                      </span>
                      <span className="text-muted">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`${BRAND.whatsappLink}?text=${encodeURIComponent("Hi NFC, I'd like to ask about kids memberships and family discounts.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 block rounded-full py-3 text-center text-sm font-bold btn-ghost"
                >
                  <Ticket size={15} className="mr-1 inline" /> Ask About Kids & Family
                </a>
              </div>
            </div>
          </TiltCard>
        </Reveal>
      </div>
    </section>
  );
}
