import type { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface TechBadgeProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

const TechBadge = ({ icon: Icon, label, className }: TechBadgeProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 whitespace-nowrap",
        className
      )}
    >
      <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
      <span className="font-mono text-xs text-ink-muted">{label}</span>
    </div>
  );
};

export default TechBadge;
