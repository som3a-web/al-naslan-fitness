"use client";

import { useMemo, useState } from "react";
import { Clock, Instagram, MapPin, MessageCircle, Phone, Truck } from "lucide-react";
import { SectionHeader } from "../SectionHeader";
import { Reveal } from "../Reveal";
import { CafeGallery } from "../CafeGallery";
import { BRAND, CAFE_FILTERS, CAFE_INFO, CAFE_MENU, type CafeItem } from "@/lib/data";

function MenuRow({ item }: { item: CafeItem }) {
  return (
    <li className="flex items-start justify-between gap-4 border-b border-dashed border-[color:var(--line)] py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 font-semibold leading-snug">
          <span>{item.en}</span>
          <span className="text-sm font-medium text-muted" dir="rtl" lang="ar">
            {item.ar}
          </span>
        </p>
        {item.desc && (
          <p className="mt-1 text-[13px] leading-5 text-muted">{item.desc}</p>
        )}
        {item.descAr && (
          <p className="text-[13px] leading-6 text-muted" dir="rtl" lang="ar">
            {item.descAr}
          </p>
        )}
        {item.note && (
          <p className="mt-1 text-[12px] font-semibold leading-5 text-flame-500">{item.note}</p>
        )}
        {item.noteAr && (
          <p className="text-[12px] font-semibold leading-6 text-flame-500" dir="rtl" lang="ar">
            {item.noteAr}
          </p>
        )}
      </div>

      {item.price !== null && (
        <p className="shrink-0 whitespace-nowrap pt-0.5 font-display text-lg font-extrabold tabular-nums text-flame-500">
          <span className="text-[11px] font-bold tracking-wider">{BRAND.currency} </span>
          {item.price}
        </p>
      )}
    </li>
  );
}

export function Cafe() {
  const [filter, setFilter] = useState("All");

  const groups = useMemo(
    () => (filter === "All" ? CAFE_MENU : CAFE_MENU.filter((g) => g.filter === filter)),
    [filter]
  );

  return (
    <section id="cafe" className="section relative py-24">
      <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-flame-500/15 blur-[120px]" />
      <SectionHeader
        eyebrow="Naslan Café"
        title="Refuel where you"
        highlight="train"
        subtitle="Our full café menu — coffee, smoothies, fresh juices, protein shakes and food, served right at the gym."
      />

      <Reveal className="mt-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
          {CAFE_INFO.tagline}
        </p>
        <p className="mt-1 text-sm text-muted" dir="rtl" lang="ar">
          {CAFE_INFO.taglineAr}
        </p>
      </Reveal>

      {/* Photo catalogue */}
      <Reveal className="mt-10">
        <CafeGallery />
      </Reveal>

      {/* Category filter */}
      <Reveal className="mt-12 flex flex-wrap justify-center gap-2">
        {CAFE_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              filter === f
                ? "bg-flame-gradient text-white shadow-flame"
                : "glass text-muted hover:text-flame-500"
            }`}
          >
            {f}
          </button>
        ))}
      </Reveal>

      {/* Menu groups */}
      <div className="mt-8 grid items-start gap-5 lg:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.id} delay={i * 50}>
            <div className="card h-full">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 border-b-2 border-flame-500/30 pb-3">
                <h3 className="font-display text-2xl font-extrabold uppercase leading-none">
                  <span className="mr-2 text-flame-500">//</span>
                  {group.en}
                </h3>
                <p className="font-display text-xl font-bold text-muted" dir="rtl" lang="ar">
                  {group.ar}
                </p>
              </div>

              {group.note && (
                <p className="mb-1 mt-3 flex flex-wrap items-baseline justify-between gap-2 rounded-xl border border-flame-500/30 bg-flame-500/10 px-3.5 py-2 text-sm font-bold">
                  <span>{group.note}</span>
                  <span className="font-medium text-muted" dir="rtl" lang="ar">
                    {group.noteAr}
                  </span>
                </p>
              )}

              <ul className="mt-1">
                {group.items.map((item) => (
                  <MenuRow key={item.en} item={item} />
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Café info strip */}
      <Reveal className="mt-8">
        <div className="rounded-3xl glass-strong p-6 sm:p-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-3">
              <Truck size={18} className="mt-0.5 shrink-0 text-flame-500" />
              <div>
                <p className="text-sm font-bold">{CAFE_INFO.delivery}</p>
                <p className="text-xs text-muted" dir="rtl" lang="ar">
                  {CAFE_INFO.deliveryAr}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock size={18} className="mt-0.5 shrink-0 text-flame-500" />
              <div>
                <p className="text-sm font-bold">{CAFE_INFO.hours}</p>
                <p className="text-xs text-muted">Opening hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 shrink-0 text-flame-500" />
              <div>
                <p className="text-sm font-bold">{CAFE_INFO.telephone}</p>
                <p className="text-sm font-bold">{CAFE_INFO.mobile}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-flame-500" />
              <p className="text-sm text-muted">{CAFE_INFO.location}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 border-t border-[color:var(--line)] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <a
              href={CAFE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold text-flame-500 transition hover:text-flame-400"
            >
              <Instagram size={16} /> {CAFE_INFO.instagramHandle}
            </a>
            <a
              href={`${BRAND.whatsappLink}?text=${encodeURIComponent("Hi Naslan Cafe, I'd like to place an order.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110"
            >
              <MessageCircle size={16} /> Order on WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
