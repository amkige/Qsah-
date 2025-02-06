import React from "react";
interface ICardInfo {
  key: number;
  title: string;
  image: string;
}
const Cards = ({ key, title, image }: ICardInfo) => {
  return (
    <div className="cards" key={key} style={{ backgroundColor: image }}>
      {title}
    </div>
  );
};

export default Cards;
