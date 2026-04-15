import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const Homepage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      // 2. Tambahkan properti animasi
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="relative flex min-h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-white px-6 font-sans"
      onClick={() => navigate("/menu")}
    >
      {/* 1. Background Decor (Blob atas & bawah) */}
      <div className="bg-primary2 absolute -right-20 -top-20 h-64 w-64 rounded-full lg:h-96 lg:w-96" />
      <div className="bg-primary2 absolute -bottom-10 -left-10 h-48 w-48 rounded-full lg:h-80 lg:w-80" />

      {/* 2. Main Content Container */}
      <motion.div
        // Animasi muncul sedikit dari bawah untuk konten utama
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* Logo Icon (Hexagon Abstract) */}
        <div className="lg:h-120 lg:w-120 mb-10 flex h-32 w-32 items-center justify-center xl:h-80 xl:w-80">
          <img
            src="/shelter+.png"
            alt="Shelter+ Logo"
            className="h-full w-full object-contain"
          />
        </div>

        {/* Brand Name */}
        <h1 className="text-primary text-5xl font-black lg:text-9xl xl:text-7xl">
          Shelter+
        </h1>

        {/* Subtitle */}
        <p className="text-secondary2 mt-10 text-sm font-semibold uppercase tracking-[0.2em] lg:text-4xl xl:text-2xl">
          All services connected in one application
        </p>

        {/* 3. Interaction Prompt */}
        <div className="mt-24 flex flex-col items-center gap-4 lg:mt-40 xl:mt-16">
          <div className="h-px flex-1 bg-slate-200"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-sky-400 lg:text-3xl xl:text-sm">
            Touch Screen To Begin
          </span>

          {/* Animated Pulse Dot */}
          <div className="mt-2 flex gap-2 lg:mt-4 xl:mt-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-sky-400 lg:h-5 lg:w-5 xl:h-3 xl:w-3"
              />
            ))}
          </div>
        </div>

        {/* Logo Store */}
        <div className="mt-8 flex items-center gap-3 lg:mt-40 lg:gap-10 xl:mt-10 xl:gap-4">
          <img
            src="/Google Play.png"
            alt="Google Play Logo"
            className="h-8 w-auto object-contain lg:h-28 xl:h-10"
          />
          <img
            src="/App Store.png"
            alt="App Store Logo"
            className="h-8 w-auto object-contain lg:h-28 xl:h-10"
          />
        </div>
      </motion.div>

      {/* 4. Footer Branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 flex flex-row text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 lg:text-xl xl:text-sm">
          Premium Enterprise Edition © 2026
        </p>
      </motion.div>
    </motion.div>
  );
};
