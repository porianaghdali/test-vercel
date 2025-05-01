import Image from "next/image";

export default function Visions() {
  return (
    <>
      <div className="flex flex-col items-center mb-10 lg:mb-14 mt-12 lg:mt-20">
        <h2 className="font-bold text-base md:text-[18px] lg:text-3xl  leading-[50px] text-[#191919] mb-2 lg:mb-4">
          از مبتدی تا حرفه‌ای؛ همراه شما در معامله‌گری
        </h2>
        <p className="text-sm text-[#414651] lg:text-base xl:text-lg font-medium  leading-[28px] text-justify [text-align-last:center] lg:mx-[10%]">
          حسنیکال، جایی برای یادگیری، رشد و حرفه‌ای شدن در بازارهای مالی است. ما
          بر این باوریم که یک معامله‌گر موفق به ترکیبی از دانش، ابزارهای هوشمند
          و حس هفتم معامله‌گری نیاز دارد. با ارائه آموزش‌های گام‌به‌گام،
          تحلیل‌های جامع و جامعه‌ای از معامله‌گران، در هر قدم شما را در این مسیر
          همراهی می‌کنیم. ما معامله‌گران مبتدی را به حرفه‌ای‌هایی تبدیل می‌کنیم
          که با اعتماد به نفس و آرامش، بهترین تصمیمات را در بازارهای مالی
          می‌گیرند.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-5 mb-10 gap-14  lg:mx-[10%]">
        <div className="flex lg:grid col-span-1 lg:col-span-2 xl:col-span-1 justify-around  
        bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-10  rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]
        ">
          <Image
            alt="تجربه رشد مستمر"
            width={188}
            height={198}
            src="/images/home/beginnerToProfessional/1.svg"
            className="w-20 h-16 md:w-28 md:h-24"
          />
          <div className="pr-[5%]  lg:p-0 flex flex-col justify-center">
            <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
              تجربه رشد مستمر
            </h3>
            <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              همراهی در مسیر رشد تا کسب موفقیت و سوددهی
            </p>
          </div>
        </div>

        <div className=" col-span-1 lg:col-span-3 grid  gap-8 lg:gap-10">
          <div className="flex justify-around lg:justify-between items-center bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-6 rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
            <div className="pl-[5%] lg:pl-4">
              <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
                جامعه معامله‌گران
              </h3>
              <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                اشتراک‌گذاری دانش و تجربه معامله‌گری در فضایی پویا
              </p>
            </div>
            <Image
              alt="جامعه معامله‌گران"
              width={188}
              height={180}
              src="/images/home/beginnerToProfessional/2.svg"
              className="w-20 h-16 md:w-28 md:h-24"
            />
          </div>

          <div className="flex justify-around lg:justify-between items-center bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF]  p-4 lg:p-6 rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
            <Image
              alt="ابزارهای هوشمند"
              width={178}
              height={130}
              src="/images/home/beginnerToProfessional/3.svg"
              className="w-20 h-16 md:w-28 md:h-24"
            />
            <div className="pr-[5%] lg:pr-4">
              <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
                ابزارهای هوشمند
              </h3>
              <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
                دسترسی به پلتفرم‌های حرفه‌ای تحلیل داده معامله
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-row-reverse lg:grid col-span-1 lg:col-span-2 justify-around xl:col-span-1 bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-10 rounded-2xl border-[1px] border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
          <Image
            alt="آموزش‌های کاربردی"
            width={231}
            height={183}
            src="/images/home/beginnerToProfessional/4.svg"
            className="w-20 h-16 md:w-28 md:h-24"
          />
          <div className="pl-[5%]  lg:p-0  flex flex-col justify-center">
            <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
              آموزش‌های کاربردی
            </h3>
            <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px]">
              یادگیری از پایه تا سطح پیشرفته
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
