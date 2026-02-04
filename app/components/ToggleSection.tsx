"use client";
import React, { useState } from "react";
import HamburgerMenu from "./Hamburger";

export default function ToggleSection({
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Header / Trigger Area */}
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={toggleVisibility}
      >
        <HamburgerMenu />
        {/* Conditionally Rendered Content */}
        {isVisible && (
          <div className="absolute md:hidden mt-30 p-5 pb-0 pt-0 bg-white/80 animate-in fade-in slide-in-from-top-1 duration-200">
            {children}
          </div>
        )}
      </div>
    </>
  );
}
