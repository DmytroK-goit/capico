import Image from "next/image";
import Link from "next/link";

import hero_bg from "../../img/hero/hero_bg.png";
import binance from "../../img/hero/binance.png";
import ftx from "../../img/hero/ftx.png";
import huobi from "../../img/hero/huobi.png";
import exmo from "../../img/hero/exmo.png";
import okx from "../../img/hero/okx.png";
import bybit from "../../img/hero/bybit.png";

const exchanges = [
  {
    name: "Binance",
    image: binance,
    href: "https://www.binance.com/",
  },
  {
    name: "FTX",
    image: ftx,
    href: "https://ftx.com/",
  },
  {
    name: "Huobi",
    image: huobi,
    href: "https://www.htx.com/",
  },
  {
    name: "EXMO",
    image: exmo,
    href: "https://exmo.com/",
  },
  {
    name: "OKX",
    image: okx,
    href: "https://www.okx.com/",
  },
  {
    name: "Bybit",
    image: bybit,
    href: "https://www.bybit.com/",
    soon: true,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] ">

      <Image
        src={hero_bg}
        alt="background"
        fill
        priority
        className=""
      />
      
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-[1440px] flex-col px-7 py-10 lg:px-10 xl:px-14">

        <div className="mt-2 max-w-[700px] lg:mt-4">
          <h1 className="text-[52px] font-normal leading-[0.98] tracking-[-2.5px] text-white sm:text-[64px] lg:text-[70px] xl:text-[102px]">
            Crypto trading
            <br />
            <span className="bg-gradient-to-r from-[#8b4de8] via-[#bd9ae9] to-[#8051d6] bg-clip-text text-transparent">
              with bots and
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#8b4de8] via-[#bd9ae9] to-[#8051d6] bg-clip-text text-transparent">
              smart deals
            </span>
          </h1>

          <Link
            href="/signin"
            className="mt-6 flex h-[50px] w-[203px] items-center justify-between rounded-full bg-[#6428c4] px-5 text-[16px] font-semibold text-white transition-all duration-300 hover:bg-[#7636db] hover:shadow-[0_0_25px_rgba(125,55,220,0.45)]"
          >
            <span>Sign up now</span>

            <span className="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-white/10 text-[22px]">
              →
            </span>
          </Link>
        </div>

        <div className="mt-auto pb-0">
          <p className="mb-5 max-w-[220px] text-[18px] font-semibold leading-[1.15] text-white">
            Trade for free on your
            <br />
            favorite exchanges
          </p>

          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 lg:gap-3">
            {exchanges.map((exchange) => (
              <li key={exchange.name}>
                <Link
                  href={exchange.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-[62px] items-center justify-center rounded-[18px] bg-[#0d0816] px-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#150d22] hover:shadow-[0_8px_30px_rgba(120,50,220,0.2)]"
                >
                  <Image
                    src={exchange.image}
                    alt={exchange.name}
                    className={`max-h-[25px] w-auto object-contain ${
                      exchange.name === "Bybit" ? "opacity-40" : ""
                    }`}
                  />

                  {exchange.soon && (
                    <span className="absolute right-2 top-2 rounded-[5px] bg-[#7441c9] px-1.5 py-0.5 text-[8px] font-medium leading-none text-white">
                      Soon
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}