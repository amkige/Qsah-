"use client";
import React, { useState, useEffect } from "react";
import { Video, Pencil, Camera, Film, Upload } from "lucide-react";
import gsap from "gsap";

const VideoTimeline = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "كتابة السيناريو",
      icon: Pencil,
      description: "تطوير الفكرة وكتابة النص",
    },
    {
      id: 2,
      title: "التصوير",
      icon: Camera,
      description: "تصوير المشاهد باحترافية",
    },
    {
      id: 3,
      title: "المونتاج",
      icon: Film,
      description: "تحرير وتنسيق المحتوى",
    },
    {
      id: 4,
      title: "التسليم",
      icon: Upload,
      description: "تسليم المنتج النهائي",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev < steps.length ? prev + 1 : 1));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.to(".step", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(".progress-line", {
      width: `${(activeStep / steps.length) * 100}%`,
      duration: 1,
      ease: "power2.out",
    });
  }, [activeStep]);

  return (
    <div
      className="w-full max-w-4xl mx-auto p-8 bg-black text-white min-h-screen flex flex-col items-center"
      dir="rtl"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white mb-4">
          رحلة إنتاج الفيديو
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Video className="w-6 h-6 text-[#e9bb6c]" />
          <p className="text-gray-300">من الفكرة إلى الشاشة</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative w-full">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-600 -translate-y-1/2">
          <div className="progress-line h-full bg-[#e9bb6c] transition-all"></div>
        </div>

        {/* Timeline Steps */}
        <div className="relative flex justify-between">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative flex flex-col items-center step opacity-0 scale-90"
            >
              {/* Step Circle */}
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer z-10
                ${
                  activeStep === step.id
                    ? "bg-[#e9bb6c] scale-110 shadow-xl"
                    : "bg-gray-700 border-2 border-gray-500"
                }`}
              >
                <step.icon
                  className={`w-8 h-8 transition-all ${
                    activeStep === step.id ? "text-black" : "text-white"
                  }`}
                />
              </div>

              {/* Step Content */}
              <div
                className={`mt-4 text-center transition-all duration-300 ${
                  activeStep === step.id
                    ? "scale-110 text-[#e9bb6c]"
                    : "text-gray-400"
                }`}
              >
                <h3 className="font-bold mb-1 text-lg">{step.title}</h3>
                <p className="text-sm">{step.description}</p>
              </div>

              {/* Step Number */}
              <div
                className={`absolute -top-8 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                transition-all duration-300 ${
                  activeStep === step.id
                    ? "bg-[#e9bb6c] text-black"
                    : "bg-gray-600 text-gray-300"
                }`}
              >
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTimeline;
