"use client";

import {
  Area, AreaChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, Check, Flame, Gauge, Star, TrendingDown, type LucideIcon } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { Counter } from "../Counter";
import { BODY_COMPOSITION, MEMBERSHIPS, BRAND, PROGRESS_WEIGHT } from "@/lib/data";

const COMP_COLORS = ["#FF6A00", "#E0301E", "#FFB020", "#6B6B78"];

const tooltipStyle = {
  background: "rgba(16,16,22,0.92)",
  border: "1px solid rgba(255,106,0,0.3)",
  borderRadius: 12,
  color: "#fff",
  fontSize: 12,
};

function BodyStat({
  icon: Icon,
  label,
  value,
  suffix,
  unit,
  trend,
}: {
  icon: LucideIcon;
  label: string;
  value: number;
  suffix?: string;
  unit?: string;
  trend: string;
}) {
  return (
    <div className="glass rounded-2xl p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-flame-gradient shadow-flame">
          <Icon size={18} className="text-white" />
        </div>
        <span className="rounded-full bg-green-500/15 px-2.5 py-1 text-[11px] font-bold text-green-400">{trend}</span>
      </div>
      <p className="font-display text-2xl font-extrabold sm:text-3xl">
        <Counter to={value} suffix={suffix} /> <span className="text-sm font-medium text-muted">{unit}</span>
      </p>
      <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

export function Membership() {
  return (
    <section id="membership" className="section relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-flame-500/20 blur-[120px]" />
      <SectionHeader
        eyebrow="Membership"
        title="Choose your"
        highlight="commitment"
        subtitle="Transparent pricing in AED. No dead links — sign up online or start with a free trial first."
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
        {MEMBERSHIPS.map((m, i) => (
          <Reveal key={m.name} delay={i * 90}>
            <TiltCard className="h-full" intensity={m.popular ? 8 : 5}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-7 ${
                  m.popular
                    ? "border-2 border-flame-500/60 bg-gradient-to-b from-flame-500/15 to-transparent shadow-flame-lg"
                    : "glass"
                }`}
              >
                {m.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-flame-gradient px-4 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-flame">
                    <Star className="mr-1 inline" size={12} /> Most Popular
                  </span>
                )}
                <div className="tilt-inner flex h-full flex-col">
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted">{m.note}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="text-sm font-semibold text-flame-400">{BRAND.currency}</span>
                    <span className="font-display text-5xl font-extrabold">{m.price.toLocaleString()}</span>
                    <span className="mb-1.5 text-sm text-muted">{m.period}</span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flame-500/15">
                          <Check size={12} className="text-flame-400" />
                        </span>
                        <span className="text-muted">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#trial"
                    className={`mt-7 block rounded-full py-3 text-center text-sm font-bold transition ${
                      m.popular ? "bg-flame-gradient text-white hover:shadow-flame-lg" : "btn-ghost"
                    }`}
                  >
                    Choose {m.name}
                  </a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <div className="overflow-hidden rounded-3xl border border-flame-500/20 glass-strong p-5 sm:p-7">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <span className="eyebrow mb-4">Included Body Analytics</span>
              <h3 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Track your <span className="flame-text">progress</span> with every plan
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                Membership includes body composition checks that make progress easy to understand:
                weight, body fat, muscle mass, BMI and trend history in one clear view.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <BodyStat icon={TrendingDown} label="Weight" value={78} unit="kg" trend="-14 kg" />
                <BodyStat icon={Flame} label="Body Fat" value={18} suffix="%" trend="-10%" />
                <BodyStat icon={Activity} label="Muscle Mass" value={42} unit="kg" trend="+3 kg" />
                <BodyStat icon={Gauge} label="Fitness Score" value={86} suffix="/100" trend="+22" />
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-5">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:col-span-3">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold">Weight & Body-Fat Trend</h4>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-muted">
                    Last 6 months
                  </span>
                </div>
                <div className="h-64 sm:h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PROGRESS_WEIGHT} margin={{ left: -18, right: 8, top: 8, bottom: 0 }}>
                      <defs>
                        <linearGradient id="membershipWeight" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#FF6A00" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="#FF6A00" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="membershipFat" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#E0301E" stopOpacity={0.5} />
                          <stop offset="100%" stopColor="#E0301E" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                      <XAxis dataKey="m" stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                      <YAxis stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                      <Tooltip contentStyle={tooltipStyle} />
                      <Area type="monotone" dataKey="weight" stroke="#FF6A00" strokeWidth={3} fill="url(#membershipWeight)" name="Weight (kg)" />
                      <Area type="monotone" dataKey="fat" stroke="#E0301E" strokeWidth={3} fill="url(#membershipFat)" name="Body Fat (%)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 lg:col-span-2">
                <h4 className="mb-3 font-bold">Body Composition</h4>
                <div className="h-52 sm:h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={BODY_COMPOSITION}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={48}
                        outerRadius={78}
                        paddingAngle={3}
                        stroke="none"
                      >
                        {BODY_COMPOSITION.map((_, i) => (
                          <Cell key={i} fill={COMP_COLORS[i]} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {BODY_COMPOSITION.map((b, i) => (
                    <div key={b.name} className="flex items-center gap-2 text-xs">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: COMP_COLORS[i] }} />
                      <span className="text-muted">{b.name}</span>
                      <span className="ml-auto font-semibold">{b.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
