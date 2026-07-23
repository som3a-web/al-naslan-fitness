"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Icon } from "@/lib/icons";
import { BRAND, PROGRAMS } from "@/lib/data";

export function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden py-24 sm:py-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/nfc-logo.jpeg"
        aria-hidden="true"
      >
        <source src="/media/gym-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-ink-950/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/45 to-ink-950" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/85 via-transparent to-ink-950/75" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_38%,rgba(255,106,0,0.28),transparent_34rem)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-flame-gradient opacity-70" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-flame-gradient opacity-50" />

      <div className="section relative z-10">
        <SectionHeader
          eyebrow="NFC Programs"
          title="One gym,"
          highlight="every goal"
          subtitle="A complete NFC experience for strength, fat loss, swimming, kids programs, nutrition and recovery. Members do not need five places - they need one system that works."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.name} delay={i * 60}>
              <article className="group relative flex h-full min-h-[240px] overflow-hidden rounded-3xl border border-white/[0.14] bg-ink-950/[0.62] p-6 shadow-glass backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-flame-500/50 hover:bg-ink-950/[0.72]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.055] via-transparent to-flame-500/[0.12]" />
                <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-flame-500/12 blur-2xl transition group-hover:bg-flame-500/28" />
                <div className="relative flex h-full w-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                      <Icon name={program.icon} className="text-white" size={21} />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-flame-200">
                      {program.tag}
                    </span>
                  </div>

                  <div className="mt-8 flex-1">
                    <h3 className="font-display text-xl font-extrabold leading-tight text-white">{program.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/[0.68]">{program.desc}</p>
                  </div>

                  <a
                    href={`${BRAND.whatsappLink}?text=${encodeURIComponent(`Hi NFC, I want to know more about ${program.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-flame-300 transition group-hover:text-flame-200"
                  >
                    <MessageCircle size={16} />
                    {program.cta}
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
