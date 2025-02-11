"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { videos } from "./videos";
import styles from "./Slider.module.css"; // Import CSS module
import { useDirection } from "@/hooks/use-direction";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const Slider = () => {
  const sliderRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { direction, toggleDirection } = useDirection();
  const isRTL = direction === "rtl";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && sliderRef.current) {
      initializeCards();

      // Auto-slide every 3 seconds
      const interval = setInterval(() => {
        handleClick();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isClient]);

  const initializeCards = () => {
    if (!sliderRef.current) return;
    const cards = Array.from(
      sliderRef.current.querySelectorAll(`.${styles.card}`)
    );
    gsap.to(cards, {
      y: (i) => 0 + 20 * i + "%",
      z: (i) => 15 * i,
      duration: 1,
      ease: "power3.out",
      stagger: -0.1,
    });
  };

  const handleClick = () => {
    if (isAnimating || !sliderRef.current) return;
    setIsAnimating(true);

    const slider = sliderRef.current;
    const cards = Array.from(slider.querySelectorAll(`.${styles.card}`));
    const lastCard = cards.pop();

    if (!lastCard) return;

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.75,
      ease: "power3.inOut",
      onStart: () => {
        setTimeout(() => {
          slider.prepend(lastCard);
          initializeCards();
          setTimeout(() => setIsAnimating(false), 1000);
        }, 300);
      },
    });
  };

  return (
    <div className={styles.videoSlider}>
      <p className={styles.title}>
        {isRTL ? "أعمــــــــــــال قِصّة" : "Qsah Productions"}
      </p>
      <div className={styles.container}>
        <div className={styles.slider} ref={sliderRef}>
          {videos.map((video) => (
            <div className={styles.card} key={video.id}>
              <div className={styles.cardInfo}>
                <div className={styles.cardItem}>
                  <p>{video.date}</p>
                </div>
                <div className={styles.cardItem}>
                  <p>{video.title}</p>
                </div>
                <div className={styles.cardItem}>
                  <p>{video.category}</p>
                </div>
              </div>
              <div className={styles.videoPlayer}>
                <ReactPlayer
                  url={`https://vimeo.com/${video.id}`}
                  controls={false}
                  playing
                  loop
                  muted
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
