"use client";

import React from "react";
import Cards from "./Cards";
import Process from "./Projects";
import Projects from "./Projects";
import { useDirection } from "@/hooks/use-direction";

const cardInfo = [
  { title: "إعلان 1", image: "red" },
  { title: "إعلان 2", image: "blue" },
  { title: "إعلان 3", image: "green" },
];

const Production = () => {
  const { direction, toggleDirection } = useDirection();
  const isRTL = direction === "rtl";
  return (
    <section className="production-section">
      <div className="production flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white text-center">
          {isRTL
            ? "إعلاناتنا ومشاريعنا السابقة"
            : "Our previous projects"}
        </h1>
        <div className="processHolder">
          <Process />
        </div>
      </div>
    </section>
  );
};

export default Production;
// {
//   cardInfo.map((card, index) => (
//     <Cards key={index} title={card.title} image={card.image} />
//   ));
// }
