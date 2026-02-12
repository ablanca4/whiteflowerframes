import Link from "next/link";
import React from "react";

function HeaderMenuItems() {
  return (
    <div className="grid-cols-1 gap-4">
      <div>
        <Link
          href="/galleries"
          className="text-md  text-black hover:text-gray-600 transition-colors"
        >
          Collections
        </Link>
      </div>
      <div>
        <Link
          href="/about"
          className="text-md text-black hover:text-gray-600 transition-colors"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          href="/contact"
          className="text-md text-black hover:text-gray-600 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HeaderMenuItems;
