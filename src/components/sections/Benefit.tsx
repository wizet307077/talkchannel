"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

// 카운트업 애니메이션 컴포넌트
function CountUp({ end, duration = 2, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isInView]);
  
  return <span ref={ref} className="num">{count}{suffix}</span>;
}

const benefits = [
  {
    title: "단골 확보",
    description: "전화번호 없이 '채널 추가' 클릭 한 번으로 쉽게 고객을 확보하세요.",
    icon: "👥",
    stat: { value: 500, suffix: "+", label: "평균 친구 수" }
  },
  {
    title: "매출 증대",
    description: "쿠폰·이벤트로 재방문을 유도하고 매출을 증가시켜 보세요.",
    icon: "📈",
    stat: { value: 22, suffix: "%", label: "평균 매출 증가" }
  },
  {
    title: "비용 절감",
    description: "배달앱 수수료 0원, 메시지 10,000건 무료로 마케팅 비용을 줄이세요.",
    icon: "💰",
    stat: { value: 0, suffix: "원", label: "수수료" }
  },
  {
    title: "전문가 지원",
    description: "콘텐츠 제작, 데이터 분석, 마케팅 가이드까지 전문 지원을 받으세요.",
    icon: "🔍",
    stat: { value: 24, suffix: "시간", label: "전문 컨설팅" }
  }
];

export function Benefit() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-xl md:max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">핵심 혜택</h2>
          <p className="text-xl text-gray-600">
            카카오톡채널 운영으로 얻을 수 있는 놀라운 혜택들
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-start gap-4"
            >
              <div className="w-16 h-16 bg-kakao rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <div className="mb-3">
                  <Badge className="bg-indigo-600 text-white mb-2">{benefit.title}</Badge>
                  <div className="text-4xl md:text-5xl font-black mb-2 flex items-center gap-2">
                    <CountUp end={benefit.stat.value} suffix={benefit.stat.suffix} />
                    <span className="text-sm font-normal text-gray-500">
                      {benefit.stat.label}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 