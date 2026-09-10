"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";

const MotionProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
};

export default MotionProvider;
