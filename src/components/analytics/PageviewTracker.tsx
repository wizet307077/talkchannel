"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag: (command: string, action: string, params?: Record<string, unknown>) => void;
    dataLayer: unknown[];
  }
}

export function setupGoogleAnalytics(measurementId: string) {
  // GA4 스크립트 추가
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // GA4 설정 스크립트
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId);

  // gtag 함수 전역으로 설정
  window.gtag = gtag;
}

interface PageviewTrackerProps {
  measurementId: string;
}

export function PageviewTracker({ measurementId }: PageviewTrackerProps) {
  const isInitialized = useRef(false);
  
  useEffect(() => {
    if (!isInitialized.current) {
      // GA4 초기화
      setupGoogleAnalytics(measurementId);
      isInitialized.current = true;
    }
    
    // 스크롤 이벤트 트래킹
    const trackScroll = () => {
      const scrollPercentage = Math.floor((window.scrollY + window.innerHeight) / document.body.scrollHeight * 100);
      
      if (scrollPercentage >= 50 && !sessionStorage.getItem('scrolled50')) {
        window.gtag('event', 'scroll_depth', {
          'depth': '50%'
        });
        sessionStorage.setItem('scrolled50', 'true');
      }
      
      if (scrollPercentage >= 100 && !sessionStorage.getItem('scrolled100')) {
        window.gtag('event', 'scroll_depth', {
          'depth': '100%'
        });
        sessionStorage.setItem('scrolled100', 'true');
      }
    };
    
    // CTA 클릭 이벤트
    const trackCTAClick = () => {
      const ctaButtons = document.querySelectorAll('a[href*="pf.kakao.com"], button');
      
      ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
          window.gtag('event', 'cta_click', {
            'event_category': 'engagement',
            'event_label': 'kakao_chat_button'
          });
        });
      });
    };
    
    window.addEventListener('scroll', trackScroll);
    setTimeout(trackCTAClick, 1000); // DOM이 완전히 로드된 후 실행
    
    return () => {
      window.removeEventListener('scroll', trackScroll);
    };
  }, [measurementId]);
  
  return null; // 이 컴포넌트는 UI를 렌더링하지 않음
} 