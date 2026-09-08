"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

type Shot = { src: string; alt: string; caption: string; tall?: boolean };

// Photos supplied by Naslan Café. Captions describe what is in the photo —
// they are not menu item names.
const SHOTS: Shot[] = [
  { src: "/media/cafe/meal-buffalo-chicken.jpg", alt: "Buffalo Chicken with Potato in a Naslan Café takeaway box with signature sauce", caption: "Buffalo Chicken with Potato" },
  { src: "/media/cafe/meal-steak-mushroom.jpg", alt: "Steak Mushroom with Rice served hot in a Naslan Café box", caption: "Steak Mushroom with Rice" },
  { src: "/media/cafe/meal-beef-burger.jpg", alt: "Classic Beef Burger with lettuce and cucumber on a white plate", caption: "Classic Beef Burger" },
  { src: "/media/cafe/meal-grilled-chicken.jpg", alt: "Grilled Chicken with Rice and creamy sauce in a Naslan Café box", caption: "Grilled Chicken with Rice" },
  { src: "/media/cafe/cafe-interior-coffees.jpg", alt: "Naslan Café interior with three coffees on a table by the brick wall", caption: "Inside Naslan Café", tall: true },
  { src: "/media/cafe/burger-and-coffee.jpg", alt: "Classic Beef Burger served with a coffee and teapot", caption: "Burger & coffee" },
  { src: "/media/cafe/chicken-rice-box.jpg", alt: "Grilled chicken and rice in a Naslan Café takeaway box", caption: "Grilled chicken box", tall: true },
  { src: "/media/cafe/espresso-tray.jpg", alt: "Hot espresso in a glass cup on a wooden tray with biscuits", caption: "Espresso & biscuits" },
  { src: "/media/cafe/tiramisu-and-tea.jpg", alt: "Tiramisu slice with a cup of coffee and a glass teapot", caption: "Dessert & tea" },
  { src: "/media/cafe/donuts-and-cookies.jpg", alt: "Donuts and cookies arranged on a wooden board", caption: "Donuts & cookies" },
  { src: "/media/cafe/iced-coffee-duo.jpg", alt: "Two iced coffees on coasters in front of a green banquette", caption: "Iced coffee", tall: true },
  { src: "/media/cafe/fruit-cooler.jpg", alt: "Iced fruit drink with an orange slice under neon lighting", caption: "Fruit cooler" },
  { src: "/media/cafe/chocolate-shake.jpg", alt: "Chocolate shake with chocolate drizzle beside a plant pot", caption: "Chocolate shake" },
  { src: "/media/cafe/shake-and-donut.jpg", alt: "Blended chocolate drink served with a chocolate donut", caption: "Shake & donut" },
  { src: "/media/cafe/iced-chocolate.jpg", alt: "Iced chocolate drink on a café table by the window", caption: "Iced chocolate" },
];

export function CafeGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const move = (dir: number) =>
    setIndex((i) => (i === null ? i : (i + dir + SHOTS.length) % SHOTS.length));

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowLeft") move(-1);
      if (e.key === "ArrowRight") move(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy)) return;
    move(dx > 0 ? -1 : 1);
  };

  const active = index === null ? null : SHOTS[index];

  return (
    <>
      <div className="grid auto-rows-[128px] grid-cols-2 gap-3 sm:auto-rows-[150px] sm:grid-cols-3 lg:grid-cols-4">
        {SHOTS.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${shot.caption}`}
            className={`group/shot relative overflow-hidden rounded-2xl border border-[color:var(--line)] bg-ink-950 shadow-glass transition focus:outline-none focus:ring-2 focus:ring-flame-400 ${
              shot.tall ? "row-span-2" : ""
            }`}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover transition duration-700 group-hover/shot:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent opacity-90" />
            <span className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/45 text-white opacity-0 backdrop-blur transition group-hover/shot:opacity-100">
              <Expand size={14} />
            </span>
            <span className="absolute inset-x-0 bottom-0 p-3 text-left text-[13px] font-bold leading-tight text-white">
              {shot.caption}
            </span>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[90] bg-ink-950/95 px-3 py-4 text-white backdrop-blur-xl sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          aria-label="Naslan Café photo gallery"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            onClick={() => setIndex(null)}
            aria-label="Close photo gallery"
          />

          <div className="group/lb relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-sm font-black uppercase tracking-[0.18em] text-flame-300">
                  Naslan Café
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {index! + 1} / {SHOTS.length} — {active.caption}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIndex(null)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/10 transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-flame-300"
                aria-label="Close photo gallery"
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1 overflow-hidden rounded-3xl border border-white/12 bg-black"
              onTouchStart={(e) => {
                const t = e.changedTouches[0];
                touchStart.current = { x: t.clientX, y: t.clientY };
              }}
              onTouchEnd={onTouchEnd}
            >
              <div key={active.src} className="gallery-image-enter absolute inset-0">
                <Image src={active.src} alt={active.alt} fill sizes="100vw" className="object-contain" priority />
              </div>

              <div className="pointer-events-none absolute inset-y-0 inset-x-0 flex items-center justify-between px-2 sm:px-5">
                <button
                  type="button"
                  onClick={() => move(-1)}
                  className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-12 sm:w-12"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={() => move(1)}
                  className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-12 sm:w-12"
                  aria-label="Next photo"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {SHOTS.map((shot, i) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-2xl border transition focus:outline-none focus:ring-2 focus:ring-flame-300 sm:h-16 sm:w-24 ${
                    i === index
                      ? "border-flame-300 opacity-100 shadow-flame"
                      : "border-white/12 opacity-60 hover:opacity-100"
                  }`}
                  aria-label={`Show ${shot.caption}`}
                  aria-current={i === index ? "true" : undefined}
                >
                  <Image src={shot.src} alt={shot.alt} fill sizes="112px" className="object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
