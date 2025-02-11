import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import OurClients from "@/components/OurClients/OurClients";
import Slider from "@/components/slider/Slider";
import VideoServicesCircle from "@/components/VideoServicesCircle/VideoServicesCircle";

export default function Home() {
  return (
    <>
      {/* Sticky Hero Section */}
      <Hero />
      {/* <Production />
      <div style={{ height: "100vh" , overflow: "hidden",backgroundColor: "black"}}></div>
      <section className="cover-section">
        <h1 className="text-6xl font-bold text-white text-center">
        Coming Over
        </h1>
        </section> */}
      <HowWeWork />
      <Slider />
      <OurClients/>
      <VideoServicesCircle/>
    </>
  );
}
