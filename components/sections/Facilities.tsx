"use client";

import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { Icon } from "@/lib/icons";
import { FACILITIES } from "@/lib/data";

export function Facilities() {
  return (
    <section id="facilities" className="section relative py-24">
      <SectionHeader
        eyebrow="World-Class Facilities"
        title="Everything under"
        highlight="one roof"
        subtitle="From a 25m pool to a functional arena and a spa-grade recovery lounge — explore the spaces that make NFC a destination."
      />
      <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {FACILITIES.map((f, i) => (
          <Reveal key={f.name} delay={i * 50} className={i === 0 ? "col-span-2 row-span-2" : ""}>
            <TiltCard className="h-full" intensity={6}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 p-5"
                style={{ background: "linear-gradient(150deg, rgba(255,106,0,0.12), rgba(20,20,26,0.6))" }}>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-flame-500/20 blur-2xl transition-all group-hover:bg-flame-500/40" />
                <div className="tilt-inner relative flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                      <Icon name={f.icon} className="text-white" size={20} />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-flame-300">
                      {f.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className={`font-bold ${i === 0 ? "text-2xl" : "text-base"}`}>{f.name}</h3>
                    <p className="mt-1 text-sm text-muted">{f.desc}</p>
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
