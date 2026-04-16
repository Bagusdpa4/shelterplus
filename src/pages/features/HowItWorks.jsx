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
      title: "Security Personnel",
      subtitle: "App Used: Shelter Guard",
      desc: "Designed to meet the critical demands of field operations, our platform seamlessly integrates patrol tracking, checkpoint verification, incident reporting, and real-time monitoring into one powerful tool.",
      list: [
        "Live Patrol Tracking",
        "Checkpoint Verification",
        "Incident Report",
        "Visitor Management",
      ],
      images: "/logo/Guard.png",
    },
    {
      title: "Sales / SPG / Canvasser Teams",
      subtitle: "App Used: SellGo",
      desc: "The primary needs are visit tracking, sales visibility, product insights, movement tracking, and performance monitoring, which is why field staff are necessary.",
      list: [
        "Real-time Sales Tracking",
        "Visit Verification",
        "Store-level Visibility",
        "Product Performance Insights",
        "Faster and Smarter Field Execution",
      ],
      images: "/logo/Sellgo.png",
    },
    {
      title: "Casual / Daily Operational Worker",
      subtitle:
        "Types of workers included: Event crew, Helpers, Pickers/packers, Support crew",
      desc: "This type of workforce is flexible and based on daily, event, or project needs, requiring rapid deployment.",
      list: [
        "Rapid Workforce Deployment",
        "Flexible Staffing Allocation",
        "Simplified Coordination of Temporary Workers",
        "Improved Visibility Into Attendance and Placement",
      ],
      images: "/logo/Casual.png",
    },
    {
      title: "Cleaning Service",
      subtitle: "App Used: Shelter Cleaning",
      desc: "Focus on scheduling, cleaning task, relief staff support, and stock/inventory management tools .",
      list: [
        "Routine Cleaning Schedule",
        "Direct Task Assignment",
        "Relief Staff Replacement",
        "Cleaning Supply Management",
        "More Organized Service Execution",
      ],
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
          Find the Right App for Every Workforce Type
        </h1>
        <p className="mt-4 text-sm font-semibold text-slate-500 lg:mt-10 lg:text-[42px] xl:mt-2 xl:text-lg">
          Explore which application best fits each workforce type based on its
          operational function, field activity, and management needs.
        </p>
      </div>

      {/* Container Step */}
      <div className="mx-auto flex max-w-5xl flex-col gap-10 pb-20 lg:gap-4 xl:gap-4">
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
              <div className="rounded-4xl flex h-28 w-28 items-center justify-center border border-slate-300 bg-white p-4 shadow-xl lg:h-96 lg:w-96 xl:h-40 xl:w-40">
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
              <p className="pt-4 text-justify text-xs font-medium leading-relaxed text-slate-500 lg:text-3xl xl:text-sm">
                {item.desc}
              </p>

              {/* List */}
              <div className="mt-3 flex flex-col gap-4">
                {item.list.map((listItem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                    className="w-fit rounded-full border border-sky-500 px-3 py-1.5 text-xs font-semibold text-sky-600 lg:px-6 lg:py-4 lg:text-3xl xl:px-5 xl:py-2 xl:text-sm"
                  >
                    {listItem}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
