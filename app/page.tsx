import Navbar from "@/components/Navbar";
import DeliciousWaterHero from "@/components/DeliciousWaterHero";
import FindMyTeaQuiz from "@/components/FindMyTeaQuiz";
import HydrationTracker from "@/components/HydrationTracker";
// import DailyRitual from "@/components/DailyRitual";
// import IngredientExplorer from "@/components/IngredientExplorer";
import InstagramGrid from "@/components/InstagramGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-primary-DEFAULT overflow-x-hidden">
      <Navbar />
      <DeliciousWaterHero />
      <FindMyTeaQuiz />
      <HydrationTracker />
      {/* <DailyRitual /> */}
      {/* <IngredientExplorer /> */}
      <InstagramGrid />
      <Footer />
    </main>
  );
}
