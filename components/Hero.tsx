"use client";
import { useDirection } from "@/hooks/use-direction";
import React from "react";

const Hero = () => {
  const { direction, toggleDirection } = useDirection();
  const isRTL = direction === "rtl";
  return (
    <section className="hero-section video-container w-full h-100">
      <video autoPlay loop muted playsInline className="background-video cover">
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section></section>
      <div className="content flex flex-col items-center justify-center h-screen transform translate-y:-150">
        <img src="/Vector.png" alt="qsah" className="w-100 qsah" />
        <h1
          className="text-3xl font-bold text-white transform -translate-y-8 "
          style={{ direction: isRTL ? "rtl" : "ltr" ,marginTop:"70px"}}
        >
          {isRTL
            ? " قِصَّة – حيث تُكتب الحكايات"
            : "Qsah – Where Stories Are Written."}
        </h1>
      </div>
    </section>
  );
};

export default Hero;
