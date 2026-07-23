"use client";

import { useState } from "react";
import { Instagram, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { TESTIMONIALS, TRANSFORMATIONS, ECOSYSTEM_STATS } from "@/lib/data";

export function SocialProof() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  return (
    <section id="stories" className="section relative py-24">
      <SectionHeader
        eyebrow="Transformations & Success Stories"
        title="Real members."
        highlight="Real results."
        subtitle="Thousands of journeys, tracked and celebrated with clear progress markers and supportive programs."
      />

      {/* Ecosystem stats */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {ECOSYSTEM_STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 60}>
            <div className="glass rounded-2xl p-5 text-center">
              <p className="font-display text-2xl font-extrabold flame-text sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Transformations */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {TRANSFORMATIONS.map((tr, i) => (
          <Reveal key={tr.name} delay={i * 80}>
            <TiltCard intensity={6}>
              <div className="overflow-hidden rounded-3xl glass">
                <div className="grid grid-cols-2">
                  <div className="relative grid h-40 place-items-center bg-gradient-to-br from-ink-700 to-ink-850">
                    <span className="absolute left-2 top-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-bold text-white/70">BEFORE</span>
                    <span className="font-display text-xl font-bold text-white/30">{tr.before}</span>
                  </div>
                  <div className="relative grid h-40 place-items-center" style={{ background: "linear-gradient(135deg,#FF6A00,#E0301E)" }}>
                    <span className="absolute left-2 top-2 rounded-full bg-black/30 px-2 py-0.5 text-[10px] font-bold text-white">AFTER</span>
                    <span className="font-display text-xl font-bold text-white">{tr.after}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-bold">{tr.name}</p>
                    <p className="text-xs text-muted">{tr.goal} · {tr.weeks} weeks</p>
                  </div>
                  <span className="rounded-full bg-flame-500/15 px-3 py-1 text-sm font-bold text-flame-300">{tr.change}</span>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Testimonial carousel */}
      <Reveal className="mt-10">
        <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
          <Quote className="absolute right-8 top-8 text-flame-500/20" size={80} />
          <div className="relative">
            <div className="flex gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={18} className="fill-flame-400 text-flame-400" />
              ))}
            </div>
            <p className="mt-5 max-w-3xl text-xl font-medium leading-relaxed sm:text-2xl">“{t.text}”</p>
            <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 flex-wrap items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-flame-gradient font-bold text-white">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
                <span className="ml-2 rounded-full bg-flame-500/15 px-3 py-1 text-sm font-bold text-flame-300">{t.metric}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:border-flame-500/50"
                  aria-label="Previous"
                ><ChevronLeft size={18} /></button>
                <button
                  onClick={() => setIdx((i) => (i + 1) % TESTIMONIALS.length)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-flame-gradient text-white"
                  aria-label="Next"
                ><ChevronRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="mt-6 flex gap-1.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-flame-500" : "w-1.5 bg-white/20"}`}
                aria-label={`Go to ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <div className="rounded-3xl glass-strong p-6 sm:p-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">What Our Members Say</span>
              <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                Community reviews with <span className="flame-text">real momentum</span>
              </h3>
            </div>
            <a
              href="https://www.instagram.com/al_naslan_fitness_center"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <Instagram size={17} /> Instagram
            </a>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((review, i) => (
              <article key={review.name} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-full bg-flame-gradient font-bold text-white">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-xs text-muted">{review.role}</p>
                    </div>
                  </div>
                  <span className="rounded-full bg-green-400/10 px-2.5 py-1 text-xs font-bold text-green-400">
                    {i === 0 ? "Google" : i === 1 ? "Instagram" : "Member App"}
                  </span>
                </div>
                <div className="flex gap-1">
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star key={star} size={15} className="fill-flame-400 text-flame-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-6 text-muted">{review.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
