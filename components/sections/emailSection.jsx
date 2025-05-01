import {Mail } from 'lucide-react'
export const EmailSection = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/images/news/Popup.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
        className="bg-[#EFECFB] h-[633px] flex flex-col  gap-12 justify-center px-[6%] mb-10"
      >
        <div className="grid gap-6">
          <p className="text-3xl font-semibold ">
            {" "}
            با ما همیشه یک قدم جلوتر باشید
          </p>
          <p className="text-2xl font-medium">
            به‌روزترین اخبار بازارهای مالی، تحلیل‌های تخصصی و سیگنال‌های مهم را
            مستقیم در ایمیل خود دریافت کنید.
          </p>
        </div>
        <div
          style={{
            boxShadow:
              "0px 12px 16px -4px var(--Colors-Effects-Shadows-shadow-lg_01, rgba(10, 13, 18, 0.08)), 0px 4px 6px -2px var(--Colors-Effects-Shadows-shadow-lg_02, rgba(10, 13, 18, 0.03)), 0px 2px 2px -1px var(--Colors-Effects-Shadows-shadow-lg_03, rgba(10, 13, 18, 0.04))",
          }}
          className="flex flex-col lg:flex-row  lg:w-fit gap-2 bg-[#FDFDFD] border-[1px] border-[#D5D7DA] rounded-2xl p-3 w-fit items-center "
        >
          <span className="p-3 rounded-full bg-[#EFECFB]"><Mail size={24} color='#4E2D85' /></span>
          <input
            className=" px-4 py-3  border-[1px] rounded-lg border-[#E9EAEB] "
            type="email"
            placeholder="ایمیل خود را وارد نمایید"
          />
          <button className="font-semibold text-[16px] rounded-lg text-white bg-[#4E2D85] border-[2px] boredr-[rgba(255, 255, 255, 0.12)] px-4 py-3">
            عضویت در خبرنامه
          </button>
        </div>
      </div>
    </>
  );
};
export default EmailSection;
