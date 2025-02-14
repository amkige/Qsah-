"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Steps.module.css";

const SmoothScroll = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef(null);
  const isInViewport = useRef(false);
  const lastScrollTime = useRef(Date.now());

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewport.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    const handleWheel = (e) => {
      const currentTime = Date.now();
      const timeSinceLastScroll = currentTime - lastScrollTime.current;

      if (activeSection === 0 && e.deltaY < 0) return;
      if (activeSection === sections.length - 1 && e.deltaY > 0) return;
      if (!isInViewport.current) return;

      const rect = container.getBoundingClientRect();
      const isInSection = rect.top <= 0 && rect.bottom >= window.innerHeight;
      if (!isInSection) return;
      if (timeSinceLastScroll < 50) return;

      e.preventDefault();
      if (isScrolling) return;

      setIsScrolling(true);
      lastScrollTime.current = currentTime;

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        setActiveSection((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        setActiveSection((prev) => prev - 1);
      }

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      observer.disconnect();
    };
  }, [activeSection, isScrolling]);

  const sections = [
    { bg: "bg-red-500", title: "Section One", text: "Scroll down to explore" },
    { bg: "bg-green-500", title: "Section Two", text: "Keep scrolling" },
  ];

  return (
    <div
      ref={containerRef}
      className={styles.container}
      style={{ height: `${sections.length * 100}vh` }}
    >
      <div className={styles.screen}>
        {sections.map((section, index) => (
          <section
            key={index}
            className={`${styles.section} ${section.bg}`}
            style={{
              opacity: activeSection === index ? 1 : 0,
              transform: `translateY(${(index - activeSection) * 100}%) scale(${
                activeSection === index ? 1 : 0.9
              })`,
              zIndex: activeSection === index ? 1 : 0,
            }}
          >
            <div className={styles.textCenter}>
              <h1 className={styles.title}>{section.title}</h1>
              <p className={styles.text}>{section.text}</p>
            </div>
          </section>
        ))}
      </div>

      <div className={styles.indicatorContainer}>
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setActiveSection(index);
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 1000);
              }
            }}
            className={`${styles.indicator} ${
              activeSection === index
                ? styles.indicatorActive
                : styles.indicatorInactive
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SmoothScroll;
