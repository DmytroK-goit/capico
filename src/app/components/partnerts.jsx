import Image from "next/image";

import binance from "../../img/hero/binance.png";
import ftx from "../../img/hero/ftx.png";
import huobi from "../../img/hero/huobi.png";
import okx from "../../img/hero/okx.png";
import substruck from "../../img/numbers/Subtract.png";
const partners = [
  {
    name: "Binance",
    image: binance,
    label: "binance",
  },
  {
    name: "FTX",
    image: ftx,
    label: "ftx",
  },
  {
    name: "Huobi",
    image: huobi,
    label: "huobi",
  },
  {
    name: "OKX",
    image: okx,
    label: "okx",
  },
];

export default function Partners() {
  return (
    <section className="rounded-[28px] bg-gradient-to-r from-[#351477] via-[#4b2394] to-[#6845a5] px-5 py-6 md:px-10 md:py-8 h-[450px]">
      <div className="relative overflow-hidden rounded-[24px] ">
        <Image src={substruck} alt="" className="absolute top-0 z-1" />
        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start md:justify-between mt-2 mx-2">
          <h2 className="text-[36px] font-medium leading-none tracking-[-1.5px] text-white md:text-[48px]">our partners</h2>

          <p className="max-w-[330px] text-[17px] font-medium leading-[1.05] text-white md:mr-5 md:text-[19px]">
            The Capico platform is the
            <br className="hidden md:block" /> official broker of the leading
            <br className="hidden md:block" /> cryptocurrency exchanges
          </p>
        </div>

        
        <div className="relative z-10 mt-12 grid grid-cols-2 gap-3 md:mt-20 md:grid-cols-4 md:gap-4">
          {partners.map((partner) => (
            <div key={partner.name}>
              <div className="flex h-[105px] items-center justify-center rounded-[18px] border border-white/20 bg-white/[0.02] px-5 md:h-[118px]">
                <Image src={partner.image} alt={partner.name} className="h-auto max-h-[32px] w-auto max-w-[120px] object-contain" />
              </div>

              <span className="mt-2 block text-[6px] text-white/35 md:text-[7px]">{partner.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
