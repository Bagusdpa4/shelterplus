import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaRegStar, FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { PiWarningCircle } from "react-icons/pi";
import { BiRepost } from "react-icons/bi";
import { IoIosRocket } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "What is Shelter+ ?",
      icon: <PiWarningCircle />,
      bgIcon: "bg-blue-900",
      path: "/what-is",
    },
    {
      title: "Features",
      icon: <FaRegStar />,
      bgIcon: "bg-blue-900",
      path: "/all-features",
    },
    {
      title: "Best-Fit App",
      icon: <BiRepost />,
      bgIcon: "bg-blue-900",
      path: "/how-it-works",
    },
    {
      title: "Request Demo",
      icon: <IoIosRocket />,
      bgIcon: "bg-blue-900",
      path: "/req-demo",
    },
  ];

  return (
    <motion.div
      // Wrapper utama untuk transisi antar halaman
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="relative flex min-h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-white px-6 font-sans"
    >
      {/* 1. Background Decor - Ditaruh di luar Card supaya tidak kena overflow-hidden */}
      <div className="lg:h-120 lg:w-120 absolute -right-10 -top-10 h-64 w-64 rounded-full bg-blue-400/20 blur-[80px]" />
      <div className="lg:h-100 lg:w-100 absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sky-300/20 blur-[80px]" />

      {/* Container Menu Utama */}
      <motion.div
        // Animasi Slide Up yang lebih smooth
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier untuk efek 'out-expo'
          delay: 0.1,
        }}
        className="relative z-10 w-full max-w-sm overflow-hidden p-0 backdrop-blur-md lg:max-w-5xl lg:p-4 xl:max-w-xl xl:p-4"
      >
        {/* Header Section */}
        <div className="py-6 text-center lg:py-10 xl:py-2">
          <div className="mb-4 flex w-full justify-center lg:mb-10 xl:mb-6">
            <img
              src="/shelter+.png"
              alt="Shelter+ Logo"
              className="h-auto w-[60%] object-contain lg:w-[40%] xl:w-[40%]"
            />
          </div>
          <h1 className="text-primary py-2 text-xl font-black tracking-tight lg:py-4 lg:text-9xl xl:py-2 xl:text-3xl">
            Shelter+
          </h1>
          <h1 className="text-primary py-2 text-xl font-bold tracking-tight lg:py-4 lg:text-6xl xl:py-2 xl:text-3xl">
            One ecosystem for your workforce management
          </h1>
          {/* <p className="mt-4 px-4 text-sm font-medium text-black lg:mt-4 lg:px-2 lg:text-[40px] xl:mt-0 xl:px-10 xl:text-lg">
            Monitor guards, patrols, and incidents in real time
          </p> */}
        </div>

        {/* List Menu */}
        <div className="flex flex-col gap-0 lg:gap-10 xl:gap-4">
        {menuItems.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(item.path)}
              className="group flex w-full cursor-pointer items-center justify-between rounded-[1.5rem] border border-slate-400 bg-white p-4 shadow-xl transition-all hover:shadow-md lg:rounded-full lg:p-8 xl:rounded-[2rem] xl:p-5"
            >
              <div className="flex items-center gap-4 lg:gap-8 xl:gap-6">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full lg:h-24 lg:w-24 xl:h-12 xl:w-12 ${item.bgIcon}`}
                >
                  {React.cloneElement(item.icon, {
                    className: "text-lg xl:text-2xl text-primary lg:text-6xl",
                  })}
                </div>
                <div className="text-left">
                  <h3 className="text-base font-bold text-black lg:text-5xl lg:font-bold xl:text-lg xl:font-bold">
                    {item.title}
                  </h3>
                </div>
              </div>
              <FaArrowRight className="text-primary hidden lg:block lg:text-4xl xl:block xl:text-2xl" />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Navigation Bar Bawah */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 flex items-center gap-6 rounded-full border border-slate-100 bg-white p-2 shadow-lg lg:mt-16 lg:gap-10 lg:p-6 xl:mt-4 xl:gap-6 xl:p-4"
      >
        <button
          onClick={() => navigate(-1)}
          className="hover:text-primary flex cursor-pointer flex-col items-center gap-1 px-1 text-slate-400 transition-colors lg:gap-4 lg:px-8 xl:gap-2 xl:px-2"
        >
          <FaArrowLeft className="text-lg lg:text-5xl xl:text-xl" />
          <span className="text-[10px] font-bold uppercase lg:text-2xl xl:text-[12px]">
            Back
          </span>
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-primary/10 text-primary hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-14 xl:w-14"
        >
          <FaHome className="text-xl lg:text-6xl xl:text-2xl" />
        </button>

        <button className="flex cursor-not-allowed flex-col items-center gap-1 px-1 text-slate-400 transition-colors lg:gap-4 lg:px-8 xl:gap-2 xl:px-2">
          <FaArrowRight className="text-lg lg:text-5xl xl:text-xl" />
          <span className="text-[10px] font-bold uppercase lg:text-2xl xl:text-[12px]">
            Next
          </span>
        </button>
      </motion.div> */}
      <div className="mt-16 flex w-full justify-center lg:mt-24 xl:mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-6 p-3 lg:gap-8 lg:p-6 xl:gap-4 xl:p-4"
        >
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="border-primary hover:bg-primary group flex cursor-pointer items-center gap-4 rounded-full border bg-white px-6 py-2 shadow-lg transition-all hover:scale-110 lg:px-12 lg:py-8 xl:px-4 xl:py-4"
          >
            <FaArrowLeft className="text-primary text-base group-hover:text-white lg:text-4xl xl:text-lg" />
            <span className="text-primary text-sm font-bold uppercase group-hover:text-white lg:text-3xl xl:text-base">
              Back
            </span>
          </button>

          {/* Divider vertikal tipis agar mirip desain referensi */}
          <div className="bg-primary h-8 w-1 lg:h-16" />

          {/* Tombol Home */}
          <button
            onClick={() => navigate("/")}
            className="bg-primary/10 text-primary hover:bg-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:text-white lg:h-24 lg:w-24 xl:h-12 xl:w-12"
          >
            <FaHome className="text-lg lg:text-5xl xl:text-xl" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
