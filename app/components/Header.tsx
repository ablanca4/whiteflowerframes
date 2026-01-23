import Link from "next/link";
import React from "react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="tracking-tight text-2xl text-black">
            <h1>Whiteflower Frames</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/galleries"
              className="text-md  text-black hover:text-gray-600 transition-colors"
            >
              Collections
            </Link>
            <Link
              href="/about"
              className="text-md text-black hover:text-gray-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-md text-black hover:text-gray-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
