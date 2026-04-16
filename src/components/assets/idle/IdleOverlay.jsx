import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const IdleOverlay = () => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef(null);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Fungsi untuk me-reset timer
  const resetTimer = () => {
    setIsIdle(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // Set timer ke 2 menit idle
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 120000);
  };

  const handleExitIdle = () => {
    setIsIdle(false);
    navigate("/");
  };

  useEffect(() => {
    const events = ["mousedown", "touchstart", "mousemove", "keydown", "click"];

    // Pasang listener ke window
    events.forEach((e) => window.addEventListener(e, resetTimer));

    // Jalankan timer pertama kali
    resetTimer();

    return () => {
      // Bersihkan listener dan timer saat komponen di-unmount
      events.forEach((e) => window.removeEventListener(e, resetTimer));
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isIdle && (
        <motion.div
          key="idle-video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="z-999 fixed inset-0 flex cursor-pointer items-center justify-center overflow-hidden bg-black"
          onClick={handleExitIdle}
        >
          {/* Background Video */}
          <video
            ref={videoRef}
            autoPlay
            // muted
            loop
            playsInline
            onLoadStart={() => console.log("⏳ Video: Start loading...")}
            onCanPlay={() => console.log("✅ Video: Ready to play (buffered).")}
            onPlay={() => console.log("▶️ Video: Attempting to play...")}
            onPlaying={() =>
              console.log("🎬 Video: Currently playing (Running).")
            }
            onWaiting={() => console.warn("⚠️ Video: Buffering/Waiting...")}
            onError={(e) => console.error("❌ Video Error:", e)}
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          >
            {/* Path langsung ke root jika file ada di /public/Intro.mp4 */}
            <source src="/SHELTER.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Overlay Gradient agar lebih elegan */}
          {/* <div className="bg-linear-to-t absolute inset-0 from-black/70 via-transparent to-black/30"></div> */}

          {/* Label di pojok bawah */}
          {/* <div className="signage:bottom-24 signage:right-24 absolute bottom-10 right-10 text-right">
            <p className="text-primary signage:text-8xl text-2xl font-black italic lg:text-5xl">
              SHELTER INDONESIA
            </p>
            <p className="signage:text-2xl text-[10px] font-bold tracking-widest text-white/50">
              Premium Enterprise Edition © 2026
            </p>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
