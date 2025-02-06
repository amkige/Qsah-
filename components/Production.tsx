import React from "react";
import Cards from "./Cards";
import Process from "./Process";

const cardInfo = [
  { title: "إعلان 1", image: "red" },
  { title: "إعلان 2", image: "blue" },
  { title: "إعلان 3", image: "green" },
];

const Production = () => {
  return (
    <div className="production flex flex-col items-center">
      <h1 className="text-6xl font-bold text-white text-center">
        إعلاناتنا ومشاريعنا السابقة
      </h1>
      <div className="processHolder">

      </div>
    </div>
  );
};

export default Production;
// {
//   cardInfo.map((card, index) => (
//     <Cards key={index} title={card.title} image={card.image} />
//   ));
// }