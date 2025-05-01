import VideoStreamer from "@/components/VideoStreamer";
import Image from "next/image";

export default function MoreInfo() {
    const infoItems = [
        {
            icon: 'base.svg',
            text: 'آموزش کامل و اصولی از مفاهیم پایه تا استراتژی‌های معاملاتی'
        },
        {
            icon: 'special.svg',
            text: 'مشاوره تخصصی و متناسب با سطح دانش و دغدغه‌های شما'
        },
        {
            icon: 'guide.svg',
            text: 'آموزش نحوه ثبت‌نام و شروع فعالیت در بروکرهای معتبر'
        },
        {
            icon: 'help.svg',
            text: 'ارتباط مستمر و پشتیبانی از طریق منتور اختصاصی در طول مسیر'
        }
    ];
    const infoItems2 = [
        {
            icon: 'medal.svg',
            text: 'افرادی که می‌خواهند از پایه و اصولی بازارهای مالی را یاد بگیرند.'
        },
        {
            icon: 'heart.svg',
            text: 'علاقمندان به بازارهای مالی که در مسیر آموزش دچار سردرگمی شده‌اند و به راهنمایی نیاز دارند.'
        }
    ];

    return (
        <div className="flex flex-col items-center bg-gradient-to-b from-[#1B1532] to-[#07021C] backdrop-blur-[4px] lg:py-16 py-8 px-4 lg:px-8 rounded-[24px]">
            <p className="font-semibold lg:text-[24px] text-[16px] text-white mb-12 lg:mb-16">
                آموزش و مشاوره حسنیکال چه کمکی به شما می‌کند؟
            </p>

            <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-y-12 lg:gap-x-8 lg:gap-y-15 w-full lg:max-w-55/100">
                {
                    infoItems.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 lg:basis-[45%] text-center px-3 lg:px-6 pb-4 lg:pb-8 bg-[#1B1532] rounded-[16px]"
                        >
                            <div className="h-[24px] mb-5">
                                <Image
                                    className="mx-auto -translate-y-6"
                                    width={48}
                                    height={48}
                                    src={`/images/landings/education/${item.icon}`}
                                    alt="icon"
                                />
                            </div>
                            <p className="text-[#94979C] text-[14px] lg:text-[16px]">{item.text}</p>
                        </div>
                    ))
                }
            </div>

            <hr className="border-t-[#311B5A]  my-12 lg:my-18 w-full lg:w-7/10" />

            <p className="font-semibold lg:text-[24px] text-[16px] text-white mb-12 lg:mb-16">
                آموزش و مشاوره حسنیکال مناسب چه افرادی‌ است؟
            </p>


            <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-y-12 lg:gap-x-8 lg:gap-y-15 w-full lg:max-w-55/100">
                {
                    infoItems2.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 lg:basis-[45%] text-center px-3 lg:px-6 pb-4 lg:pb-8 bg-[#1B1532] rounded-[16px]"
                        >
                            <div className="h-[24px] mb-5">
                                <Image
                                    className="mx-auto -translate-y-6"
                                    width={48}
                                    height={48}
                                    src={`/images/landings/education/${item.icon}`}
                                    alt="icon"
                                />
                            </div>
                            <p className="text-[#94979C] text-[14px] lg:text-[16px]">{item.text}</p>
                        </div>
                    ))
                }

                <div className=" lg:w-1/2 text-center px-3 lg:px-6 pb-4 lg:pb-8 bg-[#1B1532] rounded-[16px]">
                    <div className="h-[24px] mb-5">
                        <Image
                            className="mx-auto -translate-y-6"
                            width={48}
                            height={48}
                            src={`/images/landings/education/wheel.svg`}
                            alt="icon" />
                    </div>
                    <p className="text-[#94979C] text-[14px] lg:text-[16px]">معامله‌گرانی که در معاملات خود به ثبات نرسیده و به مشاوره تخصصی احتیاج دارند.</p>
                </div>
            </div>

            <hr className="border-t-[#311B5A]  my-12 lg:my-18 w-full lg:w-7/10" />


            <div className="flex flex-col lg:flex-row flex-wrap justify-center  w-full lg:max-w-55/100">
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center mb-6 lg:mb-12">
                    <Image src={'/images/landings/education/play.svg'} width={56} height={56} alt="play" />
                    <p className="font-medium text-[14px] lg:text-[20px] text-[#CECFD2]">
                        برای آشنایی بیشتر، می‌توانید ویدیوی معرفی و راهنمای ثبت‌نام را مشاهده کنید.
                    </p>
                </div>
                {/* <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/frm470h/vt/frame"
                    className="w-full lg:min-h-[450px] rounded-xl"
                    allowFullScreen
                ></iframe> */}
            
                <VideoStreamer file="landings/education/ttrl.mp4" />
                      {/* <Image className="mx-auto" src={'/images/landings/videoPlaceHolder.jpg'} width={800} height={450} alt="video" /> */}
            </div>

        </div>
    );
}
