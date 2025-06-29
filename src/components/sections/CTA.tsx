"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Countdown } from "@/components/ui/countdown";

export function CTA() {
  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="container max-w-xl md:max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Countdown className="mb-6 mx-auto bg-red-700 text-white py-2 px-4 text-lg" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            지금 바로 카카오톡채널을 시작하세요!
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            전문가의 도움을 받아 카카오톡채널을 쉽고 효과적으로 운영하고
            고객과의 관계를 강화하세요.
          </p>
          
          <Button
            size="lg"
            className="bg-kakao hover:bg-kakao/90 text-kakao-text text-lg font-bold py-6 px-10"
            onClick={() => window.open('http://pf.kakao.com/_xnSYrn/chat', '_blank')}
          >
            카톡 상담 시작
          </Button>
          
          <p className="mt-4 text-gray-200">
            10분 내로 답변해 드립니다
          </p>
        </motion.div>
      </div>
    </section>
  );
} 