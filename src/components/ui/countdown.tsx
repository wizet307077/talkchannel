"use client";

import { motion } from "framer-motion";

interface CountdownProps {
  className?: string;
}

export function Countdown({ className = "" }: CountdownProps) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center justify-center rounded-full bg-red-600 px-2.5 py-1 text-white ${className}`}
    >
      선착순 10명
    </motion.span>
  );
} 