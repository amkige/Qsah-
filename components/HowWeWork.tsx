"use client";
import React from "react";
import styles from "./HowWeWork.module.css";
import { useDirection } from "@/hooks/use-direction";

const workProcess = [
  { title: { en: "Qsah Services", ar: "خــــــدمـــــات قِصّة" } },
  {
    step1: {
      en: "✍️ Creative Writing – Every great video starts with a strong script. Our team crafts engaging, story-driven content tailored to your brand.",
      ar: "✍️ الكتابة الإبداعية – أي فيديو ناجح يبدأ بسيناريو قوي، فريقنا يكتب محتوى قصصي ممتع يناسب علامتك التجارية.",
    },
  },
  {
    step2: {
      en: "📸 Filming – With high-end equipment and professional videographers, we capture stunning visuals that bring your vision to life.",
      ar: "📸 التصوير – بأحدث المعدات ومصورين محترفين، نلتقط لقطات إبداعية تنقل رؤيتك للعالم.",
    },
  },
  {
    step3: {
      en: "✂️ Editing – Our expert editors refine every frame, adding the right pacing, effects, and sound to create an engaging final product.",
      ar: "✂️ التحرير – محررونا المحترفون يضبطون كل لقطة، يضيفون الإيقاع والتأثيرات والصوت ليظهر الفيديو بشكل جذاب.",
    },
  },
  {
    final: {
      en: "🎬 The Final Video – A professionally crafted video ready to engage and impress your audience!",
      ar: "🎬 الفيديو النهائي – فيديو احترافي جاهز ليبهر جمهورك ويحقق أهدافك!",
    },
  },
];

const HowWeWork = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";
    const dir = isRTL ? "right" : "left";
  return (
    <section className={styles.howWeWorkSection}>
      <h1 className={styles.title}>
        {isRTL ? workProcess[0].title?.ar : workProcess[0].title?.en}
      </h1>
      <div className={styles.container}>
        <div className={styles.steps}>
          <ul>
            {workProcess.slice(1, 4).map((step, index) => (
              <li key={index} style={{ textAlign: dir }}>
                {isRTL ? Object.values(step)[0].ar : Object.values(step)[0].en}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.equation}>
          <div className={styles.item}>
            <img src="/writing.webp" alt="Creative Writing" />
            <p>{isRTL ? "الكتابة الإبداعية" : "Creative Writing"}</p>
          </div>
          <div className={styles.symbol}>+</div>
          <div className={styles.item}>
            <img src="/Filming.webp" alt="Filming" />
            <p>{isRTL ? "التصوير" : "Filming"}</p>
          </div>
          <div className={styles.symbol}>+</div>
          <div className={styles.item}>
            <img src="/editing.webp" alt="Editing" />
            <p>{isRTL ? "التحرير" : "Editing"}</p>
          </div>
          <div className={styles.symbol}>=</div>
          <div className={styles.item}>
            <img src="/Qsah.webp" alt="Final Video" />
            <p>
              <strong>{isRTL ? "🎬 الفيديو" : "🎬 The Video"}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
