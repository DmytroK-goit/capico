import Image from "next/image";
import Link from "next/link";

import bg from "../../img/trade/bg_trade.png";
import substruck from "../../img/numbers/Subtract.png";

export default function Trade() {
  return (
    <section className="px-3 py-12 md:px-6 lg:px-10">
      <div className="relative mx-auto max-w-full overflow-hidden rounded-[22px]">
        <Image src={bg} alt="Trade anywhere" className="h-[700px] w-full object-cover" priority />

        <Image src={substruck} alt="" className="absolute top-0 z-1" />

        <div className="absolute left-7 top-1/2 z-10 -translate-y-1/2 md:left-12 flex flex-col justify-between gap-14">
          <h2 className="text-6xl font-medium tracking-tight text-white md:text-[80px]">Trade anywhere</h2>

          <p className="mt-5 max-w-[350px] text-sm leading-relaxed text-white/60 md:text-base">The service is fully adapted to work through a browser on your smartphone or tablet</p>

          <Link href="/signup" className="mt-7 inline-flex items-center justify-center gap-5 rounded-full border border-white/20 bg-[#5f29b7] px-5 py-3 text-[30px] text-white transition hover:bg-[#6d32cc]">
            Create an account
            <span className="text-base">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
