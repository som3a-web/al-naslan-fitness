"use client";

import { Star, Award, Calendar } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { TRAINERS, BRAND } from "@/lib/data";

const PT_PACKAGES = [
  { name: "Starter", sessions: "4 sessions", price: 600 },
  { name: "Transform", sessions: "12 sessions", price: 1560, popular: true },
  { name: "Elite", sessions: "24 sessions", price: 2880 },
];

export function Trainers() {
  return (
    <section id="trainers" className="section relative py-24">
      <SectionHeader
        eyebrow="Personal Training"
        title="Train with"
        highlight="elite coaches"
        subtitle="Certified specialists for fat loss, muscle building and athletic performance. Book a 1:1 consultation in seconds."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TRAINERS.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <TiltCard className="h-full" intensity={7}>
              <div className="group h-full overflow-hidden rounded-3xl glass">
                <div
                  className="relative h-56 overflow-hidden bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(7,7,8,0.08), rgba(7,7,8,0.74)), url(${t.img})`,
                  }}
                >
                  <div className="absolute inset-0 grid-glow opacity-25" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="rounded-2xl border border-white/15 bg-black/30 px-5 py-3 font-display text-6xl font-extrabold text-white/80 backdrop-blur-sm">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/40 px-2.5 py-1 text-xs font-bold text-flame-300 backdrop-blur">
                    <Star size={12} className="fill-flame-400 text-flame-400" /> {t.rating.toFixed(1)}
                  </span>
                  <span className="absolute bottom-3 left-3 rounded-full bg-flame-gradient px-3 py-1 text-xs font-bold text-white shadow-flame">
                    {t.specialty}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold">{t.name}</h3>
                  <p className="text-sm text-muted">{t.role}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted">
                      <Award size={12} className="text-flame-400" /> {t.exp}
                    </span>
                    {t.certs.map((c) => (
                      <span key={c} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-muted">{c}</span>
                    ))}
                  </div>
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-flame-gradient py-2.5 text-sm font-bold text-white transition hover:shadow-flame"
                  >
                    <Calendar size={15} /> Book Trainer
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* PT packages */}
      <Reveal className="mt-10">
        <div className="glass-strong rounded-3xl p-6">
          <h3 className="mb-5 text-center text-lg font-bold">PT Packages</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {PT_PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-5 text-center ${
                  p.popular ? "border-2 border-flame-500/50 bg-flame-500/10" : "border border-white/10 bg-white/5"
                }`}
              >
                <p className="text-sm font-semibold text-muted">{p.name}</p>
                <p className="mt-1 font-display text-3xl font-extrabold">
                  <span className="text-base text-flame-400">{BRAND.currency} </span>{p.price.toLocaleString()}
                </p>
                <p className="mt-1 text-xs text-muted">{p.sessions}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
