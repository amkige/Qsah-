"use client";
import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";
import styles from "./Footer.module.css";
import { useDirection } from "@/hooks/use-direction";

const Footer = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";

  return (
    <footer className={`${styles.footer} ${isRTL ? styles.rtl : styles.ltr}`}>
      <div className={styles.container}>
        {/* Idea Submission */}
        <div className={`${styles.qsahcontainer}`}>
          <h1
            style={{
              textAlign: "center",
              marginLeft: "10px",
              fontSize: "20px",
            }}
          >
            {isRTL ? "عندك فكرة؟" : "Have an Idea?"}
          </h1>
          <img className={styles.img} src="/Vector.png" alt="qsah" />
        </div>
        {/* middle */}
        <div className={styles.middle}>
          {/* Social Icons */}
          <div className={`${styles.socialIcons} text-xl mb-2`}>
            <a href="#" className="hover:text-gold">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gold">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-gold">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gold">
              <FaTiktok />
            </a>
          </div>
          {/* Copyright */}
          <div className="text-center text-sm text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} Qsah Creative Agency.{" "}
              {isRTL ? "جميع الحقوق محفوظة." : "All rights reserved."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
