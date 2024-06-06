import HomeFaq from "@/components/HomeFaq";
import HomeHeroSection from "@/components/HomeHeroSection";
import HomeTokenomic from "@/components/HomeTokenomic";

export default function Home() {
  return (
    <main className="flex flex-col space-y-16">
      <HomeHeroSection />
      <HomeTokenomic />
    </main>
  );
}
