"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function Problem() {
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-xl md:max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">이런 고민이 있으신가요?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-kakao rounded-full flex items-center justify-center text-kakao-text font-bold text-xl mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold">비프랜차이즈 카페를 운영 중인 김사장님</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong className="block mb-2 text-black">Pain Point:</strong>
                  마케팅 지식이 부족해서 단골 확보가 어려워요.
                </p>
                <p className="text-gray-600">
                  <strong className="block mb-2 text-black">Goal:</strong>
                  마케팅 전문가 없이도 단골 고객을 확보하고 싶어요.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="shadow-lg h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-kakao rounded-full flex items-center justify-center text-kakao-text font-bold text-xl mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold">동네 음식점을 운영 중인 이사장님</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong className="block mb-2 text-black">Pain Point:</strong>
                  배달앱 수수료가 너무 비싸고 재방문율이 낮아요.
                </p>
                <p className="text-gray-600">
                  <strong className="block mb-2 text-black">Goal:</strong>
                  수수료 절약하고 쿠폰으로 재방문율을 높이고 싶어요.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 text-center"
        >
          <div className="bg-gray-100 p-6 rounded-xl inline-block max-w-3xl">
            <p className="text-xl md:text-2xl font-bold italic">
              "SNS·배달앱 수수료 없이 <span className="text-indigo-600">단골을 직접</span> 관리하고 싶은데, 
              <span className="text-indigo-600">디지털 마케팅 지식·시간</span>이 없다."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 