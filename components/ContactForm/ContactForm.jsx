"use client";

import { useState } from "react";
import { useDirection } from "@/hooks/use-direction";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { direction } = useDirection();
  const isRTL = direction === "rtl";

  const [formData, setFormData] = useState({
    companyName: "",
    phoneNumber: "",
    personName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      className={styles.formContainer}
      style={{ backgroundColor: "black", color: "white" }}
      id="contactus"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold mb-8 text-center text-[#EDBE6E] tracking-wide">
        {isRTL ? "قصتك تبدأ هنا" : "Your Story Begins Here"}
      </h2>

      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-lg p-8 rounded-lg shadow-2xl border border-[#EDBE6E] backdrop-blur-lg ${
          isRTL ? "text-right" : "text-left"
        }`}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        {/* Form Fields */}
        {[
          {
            name: "companyName",
            label: isRTL ? "اسم الشركة" : "Company Name",
            type: "text",
          },
          {
            name: "phoneNumber",
            label: isRTL ? "رقم الجوال" : "Phone Number",
            type: "tel",
          },
          {
            name: "personName",
            label: isRTL ? "اسم الشخص" : "Person Name",
            type: "text",
          },
          {
            name: "email",
            label: isRTL ? "البريد الإلكتروني (اختياري)" : "Email (Optional)",
            type: "email",
          },
        ].map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block mb-2 font-semibold text-[#EDBE6E]">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.name !== "email"}
              className="w-full p-3 border border-[#EDBE6E] bg-black text-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EDBE6E] transition duration-300"
            />
          </div>
        ))}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 font-bold rounded-md bg-[#EDBE6E] text-black text-lg uppercase tracking-wide hover:scale-105 transition-transform duration-200"
        >
          {isRTL ? "إرسال" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
