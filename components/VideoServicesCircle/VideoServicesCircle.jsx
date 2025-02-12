"use client";
import React, { useState, useEffect } from "react";
import { Video, Pencil, Camera, Film, Upload } from "lucide-react";
import gsap from "gsap";
import { useDirection } from "@/hooks/use-direction";
import styles from "./VideoTimeline.module.css";

const VideoTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const { direction } = useDirection();
  const isRTL = direction === "rtl";

const steps = [
  {
    id: 1,
    title: isRTL ? "كتابة القصة" : "Storywriting",
    icon: Pencil,
    description: isRTL ? "تحويل الفكرة إلى نص" : "Shaping the idea into words",
  },
  {
    id: 2,
    title: isRTL ? "التصوير السينمائي" : "Filming",
    icon: Camera,
    description: isRTL ? "إحياء القصة بالصور" : "Bringing stories to life",
  },
  {
    id: 3,
    title: isRTL ? "المونتاج الإبداعي" : "Editing",
    icon: Film,
    description: isRTL ? "تنسيق المشاهد بإبداع" : "Crafting the flow",
  },
  {
    id: 4,
    title: isRTL ? "الإصدار والمشاركة" : "Publishing",
    icon: Upload,
    description: isRTL ? "إطلاق القصة للعالم" : "Sharing the story",
  },
];


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isRTL]);

  useEffect(() => {
    gsap.to(`.${styles.step}`, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(`.${styles.progressLine}`, {
      width: `${(activeStep / steps.length) * 100}%`,
      duration: 1,
      ease: "power2.out",
    });
  }, [activeStep]);

  return (
    <div className={styles.VideoTimeline}>
      <div
        className={styles.container}
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {isRTL ? "رحلة إنتاج الفيديو" : "Video Production Journey"}
          </h2>
          <div className={styles.subtitle}>
            <Video
              className="w-6 h-6 text-[#e9bb6c]"
              style={{ marginTop: "5px" }}
            />
            <p className={styles.subtitleText}>
              {isRTL ? "من الفكرة إلى الشاشة" : "From Idea to Screen"}
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          <div className={styles.timelineLine}>
            <div className={styles.progressLine}></div>
          </div>

          <div className={styles.stepsContainer}>
            {steps.map((step) => (
              <div
                key={step.id}
                className={`${styles.step} ${
                  activeStep === step.id ? styles.activeStep : ""
                }`}
              >
                <div
                  className={`${styles.stepCircle} ${
                    activeStep === step.id
                      ? styles.stepCircleActive
                      : styles.stepCircleInactive
                  }`}
                >
                  <step.icon
                    className={`${styles.stepIcon} ${
                      activeStep === step.id
                        ? styles.stepIconActive
                        : styles.stepIconInactive
                    }`}
                  />
                </div>

                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p className={styles.description}>{step.description}</p>
                </div>

                <div
                  className={`${styles.stepNumber} ${
                    activeStep === step.id
                      ? styles.stepNumberActive
                      : styles.stepNumberInactive
                  }`}
                >
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TV Screen */}
        <div className={styles.tvScreen}>
          <div className={styles.tvFrame}>
            <p className={styles.tvText}>
              {steps[activeStep - 1].title}: {steps[activeStep - 1].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTimeline;
