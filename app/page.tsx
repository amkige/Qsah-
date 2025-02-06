import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Process from "@/components/Process";

import Production from "@/components/Production";

export default function Home() {
  return (
    <div className="relative">
      {/* Sticky Hero Section */}
      <div className="">
        <Navbar />
        <Hero />
      </div>
      <Production />  

      {/* Section Coming Over Hero */}
      {/* <section className="cover-section">
        <h1 className="text-6xl font-bold text-white text-center">
          Coming Over
        </h1>
      </section> */}
    </div>
  );
}
