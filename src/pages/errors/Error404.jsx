import React, { useState, useEffect } from "react";
import { Loading } from "../../components/assets/loading/Loading";
import { Button } from "@/components/ui/button";

export const Error404 = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const minimumLoadTime = 800;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minimumLoadTime);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="relative flex min-h-screen select-none flex-col items-center justify-center overflow-hidden bg-white px-6 font-sans">
      {/* Background Decor - Abstract Blue Blobs */}
      <div className="bg-primary2 absolute -left-24 -top-24 h-96 w-96 rounded-full" />
      <div className="bg-primary2 absolute -bottom-24 -right-24 h-96 w-96 rounded-full lg:-right-36" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Number 404 */}
        <h1 className="text-[12rem] font-black leading-none tracking-tighter text-slate-300 lg:text-[20rem] xl:text-[18rem]">
          404
        </h1>

        {/* Text Content */}
        <div className="-mt-8 flex flex-col items-center gap-4 lg:-mt-10 lg:gap-10 xl:-mt-12 xl:gap-4">
          <h2 className="text-2xl font-black uppercase italic tracking-widest text-black lg:text-5xl">
            Page <span className="text-primary">Not Found</span>
          </h2>
          <p className="max-w-md text-sm font-medium text-slate-500 lg:text-3xl xl:text-lg">
            Sorry, it looks like the page you're looking for has moved or is no
            longer available in our ecosystem.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-12 lg:mt-20 xl:mt-12">
          <Button
            asChild
            className="text-md hover:bg-white! group mt-12 flex h-auto cursor-pointer items-center gap-4 rounded-3xl border-2 border-black bg-black px-10 py-4 font-bold text-white transition-all hover:text-black active:scale-95 lg:px-12 lg:py-8 lg:text-3xl xl:px-8 xl:py-5 xl:text-xl"
          >
            <a href="/">Back to Homepage</a>
          </Button>
        </div>
      </div>

      {/* Footer Branding Sederhana */}
      <div className="absolute bottom-10 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-slate-300 lg:text-xl xl:text-base">
          Shelter Indonesia © 2026
        </p>
      </div>
    </div>
  );
};
