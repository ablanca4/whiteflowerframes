import Link from "next/link";
import ToggleSection from "./ToggleSection";
import HeaderItems from "./HeaderItems";
import HeaderMenuItems from "./HeaderMenuItems";
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="w-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="tracking-tight text-2xl text-black">
            <h1>Whiteflower Frames</h1>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <HeaderItems />
          </nav>
        </div>
        <div className="md:hidden flex items-center">
          <ToggleSection title="Menu">
            <HeaderMenuItems />
          </ToggleSection>
        </div>
      </div>
    </header>
  );
}
