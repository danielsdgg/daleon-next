import { cn } from "@/src/lib/utils";

type Tone = "keyword" | "string" | "ident" | "muted" | "punct" | "plain";

interface CodeToken {
  text: string;
  tone?: Tone;
}

export interface CodeLine {
  tokens: CodeToken[];
}

interface CodeSnippetProps {
  lines: CodeLine[];
  className?: string;
  /** Show a blinking cursor after the last line */
  showCursor?: boolean;
}

const toneClass: Record<Tone, string> = {
  keyword: "text-accent",
  string: "text-ink",
  ident: "text-primary",
  muted: "text-ink-dim",
  punct: "text-ink-muted",
  plain: "text-ink",
};

const CodeSnippet = ({ lines, className, showCursor = false }: CodeSnippetProps) => {
  return (
    <pre className={cn("font-mono text-sm leading-relaxed", className)}>
      <code>
        {lines.map((line, i) => (
          <span key={i}>
            {line.tokens.map((token, j) => (
              <span key={j} className={toneClass[token.tone ?? "plain"]}>
                {token.text}
              </span>
            ))}
            {i < lines.length - 1 && "\n"}
          </span>
        ))}
        {showCursor && (
          <span
            aria-hidden="true"
            className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"
          />
        )}
      </code>
    </pre>
  );
};

export default CodeSnippet;
