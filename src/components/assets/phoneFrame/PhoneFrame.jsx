import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSyncAlt } from "react-icons/fa";

export const PhoneFrame = ({ children, screenshot, index = 0 }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  // Cek apakah screenshot berupa array (untuk fitur swap)
  const isArray = Array.isArray(screenshot);

  // Logika menentukan gambar mana yang di depan dan di belakang
  const currentImage = isArray ? screenshot[activeIdx] : screenshot;
  const backImage = isArray ? screenshot[activeIdx === 0 ? 1 : 0] : null;

  const handleSwap = (e) => {
    if (isArray) {
      e.stopPropagation();
      setActiveIdx((prev) => (prev + 1) % screenshot.length);
    }
  };

  const smoothSpring = {
    type: "spring",
    stiffness: 260,
    damping: 25,
  };

  return (
    <div className="lg:max-w-120 xl:max-w-70 pointer-events-none relative z-10 mx-auto w-full max-w-60 text-center">
      {/* 1. LAYER GAMBAR BELAKANG */}
      <AnimatePresence>
        {isArray && (
          <motion.div
            key={`back-${activeIdx}`}
            initial={{ opacity: 0, scale: 0.7, y: 0 }}
            animate={{
              x: index % 2 !== 0 ? 60 : -60,
              y: 20,
              scale: 0.85,
              opacity: 0.4,
              rotate: index % 2 !== 0 ? -5 : 5,
            }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={smoothSpring}
            className="pointer-events-none absolute inset-0 z-0"
          >
            <div className="aspect-9/19.5 lg:border-12 w-full overflow-hidden rounded-[2.5rem] border-[6px] border-black bg-black shadow-xl lg:rounded-[3.5rem] xl:rounded-[2.8rem] xl:border-8">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white lg:rounded-[2.8rem] xl:rounded-[2.2rem]">
                <img
                  src={backImage}
                  alt="Back"
                  className="grayscale-30 h-full w-full object-cover object-top opacity-60"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. LAYER FRAME UTAMA */}
      <motion.div
        whileHover={isArray ? { y: -5, scale: 1.02 } : { y: -10 }}
        whileTap={isArray ? { scale: 0.95 } : {}}
        onClick={handleSwap}
        layout
        transition={smoothSpring}
        className={`aspect-9/19.5 lg:border-12 relative z-20 w-full overflow-hidden rounded-[2.5rem] border-[6px] border-black bg-black shadow-2xl lg:rounded-[3.5rem] xl:rounded-[2.8rem] xl:border-8 ${
          isArray ? "pointer-events-auto cursor-pointer" : "pointer-events-auto"
        }`}
      >
        <div className="absolute left-1/2 top-0 z-40 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-black lg:h-4 lg:w-20 xl:h-2 xl:w-20"></div>

        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-white lg:rounded-[2.8rem] xl:rounded-[2.2rem]">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImage}
              src={currentImage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              alt="App Screenshot"
              className="h-full w-full object-cover object-top"
            />
          </AnimatePresence>
          <div className="absolute inset-0 z-30">{children}</div>
        </div>
      </motion.div>

      {/* --- TOMBOL DI BAWAH FRAME --- */}
      {isArray && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="pointer-events-auto relative z-30 mx-auto mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-slate-200 px-5 py-2.5 text-xs font-bold text-slate-600 shadow-md transition-colors hover:bg-slate-300"
          onClick={handleSwap}
        >
          {/* Ikon berputar pas diklik */}
          <FaSyncAlt
            style={{
              transform: `rotate(${activeIdx * 180}deg)`,
              transition: "transform 0.5s ease-in-out",
            }}
            className="text-[10px] text-sky-500 lg:text-4xl xl:text-lg"
          />
          <span className="text-sm text-black lg:text-3xl xl:text-sm">
            Tap to Switch Screen
          </span>
        </motion.div>
      )}

      {/* 3. PHYSICAL BUTTONS */}
      <div className="absolute -left-1 top-20 z-20 h-8 w-1 rounded-l-md bg-slate-800 lg:-left-2 lg:top-32 lg:h-20 lg:w-1.5 xl:-left-1 xl:top-24 xl:h-12" />
      <div className="absolute -right-1 top-28 z-20 h-12 w-1 rounded-r-md bg-slate-800 lg:-right-2 lg:top-48 lg:h-28 lg:w-1.5 xl:-right-1 xl:top-32 xl:h-16" />

      {/* 4. GLOW EFFECT */}
      <div className="absolute inset-0 -z-30 scale-95 animate-pulse bg-sky-200 blur-[80px]" />
    </div>
  );
};
