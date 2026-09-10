import { cn } from "@/src/lib/utils";

type Tone = "live" | "busy" | "offline";

interface StatusPillProps {
  label: string;
  tone?: Tone;
  size?: "sm" | "md";
  className?: string;
}

const dotColor: Record<Tone, string> = {
  live: "bg-accent",
  busy: "bg-primary",
  offline: "bg-ink-dim",
};

const StatusPill = ({ label, tone = "live", size = "sm", className }: StatusPillProps) => {
  const dotSize = size === "sm" ? "h-1.5 w-1.5" : "h-2 w-2";

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span aria-hidden="true" className={cn("relative flex", dotSize)}>
        {tone !== "offline" && (
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColor[tone]
            )}
          />
        )}
        <span className={cn("relative inline-flex rounded-full", dotSize, dotColor[tone])} />
      </span>
      <span
        className={cn(
          size === "sm"
            ? "font-mono text-[11px] uppercase tracking-wider text-ink-muted"
            : "text-sm text-ink-muted"
        )}
      >
        {label}
      </span>
    </div>
  );
};

export default StatusPill;
