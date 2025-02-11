"use client";
import React from "react";
import styles from "./OurClients.module.css";
import { useDirection } from "@/hooks/use-direction";

const content = {
  ar: {
    title: "شراكات تُحكى",
    text: (
      <>
        على مدار رحلتنا، حظينا بفرصة العمل مع{" "}
        <span style={{ fontWeight: "bold", color: "#edbe6e" }}>
          أكثر من 50 عميلًا
        </span>{" "}
        من مختلف المجالات. نفخر بإنتاج إعلانات ومحتوى يعكس ثقافة، قيم، وطموحات
        عملائنا. سواء كانت حملات تسويقية، إعلانات إبداعية، أو محتوى رقمي، نحن
        نؤمن بأن لكل علامة تجارية قصة فريدة تستحق أن تُروى.
      </>
    ),
  },
  en: {
    title: "Stories of Partnerships",
    text: (
      <>
        Throughout our journey, we’ve had the opportunity to work with{" "}
        <span style={{ fontWeight: "bold", color: "#edbe6e" }}>
          over 50 clients
        </span>{" "}
        from various industries. We take pride in producing advertisements and
        content that reflect our clients' culture, values, and ambitions.
        Whether it's marketing campaigns, creative ads, or digital content, we
        believe every brand has a unique story worth telling.
      </>
    ),
  },
};

const OurClients = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";
  const dir = isRTL ? "right" : "left";
  const langContent = isRTL ? content.ar : content.en;

  return (
    <section className={styles.OurClients}>
      <h1 className={styles.title}>
        {isRTL ? "عُمــــــــــــلاء قِصّة" : "Qsah's Clients"}
      </h1>
      <div className={styles.container}>
        <div className={styles.textContent}>
          <h3 style={{ textAlign: dir }} className={styles.paragraheTitle}>
            {langContent.title}
          </h3>
          <p style={{ textAlign: dir }} className={styles.paragraheContent}>
            {langContent.text}
          </p>
        </div>
        <div className={styles.clientsContainer}>
          <div className={styles.clients}>
            <img className={styles.img} src="/OurClients/client1.png" alt="" />
            <img className={styles.img} src="/OurClients/client5.png" alt="" />
            <img className={styles.img} src="/OurClients/client2.png" alt="" />
          </div>
          <div className={styles.clients}>
            <img className={styles.img} src="/OurClients/client4.png" alt="" />
            <img className={styles.img} src="/OurClients/client3.png" alt="" />
            <img className={styles.img} src="/OurClients/client6.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
