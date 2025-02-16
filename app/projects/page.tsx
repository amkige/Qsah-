"use client";
import React from "react";
import { useDirection } from "@/hooks/use-direction";
import styles from "./projects.module.css"; // Import styles

const Projects = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";

  const dummyData = [
    {
      id: 1,
      img: "card1.png",
      client: isRTL ? "مصرف الإنماء" : "Alinma Bank",
      category: isRTL ? "حملة ترويجية" : "Promotional Campaign",
      title: isRTL ? "بيئة عمل تفهمك" : "A Workplace That Understands You",
    },
    {
      id: 2,
      img: "card2.png",
      client: isRTL ? "البنك الأهلي" : "National Bank",
      category: isRTL ? "خدمة جديدة" : "New Service",
      title: isRTL
        ? "راحة العملاء أولويتنا"
        : "Customer Comfort is Our Priority",
    },
    {
      id: 3,
      img: "card3.jpg",
      client: isRTL ? "شركة الاتصالات" : "Telecom Company",
      category: isRTL ? "عرض خاص" : "Special Offer",
      title: isRTL ? "أقوى العروض بأقل الأسعار" : "Best Deals at Lowest Prices",
    },
    {
      id: 4,
      img: "card4.png",
      client: isRTL ? "شركة البرمجيات" : "Software Company",
      category: isRTL ? "منتج جديد" : "New Product",
      title: isRTL
        ? "تقنية مبتكرة لأعمالك"
        : "Innovative Tech for Your Business",
    },
    {
      id: 5,
      img: "card5.png",
      client: isRTL ? "شركة السيارات" : "Car Company",
      category: isRTL ? "إطلاق موديل جديد" : "New Model Launch",
      title: isRTL
        ? "تجربة قيادة لا تُنسى"
        : "An Unforgettable Driving Experience",
    },
    {
      id: 6,
      img: "card6.jpeg",
      client: isRTL ? "مستشفى الرعاية" : "Care Hospital",
      category: isRTL ? "خدمة صحية" : "Healthcare Service",
      title: isRTL ? "صحتك مسؤوليتنا" : "Your Health is Our Responsibility",
    },
    {
      id: 7,
      img: "card7.png",
      client: isRTL ? "مجموعة المطاعم" : "Restaurant Group",
      category: isRTL ? "عروض خاصة" : "Special Discounts",
      title: isRTL
        ? "ألذ الأطباق بأفضل الأسعار"
        : "Delicious Dishes at Best Prices",
    },
    {
      id: 8,
      img: "card8.png",
      client: isRTL ? "الجامعة الدولية" : "International University",
      category: isRTL ? "برنامج دراسي جديد" : "New Study Program",
      title: isRTL
        ? "تعليم عالي بمعايير عالمية"
        : "World-Class Higher Education",
    },
    {
      id: 1,
      img: "card1.png",
      client: isRTL ? "مصرف الإنماء" : "Alinma Bank",
      category: isRTL ? "حملة ترويجية" : "Promotional Campaign",
      title: isRTL ? "بيئة عمل تفهمك" : "A Workplace That Understands You",
    },
    {
      id: 2,
      img: "card2.png",
      client: isRTL ? "البنك الأهلي" : "National Bank",
      category: isRTL ? "خدمة جديدة" : "New Service",
      title: isRTL
        ? "راحة العملاء أولويتنا"
        : "Customer Comfort is Our Priority",
    },
    {
      id: 3,
      img: "card3.jpg",
      client: isRTL ? "شركة الاتصالات" : "Telecom Company",
      category: isRTL ? "عرض خاص" : "Special Offer",
      title: isRTL ? "أقوى العروض بأقل الأسعار" : "Best Deals at Lowest Prices",
    },
    {
      id: 4,
      img: "card4.png",
      client: isRTL ? "شركة البرمجيات" : "Software Company",
      category: isRTL ? "منتج جديد" : "New Product",
      title: isRTL
        ? "تقنية مبتكرة لأعمالك"
        : "Innovative Tech for Your Business",
    },
  ];

  return (
    <section className={styles.section} dir={isRTL ? "rtl" : "ltr"}>
      <div>
        <div className={styles.header}>
          <img src="vector.png" alt="Vector Graphic" />
        </div>
        <div className={styles.content}>
          <div className={styles.search}>
            <button className={styles.button}>
              <select
                id="categories"
                name="categories"
                className={styles.select}
              >
                <option value="category">
                  {isRTL ? "الأقسام" : "Categories"}
                </option>
                <option value="banking">{isRTL ? "البنوك" : "Banking"}</option>
                <option value="tech">
                  {isRTL ? "التكنولوجيا" : "Technology"}
                </option>
                <option value="health">{isRTL ? "الصحة" : "Healthcare"}</option>
              </select>
            </button>
          </div>
          <div className={styles.cards}>
            {dummyData.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  src={`/cards/${item.img}`}
                  alt="Card Image"
                  className={styles.cardImage}
                />
                <div className={styles.info}>
                  <div className={styles.clientContainer}>
                    <h3 className={styles.client}>{item.client}</h3>
                    <p className={styles.category}>{item.category}</p>
                  </div>
                  <h3 className={styles.title}>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
