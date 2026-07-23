"use client";

import { Waves, Clock, Users, Baby } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Icon } from "@/lib/icons";
import { SWIMMING, KIDS, BRAND } from "@/lib/data";

export function SwimKids() {
  return (
    <section id="swimming" className="section relative py-24">
      <SectionHeader
        eyebrow="Swimming & Kids"
        title="A pool for"
        highlight="every age"
        subtitle="Adult lap memberships, learn-to-swim, private coaching and a full kids academy — swimming, karate and summer camps."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {/* Swimming */}
        <Reveal>
          <div className="h-full rounded-3xl glass-strong p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                <Waves className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold">Swimming Programs</h3>
            </div>
            <div className="space-y-3">
              {SWIMMING.map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div>
                    <p className="font-semibold">{s.name}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted"><Clock size={12} /> {s.schedule}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-lg font-extrabold"><span className="text-xs text-flame-400">{BRAND.currency} </span>{s.price}</p>
                    <p className="flex items-center justify-end gap-1 text-xs text-green-400"><Users size={11} /> {s.slots} slots</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Kids */}
        <Reveal delay={120}>
          <div className="h-full rounded-3xl glass-strong p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-flame-gradient shadow-flame">
                <Baby className="text-white" size={20} />
              </div>
              <h3 className="text-lg font-bold">Kids Programs</h3>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {KIDS.map((k) => (
                <div key={k.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5">
                      <Icon name={k.icon} className="text-flame-400" size={16} />
                    </div>
                    <span className="rounded-full bg-flame-500/15 px-2 py-0.5 text-[10px] font-bold text-flame-300">
                      Ages {k.ages}
                    </span>
                  </div>
                  <p className="mt-3 font-semibold">{k.name}</p>
                  <p className="text-xs text-muted">{k.schedule}</p>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-[10px] text-muted">
                      <span>Capacity</span><span>{k.capacity}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-flame-gradient" style={{ width: `${k.capacity}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#trial" className="mt-4 block rounded-full bg-flame-gradient py-2.5 text-center text-sm font-bold text-white">
              Register a Child
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
