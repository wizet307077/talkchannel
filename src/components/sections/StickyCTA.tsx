"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤이 200px 이상 내려가면 표시
      const shouldBeVisible = window.scrollY > 200;
      setVisible(shouldBeVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50 md:hidden"
        >
          <Button
            className="w-full bg-kakao hover:bg-kakao/90 text-kakao-text font-bold text-lg"
            onClick={() => window.open('http://pf.kakao.com/_xnSYrn/chat', '_blank')}
          >
            카톡 상담 시작
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 