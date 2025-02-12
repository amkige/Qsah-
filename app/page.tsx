import Hero from "@/components/Hero";
import HowWeWork from "@/components/HowWeWork";
import OurClients from "@/components/OurClients/OurClients";
import Slider from "@/components/slider/Slider";
import VideoServicesCircle from "@/components/VideoServicesCircle/VideoServicesCircle";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoServicesCircle />
      <Slider />
      <OurClients />
      <Footer/>
    </>
  );
}
