import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "힐톡스 Healtox | 프리미엄 한국 전통 차 브랜드",
  description: "엄선된 한국의 청정 지역에서 재배한 전통 차를 현대적 감각으로 재해석하여, 당신의 오늘의 상태와 취향에 맞춘 프라이빗 Hydration 리추얼을 선사합니다.",
  keywords: ["힐톡스", "Healtox", "한국 전통 차", "전통차 브랜드", "웰니스", "이너뷰티", "블렌딩티", "보성 녹차", "하동 녹차", "제주 감귤차"],
  authors: [{ name: "Healtox Creative Team" }],
  openGraph: {
    title: "힐톡스 Healtox | 프리미엄 한국 전통 차 브랜드",
    description: "당신의 오늘 하루 상태와 취향에 맞춘 프리미엄 웰니스 차 리추얼",
    images: [{ url: "/images/healtox_hero_tea.png", width: 1200, height: 630, alt: "Healtox Premium Tea Packaging" }],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "힐톡스 Healtox | 프리미엄 한국 전통 차 브랜드",
    description: "당신의 오늘 하루 상태와 취향에 맞춘 프리미엄 웰니스 차 리추얼",
    images: ["/images/healtox_hero_tea.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased bg-brand-bg text-brand-primary">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
