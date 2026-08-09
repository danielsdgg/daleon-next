"use client";

import { m } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Element tag to render as, defaults to a div */
  as?: "div" | "li";
}

const Reveal = ({ children, className, delay = 0, y = 24, as = "div" }: RevealProps) => {
  const Component = m[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </Component>
  );
};

export default Reveal;
