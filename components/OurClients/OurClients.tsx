"use client";
import React from "react";
import styles from "./OurClients.module.css";
import { useDirection } from "@/hooks/use-direction";

const content = {
  ar: {
    title: "كسبنا ثقتهم",
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
    title: "Earning Their Trust",
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
          <h3 style={{ textAlign: dir }} className={styles.paragrahTitle}>
            {langContent.title}
          </h3>
          {/* <p style={{ textAlign: dir }} className={styles.paragraheContent}>
            {langContent.text}
          </p> */}
        </div>
        <div className={styles.clientsContainer}>
          <div className={styles.clients}>
            <img src="/client-logo/circlys.svg" alt="circlys" />
            <img src="/client-logo/ekar.svg" alt="ekar" />
            <img src="/client-logo/first-mills.svg" alt="first-mills" />
            <img src="/client-logo/haraj.svg" alt="haraj" />
            <img src="/client-logo/jahez.svg" alt="jahez" />
          </div>

          <div className={styles.clients}>
            <img src="/client-logo/jeelpay.svg" alt="jeelpay" />
            <img src="/client-logo/jood-eskan.svg" alt="jood-eskan" />
            <img src="/client-logo/lendo.svg" alt="lendo" />
            <img src="/client-logo/moe.svg" alt="moe" />
            <img src="/client-logo/first-mills.svg" alt="first-mills" />
            <img src="/client-logo/zen-hr.svg" alt="zen-hr" />
          </div>

          <div className={styles.clients}>
            <img src="/client-logo/sabic.svg" alt="sabic" />
            <img src="/client-logo/saip.svg" alt="saip" />
            <img src="/client-logo/sopc.svg" alt="sopc" />
            <img src="/client-logo/soum.svg" alt="soum" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
