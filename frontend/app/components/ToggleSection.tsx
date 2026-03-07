"use client";
import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";

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
    <div className="relative">
      <div
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={toggleVisibility}
      >
        <HamburgerMenu />
      </div>
      {/* Conditionally Rendered Content */}
      {isVisible && (
        <div className="absolute right-0 top-full mt-4 min-w-[200px] p-5 bg-white/95 backdrop-blur-md shadow-lg rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200 z-50 flex flex-col gap-4">
          {children}
        </div>
      )}
    </div>
  );
}
