"use client";

import {
  AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid,
  RadarChart, PolarGrid, PolarAngleAxis, Radar, PieChart, Pie, Cell,
} from "recharts";
import { TrendingDown, Activity, Flame, Gauge } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { PROGRESS_WEIGHT, BODY_COMPOSITION, FITNESS_RADAR } from "@/lib/data";

const COMP_COLORS = ["#FF6A00", "#E0301E", "#FFB020", "#6B6B78"];

function StatCard({ icon: Icon, label, value, suffix, unit, trend }: any) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="mb-3 flex items-center justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-flame-gradient shadow-flame">
          <Icon size={18} className="text-white" />
        </div>
        {trend && <span className="text-xs font-bold text-green-400">{trend}</span>}
      </div>
      <p className="font-display text-3xl font-extrabold">
        <Counter to={value} suffix={suffix} /> <span className="text-base font-medium text-muted">{unit}</span>
      </p>
      <p className="mt-1 text-xs uppercase tracking-wider text-muted">{label}</p>
    </div>
  );
}

const tooltipStyle = {
  background: "rgba(16,16,22,0.92)",
  border: "1px solid rgba(255,106,0,0.3)",
  borderRadius: 12,
  color: "#fff",
  fontSize: 12,
};

export function Analytics() {
  return (
    <section id="analytics" className="section relative py-24">
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-ember/20 blur-[120px]" />
      <SectionHeader
        eyebrow="InBody Analytics"
        title="Your body, in"
        highlight="full data"
        subtitle="Every member gets a futuristic analytics dashboard — track weight, body fat, muscle mass, BMI and an overall fitness score over time."
      />

      <Reveal className="mt-14">
        <div className="glass-strong rounded-3xl p-5 sm:p-7">
          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            <StatCard icon={TrendingDown} label="Weight" value={78} unit="kg" trend="-14 kg" />
            <StatCard icon={Flame} label="Body Fat" value={18} suffix="%" trend="-10%" />
            <StatCard icon={Activity} label="Muscle Mass" value={42} unit="kg" trend="+3 kg" />
            <StatCard icon={Gauge} label="Fitness Score" value={86} suffix="/100" trend="+22" />
          </div>

          {/* Charts */}
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            {/* Weight + fat trend */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 lg:col-span-2">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="font-bold">Weight & Body-Fat Progress</h3>
                <span className="text-xs text-muted">Last 6 months</span>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={PROGRESS_WEIGHT}>
                    <defs>
                      <linearGradient id="wg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF6A00" stopOpacity={0.6} />
                        <stop offset="100%" stopColor="#FF6A00" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="fg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E0301E" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="#E0301E" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis dataKey="m" stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#9a9aa8" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={tooltipStyle} />
                    <Area type="monotone" dataKey="weight" stroke="#FF6A00" strokeWidth={3} fill="url(#wg)" name="Weight (kg)" />
                    <Area type="monotone" dataKey="fat" stroke="#E0301E" strokeWidth={3} fill="url(#fg)" name="Body Fat (%)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Body composition donut */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <h3 className="mb-4 font-bold">Body Composition</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={BODY_COMPOSITION} dataKey="value" nameKey="name" innerRadius={55} outerRadius={85} paddingAngle={3} stroke="none">
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
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COMP_COLORS[i] }} />
                    <span className="text-muted">{b.name}</span>
                    <span className="ml-auto font-semibold">{b.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Radar + BMI */}
          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 lg:col-span-2">
              <h3 className="mb-4 font-bold">Performance Profile</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={FITNESS_RADAR}>
                    <PolarGrid stroke="rgba(255,255,255,0.1)" />
                    <PolarAngleAxis dataKey="metric" tick={{ fill: "#9a9aa8", fontSize: 12 }} />
                    <Radar dataKey="value" stroke="#FF6A00" fill="#FF6A00" fillOpacity={0.4} strokeWidth={2} />
                    <Tooltip contentStyle={tooltipStyle} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-flame-500/15 to-transparent p-6 text-center">
              <p className="text-sm uppercase tracking-wider text-muted">Current BMI</p>
              <p className="my-2 font-display text-6xl font-extrabold flame-text">
                <Counter to={23} />
              </p>
              <span className="mx-auto rounded-full bg-green-500/20 px-3 py-1 text-xs font-bold text-green-400">
                Healthy Range
              </span>
              <p className="mt-3 text-xs text-muted">Down from 28.4 — a 19% improvement in 6 months.</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
