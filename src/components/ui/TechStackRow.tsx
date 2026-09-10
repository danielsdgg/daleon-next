import type { LucideIcon } from "lucide-react";
import { cn } from "@/src/lib/utils";
import TechBadge from "@/src/components/ui/TechBadge";

export interface TechStackItem {
  icon: LucideIcon;
  label: string;
}

interface TechStackRowProps {
  items: TechStackItem[];
  /** Scroll the row on a continuous marquee instead of wrapping */
  marquee?: boolean;
  className?: string;
}

const TechStackRow = ({ items, marquee = false, className }: TechStackRowProps) => {
  if (marquee) {
    const doubled = [...items, ...items];
    return (
      <div className={cn("overflow-hidden", className)}>
        <div className="flex gap-3 animate-marquee w-max">
          {doubled.map((item, i) => (
            <TechBadge key={i} icon={item.icon} label={item.label} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items.map((item, i) => (
        <TechBadge key={i} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default TechStackRow;
