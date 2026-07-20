import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://healtox-landing-page-vq2l.vercel.app"),
  title: "HEALTOX 힐톡스 | 물이 맛있다! 힐톡스",
  description: "대한민국 청정 농가의 식물 원료를 현대적 수분 리추얼로 재해석하는 보타니컬 웰니스 브랜드. 0-카페인 0-칼로리 물이 맛있는 수분 리추얼.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="antialiased bg-white text-primary-DEFAULT font-sans selection:bg-cyan-500 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
