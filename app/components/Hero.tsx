import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src={"/images/backsplash.jpg"}
          alt="Hero landscape"
          fill={true}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white px-6">
        <h2 className="text-5xl md:text-7xl mb-4 tracking-tight text-center">
          Capturing Moments
        </h2>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl text-center">
          A visual journey through light, shadow, and everything in between
        </p>
      </div>
    </section>
  );
}
