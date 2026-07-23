import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import type { GymLocation } from "@/lib/gymnation-data";
import { cn } from "@/lib/utils";

type GymCardProps = {
  location: GymLocation;
  compact?: boolean;
};

export function GymCard({ location, compact = false }: GymCardProps) {
  return (
    <article className="group site-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-lime/70">
      <Link href={`/locations/${location.slug}`} aria-label={`View ${location.name}`} className="block">
        <div className={cn("relative overflow-hidden", compact ? "h-48" : "h-56")}>
          <Image
            src={location.image}
            alt={location.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-transparent" />
          <span className="absolute left-4 top-4 border border-lime/70 bg-carbon/80 px-3 py-1 text-xs font-black uppercase text-lime backdrop-blur">
            {location.emirate}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-black uppercase text-white">{location.name}</h3>
          <p className="mt-3 flex gap-2 text-sm leading-6 text-neutral-300">
            <MapPin aria-hidden="true" className="mt-1 shrink-0 text-lime" size={16} />
            <span>{location.address}</span>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm font-bold text-neutral-200">
            <Clock aria-hidden="true" className="text-lime" size={16} />
            {location.hours}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {location.amenities.slice(0, 3).map((amenity) => (
              <span key={amenity} className="border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
                {amenity}
              </span>
            ))}
          </div>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-lime">
            View Gym <ArrowUpRight aria-hidden="true" size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}

