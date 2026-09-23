"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import speed from "../../img/for_work/speed.png";
import hotkey from "../../img/for_work/hotkey.png";
import notifikation from "../../img/for_work/notification.png";
import demo from "../../img/for_work/demo.png";
import cloud from "../../img/for_work/cloud.png";
import them from "../../img/for_work/them.png";
import Image from "next/image";
import { useState } from "react";

const forWorkDb = [
  {
    name: "Speed",
    img: speed,
    desc: "Your assets on all connected exchanges are collected in one place",
  },
  {
    name: "Hotkeys",
    img: hotkey,
    desc: "Use hot keys to work faster",
  },
  {
    name: "Notifications",
    img: notifikation,
    desc: "Get all the important messages and Telegram notifications",
  },
  {
    name: "Demo Account",
    img: demo,
    desc: "Train. Learn. Test any features. Free and without risks",
  },
  {
    name: "Cloud Service",
    img: cloud,
    desc: "Updates are usually invisible. No break from trade.",
  },
  {
    name: "Themes",
    img: them,
    desc: "Trade anytime. Even at night.",
  },
];

export default function ForWork() {
  const [progress, setProgress]= useState(0)
  return (
    <section className="bg-black px-6 py-16 md:px-10 lg:px-[108px]">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="max-w-[620px] text-4xl font-light leading-[1.05] text-white md:text-5xl lg:text-[56px]">
            Everything for your <span className="text-[#7138e8]">comfortable work</span>
          </h2>

          <div className="hidden shrink-0 gap-3 md:flex">
            <button type="button" className="for-work-prev flex h-12 w-12 items-center justify-center rounded-full border border-[#35313e] text-white transition hover:border-[#7138e8]" aria-label="Previous slide">
              ←
            </button>

            <button type="button" className="for-work-next flex h-12 w-24 items-center justify-center rounded-full border border-[#7138e8] text-2xl text-white transition hover:bg-[#7138e8]" aria-label="Next slide">
              →
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".for-work-prev",
            nextEl: ".for-work-next",
          }}
          onProgress={(swiper, value) => {
            setProgress(value);

          }}
          spaceBetween={14}
          slidesPerView={1.25}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 14,
            },
          }}
          className="for-work-swiper"
        >
          {forWorkDb.map(({ name, img, desc }) => (
            <SwiperSlide key={name}>
              <article className="flex h-[220px] flex-col rounded-[24px] border border-[#211a2f] bg-black p-5 md:h-[220px]">
                <h3 className="text-base font-medium text-white">{name}</h3>

                <div className="mt-4 flex h-[80px] items-center">
                  <Image src={img} alt={name} width={64} height={64} className="h-[64px] w-[64px] object-contain" />
                </div>

                <p className="mt-auto max-w-[180px] text-[10px] leading-[1.3] text-[#77727f]">{desc}</p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-7 h-[2px] w-full overflow-hidden bg-[#211a2f]">
          <div className="h-full bg-[#7138e8] transition-[width] duration-200"
            style={{width:`${Math.max(progress*100,20)}%`}}
          />
        </div>

        <div className="mt-6 flex justify-end gap-3 md:hidden">
          <button type="button" className="for-work-prev flex h-11 w-11 items-center justify-center rounded-full border border-[#35313e] text-white" aria-label="Previous slide">
            ←
          </button>

          <button type="button" className="for-work-next flex h-11 w-20 items-center justify-center rounded-full border border-[#7138e8] text-white" aria-label="Next slide">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
