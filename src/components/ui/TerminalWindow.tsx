import { cn } from "@/src/lib/utils";

interface TerminalWindowProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const TerminalWindow = ({
  title = "daleondynamics — zsh",
  children,
  className,
  contentClassName,
}: TerminalWindowProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface overflow-hidden shadow-2xl shadow-black/40",
        className
      )}
    >
      <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-surface-alt">
        <span aria-hidden="true" className="w-3 h-3 rounded-full bg-primary" />
        <span aria-hidden="true" className="w-3 h-3 rounded-full bg-accent" />
        <span aria-hidden="true" className="w-3 h-3 rounded-full bg-[#3A4553]" />
        <span className="ml-3 font-mono text-xs text-ink-muted">{title}</span>
      </div>
      <div className={cn("p-6 overflow-x-auto", contentClassName)}>{children}</div>
    </div>
  );
};

export default TerminalWindow;
