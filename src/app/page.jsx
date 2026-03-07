import AboutSection from "@/Components/Home/AboutSection";
import Banner from "@/Components/Home/Banner";

export default function Home() {
  return (
    <div className="space-y-5">
      <main>
        <Banner></Banner>
      </main>
      <main>
        <AboutSection></AboutSection>
      </main>
    </div>
  );
}
