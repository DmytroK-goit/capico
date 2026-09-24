"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import stopLoss from '../../img/futures/stop_loss.png'
import trailing from '../../img/futures/treiling.png' 
import timeOut from '../../img/futures/timeout.png'
import candel from '../../img/futures/stop_loss.png'
import pending from '../../img/futures/pending.png'
import trading from '../../img/futures/trading.png'
import chanelBot from '../../img/futures/chanellBOt.png'  
import lader from '../../img/futures/lader.png'
import automatic from '../../img/futures/automatic.png'
import booster from '../../img/futures/booster.png'
import panic from '../../img/futures/panic_sell.png'
import Image from "next/image";
const featuresDb = [
  {
    name: "Stop Loss and Take Profit",
    title: "Stop Loss and Take Profit",
    desc: "Protect your positions automatically with flexible stop loss and take profit settings.",
    img: stopLoss
  },
  {
    name: "Trailing Stop",
    title: "Trailing Stop",
    desc: "Automatically follow the market price and protect your potential profit.",
     img: trailing
  },
  {
    name: "Timeout",
    title: "Timeout",
    desc: "Set a time limit for your orders and automatically manage their execution.",
     img: timeOut
  },
  {
    name: "Candle Stop Loss",
    title: "Candle Stop Loss",
    desc: "Control your position using candle-based stop loss conditions.",
    img: candel
  },
  {
    name: "Pending orders",
    title: "Pending orders",
    desc: "You can create orders both above the current price and below. Funds on the balance sheet are not blocked. Such orders are not seen by the exchange.",
     img: pending
  },
  {
    name: "Trading on the chart",
    title: "Trading on the chart",
    desc: "Create and manage your orders directly on the trading chart.",
    img: trading
  },
  {
    name: "Channel bot",
    title: "Channel bot",
    desc: "Automate your trading strategy with flexible channel-based settings.",
    img: chanelBot
  },
  {
    name: "Ladder and averaging",
    title: "Ladder and averaging",
    desc: "Build your position gradually with multiple orders and averaging levels.",
    img: lader
  },
  {
    name: "Automatic breakeven",
    title: "Automatic breakeven",
    desc: "Automatically move your position to breakeven when the market reaches your target.",
    img: automatic
  },
  {
    name: "Booster",
    title: "Booster",
    desc: "Improve your trading workflow with additional automation tools.",
    img: booster
  },
  {
    name: "Panic Sell",
    title: "Panic Sell",
    desc: "Close your position quickly when you need to react to a sudden market move.",
    img: panic
  },
];

const INITIAL_SLIDE = 4;

export default function Features() {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(INITIAL_SLIDE);

  const handleSlideChange = (instance) => {
    setActiveIndex(instance.realIndex);
  };

  return (
    <section className="max-h-[850px] px-3 py-12 md:px-6 lg:px-10">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[22px] bg-gradient-to-r from-[#351477] via-[#4b2394] to-[#6845a5] md:h-[500px]">
        <h2 className="absolute left-7 top-6 z-20 text-3xl font-medium tracking-tight text-white md:left-12 md:top-7 md:text-5xl">
          features
        </h2>

        <p className="absolute right-6 top-7 z-20 text-[7px] text-white/50 md:right-8">
          Manage positions on
        </p>

        <div className="absolute left-7 top-1/2 z-20 hidden w-[230px] -translate-y-1/2 md:left-12 md:block">
          <div className="flex flex-col gap-[5px]">
            {featuresDb.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={feature.name}
                  type="button"
                  onClick={() => swiper?.slideTo(index)}
                  className={`cursor-pointer flex items-center text-left text-[12px] leading-[1.4] transition-all ${
                    isActive
                      ? "text-white"
                      : "text-white/30 hover:text-white/60"
                  }`}
                >
                  <span
                    className={`mr-2 h-[2px] transition-all ${
                      isActive ? "w-5 bg-white" : "w-0"
                    }`}
                  />

                  {feature.name}
                </button>
              );
            })}
          </div>
        </div>

      
        <div className="absolute left-1/2 top-1/2 h-[350px] w-[50%] -translate-x-1/2 -translate-y-1/2 md:left-[58%] md:w-[52%]">
          <Swiper
            direction="vertical"
            slidesPerView={1.35}
            centeredSlides
            spaceBetween={-70}
            speed={600}
            initialSlide={INITIAL_SLIDE}
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            className="h-full w-[90%] rounded-2xl"
          >
            {featuresDb.map((feature, index) => {
              const isActive = index === activeIndex;

              return (
                <SwiperSlide
                  key={feature.name}
                  className="flex items-center justify-center overflow-visible "
                >
                  <article
                    className={`relative w-[90%] h-[90%] rounded-4xl  transition-all duration-500 ease-out md:p-9 ${
                      isActive
                        ? "z-30 min-h-[250px] scale-[1.02] bg-[#7348c7] opacity-100 shadow-[0_20px_60px_rgba(20,5,50,0.35)] ml-6"
                        : "z-10 min-h-[210px] scale-[0.88] bg-[#7348c7]/20 opacity-60"
                    }`}
                  >
             
                    <div
                      className={`absolute right-7 top-7 flex h-[70px] w-[70px] items-center justify-center rounded-lg border text-[9px] transition-all duration-500 ${
                        isActive
                          ? "border-white/70 text-white/60"
                          : "border-white/20 text-white/20"
                      }`}
                    >
                      <Image src={feature.img} alt={feature.name} width={30}  height={30}/>
                    </div>

                    <h3
                      className={`max-w-[300px] font-light leading-[1] text-white transition-all duration-500 ${
                        isActive ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-4 max-w-[310px] text-[9px] leading-[1.45] transition-all duration-500 md:text-[10px] ${
                        isActive ? "text-white/60" : "text-white/20"
                      }`}
                    >
                      {feature.desc}
                    </p>

                    <button
                      type="button"
                      className={`cursor-pointer mt-5 flex items-center gap-5 rounded-full border px-4 py-2 text-[9px] text-white transition-all duration-500 ${
                        isActive
                          ? "border-white/20 hover:bg-white/10"
                          : "border-white/10 opacity-30"
                      }`}
                    >
                      Learn more
                      <span className="text-sm">→</span>
                    </button>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="absolute -right-1 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 md:-right-12">
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              className=" cursor-pointer flex h-14 w-8 items-center justify-center rounded-full border border-white/20 text-xl text-white/50 transition hover:border-white/50 hover:text-white"
              aria-label="Previous feature"
            >
              ↑
            </button>

            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              className="cursor-pointer flex h-14 w-8 items-center justify-center rounded-full border border-white/70 text-xl text-white transition hover:bg-white/10"
              aria-label="Next feature"
            >
              ↓
            </button>
          </div>
        </div>

        <div className="absolute bottom-6 left-7 z-20 md:hidden">
          <span className="text-xs text-white">
            {featuresDb[activeIndex].name}
          </span>
        </div>
      </div>
    </section>
  );
}