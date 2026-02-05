import Link from "next/link";
import React from "react";

function HeaderItems() {
  return (
    <>
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
    </>
  );
}

export default HeaderItems;
