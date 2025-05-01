import Image from "next/image";

export default function Hero(){
    return(
        <div
        className="mt-20 lg:mt-0  lg:h-[100vh] py-6 justify-center gap-20 bg-[url('/images/homePage.webp')] bg-[length:100%_100%] bg-center bg-no-repeat overflow-hidden lg:pt-20 lg:pb:0"
      >



        <div className="flex flex-col items-center">
          <h1 className=" font-medium text-white text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[48px]
           leading-[40px] lg:leading-[55px] xl:leading-[64px] 2xl:leading-[90px]">
            مرجع هوشمند بازارهای مالی
          </h1>
          <h3 className="font-normal  text-[10px] xl:text-[14px] 2xl:text-[20px] text-white 
           leading-[20px]  xl:leading-[30px] 2xl:leading-[48px]">
            آموزش‌‌های کاربردی، ابزارهای حرفه‌ای، تجربه رشد
          </h3>
          <button className="mt-4 text-white lg:px-6 px-4 lg:py-4 py-2 text-[12px] xl:text-[14px] 2xl:text-[16px] bg-[#8658D7] rounded-lg">
            درخواست دمو        
            </button>
    
        </div>
    
        <div>
        <Image width={1123} height={540} alt="مرجع هوشمند بازارهای مالی" src={'/images/home/hero.png'} className="max-w-full mx-auto"/>
      </div>
      </div>
    )
}
// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Hero() {
//   const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // اگر اسکرول بیشتر از 300 پیکسل شد، دکمه مخفی بشه
//       if (window.scrollY > 300) {
//         setIsHidden(true);
//       } else {
//         setIsHidden(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // فوراً اجرا شه برای حالت لود اولیه

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className="lg:h-[100vh] py-6 justify-center gap-20 bg-[url('/images/homePage.webp')] bg-[length:100%_100%] bg-center bg-no-repeat overflow-hidden lg:pt-20 lg:pb-0"
//     >
//       <div className="flex flex-col items-center">
//         <h1 className="font-medium text-white text-[20px] lg:text-[26px] xl:text-[32px] 2xl:text-[48px] leading-[40px] lg:leading-[55px] xl:leading-[64px] 2xl:leading-[90px]">
//           مرجع هوشمند بازارهای مالی
//         </h1>
//         <h3 className="font-normal text-[10px] xl:text-[14px] 2xl:text-[20px] text-white leading-[20px] xl:leading-[30px] 2xl:leading-[48px]">
//           آموزش‌‌های کاربردی، ابزارهای حرفه‌ای، تجربه رشد
//         </h3>

//         {/* دکمه فقط زمانی که اسکرول کمتر از 300 پیکسل است نمایش داده می‌شود */}
//         {!isHidden && (
//           <button className="mt-4 text-white lg:px-6 px-4 lg:py-4 py-2 text-[12px] xl:text-[14px] 2xl:text-[16px] bg-[#8658D7] rounded-lg">
//             درخواست دمو
//           </button>
//         )}
//       </div>

//       <div>
//         <Image
//           width={1123}
//           height={540}
//           alt="مرجع هوشمند بازارهای مالی"
//           src={"/images/home/hero.png"}
//           className="max-w-full mx-auto"
//         />
//       </div>
//     </div>
//   );
// }
