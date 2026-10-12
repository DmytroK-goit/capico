
import Link from "next/link";
import Image from "next/image";
import bg from "../img/hero/hero_bg.png";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-4 text-center text-white">
   
      <Image
        src={bg}
        alt=""
        fill
        priority
        className="pointer-events-none object-cover object-center opacity-80"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        <h1 className="text-[140px] font-medium leading-[0.9] tracking-[-8px] text-[#eeeaff] sm:text-[190px] md:text-[220px]">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl md:text-[42px]">
          Page not found
        </h2>

        <p className="mt-6 max-w-md text-sm leading-5 text-white/55 sm:text-base">
          Join to our partners, read author&apos;s analytics,
          <br className="hidden sm:block" />
          explore the world of trading
        </p>

        <Link
          href="/"
          className="group mt-7 flex min-w-[200px] items-center justify-between gap-5 rounded-full bg-[#6429bd] py-2.5 pl-8 pr-3 text-sm font-medium transition-colors duration-300 hover:bg-[#793be0]"
        >
          <span>Main page</span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-lg transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </main>
  );
}