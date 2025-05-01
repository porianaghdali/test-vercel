"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper/modules";
import Image from "next/image";

export default function Services() {
  const swiperWrapperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  const data = [
    {
      label: "آکادمی",
      title: "آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن",
      bullets: [
        "دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری",
        "ویدیوها و مقالات آموزشی رایگان",
        "معرفی ابزارهای یادگیری حرفه‌ای",
      ],
      imageSrc: "/images/home/services/education.webp",
      icon: "/images/home/services/education.svg",
    },

    {
      label: "تریدولوژی",
      title: "تحلیل دقیق و لحظه‌ای حساب‌های معاملاتی شما",
      bullets: [
        "بررسی عملکرد معاملات",
        "ثبت استراتژی‌های معاملاتی",
        "تحلیل استیتمنت و یادداشت‌ گذاری",
      ],
      imageSrc: "/images/home/services/tradology.webp",
      icon: "/images/home/services/tradology.svg",
    },

    {
      label: "پرو تریدر",
      title: "پلتفرمی برای تحلیل جامع و ارتباط فعالان بازار",
      bullets: [
        "تحلیل‌های فاندامنتال و تکنیکال",
        "لایو خبری و تعامل با معامله‌گران",
        "اشتراک‌گذاری ایده‌های معاملاتی",
      ],
      imageSrc: "/images/home/services/protrader.webp",
      icon: "/images/home/services/protrader.svg",
    },
    {
      label: "سیگنالیست",
      title: "دسترسی به معاملات لایو معامله‌گران حرفه‌ای",
      bullets: [
        "مشاهده سوابق معامله‌گران",
        "خرید اشتراک برای دریافت سیگنال‌",
        "دنبال کردن آنی و در لحظه معاملات",
      ],
      imageSrc: "/images/home/services/signalist.webp",
      icon: "/images/home/services/signalist.svg",
    },
  ];
  return (
    <div
      className="h-[calc(100vh-70px)]  bg-[url('/images/multiSecBG.webp')] bg-[length:100%_100%] bg-center bg-no-repeat scroll-mt-[150px]"
      id="services"
    >
      <h2 className="text-[#181D27] font-semibold text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] text-center pt-10 lg:pt-14 xl:pt-18 2xl:pt-22">
        ابزارهای حرفه‌ای؛ برای مبتدی تا حرفه‌ای‌‌ها
      </h2>
      <Swiper
        onMouseEnter={handleMouseEnter}
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          releaseOnEdges: true,
        }}
        touchReleaseOnEdges={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-[78vh]"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="h-screen flex items-center justify-center
                  
                  "
            >
              <div className="flex items-center flex-col lg:flex-row h-full justify-around">
                <div className="">
                  <Image
                    src={item.icon}
                    width={36}
                    height={36}
                    alt={item.label}
                    className="mb-1 lg:mb-4"
                  />
                  <div className="flex items-center">
                    <h2 className="font-bold text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] text-[#4E2D85] mb-2">
                      {item.label}
                    </h2>
                  </div>
                  <div className="">
                    <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] text-[#181D27] mb-4">
                      {item.title}
                    </h3>
                    <ul className="flex flex-col space-y-5 list-disc ">
                      {item.bullets.map((bullet, index) => {
                        return (
                          <li
                            key={index}
                            className="font-medium text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1 text-[#414651]"
                          >
                            {bullet}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div>
                  <Image
                    alt={item.label}
                    width={560}
                    height={490}
                    src={item.imageSrc}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
