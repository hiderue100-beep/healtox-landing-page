import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FindMyTeaQuiz from "@/components/FindMyTeaQuiz";
import DailyRitual from "@/components/DailyRitual";
import ScienceSection from "@/components/ScienceSection";
import FarmersMap from "@/components/FarmersMap";
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
      <DailyRitual />
      <ScienceSection />
      <FarmersMap />
      <JournalSection />
      <InstagramGrid />
      <Newsletter />
      <Footer />
    </main>
  );
}
