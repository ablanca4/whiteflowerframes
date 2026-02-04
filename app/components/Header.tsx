import Link from "next/link";
import ToggleSection from "./ToggleSection";
import HeaderItems from "./HeaderItems";
import HeaderMenuItems from "./HeaderMenuItems";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="tracking-tight text-2xl text-black">
            <h1>Whiteflower Frames</h1>
          </Link>
          <ToggleSection title="Menu">
            <HeaderMenuItems />
          </ToggleSection>
          <nav className="hidden md:flex items-center gap-6">
            <HeaderItems />
          </nav>
        </div>
      </div>
    </header>
  );
}
