"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Calendar } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import moment from "moment-jalaali";

import { Pagination, Navigation } from "swiper/modules";
// import { arrow, dateIcon } from './svg';
import Link from "next/link";

export default function SwiperNewsSlider({ items }) {
  return (
    <>
      {items && items.length > 0 ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="SwiperNewsSlider h-full min-h-60"
        >
          {items.map((item, key) => {
            return (
              <>
                {" "}
                <SwiperSlide key={key}>
                  <Link href={"/news/" + item.slug} className="rounded-2xl">
                    <div
                      className="flex flex-col justify-end items-center text-white h-full rounded-2xl bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${item._embedded?.["wp:featuredmedia"]?.[0]?.source_url})`,
                      }}
                    >
                      {/* <Image src={'/images/news/test2.png'} width={731} height={484} alt='news' /> */}
                      {/* <div className='backdrop-blur-[10px] bg-[linear-gradient(0deg,rgba(13,11,11,0.30)_0%,rgba(13,11,11,0.30)_100%)] w-full px-4 py-7'> */}
                      <div className="w-full h-full bg-black/20 flex flex-col justify-end px-4 py-7 rounded-2xl">
                        <p className="text-right px-3  text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] font-semibold">
                          {item.title.rendered}
                        </p>
                        <div className="flex w-full justify-between">
                          <div className="flex gap-3 p-1 lg:p-2 xl:p-3 2xl:p-4 items-center">
                            <p className="flex items-center gap-2 font-ravifanum">
                              <Calendar />
                              {moment(item.date).format("jYYYY,jMM,jDD")}
                            </p>
                            {/* <p className="flex items-center gap-2"> {viewIcon}{view}</p> */}
                          </div>

                          <div className="p-1 lg:p-2 xl:p-3 2xl:p-4  flex justify-end items-center">
                            {/* <Link href={'/news/'+item.slug} className="font-semibold text-[14px]  text-[#F6F5FD] flex gap-1  cursor-pointer">
                                  بیشتر بخوانید
                                  {arrow}
                                </Link> */}
                          </div>
                        </div>

                        {/* <p>{item.view}</p> */}
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      ) : (
        <p>No news available.</p>
      )}
    </>
  );
}
