"use client";
 import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { circle } from "../../svg/dummy";
const ScrollableSection = () => {
  const content = [
    <div className="flex flex-col lg:flex-row  justify-between ">
      <div className=" grid gap-">
        <div className="flex items-center gap-2">
          {circle}
          <p className="font-bold leading-5 text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px]">آکادمی</p>
        </div>
        <div className="px-10 grid ">
          <p className="font-bold leading-5 text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px]">
            آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن
          </p>{" "}
          <ul className="grid gap-3">
            <li className="font-bold leading-5  text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•    
              {"    "}
              دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              ویدیوها و مقالات آموزشی رایگان
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              معرفی ابزارهای یادگیری حرفه‌ای
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        {" "}
        <Image alt="" width={560} height={490} src="/images/home/scrollBar/Group1.png"></Image>
      </div>
    </div>,
    <div className="flex  justify-between "><div className="">
        {" "}
        <Image alt="" width={560} height={490} src="/images/home/scrollBar/Group2.png"></Image>
      </div>
      <div className=" grid gap-">
        <div className="flex items-center gap-2">
          {circle}
          <p className="font-bold leading-5  text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px]">آکادمی</p>
        </div>
        <div className="px-10 grid ">
          <p className="font-bold leading-5 text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px]">
            آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن
          </p>{" "}
          <ul className="grid gap-3">
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•    
              {"    "}
              دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              ویدیوها و مقالات آموزشی رایگان
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              معرفی ابزارهای یادگیری حرفه‌ای
            </li>
          </ul>
        </div>
      </div>
      
    </div>,
    <div className="flex  justify-between ">
      <div className=" grid gap-">
        <div className="flex items-center gap-2">
          {circle}
          <p className="font-bold leading-5  text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px]">آکادمی</p>
        </div>
        <div className="px-10 grid ">
          <p className="font-bold leading-5 text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px]">
            آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن
          </p>{" "}
          <ul className="grid gap-3">
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•    
              {"    "}
              دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              ویدیوها و مقالات آموزشی رایگان
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              معرفی ابزارهای یادگیری حرفه‌ای
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        {" "}
        <Image alt="" width={560} height={490} src="/images/home/scrollBar/Group3.png"></Image>
      </div>
    </div>,
    <div className="flex  justify-between ">  <div className="">
    {" "}
    <Image alt="" width={560} height={490} src="/images/home/scrollBar/Group1.png"></Image>
  </div>
      <div className=" grid gap-">
        <div className="flex items-center gap-2">
          {circle}
          <p className="font-bold leading-5  text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px]">آکادمی</p>
        </div>
        <div className="px-10 grid ">
          <p className="font-bold leading-5 text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[24px]">
            آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن
          </p>{" "}
          <ul className="grid gap-3">
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•    
              {"    "}
              دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              ویدیوها و مقالات آموزشی رایگان
            </li>
            <li className="font-bold leading-5 text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[20px] flex gap-1">•
              {" "}
              معرفی ابزارهای یادگیری حرفه‌ای
            </li>
          </ul>
        </div>
      </div>
    
    </div>,
 
  ];




  const data = [
    {
      label:'آکادمی',
      title: 'آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن',
      bullets: [
        'دوره‌های جامع ۰ تا ۱۰۰ معامله‌گری',
        'ویدیوها و مقالات آموزشی رایگان',
        'معرفی ابزارهای یادگیری حرفه‌ای'
      ],
      imageSrc:'/images/home/services/education.webp',
      icon:'/images/home/services/education.svg',
    },


    {
      label:'تریدولوژی',
      title: 'تحلیل دقیق و لحظه‌ای حساب‌های معاملاتی شما',
      bullets: [
        'بررسی عملکرد معاملات',
        'ثبت استراتژی‌های معاملاتی',
        'تحلیل استیتمنت و یادداشت‌ گذاری'
      ],
      imageSrc:'/images/home/services/tradology.webp',
      icon:'/images/home/services/tradology.svg',
    },


    {
      label:'پرو تریدر',
      title: 'پلتفرمی برای تحلیل جامع و ارتباط فعالان بازار',
      bullets: [
        'تحلیل‌های فاندامنتال و تکنیکال',
        'لایو خبری و تعامل با معامله‌گران',
        'اشتراک‌گذاری ایده‌های معاملاتی'
      ],
      imageSrc:'/images/home/services/protrader.webp',
      icon:'/images/home/services/protrader.svg',
  
    },
    {
      label:'سیگنالیست',
      title: 'دسترسی به معاملات لایو معامله‌گران حرفه‌ای',
      bullets: [
        'مشاهده سوابق معامله‌گران',
        'خرید اشتراک برای دریافت سیگنال‌',
        'دنبال کردن آنی و در لحظه معاملات'
      ],
      imageSrc:'/images/home/services/signalist.webp',
      icon:'/images/home/services/signalist.svg'
    }
  ]





  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [isLocked, setIsLocked] = useState(false);
  const [isInside, setIsInside] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isInside) return; // اگه بیرون محتوا باشیم، اسکرول عادی صفحه فعال باشه

      if (currentIndex === 0 && e.deltaY < 0) {
        setIsInside(false); // اگه روی محتوا باشیم و به بالا اسکرول کنیم، صفحه آزاد بشه
        return;
      }

      if (currentIndex === content.length - 1 && e.deltaY > 0) {
        setIsInside(false); // اگه روی آخرین محتوا باشیم و به پایین اسکرول کنیم، صفحه آزاد بشه
        return;
      }

      e.preventDefault(); // جلوگیری از اسکرول پیش‌فرض

      if (isLocked) return;

      if (e.deltaY > 0 && currentIndex < content.length - 1) {
        setCurrentIndex((prev) => prev + 1);
        setIsLocked(true);
      } else if (e.deltaY < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        setIsLocked(true);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentIndex, isLocked, isInside]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLocked(false);
    }, 400); // جلوگیری از اسکرول سریع

    return () => clearTimeout(timeout);
  }, [currentIndex]);
  const handleMouseEnter = () => {
    setIsInside(true)
        if (!containerRef.current) return;
        window.scrollTo({
          top: containerRef.current.offsetTop - 100, // ۲۰۰ پیکسل فاصله از بالا
          behavior: "smooth",
        });
      };
  return (
    <div className="h-screen overflow-auto">
      <div className="h-screen flex items-center justify-center p-[6%]">
        <div
          ref={containerRef}
          className="w-4/4  h-[100vh] overflow-hidden relative p-8"
          onMouseEnter={handleMouseEnter} // وقتی ماوس روی محتوا رفت، اسکرول قفل بشه
          onMouseLeave={() => setIsInside(false)} // وقتی ماوس بیرون رفت، اسکرول آزاد بشه
          style={{
            backgroundImage: "url('/images/home/scrollBar/GroupBg.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className={`p-8 absolute w-full h-full flex items-center justify-center transition-all duration-300 ${
                index === currentIndex
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-90 z-0"
              }`}
              style={{ top: 0, left: 0 }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollableSection;
// "use client";

// const ScrollableSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (typeof window !== "undefined" && containerRef.current) {
//       console.log("Ref is set:", containerRef.current);
//     }
//   }, []);
//   const handleMouseEnter = () => {
//     if (!containerRef.current) return;
//     window.scrollTo({
//       top: containerRef.current.offsetTop - 100, // ۲۰۰ پیکسل فاصله از بالا
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div className="h-screen overflow-auto ">
//       <div className="h-screen flex items-center justify-center">
//         <div
//           ref={containerRef}
//           className="w-full h-[90vh] overflow-hidden relative p-8"
//           onMouseEnter={handleMouseEnter}
//           style={{
//             backgroundImage: "url('/images/home/scrollBar/GroupBg.png')",
//             backgroundSize: "100% 100%",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="flex justify-between">
//             <div className="grid">
//               <div className="flex items-center gap-2">
//                 {circle}
//                 <p className="font-bold leading-5 text-[40px]">آکادمی</p>
//               </div>
//               <div className="px-10 grid">
//                 <p className="font-bold leading-5 text-2xl">
//                   آموزش‌های کاربردی و گام‌به‌گام برای حرفه‌ای شدن
//                 </p>
//               </div>
//             </div>
//             <div>
//               <Image
//                 alt=""
//                 width={560}
//                 height={490}
//                 src="/images/home/scrollBar/Group1.png"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScrollableSection;
