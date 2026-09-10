import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.svg";

export default function Header() {
  return (
    <header className="px-4 py-5">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between rounded-2xl bg-black px-6">
   
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Capico"
            width={105}
            height={32}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="#features"
            className="text-[13px] text-white transition-opacity hover:opacity-60"
          >
            Features
          </Link>

          <Link
            href="#prices"
            className="text-[13px] text-white transition-opacity hover:opacity-60"
          >
            Prices
          </Link>

          <Link
            href="#partners"
            className="text-[13px] text-white transition-opacity hover:opacity-60"
          >
            Partners
          </Link>

          <Link
            href="#knowledge"
            className="text-[13px] text-white transition-opacity hover:opacity-60"
          >
            Knowledge base
          </Link>

          <Link
            href="#academy"
            className="text-[13px] text-white transition-opacity hover:opacity-60"
          >
            Academy
          </Link>
        </nav>

        <div className="flex items-center gap-5">
       
          <Link
            href="/signin"
            className="rounded-full bg-[#7435d4] px-5 py-2.5 text-[13px] text-white transition-colors hover:bg-[#6428c2]"
          >
            Sign in →
          </Link>
        </div>
      </div>
    </header>
  );
}