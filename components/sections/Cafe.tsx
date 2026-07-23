"use client";

import { useMemo, useState } from "react";
import { Plus, Minus, Star, ShoppingBag, MessageCircle, X } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { TiltCard } from "../TiltCard";
import { Icon } from "@/lib/icons";
import { CAFE_MENU, CAFE_CATEGORIES, CAFE_GOALS, CAFE_PERKS, BRAND, type CafeItem } from "@/lib/data";

function Macro({ label, val, unit = "g" }: { label: string; val: number; unit?: string }) {
  return (
    <span className="flex flex-col items-center rounded-lg bg-white/5 px-2 py-1">
      <span className="text-[11px] font-bold leading-none">{val}{unit}</span>
      <span className="text-[8px] uppercase tracking-wider text-muted">{label}</span>
    </span>
  );
}

export function Cafe() {
  const [cat, setCat] = useState("All");
  const [goal, setGoal] = useState("All");
  const [cart, setCart] = useState<Record<string, number>>({});

  const items = useMemo(
    () =>
      CAFE_MENU.filter(
        (m) => (cat === "All" || m.cat === cat) && (goal === "All" || m.goals.includes(goal))
      ),
    [cat, goal]
  );

  const add = (n: string) => setCart((c) => ({ ...c, [n]: (c[n] || 0) + 1 }));
  const sub = (n: string) =>
    setCart((c) => {
      const q = (c[n] || 0) - 1;
      const next = { ...c };
      if (q <= 0) delete next[n];
      else next[n] = q;
      return next;
    });

  const lines = Object.entries(cart);
  const count = lines.reduce((s, [, q]) => s + q, 0);
  const total = lines.reduce((s, [n, q]) => {
    const it = CAFE_MENU.find((m) => m.name === n);
    return s + (it ? it.price * q : 0);
  }, 0);

  const checkout = () => {
    const body = lines
      .map(([n, q]) => {
        const it = CAFE_MENU.find((m) => m.name === n)!;
        return `• ${q}× ${n} (${BRAND.currency} ${it.price * q})`;
      })
      .join("\n");
    const msg = `Hi NFC Café! I'd like to order ahead:\n${body}\n\nTotal: ${BRAND.currency} ${total}\nName: `;
    window.open(`${BRAND.whatsappLink}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="cafe" className="section relative py-24">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-flame-500/15 blur-[120px]" />
      <SectionHeader
        eyebrow="NFC Café · In-House Kitchen"
        title="Refuel where you"
        highlight="train"
        subtitle="Our own healthy kitchen inside the gym — every meal is macro-counted and goal-matched. Order ahead and it's ready after your session."
      />

      {/* Perks */}
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {CAFE_PERKS.map((p, i) => (
          <Reveal key={p.title} delay={i * 60}>
            <div className="glass h-full rounded-2xl p-5">
              <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-flame-gradient shadow-flame">
                <Icon name={p.icon} className="text-white" size={18} />
              </div>
              <p className="font-bold">{p.title}</p>
              <p className="mt-1 text-xs text-muted">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Filters */}
      <Reveal className="mt-10 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted">Menu</span>
          {CAFE_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                cat === c ? "bg-flame-gradient text-white shadow-flame" : "glass text-muted hover:text-flame-400"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted">Goal</span>
          {CAFE_GOALS.map((g) => (
            <button
              key={g}
              onClick={() => setGoal(g)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                goal === g ? "bg-white text-ink-950" : "border border-white/10 bg-white/5 text-muted hover:text-flame-400"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Menu grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((m: CafeItem, i) => {
          const qty = cart[m.name] || 0;
          return (
            <Reveal key={m.name} delay={i * 40}>
              <TiltCard intensity={5} className="h-full">
                <div className="card group flex h-full flex-col hover:border-flame-500/40">
                  <div className="tilt-inner flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/5 text-2xl">{m.emoji}</div>
                      {m.popular && (
                        <span className="flex items-center gap-1 rounded-full border border-flame-500/30 bg-flame-500/10 px-2 py-0.5 text-[10px] font-bold text-flame-300">
                          <Star size={10} className="fill-flame-400 text-flame-400" /> Popular
                        </span>
                      )}
                    </div>
                    <h3 className="mt-3 font-bold">{m.name}</h3>
                    <p className="mt-1 text-xs text-muted">{m.desc}</p>

                    {/* Macros */}
                    <div className="mt-4 grid grid-cols-4 gap-1.5">
                      <Macro label="Kcal" val={m.kcal} unit="" />
                      <Macro label="Protein" val={m.p} />
                      <Macro label="Carbs" val={m.c} />
                      <Macro label="Fat" val={m.f} />
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-5">
                      <p className="font-display text-xl font-extrabold">
                        <span className="text-xs text-flame-400">{BRAND.currency} </span>{m.price}
                      </p>
                      {qty === 0 ? (
                        <button
                          onClick={() => add(m.name)}
                          className="flex items-center gap-1.5 rounded-full bg-flame-gradient px-4 py-2 text-xs font-bold text-white transition hover:shadow-flame"
                        >
                          <Plus size={14} /> Add
                        </button>
                      ) : (
                        <div className="flex items-center gap-2 rounded-full border border-flame-500/40 bg-flame-500/10 px-2 py-1">
                          <button onClick={() => sub(m.name)} className="grid h-6 w-6 place-items-center rounded-full bg-white/10 text-flame-300"><Minus size={12} /></button>
                          <span className="w-5 text-center text-sm font-bold">{qty}</span>
                          <button onClick={() => add(m.name)} className="grid h-6 w-6 place-items-center rounded-full bg-flame-gradient text-white"><Plus size={12} /></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>

      {items.length === 0 && (
        <p className="mt-8 text-center text-sm text-muted">No items match that combination — try another goal or category.</p>
      )}

      {/* Floating order bar */}
      {count > 0 && (
        <div className="sticky bottom-4 z-30 mx-auto mt-8 flex max-w-2xl flex-col items-stretch justify-between gap-4 rounded-2xl glass-strong p-3 shadow-glass sm:flex-row sm:items-center sm:pl-5">
          <div className="flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-xl bg-flame-gradient text-white">
              <ShoppingBag size={18} />
              <span className="absolute -right-1.5 -top-1.5 grid h-5 w-5 place-items-center rounded-full bg-white text-[10px] font-extrabold text-ink-950">{count}</span>
            </div>
            <div>
              <p className="text-sm font-bold">{count} item{count > 1 ? "s" : ""} · {BRAND.currency} {total}</p>
              <p className="text-[11px] text-muted">Pick up after your workout</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setCart({})} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-muted" aria-label="Clear order"><X size={16} /></button>
            <button onClick={checkout} className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition hover:brightness-110 sm:flex-none">
              <MessageCircle size={16} /> Order on WhatsApp
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
