import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FindMyTeaQuiz from "@/components/FindMyTeaQuiz";
import HydrationTracker from "@/components/HydrationTracker";
import DailyRitual from "@/components/DailyRitual";
import IngredientExplorer from "@/components/IngredientExplorer";
import FarmersMap from "@/components/FarmersMap";
import ScienceSection from "@/components/ScienceSection";
import JournalSection from "@/components/JournalSection";
import InstagramGrid from "@/components/InstagramGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-primary-DEFAULT overflow-x-hidden">
      <Navbar />
      <Hero />
      <FindMyTeaQuiz />
      <HydrationTracker />
      <DailyRitual />
      <IngredientExplorer />
      <FarmersMap />
      <ScienceSection />
      <JournalSection />
      <InstagramGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
