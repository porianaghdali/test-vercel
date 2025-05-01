import Image from "next/image";

export default function MailForCounseling() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center 
    py-9 lg:py-[180px] justify-around bg-[url('/images/NLBG.webp')] 
    bg-white bg-blend-luminosity bg-[length:100%_100%] bg-center bg-no-repeat px-6 md:px-0
    ">
      <div
        className="lg:w-2/5  justify-center items-center
               py-4 lg:py-15 bg-[#FFFFFF1D] px-2 lg:px-20 lg:border-[5px]  border-[2px] border-[#F3F3F3] lg:backdrop-blur-[8px] backdrop-blur-[3px] rounded-[16px]"
      >
        <div className="w-full flex items-center  justify-center py-4">
          <Image
            alt="حسنیکال| مرجع هوشمند بازارهای مالی"
            width={53}
            height={55}
            src="/images/Logo.svg"
            className="w-8 h-8 lg:w-14 lg:h-14"
          />
        </div>
        <h5 className=" pt-4 mb-5 lg:mb-15 text-[14px] lg:text-[14px] xl:text-[14   px] 2xl:text-[16px] text-[#393536] font-medium leading-5 text-center">
          لطفا ایمیل خود را وارد نماید تا مشاوران ما ظرف 24 ساعت با شما ارتباط
          بگیرند
        </h5>
        <div className="flex flex-col items-stretch justify-center max-w-[450px] mx-auto">
          <label
            className="text-[14px]  text-[#414651] font-medium pb-1"
            htmlFor="email"
          >
            <span className="text-[#8658D7]">*</span>ایمیل
          </label>
          <input
            className="bg-white mb-4 lg:mb-4 p-2 border-[1px] border-[#D5D7DA] rounded-[8px] outline-hidden text-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px]"
            type="text"
            placeholder="ایمیل خود را وارد کنید"
          />
          <button className="w-full text-[12px] lg:text-[16px] text-white rounded-[8px] px-[12px] lg:px-[36px]  py-[8px]  border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">
            ثبت درخواست
          </button>
        </div>
      </div>

      <div className="justify-center lg:w-1/3 px-4 py-6">
        <h3 className="text-[16px] lg:text-[18px] xl:text-[21px] 2xl:text-[32px] leading-5 font-bold text-[#191919] mb-3 lg:mb-6 text-center lg:text-start">
          قدم در بازارهای مالی، آسان‌تر از همیشه
        </h3>
        <h4 className="text-[14px] lg:text-[14px] xl:text-[21px] leading-8 text-[#313131] text-center lg:text-start">
          همین حالا اولین گام در مسیر معامله‌گری حرفه‌ای خود را مطمئن‌تر
          بردارید. ما شما را با ابزارها، تحلیل‌ها و آموزش‌های کاربردی  و پیشرفته
          در مسیر رشد و موفقیت همراهی می‌کنیم.
        </h4>
      </div>
    </div>
  );
}
