import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PhoneFrame } from "../../components/assets/phoneFrame/PhoneFrame";
import { FeatureTabs } from "../../components/assets/features/FeatureTabs";
import { FaArrowLeft, FaHome, FaBriefcase, FaDesktop } from "react-icons/fa";
import { CiCircleCheck, CiWarning } from "react-icons/ci";
import { FaUserTie, FaBrain } from "react-icons/fa";
import { GiBroom } from "react-icons/gi";
import { SiAdguard } from "react-icons/si";

export const AllFeatures = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Employee");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  const features = [
    {
      id: "Employee",
      icon: <FaUserTie />,
      contents: [
        {
          title: "Employee",
          desc: "Engineered to support site operational excellence, this integrated HR module streamlines personnel data management, attendance analytics, and the processing of employee requests such as permits, leave, and overtime. Within the SHELTER+ ecosystem, it enables seamless daily control and rapid follow-up through a unified, high-efficiency interface.",
          logo: "/logo/HRIS.png",
          images: "/features/HRIS.png",
        },
      ],
    },
    {
      id: "Cleaning",
      icon: <GiBroom />,
      contents: [
        {
          title: "Cleaning",
          desc: "A specialized Cleaning Module designed to organize and oversee site-level cleaning tasks systematically, delivering highly measurable operational standards.",
          logo: "/logo/Shelia.png",
          images: "/features/Cleaning.png",
        },
      ],
    },
    {
      id: "Casual Work",
      icon: <FaBriefcase />,
      contents: [
        {
          title: "Casual",
          desc: "specifically engineered to optimize casual workforce management. The system automates workforce scheduling and payroll processes, seamlessly streamlining interactions between administrators and personnel through a single, unified digital ecosystem.",
          logo: "/logo/Casual.png",
          images: "/features/Casual.png",
        },
      ],
    },
    {
      id: "SellGo",
      icon: <FaDesktop />,
      contents: [
        {
          title: "SellGo",
          desc: "an advanced sales force automation platform engineered to optimize the field operations of sales. The system fully digitizes the recording and reporting of all sales activities, from tracking store visits to capturing transactions in real-time.",
          logo: "/logo/Sellgo.png",
          images: "/features/Sellgo.png",
        },
      ],
    },
    {
      id: "Guard",
      icon: <SiAdguard />,
      contents: [
        {
          title: "Guard",
          desc: "Through a centralized platform, Shelter Guard enables organizations to manage and supervise their security operations more effectively. From patrol monitoring and visitor management to incident reporting and AI-powered surveillance, all activities are connected within one ecosystem.",
          logo: "/logo/Guard.png",
          images: "/features/Guard.jpg",
        },
      ],
    },
    {
      id: "Issue",
      icon: <CiWarning />,
      contents: [
        {
          title: "Issue",
          desc: "This ticketing module is used to record, track, and resolve issues or complaints from clients.",
          // logo: "/logo/Guard.png",
          images: "/features/Issue.jpg",
        },
      ],
    },
    {
      id: "AI",
      icon: <FaBrain />,
      contents: [
        {
          title: "AI Asked",
          desc: "Skip the menus, chat with our AI for instant data-driven reports. Our intuitive AI eliminates the need to navigate multiple menus, allowing you to instantly access the service information you need.",
          // logo: "/logo/Guard.png",
          images: "/features/AI.jpeg",
        },
      ],
    },
  ];

  const currentData = features.find((f) => f.id === activeTab);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white py-8 font-sans lg:py-0 xl:py-12">
      {/* Background Decor - Lingkaran Blur Halus */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-sky-200 blur-[120px]" />

      {/* Top Navigation */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex w-full items-center justify-between px-6 lg:px-12 xl:px-8"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:bg-primary border-primary group flex cursor-pointer items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-lg transition-all hover:scale-110 lg:gap-4 lg:px-8 lg:py-4 xl:gap-3 xl:px-6 xl:py-3"
        >
          <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
          <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
            Back
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
        >
          <FaHome className="text-lg lg:text-5xl xl:text-xl" />
        </button>
      </motion.div>

      <div className="flex w-full max-w-7xl flex-col">
        {/* Header Section */}
        <div className="px-12 py-6 text-left lg:py-10 xl:py-6">
          <h1 className="text-primary py-2 text-2xl font-black uppercase tracking-tight lg:text-7xl xl:text-4xl">
            Features
          </h1>
          {/* <p className="mt-4 text-sm font-semibold text-slate-500 lg:text-4xl xl:text-lg">
            See what Guard can do
          </p> */}
        </div>

        {/* Dynamic Tab Navigation Component */}
        <div className="w-full overflow-hidden">
          <FeatureTabs
            items={features}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </div>

        {/* Content Section */}
        <div className="border-primary flex w-full items-center justify-center border-t px-12 py-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex w-full flex-col gap-10"
            >
              {currentData.contents.map((content, index) => (
                <div
                  key={index}
                  className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-12"
                >
                  {/* LEFT - Text Section */}
                  <div className="w-full flex-1 space-y-5 text-left">
                    {/* Title */}
                    <h2 className="text-primary text-4xl font-black leading-tight lg:text-8xl xl:text-5xl">
                      {content.title}
                    </h2>

                    {/* Divider */}
                    <div className="bg-primary h-1 w-16 rounded-full lg:w-32 xl:w-20" />

                    {/* Logo */}
                    {content.logo && (
                      <div className="rounded-4xl flex h-20 w-20 items-center justify-center border border-slate-400 bg-white p-4 shadow-xl lg:h-80 lg:w-80 lg:p-10 xl:h-60 xl:w-60 xl:p-4">
                        <img
                          src={content.logo}
                          alt={content.title}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm font-semibold leading-relaxed text-slate-500 lg:text-4xl xl:text-base">
                      {content.desc}
                    </p>
                  </div>

                  {/* RIGHT - Phone Frame */}
                  <div className="flex w-full flex-1 justify-center">
                    <div className="max-w-62.5 lg:max-w-100 xl:max-w-65 w-full">
                      <PhoneFrame screenshot={content.images} />
                    </div>
                  </div>
                </div>
              ))}

              {/* Dots Indicator */}
              <div className="flex w-full items-center justify-center gap-2 pt-20">
                {features.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveTab(f.id)}
                    className={`h-6 rounded-full transition-all duration-300 ${
                      activeTab === f.id
                        ? "bg-primary w-20"
                        : "w-10 cursor-pointer bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
