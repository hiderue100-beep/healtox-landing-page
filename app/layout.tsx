import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://healtox-landing-page-vq2l.vercel.app"),
  title: "HEALTOX 힐톡스 | Modern Botanical Hydration & Wellness Ritual",
  description: "대한민국 청정 농가의 식물 원료를 현대적 라이프스타일에 맞게 큐레이션하는 보타니컬 웰니스 브랜드. 카페인과 인공 당류 없는 깨끗한 수분 리추얼을 경험하세요.",
  keywords: [
    "HEALTOX",
    "힐톡스",
    "Modern Botanical Wellness",
    "수분 리추얼",
    "보타니컬 하이드레이션",
    "여성 웰니스",
    "보성 박하",
    "제주 동백꽃",
    "상주 감잎",
    "하동 야생 차",
    "Caffeine Free",
    "Zero Sugar",
    "Ritual.com style",
  ],
  authors: [{ name: "HEALTOX Botanical Science Team" }],
  openGraph: {
    title: "HEALTOX 힐톡스 | Modern Botanical Hydration & Wellness Ritual",
    description: "Hydrate Better. Feel Different. 대한민국 청정 원료 기반의 0-Caffeine 수분 리추얼",
    url: "https://healtox-landing-page-vq2l.vercel.app/",
    siteName: "HEALTOX Modern Botanical Wellness",
    images: [
      {
        url: "/images/healtox_botanical_hero.png",
        width: 1200,
        height: 630,
        alt: "HEALTOX Modern Botanical Hydration Bottle",
      },
    ],
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEALTOX 힐톡스 | Modern Botanical Hydration",
    description: "Hydrate Better. Feel Different. 대한민국 청정 원료 기반의 0-Caffeine 수분 리추얼",
    images: ["/images/healtox_botanical_hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://healtox-landing-page-vq2l.vercel.app/#organization",
      "name": "HEALTOX",
      "url": "https://healtox-landing-page-vq2l.vercel.app/",
      "logo": "https://healtox-landing-page-vq2l.vercel.app/images/healtox_botanical_hero.png",
      "description": "Modern Botanical Wellness Brand powered by Korean Ingredients.",
      "sameAs": ["https://instagram.com/healtox.ritual"]
    },
    {
      "@type": "WebSite",
      "@id": "https://healtox-landing-page-vq2l.vercel.app/#website",
      "url": "https://healtox-landing-page-vq2l.vercel.app/",
      "name": "HEALTOX Modern Botanical Wellness",
      "publisher": { "@id": "https://healtox-landing-page-vq2l.vercel.app/#organization" }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-primary-DEFAULT font-sans selection:bg-botanical-500 selection:text-white">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
