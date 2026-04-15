import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaHome } from "react-icons/fa";

export const WhatIs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const benefits = [
    {
      title: "Total Transparency",
      description:
        "Seamless monitoring of field operations to guarantee absolute data accuracy.",
    },
    {
      title: "Centralized Control",
      description:
        "Efficient management of all operational sites through a single, unified dashboard.",
    },
    {
      title: "Real-Time Validation",
      description:
        "Instant verification of task completion and Service Level Agreement (SLA) compliance.",
    },
    {
      title: "Agile Response",
      description:
        "Immediate anomaly detection and emergency reporting to ensure swift resolution.",
    },
    {
      title: "Data-Driven Analytics",
      description:
        "Comprehensive tracking of operational data to empower evaluation and strategic decision-making.",
    },
    {
      title: "Maximized Accountability",
      description:
        "An integrated system that enforces discipline and drives optimal performance across all field personnel.",
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white px-6 py-8 font-sans lg:px-12 lg:py-16">
      {/* Background Decor */}
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

      {/* Main Content */}
      <div className="mx-auto w-full max-w-6xl grow">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-10"
        >
          {/* Headline */}
          <section className="space-y-6 border-b border-slate-500 pb-6 text-center">
            <h1 className="text-primary text-3xl font-black lg:text-7xl xl:text-4xl">
              One ecosystem for your workforce management
            </h1>
            <p className="mx-auto max-w-6xl text-justify text-base font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-lg">
              Digital platform designed to serve as the ultimate operational
              command center for Shelter Indonesia's clients, including security
              teams, cleaning staff, and other support personnel across multiple
              locations, enabling centralized monitoring through a single hub.
            </p>
          </section>

          {/* Section Label */}
          <span className="text-primary border-primary border-l-10 pl-3 text-base font-extrabold uppercase lg:text-5xl xl:text-2xl">
            Goal
          </span>

          {/* Core Features Cards */}
          <div className="flex flex-col gap-6">
            <p className="text-md font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-2xl">
              To deliver absolute transparency and facilitate real-time
              validation of all field operations.
            </p>
          </div>

          {/* Section Label */}
          <span className="text-primary border-primary border-l-10 pl-3 text-base font-extrabold uppercase lg:text-5xl xl:text-2xl">
            Benefits
          </span>

          {/* Benefits Cards */}
          <div className="flex flex-col gap-4 pb-10 lg:gap-10 lg:pb-28 xl:gap-6 xl:pb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="flex flex-col gap-2 rounded-full border border-blue-700 px-20 py-8 shadow-xl"
              >
                <h3 className="text-primary text-lg font-extrabold lg:text-4xl xl:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-sm font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-base">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
