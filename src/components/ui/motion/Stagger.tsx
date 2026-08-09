"use client";

import { m } from "motion/react";
import { Children } from "react";

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  itemClassName?: string;
  /** Delay between each child's reveal, in seconds */
  step?: number;
  y?: number;
}

const container = (step: number) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: step },
  },
});

const item = (y: number) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
});

const Stagger = ({ children, className, itemClassName, step = 0.1, y = 24 }: StaggerProps) => {
  return (
    <m.div
      className={className}
      variants={container(step)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {Children.map(children, (child) => (
        <m.div className={itemClassName} variants={item(y)}>
          {child}
        </m.div>
      ))}
    </m.div>
  );
};

export default Stagger;
