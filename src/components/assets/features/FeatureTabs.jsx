import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export const FeatureTabs = ({ items, activeTab, onTabChange }) => {
  return (
    // Tambahkan justify-center agar jika tab sedikit ( < 4) tetap rapi di tengah
    <div className="mb-10 flex w-full justify-center overflow-hidden px-6">
      <Swiper
        // Gunakan auto agar lebar slide mengikuti isi tombol
        slidesPerView={"auto"}
        spaceBetween={16}
        freeMode={true}
        mousewheel={{ forceToAxis: true }}
        modules={[FreeMode, Mousewheel]}
        grabCursor={true}
        slidesOffsetBefore={16}
        slidesOffsetAfter={16}
        className="py-4! w-full max-w-6xl"
      >
        {items.map((tab) => (
          <SwiperSlide
            key={tab.id}
            className="w-auto! max-w-md px-2 py-4 lg:max-w-5xl xl:max-w-xl"
          >
            <button
              onClick={() => onTabChange(tab.id)}
              className={`flex min-w-fit items-center justify-center gap-3 rounded-full border p-6 transition-all duration-300 ${
                activeTab === tab.id
                  ? "border-primary bg-primary scale-105 text-white shadow-xl"
                  : "cursor-pointer border-blue-700 bg-white text-black shadow-xl shadow-blue-200 hover:scale-105 hover:bg-slate-200"
              }`}
            >
              <span className="text-xl lg:text-4xl xl:text-2xl">
                {tab.icon}
              </span>
              <span className="whitespace-nowrap text-sm font-bold tracking-wide lg:text-3xl xl:text-base">
                {tab.id}
              </span>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
