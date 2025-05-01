import Image from "next/image";
import Link from "next/link";

export default function Instagram() {
  return (
    <div className="flex flex-col-reverse lg:grid grid-cols-1  lg:grid-cols-2 mb-10 mt-6 gap-6 lg:px-16 ">
      <div className="flex flex-col gap-2 justify-center  ">
        <h4 className=" text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] font-bold text-center lg:text-right  ">
          حسنیکال را در اینستاگرام دنبال کنید
        </h4>
        <h3 className="  text-[14px] xl:text-[16px] 2xl:text-[20px] font-semibold text-center lg:text-right ">
          تحلیل‌های حرفه‌ای، ترفندهای کاربردی
        </h3>
        <p className="  text-[14px] 2xl:text-[18px] font-normal leading-8   text-center lg:text-right ">
          با دنبال کردن صفحه اینستاگرام ما، به جدیدترین تحلیل‌ها، آموزش‌های
          کاربردی و اخبار بازارهای مالی دسترسی پیدا کنید و آگاهانه‌تر تصمیم
          بگیرید.
        </p>
        <Link
          className="border border-[#CABEF4] mx-auto lg:mx-0 w-fit text-[#713FC2] font-medium text-[14px] lg:text-[16px] py-2 px-3 lg:px-4 lg:py-2.5 rounded-[8px]  hover:bg-[#F6F5FD] transition-all duration-300 ease-out"
          href={"#"}
        >
          مارا دنبال کنید
        </Link>
      </div>

      <div className="  flex justify-center  py-4">
        <div className=" relative w-fit"
          style={{
                boxShadow:"8.502px 25.506px 76.519px 0px rgba(188, 188, 188, 0.25)"
              }}
            >
          <Image
            className=" h-[252px] w-full lg:h-[400px] xl:h-[620px]"
            alt="حسنیکال را در اینستاگرام دنبال کنید"
            width={275}
            height={620}
            src="/images/home/hesnicalInstagram/hesnicalinsta.png"
          />
          <div
          style={{
              boxShadow:"8.502px 25.506px 76.519px 0px rgba(188, 188, 188, 0.25)"
            }}
          className=" absolute  top-[15%] right-[-40%] xl:right-[-42%] rounded-[24px] overflow-hidden">
            <Image
            
              className="shadow-[0px_9px_10px_2px_#c3c3c3] h-[119px] lg:h-[170px] xl:h-[299px] xl: w-full"
              alt="فارکس در اینستاگرام"
              width={211}
              height={292}
              src="/images/home/hesnicalInstagram/right.png"
            />
          </div>
          <div
          style={{
              boxShadow:"8.502px 25.506px 76.519px 0px rgba(188, 188, 188, 0.25)"
            }}
          className=" absolute top-[40%] left-[-30%] xl:left-[-42%] rounded-[24px] overflow-hidden">
            <Image
            
              className="shadow-[0px_9px_10px_2px_#c3c3c3] h-[119px] lg:h-[170px] xl:h-[299px]  w-full"
              alt="فارکس در اینستاگرام"
              width={211}
              height={292}
              src="/images/home/hesnicalInstagram/left.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
