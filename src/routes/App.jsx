import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Homepage } from "../pages/Homepage";
import { Menu } from "../pages/templates/Menu";
import { WhatIs } from "../pages/features/WhatIs";
import { HowItWorks } from "../pages/features/HowItWorks";
import { AllFeatures } from "../pages/features/AllFeatures";
import { RequestDemo } from "../pages/features/RequestDemo";
import { Error404 } from "../pages/errors/Error404";

// Components
import { IdleOverlay } from "../components/assets/idle/IdleOverlay";
import { AnimatePresence } from "framer-motion";

export const App = () => {
  return (
    <BrowserRouter>
      <IdleOverlay />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Homepage />} />

          {/* Menu */}
          <Route path="/menu" element={<Menu />} />

          {/* Features */}
          <Route path="/what-is" element={<WhatIs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/all-features" element={<AllFeatures />} />
          <Route path="/req-demo" element={<RequestDemo />} />

          {/* Error */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};
