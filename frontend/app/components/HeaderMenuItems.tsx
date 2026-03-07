import Link from "next/link";
import React from "react";

function HeaderMenuItems() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/galleries"
          className="block text-xl font-medium text-black hover:text-gray-600 transition-colors"
        >
          Collections
        </Link>
      </div>
      <div>
        <Link
          href="/about"
          className="block text-xl font-medium text-black hover:text-gray-600 transition-colors"
        >
          About
        </Link>
      </div>
      <div>
        <Link
          href="/contact"
          className="block text-xl font-medium text-black hover:text-gray-600 transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}

export default HeaderMenuItems;
