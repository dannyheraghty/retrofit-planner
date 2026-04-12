"use client";

import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

type AnimatedValueProps = {
  value: number;
  duration?: number;
};

export function AnimatedValue({
  value,
  duration = 1.4
}: AnimatedValueProps) {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0
    }).format(Math.round(latest))
  );

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration,
      ease: [0.22, 1, 0.36, 1]
    });

    return () => controls.stop();
  }, [duration, motionValue, value]);

  return <motion.span>{rounded}</motion.span>;
}
