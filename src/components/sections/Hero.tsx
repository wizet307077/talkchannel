"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[60vh] flex items-center justify-center bg-gradient-to-b from-kakao to-white py-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-kakao/80 to-white/90 backdrop-blur-sm"></div>
      </div>
      <div className="container max-w-xl md:max-w-5xl relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <Countdown className="text-lg font-bold" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black mb-8 text-kakao-text leading-relaxed md:leading-tight"
        >
          카카오톡채널 개설 및 운영 <br className="hidden sm:block" />
          <span className="bg-white px-2 py-1 rounded-md mt-4 inline-block">무료 대행!</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl mb-8 text-gray-800 max-w-2xl mx-auto"
        >
          전화번호 없이 '채널 추가' 한 번이면 OK—단골 확보·매장 소식·쿠폰 발송까지 자동 관리!
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg md:text-xl mb-10 text-gray-800 font-semibold"
        >
          배달앱 수수료 없이 손님 주문을 직접 받아보세요!
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-kakao hover:bg-kakao/90 text-kakao-text text-lg font-bold py-6 px-8"
            onClick={() => window.open('http://pf.kakao.com/_xnSYrn/chat', '_blank')}
          >
            카톡 상담 시작
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 