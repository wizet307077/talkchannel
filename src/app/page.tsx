import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Benefit } from "@/components/sections/Benefit";
import { CTA } from "@/components/sections/CTA";
import { StickyCTA } from "@/components/sections/StickyCTA";
import { PageviewTracker } from "@/components/analytics/PageviewTracker";

export default function Home() {
  return (
    <main>
      {/* GA4 트래킹 (실제 프로덕션에서는 적절한 측정 ID로 교체 필요) */}
      <PageviewTracker measurementId="G-XXXXXXXXXX" />
      
      {/* 히어로 섹션 */}
      <Hero />
      
      {/* 문제 섹션 */}
      <Problem />
      
      {/* 솔루션 섹션 */}
      <Solution />
      
      {/* 혜택 섹션 */}
      <Benefit />
      
      {/* CTA 섹션 */}
      <CTA />
      
      {/* 모바일 하단 Sticky CTA */}
      <StickyCTA />
    </main>
  );
}
