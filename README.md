# 힐톡스 (Healtox) - 프리미엄 전통 차 리브랜딩 랜딩 페이지

한국의 청정 지역(보성, 하동, 제주) 다원에서 수확한 고유한 전통 차를 현대인들의 라이프스타일과 입맛에 맞춰 추천하고 일상 속 쉼표를 제안하는 프리미엄 웰니스 차 리브랜딩 브랜드 **Healtox (힐톡스)**의 Next.js 랜딩 페이지 프로젝트입니다.

---

## 🎨 주요 디자인 및 기술 사양

1. **Aesthetic & Brand Themes**
   - **웜 화이트 (`#F9F8F6`)** 배경과 **딥 세이지 그린 (`#2C3E2B`)**, **올리브 그린 (`#5A6B57`)** 포인트를 활용한 오가닉하고 정갈한 톤앤매너 구현.
   - 메인 타이틀에는 클래식하고 고풍스러운 세리프 서체인 `Cormorant Garamond`를 적용해 정통 헤리티지를 강조하고, 본문에는 가독성이 뛰어난 산세리프 `Inter`를 사용했습니다.

2. **Interactive 3D Parallax Hero**
   - `framer-motion`을 사용하여 메인 패키지 이미지가 마우스 커서의 움직임에 따라 유연하게 틸트/회전하는 입체 3D 효과를 구현했습니다.
   - 제품 주위에 부드럽게 흩날리는 나뭇잎 파티클 애니메이션을 적용해 항중력(Antigravity) 컨셉의 공중에 떠 있는 듯한 느낌을 연출했습니다.

3. **Global Smooth Scroll**
   - 스크롤 시 툭툭 끊기지 않고 물 흐르듯 가볍고 부드러운 스크롤 감각을 위해 `lenis/react` 라이브러리를 통합했습니다.

4. **Personalized Hydration Finder (차 맞춤 추천)**
   - 사용자의 오늘의 몸 상태(피로, 집중, 디톡스, 이너뷰티)와 끌리는 아로마 프로필(과일향, 나무향, 곡물향)을 인터랙티브하게 선택하면 그에 부합하는 제주 청귤 우롱, 하동 대숲 대나무 이슬차, 보성 안개 말차, 지리산 야생 국화 블렌드를 즉각 추천하는 맞춤형 진단 컴포넌트를 설계했습니다.
   - 각 차의 추출 정보(물의 온도, 우려내는 시간)와 레이더 차트 형태의 아로마/테이스트 바 그래프를 적용해 정보성과 미감을 극대화했습니다.

5. **Instagram Grid & API Guide**
   - 호버 시 딥 그린 블러 오버레이와 돋보기/인스타그램 링크 아이콘이 노출되는 1x4 그리드 소셜 피드를 구성했습니다.
   - `app/page.tsx` 하단 주석에 **Instagram Basic Display API**의 연동 및 토큰 자동 갱신(Access Token Auto-Refresh) 가이드라인을 상세히 작성해 두었습니다.

---

## 📂 프로젝트 구조

```
이커머스/
├── package.json              # 패키지 종속성 정의 (Next.js, Tailwind, Framer Motion, Lenis, Lucide)
├── tsconfig.json             # TypeScript 환경 설정
├── tailwind.config.js        # 브랜드 컬러 테마 및 폰트 확장 정의
├── postcss.config.js         # CSS 후처리기 설정
├── public/
│   └── images/
│       ├── healtox_hero_tea.png      # AI 생성 프리미엄 티 패키지 제품 목업 이미지
│       └── healtox_lifestyle_tea.png # AI 생성 고품질 티 세레모니 라이프스타일 이미지
├── app/
│   ├── layout.tsx            # 구글 폰트 주입 및 SEO 메타데이터 헤더 설정
│   ├── page.tsx              # 모든 인터랙션 섹션이 담긴 메인 뷰 및 인스타그램 가이드라인
│   └── globals.css           # 전역 스타일 및 프리미엄 커스텀 스크롤바 세팅
└── components/
    └── SmoothScroll.tsx      # Lenis 뷰 클라이언트 래퍼
```

---

## 🚀 시작하기

프로젝트 폴더 내에서 아래 명령어를 실행하여 필요한 라이브러리를 설치하고 로컬 개발 서버를 켤 수 있습니다.

### 1. 의존성 패키지 설치
```bash
npm install
```

### 2. 개발 서버 구동
```bash
npm run dev
```

- 로컬 브라우저에서 `http://localhost:3000`으로 접속하여 인터랙션을 확인할 수 있습니다.

### 3. 프로덕션 빌드 테스트
```bash
npm run build
```
