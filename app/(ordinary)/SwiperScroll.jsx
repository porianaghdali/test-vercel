'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function SwiperScroll() {
  const data = [
    {
      label:'آکادمی',
      title: 'آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن',
      bullets: [
        'دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری',
        'ویدیوها و مقالات آموزشی رایگان',
        'معرفی ابزارهای یادگیری حرفه‌ای'
      ],
      imageSrc:'/images/home/scrollBar/Group1.png'
    },


    {
      label:'تریدولوژی',
      title: 'تحلیل دقیق و لحظه‌ای حساب‌های معاملاتی شما',
      bullets: [
        'بررسی عملکرد معاملات',
        'ثبت استراتژی‌های معاملاتی',
        'تحلیل استیتمنت و یادداشت‌ گذاری'
      ],
      imageSrc:'/images/home/scrollBar/Group1.png'
    },


    {
      label:'پرو تریدر',
      title: 'پلتفرمی برای تحلیل جامع و ارتباط فعالان بازار',
      bullets: [
        'تحلیل‌های فاندامنتال و تکنیکال',
        'لایو خبری و تعامل با معامله‌گران',
        'اشتراک‌گذاری ایده‌های معاملاتی'
      ],
      imageSrc:'/images/home/scrollBar/Group1.png'
    },
    {
      label:'سیگنالیست',
      title: 'دسترسی به معاملات لایو معامله‌گران حرفه‌ای',
      bullets: [
        'مشاهده سوابق معامله‌گران',
        'خرید اشتراک برای دریافت سیگنال‌',
        'دنبال کردن آنی و در لحظه معاملات'
      ],
      imageSrc:'/images/home/scrollBar/Group1.png'
    }
  ]
  return (
    <div className="h-[70vh]  bg-[url('/images/multiSecBG.webp')] bg-[length:100%_100%] bg-center bg-no-repeat scroll-mt-[150px]" id='services'>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          releaseOnEdges: true,
          forceToAxis: false,
          sensitivity: 0
        }}
        touchReleaseOnEdges={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper h-full">
        {
          data.map((item,index) => {
            return (
              <SwiperSlide key={index} className="h-screen flex items-center justify-center
                  
                  ">
                <div className="flex items-center flex-col lg:flex-row h-full justify-around">
                  <div className="">
                    <div className="flex items-center">
                      <p className="font-bold leading-5 text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] text-[#4E2D85] mb-8">{item.label}</p>
                    </div>
                    <div className="">
                      <p className="font-bold leading-5 text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px] text-[#181D27] mb-6">
                        {item.title}
                      </p>
                      <ul className="flex flex-col space-y-5 list-disc ">
                        {
                          item.bullets.map((bullet,index)=>{
                              return <li key={index} className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1 text-[#414651]">{bullet}</li>
                          })
                        }
                        

                      </ul>
                    </div>
                  </div>
                  <div>
                    <Image alt={item.label} width={560} height={490} src={item.imageSrc} />
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }




      </Swiper>
    </div>
  );
}
