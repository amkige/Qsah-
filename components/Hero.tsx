"use client";
import { useDirection } from "@/hooks/use-direction";
import React from "react";

const Hero = () => {
  const { direction, toggleDirection } = useDirection();
  const isRTL = direction === "rtl";
  return (
    <div className="video-container w-full h-100">
      <video autoPlay loop muted playsInline className="background-video cover">
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section></section>
      <div className="content flex flex-col items-center justify-center h-screen transform translate-y:-150">
        <h1
          className="text-6xl font-bold text-white transform -translate-y-8 "
          style={{ direction: isRTL ? "rtl" : "ltr" }}
        >
          {isRTL
            ? " قِصَّة – حيث تُكتب الحكايات"
            : "Qissa – Where Stories Are Written."}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
