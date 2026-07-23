"use client";

import { useMemo, useState } from "react";
import { Clock, MessageCircle, Timer, Users } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Icon } from "@/lib/icons";
import { BRAND, CLASSES } from "@/lib/data";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function Classes() {
  const [day, setDay] = useState("Mon");
  const [activity, setActivity] = useState("All");
  const [trainer, setTrainer] = useState("All");
  const activities = useMemo(() => ["All", ...Array.from(new Set(CLASSES.map((c) => c.focus)))], []);
  const trainers = useMemo(() => ["All", ...Array.from(new Set(CLASSES.map((c) => c.trainer)))], []);
  const visible = CLASSES.filter(
    (c) =>
      c.days.includes(day) &&
      (activity === "All" || c.focus === activity) &&
      (trainer === "All" || c.trainer === trainer)
  );

  return (
    <section id="classes" className="section relative py-24">
      <SectionHeader
        eyebrow="Weekly Class Schedule"
        title="Train with"
        highlight="purpose"
        subtitle="Strength, conditioning, mobility and recovery sessions across the week. Pick a day, explore the schedule, and ask our team for the best fit."
      />

      <Reveal className="mt-10 rounded-3xl glass-strong p-4">
        <div className="flex flex-wrap justify-center gap-2">
          {DAYS.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                day === d ? "bg-flame-gradient text-white shadow-flame" : "glass text-muted hover:text-flame-400"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase text-muted">Activity</span>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-flame-500/60"
            >
              {activities.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase text-muted">Trainer</span>
            <select
              value={trainer}
              onChange={(e) => setTrainer(e.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-flame-500/60"
            >
              {trainers.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <div className="card group hover:border-flame-500/40">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
                      <Icon name={c.icon} className="text-flame-400" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">{c.name}</h3>
                      <p className="text-xs text-muted">{c.focus}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted">
                    {c.level}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {c.time}</span>
                  <span className="flex items-center gap-1.5"><Timer size={14} /> {c.duration}</span>
                  <span className="flex items-center gap-1.5"><Users size={14} /> {c.spots} spots</span>
                </div>
                <p className="mt-2 text-xs text-muted">Coach: {c.trainer}</p>
                <div className="mt-4">
                  <div className="mb-1.5 flex items-center justify-between text-xs">
                    <span className="font-semibold text-muted">Capacity</span>
                    <span className={c.occupancy > 80 ? "font-bold text-ember" : c.occupancy > 55 ? "font-bold text-flame-300" : "font-bold text-green-400"}>
                      {c.occupancy}% Full
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-flame-gradient"
                      style={{ width: `${c.occupancy}%` }}
                    />
                  </div>
                </div>

                <a
                  href={`${BRAND.whatsappLink}?text=${encodeURIComponent(`Hi NFC, I would like to ask about the ${c.name} class on ${day}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-2.5 text-sm font-bold transition hover:border-flame-500/50 hover:text-flame-400"
                >
                  <MessageCircle size={16} /> Ask about {day}
                </a>
              </div>
            </Reveal>
        ))}
      </div>
      {visible.length === 0 && (
        <p className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-muted">
          No classes match those filters for {day}. Try another activity or trainer.
        </p>
      )}
    </section>
  );
}
