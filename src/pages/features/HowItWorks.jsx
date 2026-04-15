import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const steps = [
    {
      title: "Corporate & Enterprise Offices",
      subtitle: "Streamlined Facility & Access Management",
      desc: "Optimizes administrative workflows and visitor coordination. Ensures a secure, seamlessly managed corporate environment by integrating personnel schedules and daily operational reporting into one centralized dashboard.",
      images: "/logo/Guard.png",
    },
    {
      title: "Manufacturing & Industrial Sites",
      subtitle: "High-Compliance Monitoring & Risk Mitigation",
      desc: "Delivers robust monitoring and automated compliance tracking for complex industrial operations. Maintains stringent safety protocols and deploys rapid-response coordination to minimize operational downtime.",
      images: "/logo/Sellgo.png",
    },
    {
      title: "Commercial Facilities & Retail",
      subtitle: "Dynamic Deployment & Maintenance",
      desc: "Enhances the visitor experience by upholding impeccable facility standards. Coordinates cleaning schedules, security deployments, and tenant requests in real-time to efficiently manage high-traffic environments.",
      images: "/logo/Casual.png",
    },
    {
      title: "Hospitality",
      subtitle: "Precision & Quality Assurance",
      desc: "Supports environments that require the highest standards of hygiene and security. Automates quality control audits and ensures all operational personnel adhere to strict industry regulations.",
      images: "/logo/Shelia.png",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-8 font-sans lg:px-16 lg:py-24 xl:px-10 xl:py-16">
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mb-8 flex w-full items-center justify-between lg:mb-16 xl:mb-12"
      >
        {/* Tombol Kembali - kiri atas */}
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        {/* Tombol Home - kanan atas */}
        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      {/* Header Halaman */}
      <div className="mb-10 text-center lg:mb-4 xl:mb-16">
        <h1 className="text-primary text-2xl font-black tracking-tight lg:text-7xl xl:text-3xl">
          Industry Solutions
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 lg:mt-10 lg:text-5xl xl:mt-2 xl:text-lg">
          Empowering Diverse Sectors with Centralized Control. Adapting to
          complex operational needs through data-driven efficiency and
          integrated management.
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-10 lg:gap-4 xl:gap-4">
        {steps.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-row items-center gap-10 border-b border-slate-500 py-10 lg:py-16 xl:py-12 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div className="flex w-28 shrink-0 items-center justify-center lg:w-80 xl:w-40">
              <div className="flex h-28 w-28 items-center justify-center rounded-4xl border border-slate-300 bg-white p-4 shadow-xl lg:h-96 lg:w-96 xl:h-40 xl:w-40">
                <img
                  src={item.images}
                  alt={item.title}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="flex flex-1 flex-col gap-2 text-left">
              <h2 className="text-primary text-lg font-black leading-tight lg:text-5xl xl:text-3xl">
                {item.title}
              </h2>
              <p className="text-sm font-semibold leading-tight text-slate-500 lg:text-4xl xl:text-lg">
                {item.subtitle}
              </p>
              <p className="text-xs text-justify font-medium pt-4 leading-relaxed text-slate-500 lg:text-3xl xl:text-sm">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
