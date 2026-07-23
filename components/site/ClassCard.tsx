import Image from "next/image";
import { Timer, Zap } from "lucide-react";
import type { FitnessClass } from "@/lib/gymnation-data";

type ClassCardProps = {
  item: FitnessClass;
};

const intensityClass = {
  Low: "text-emerald-300 border-emerald-300/40 bg-emerald-300/10",
  Medium: "text-sky-300 border-sky-300/40 bg-sky-300/10",
  High: "text-lime border-lime/40 bg-lime/10",
  Athlete: "text-orange-300 border-orange-300/40 bg-orange-300/10",
};

export function ClassCard({ item }: ClassCardProps) {
  return (
    <article className="group site-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-lime/70">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/25 to-transparent" />
        <span className="absolute left-4 top-4 border border-white/20 bg-carbon/75 px-3 py-1 text-xs font-black uppercase text-white backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`border px-2.5 py-1 text-xs font-black uppercase ${intensityClass[item.intensity]}`}>
            {item.intensity}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase text-neutral-300">
            <Timer aria-hidden="true" size={14} />
            {item.duration}
          </span>
        </div>
        <h3 className="mt-4 text-2xl font-black uppercase text-white">{item.name}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-300">{item.description}</p>
        <p className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-lime">
          Book in app <Zap aria-hidden="true" size={16} />
        </p>
      </div>
    </article>
  );
}

