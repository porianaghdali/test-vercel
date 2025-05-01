import Image from "next/image";
import Link from "next/link";

export default function Intro(){
    return(<>
                  <p className="font-semibold text-[18px] lg:text-[28px] xl:text-[36px] text-white flex justify-center"> <span className="text-[#AD9AEB] pr-[1ch] relative">کمیسیون</span>معاملات خود را پس بگیرید!</p>
             
                <div className="flex justify-center mt-12 mb-6 lg:-mb-9 relative z-10">
                    <Image src={'/images/landings/cashBack/main.png'} width={758} height={475} alt="hesnical" />
                </div>
                <div className="p-[1px] rounded-[24px] bg-gradient-to-b from-[#1B1532] to-[#52409800] lg:max-w-55/100 mx-auto overflow-hidden mb-8 lg:mb-16 lg:-mt-[60px]">
                    <div className="bg-gradient-to-b from-[#1B1532] to-[#0603171A] lg:px-11 px-5 lg:py-14 py-6 backdrop-blur-[37.07px] rounded-[24px]">
                        <p className="text-[#CECFD2] font-medium text-[14px] lg:text-[18px] lg:mb-8 mb-4">
                        با استفاده از کش‌بک حسنیکال، بخشی از کمیسیونی که بابت معاملات خود به بروکر پرداخت می‌کنید، بدون هیچ هزینه‌ای به حساب شما بازگردانده می‌شود. این خدمت در همکاری رسمی با بروکرهای معتبر ارائه شده و هدف آن، کاهش هزینه‌های معاملاتی و افزایش سودآوری شماست.
                        </p>

                        <div className="flex space-x-4 justify-center">
                            <Link href={'./cash_back/register'} className=" flex font-semibold text-justify text-[14px] lg:text-[16px] text-white rounded-[8px] px-[12px] lg:px-[16px] lg:py-[10px] py-[8px] border border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">
                                <Image className="me-1" src={'/images/landings/education/register.svg'} width={20} height={20} alt="register" />
                                ثبت نام در کش بک 
                               
                            </Link>
                            <a href="#moreInfo" className="flex font-semibold text-[14px] lg:text-[16px] text-[#AD9AEB] rounded-[8px] px-[12px] lg:px-[16px] lg:py-[10px] py-[8px] border border-2 border-[#AD9AEB] hover:bg-[#F6F5FD] transition-all duration-300 ease-out">
                                <Image className="me-1" src={'/images/landings/education/info.svg'} width={20} height={20} alt="info" />
                                اطلاعات بیشتر
                               
                            </a>
                        </div>
                    </div>
                </div>
                </>)
}