'use client';
import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./ScrollSection.module.css";

gsap.registerPlugin(ScrollTrigger);

function ScrollSection() {
  useGSAP(() => {
    gsap.fromTo(
      `.${styles["scroll-section-inner"]}`,
      {
        "--x": "0",
      },
      {
        "--x": "-300vw",
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
  }, {
    scope: `.${styles["scroll-section-outer"]}`,
  });

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
