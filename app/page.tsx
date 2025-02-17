import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients/OurClients";
import Slider from "@/components/slider/Slider";
import ScrollSection from "@/components/ScrollSection/ScrollSection";
import ContactForm from "@/components/ContactForm/ContactForm";


export default function Home() {
  return (
    <>
      <Hero />
      <ScrollSection />
      <Slider />
      <OurClients />
      <ContactForm />
    </>
  );
}
