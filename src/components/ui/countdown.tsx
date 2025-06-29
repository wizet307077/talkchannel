"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CountdownProps {
  initialCount?: number;
  className?: string;
}

export function Countdown({ initialCount = 10, className = "" }: CountdownProps) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    // 로컬 스토리지에서 이전 카운트 확인
    const storedCount = localStorage.getItem("remainingSpots");
    const initialValue = storedCount ? parseInt(storedCount, 10) : initialCount;
    setCount(initialValue);

    // 랜덤하게 카운트 감소 (데모용)
    const interval = setInterval(() => {
      setCount((prevCount) => {
        // 50% 확률로 카운트 감소
        if (Math.random() > 0.99 && prevCount > 1) {
          const newCount = prevCount - 1;
          localStorage.setItem("remainingSpots", newCount.toString());
          return newCount;
        }
        return prevCount;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [initialCount]);

  return (
    <motion.span
      key={count}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`inline-flex items-center justify-center rounded-full bg-red-600 px-2.5 py-1 text-white ${className}`}
    >
      선착순 {count}명
    </motion.span>
  );
} 