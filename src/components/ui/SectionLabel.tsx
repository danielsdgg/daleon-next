import { cn } from "@/src/lib/utils";

interface SectionLabelProps {
  label: string;
  tone?: "primary" | "accent";
  className?: string;
}

const SectionLabel = ({ label, tone = "primary", className }: SectionLabelProps) => {
  return (
    <div
      className={cn(
        "font-mono text-sm mb-3",
        tone === "primary" ? "text-primary" : "text-accent",
        className
      )}
    >
      {`// ${label}`}
    </div>
  );
};

export default SectionLabel;
