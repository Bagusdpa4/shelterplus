import React from "react";

export const Loading = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-8 overflow-hidden bg-white">
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        <div className="relative h-20 w-20 lg:h-60 lg:w-60 xl:h-20 xl:w-20">
          {/* Ring Dasar (Muted) */}
          <div className="border-secondary absolute h-full w-full rounded-full border-8"></div>
          {/* Ring Loading (Primary) */}
          <div className="border-t-primary absolute h-full w-full animate-spin rounded-full border-8 border-b-transparent border-l-transparent border-r-transparent"></div>
        </div>

        {/* Teks Loading dengan Font Poppins */}
        <div className="flex flex-col items-center gap-1">
          <span className="xl:text-md text-sm font-black uppercase tracking-[0.3em] text-black lg:text-3xl">
            Please Wait
          </span>
          <div className="bg-primary h-1 w-12 animate-pulse rounded-full lg:h-4 lg:w-40 xl:h-1 xl:w-16"></div>
        </div>
      </div>

      {/* Footer Branding Sederhana agar user tahu ini bagian dari Ecosystem */}
      <div className="absolute bottom-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300 lg:text-xl xl:text-base">
          Shelter Indonesia © 2026
        </p>
      </div>
    </div>
  );
};
