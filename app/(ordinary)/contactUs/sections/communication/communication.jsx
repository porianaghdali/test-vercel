import Image from "next/image";
import { PhoneCall, Mail } from "lucide-react";
export const Communication = () => {
  const telegram = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.4976 13.5002L20.9976 3.00017M10.6251 13.8282L13.2533 20.5862C13.4848 21.1816 13.6005 21.4793 13.7673 21.5662C13.9119 21.6415 14.0842 21.6416 14.2289 21.5664C14.3958 21.4797 14.5119 21.1822 14.7441 20.5871L21.3345 3.69937C21.5441 3.16219 21.6489 2.8936 21.5916 2.72197C21.5418 2.57292 21.4248 2.45596 21.2758 2.40616C21.1041 2.34883 20.8356 2.45364 20.2984 2.66327L3.41062 9.25361C2.81555 9.48584 2.51801 9.60195 2.4313 9.76886C2.35614 9.91354 2.35624 10.0858 2.43158 10.2304C2.51848 10.3972 2.81615 10.513 3.4115 10.7445L10.1695 13.3726C10.2904 13.4196 10.3508 13.4431 10.4017 13.4794C10.4468 13.5115 10.4862 13.551 10.5184 13.5961C10.5547 13.647 10.5782 13.7074 10.6251 13.8282Z"
        stroke="#713FC2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  return (
    <div className="lg:grid mb-10">
      <div className="grid grid-cols-5 p-4 lg:p-16 border-[1px] rounded-2xl lg:gap-x-20 xl:gap-x-30 gap-4  lg:gap-y-8 border-[#D5D7DA]">
        <div className="col-span-5 lg:col-span-3">
          <p className="text-lg lg:text-2xl font-semibold mb-3">راه های ارتباطی</p>
          <p className=" text-xs lg:text-[16px] mb-6">
            در حسنیکال، ارتباط شفاف و موثر با شما اساس کار ماست؛ از این رو،
            همواره از طریق راه‌های مختلف ارتباطی، همراه شما هستیم تا به سوالات
            یا نیازهای شما پاسخ دهیم.
          </p>
          <div className="grid gap-6">
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                <PhoneCall size={24} color="#713FC2" />
              </span>
              <p className=" text-sm md:text-base lg:text-lg  text-[#414651] font-medium">
                021-22285427
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                <Mail size={24} color="#713FC2" />
              </span>
              <p className="text-sm md:text-base lg:text-lg text-[#414651] font-medium">
                hesnical@gmail.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <span className="p-2 rounded-full bg-[#E0DBF9] border-[1px] border-[#D5D7DA]">
                {telegram}
              </span>
              <p className="text-sm md:text-base lg:text-lg  text-[#414651] font-medium">ID TELEGRAM</p>
            </div>
          </div>
        </div>
        <div className="col-span-5 lg:col-span-2 grid gap-2 lg: mt-11">
          <Image
            src="/images/contactUs/map.png"
            width={608}
            height={318}
            alt=""
            className="w-full h-full"
          />
          <p className="text-lg text-[#414651]">
            نشانی حسنیکال: مرزداران -پلاک 463
          </p>{" "}
        </div>





        <hr className="w-full col-span-5 border-[#E9EAEB]" />










        <div className="col-span-5 xl:col-span-3 ">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3">ارتباط با ما</p>
          <p className="text-sm md:text-base  lg:text-lg font-semibold text-[#414651] mb-3">
            با ما در ارتباط باشید؛ حسنیکال اینجاست تا شما را در مسیر رشد و
            موفقیت همراهی کند.
          </p>
          <p className=" text-xs md:text-sm lg:text-[16px] mb-5">
            ما در حسنیکال باور داریم که شفافیت و ارتباط مستمر، منجر به ارائه
            خدمات بهتر به مشتریان می‌شود. از این رو، معتقدیم که دسترسی آسان به
            تیم پشتیبانی و مشاوران ما، کلید ایجاد اعتماد و همراهی واقعی است. به
            همین دلیل، تمامی راه‌های ارتباطی حسنیکال به طور مداوم بررسی می‌شود
            تا در سریع‌ترین زمان ممکن به پیام‌های شما پاسخ داده شود. تیم مشاوران
            ما همواره آماده‌اند تا با ارائه راهنمایی و مشاوره حرفه‌ای، همراه شما
            در بازارهای مالی باشند.
          </p>
        </div>












        <div className="col-span-5 xl:col-span-2 grid gap-6 lg: mt-11 ">
          <div className="grid md:flex gap-4">
            <div>
              <div className="grid gap-1">
                <label htmlFor="name">
                  <span className="text-[#8658D7]">*</span> نام و نام خانوادگی
                </label>
                <input
                  style={{
                    boxShadow:
                      "0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
                  }}
                  placeholder="نام و نام خانوادگی خود را وارد نمایید"
                  className="px-3 w-full py-2 rounded-lg border-[1px] border-[#D5D7DA] outline-hidden"
                  type="text"
                  id="name"
                />
              </div>
            </div>
            <div>
              <div className="grid gap-1">
                <label htmlFor="name">
                  <span className="text-[#8658D7]">*</span> ایمیل{" "}
                </label>
                <input
                  placeholder="olivia@untitledui.com"
                  className="px-3 py-2 rounded-lg border-[1px] w-full border-[#D5D7DA] outline-hidden"
                  type="text"
                  id="name"
                />
              </div>
            </div>
          </div>
          <div className="grid gap-1">
            <label htmlFor="description">
              <span className="text-[#8658D7]">*</span> متن پیام
            </label>
            <textarea
              className="px-3 w-full py-2 rounded-lg border-[1px] h-[208px] border-[#D5D7DA] outline-hidden mb-8"
              style={{ resize: "none" }}
              placeholder="توضیحات را وارد کنید..."
              name=""
              id="description"
            ></textarea>
            <button
              style={{
                borderColor: "rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0px 0px 0px 1px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner-border, rgba(10, 13, 18, 0.18)) inset, 0px -2px 0px 0px var(--Colors-Effects-Shadows-shadow-skeumorphic-inner, rgba(10, 13, 18, 0.05)) inset, 0px 1px 2px 0px var(--Colors-Effects-Shadows-shadow-xs, rgba(10, 13, 18, 0.05))",
              }}
              className="p-3 bg-[#8658D7] text-white text-[16px] font-semibold w-full text-center  rounded-lg border-[2px] "
            >
              ارسال پیام
            </button>
          </div>
        </div>








      </div>
    </div>
  );
};
export default Communication;
