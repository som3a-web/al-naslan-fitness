"use client";

import {
  BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, Cell,
  LineChart, Line, CartesianGrid, YAxis,
} from "recharts";
import { Users, TrendingUp, CalendarCheck, Waves } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { GYM_GROWTH, POOL_USAGE } from "@/lib/data";

const tooltipStyle = {
  background: "rgba(16,16,22,0.92)",
  border: "1px solid rgba(255,106,0,0.3)",
  borderRadius: 12,
  color: "#fff",
  fontSize: 12,
};

const KPIS = [
  { icon: Users, label: "Total Members", value: 2480, suffix: "+" },
  { icon: TrendingUp, label: "Monthly Growth", value: 4, suffix: ".2%" },
  { icon: CalendarCheck, label: "PT Sessions / mo", value: 610, suffix: "" },
  { icon: Waves, label: "Pool Usage (avg)", value: 72, suffix: "%" },
];

export function GymStats() {
  return (
    <section id="gym-stats" className="section relative py-24">
      <SectionHeader
        eyebrow="Live Gym Dashboard"
        title="A data-driven"
        highlight="fitness center"
        subtitle="The same platform gives management real-time visibility into growth, attendance, PT bookings and facility usage."
      />

      <Reveal className="mt-14">
        <div className="rounded-3xl glass-strong p-5 sm:p-7">
          <div className="mb-5 flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1.5 rounded-full bg-green-500/15 px-3 py-1 font-bold text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" /> LIVE
            </span>
            <span className="text-muted">Updated continuously · demo data</span>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.label} className="glass rounded-2xl p-5">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-flame-gradient shadow-flame">
                  <k.icon size={18} className="text-white" />
                </div>
                <p className="font-display text-3xl font-extrabold"><Counter to={k.value} suffix={k.suffix} /></p>
                <p className="mt-1 text-xs uppercase tracking-wider text-muted">{k.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="mb-4 font-bold">Membership & PT Growth</h3>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={GYM_GROWTH}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="m" stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Line type="monotone" dataKey="members" stroke="#FF6A00" strokeWidth={3} dot={false} name="Members" />
                    <Line type="monotone" dataKey="pt" stroke="#FFB020" strokeWidth={3} dot={false} name="PT Sessions" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="mb-4 font-bold">Weekly Pool Usage</h3>
              <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={POOL_USAGE}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" vertical={false} />
                    <XAxis dataKey="d" stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "rgba(255,106,0,0.08)" }} />
                    <Bar dataKey="usage" radius={[8, 8, 0, 0]}>
                      {POOL_USAGE.map((d, i) => (
                        <Cell key={i} fill={d.usage > 85 ? "#E0301E" : d.usage > 60 ? "#FF6A00" : "#FFB020"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
