import {
  Flame, Dumbbell, Activity, Heart, Zap, Waves, Baby, Lock, Clock, Trophy, Coffee,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Flame, Dumbbell, Activity, Heart, Zap, Waves, Baby, Lock, Clock, Trophy, Coffee,
};

export function Icon({ name, ...props }: { name: string } & React.ComponentProps<LucideIcon>) {
  const C = MAP[name] ?? Flame;
  return <C {...props} />;
}
