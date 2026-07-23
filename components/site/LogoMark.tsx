import Link from "next/link";
import { Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

type LogoMarkProps = {
  className?: string;
  compact?: boolean;
};

export function LogoMark({ className, compact = false }: LogoMarkProps) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2", className)} aria-label="GymNation home">
      <span className="grid h-10 w-10 place-items-center border border-lime bg-lime text-carbon">
        <Dumbbell aria-hidden="true" size={22} strokeWidth={2.6} />
      </span>
      {!compact ? <span className="text-xl font-black uppercase tracking-normal text-white">GymNation</span> : null}
    </Link>
  );
}

