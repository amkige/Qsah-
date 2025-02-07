import Hero from "@/components/Hero";
import Process from "@/components/Projects";
import Production from "@/components/Production";

export default function Home() {
  return (
    <>
      {/* Sticky Hero Section */}
      <Hero />
      <Process />
      <Production />

      {/* Section Coming Over Hero */}
      {/* <section className="cover-section">
        <h1 className="text-6xl font-bold text-white text-center">
        Coming Over
        </h1>
        </section> */}
    </>
  );
}
