import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients/OurClients";
import Slider from "@/components/slider/Slider";
import VideoServicesCircle from "@/components/VideoServicesCircle/VideoServicesCircle";
import Footer from "@/components/Footer/Footer";
import Steps from "@/components/Steps/Steps";


export default function Home() {
  return (
    <>
      <Hero />
      <Steps/>
      {/* <VideoServicesCircle /> */}
      <Slider />
      <OurClients />
      <Footer/>
    </>
  );
}
