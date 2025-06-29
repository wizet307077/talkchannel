"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "카카오톡채널 개설·운영 무료 대행",
    description: "채널메이트가 카카오톡채널 개설부터 전체 운영까지 모든 과정을 무료로 대행해 드립니다.",
    icon: "💬"
  },
  {
    title: "QR코드로 단골 확보",
    description: "카카오톡채널 친구추가 QR코드를 제공하여 손쉽게 단골 고객을 확보하세요.",
    icon: "📱"
  },
  {
    title: "쿠폰·소식 자동 발송",
    description: "월 2회 쿠폰 및 소식을 자동으로 발송하고, 데이터 기반 마케팅 컨설팅까지 제공합니다.",
    icon: "🎫"
  }
];

const features = [
  { name: "채널 개설", icon: "🔧" },
  { name: "콘텐츠 제작", icon: "✍️" },
  { name: "쿠폰 디자인", icon: "🎨" },
  { name: "발송 자동화", icon: "🤖" },
  { name: "통계 분석", icon: "📊" },
  { name: "마케팅 컨설팅", icon: "💼" }
];

export function Solution() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-xl md:max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">해결책을 제시합니다</h2>
          <p className="text-xl text-gray-600">
            채널메이트의 <span className="font-bold text-indigo-600">무료 대행 서비스</span>로 
            쉽고 효과적인 고객 관리 시스템을 구축하세요.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            제공되는 모든 기능
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg shadow text-center"
              >
                <div className="text-3xl mb-2">{feature.icon}</div>
                <div className="font-medium">{feature.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 