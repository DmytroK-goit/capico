import Image from "next/image";
import substruck from "../../img/numbers/Subtract.png";

import foto from "../../img/benefits/foto.png";
import foto2 from "../../img/benefits/foto2.png";
import foto3 from "../../img/benefits/foto3.png";

const statistics = [
  {
    value: "Interface Builder",
    text: "Customize your look",
    img: foto,
  },
  {
    value: "MultiChart",
    text: "Add any trading pairs from different exchanges and analyze cryptocurrency assets on one screen",
    img: foto2,
  },
  {
    value: "Portfolio & Statistics",
    text: "Your assets on all connected exchanges are collected in one place",
    img: foto3,
  },
];

export default function Benefits() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-4 text-white sm:px-6 lg:px-8">
    
      <Image
        src={substruck}
        alt=""
        className="absolute top-0 "
      />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="flex items-start justify-between">
          <h2 className="text-[32px] font-normal leading-none tracking-[-1.5px] sm:text-[40px]">
            benefits
          </h2>
         
        </div>
        <div className="mt-8 flex flex-col">
          {statistics.map((item, index) => (
            <div
              key={item.value}
              className={`grid min-h-[300px] grid-cols-1 items-center gap-6 sm:min-h-[360px] lg:grid-cols-2 lg:gap-10 ${
                index === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
             
              <div
                className={`relative z-20 flex flex-col ${
                  index % 2 === 1
                    ? "lg:order-2 lg:items-start"
                    : "lg:order-1"
                }`}
              >
                <h3
                  className={`max-w-[520px] bg-gradient-to-r from-white via-white to-[#a96ce9] bg-clip-text text-[44px] font-light leading-[0.95] tracking-[-2px] text-transparent sm:text-[54px] lg:text-[58px] ${
                    index === 1 ? "lg:ml-0" : ""
                  }`}
                >
                  {item.value}
                </h3>

                <div className="mt-7 flex max-w-[390px] items-start gap-8">
                  <p className="text-[14px] font-light leading-[1.15] text-white sm:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </div>

              <div
                className={`relative flex h-[260px] items-center justify-center sm:h-[320px] lg:h-[360px] ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={item.img}
                  alt={item.value}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}