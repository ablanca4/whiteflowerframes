import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1662550112953-dc8cb4cdb70b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBtb3VudGFpbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODM5MTgzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
