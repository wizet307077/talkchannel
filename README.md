# 카카오톡채널 무료대행 서비스 랜딩페이지

이 프로젝트는 소상공인을 위한 '카카오톡채널 무료대행 서비스'의 랜딩페이지입니다. 선착순 10명의 소상공인에게 3개월 무료 카카오톡채널 운영 대행을 제공하는 서비스를 소개합니다.

## 주요 기능

- 모바일 및 데스크톱 반응형 디자인 (320px ~ 1920px)
- 애니메이션 효과 (Framer Motion)
- 카운트다운 기능 (선착순 모집 인원 카운터)
- 스크롤 트래킹 및 GA4 이벤트 수집
- 고정 CTA 버튼 (모바일)

## 기술 스택

- Next.js 14
- Tailwind CSS
- shadcn/ui
- Framer Motion
- TypeScript

## 시작하기

로컬 개발 환경에서 프로젝트를 실행하기 위해 다음 단계를 따르세요:

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인할 수 있습니다.

## 배포

이 프로젝트는 Vercel 또는 Netlify를 통해 쉽게 배포할 수 있습니다.

```bash
# 빌드
npm run build

# 미리보기
npm run start
```

## 프로젝트 구조

```
.
├── src/
│   ├── app/
│   │   ├── page.tsx         # 메인 페이지
│   │   ├── layout.tsx       # 전역 레이아웃
│   │   └── globals.css      # 전역 스타일
│   ├── components/
│   │   ├── sections/        # 페이지 섹션 컴포넌트
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── Benefit.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── StickyCTA.tsx
│   │   └── ui/              # UI 컴포넌트
│   └── lib/                 # 유틸리티 함수
└── public/                  # 정적 파일
```
