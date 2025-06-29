import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "카카오톡채널 무료대행 서비스 | 채널메이트",
  description: "카카오톡채널 개설 및 운영 무료 대행! 선착순 10명, 단골 확보부터 쿠폰 발송, 마케팅 컨설팅까지 무료로 제공합니다.",
  openGraph: {
    title: "카카오톡채널 무료대행 서비스 | 채널메이트",
    description: "카카오톡채널 개설 및 운영 무료 대행! 선착순 10명, 단골 확보부터 쿠폰 발송, 마케팅 컨설팅까지 무료로 제공합니다.",
    url: "https://channel-mate.kr",
    siteName: "채널메이트",
    locale: "ko_KR",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
