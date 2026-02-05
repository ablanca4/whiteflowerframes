import { Instagram, Facebook } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-neutral-primary-soft">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="https://www.facebook.com"
              className="text-body hover:text-heading"
            >
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="text-body hover:text-heading ms-5"
            >
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
