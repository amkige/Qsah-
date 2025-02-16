'use client';
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ScrollSection.module.css";
import { useDirection } from "@/hooks/use-direction";

function ScrollSection() {
  const { direction } = useDirection();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const isRTL = direction === "rtl";

    const pin = gsap.fromTo(
      `.${styles["scroll-section-inner"]}`,
      {
        translateX: 0,
      },
      {
        translateX: isRTL ? "300vw" : "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: `.scroll-section`,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
        pin.kill();
      }
    };
  }, [direction]);

  return (
    <section className={styles["scroll-section-outer"]}>
      <div className="scroll-section">
        <div className={styles["scroll-section-inner"]}>
          <div className={styles['scroll-section']}>
            <h3>Section 1</h3>
          </div>
          <div className={styles['scroll-section']}>
            <h3>Section 2</h3>
          </div>
          <div className={styles['scroll-section']}>
            <h3>Section 3</h3>
          </div>
          <div className={styles['scroll-section']}>
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
