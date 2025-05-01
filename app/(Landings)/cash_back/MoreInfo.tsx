import Image from "next/image";

export default function MoreInfo() {
    const infoItems = [
        {
            icon: 'reduce.svg',
            text: 'کاهش هزینه‌های معاملاتی بدون تغییر نرخ اسپرد و کمیسیون'
        },
        {
            icon: 'order.svg',
            text: 'واریز منظم و شفاف مبالغ بازپرداختی به‌صورت روزانه یا دوره‌ای'
        },
        {
            icon: 'legal.svg',
            text: 'ایجاد ارتباط رسمی، قانونی و شفاف با بروکرهای معتبر'
        },
        {
            icon: 'services.svg',
            text: 'دریافت خدمات پشتیبانی و مشاوره تکمیلی حسنیکال'
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
            استفاده از کش‌بک چه مزایایی دارد؟
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
                                    src={`/images/landings/cashBack/${item.icon}`}
                                    alt="icon"
                                />
                            </div>
                            <p className="text-[#94979C] text-[14px] lg:text-[16px]">{item.text}</p>
                        </div>
                    ))
                }
            </div>

            <hr className="border-t-[#311B5A]  my-12 lg:my-18 w-full lg:w-7/10" />

     





            <div className="flex flex-col lg:flex-row flex-wrap justify-center  w-full lg:max-w-55/100">
                <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 items-center mb-6 lg:mb-12">
                    <Image src={'/images/landings/education/play.svg'} width={56} height={56} alt="play" />
                    <p className="font-medium text-[14px] lg:text-[20px] text-[#CECFD2]">
                    نحوه ثبت‌نام و دریافت کش‌بک را می‌توانید در این ویدیو مشاهده کنید.
                    </p>
                </div>
                {/* <iframe
                    src="https://www.aparat.com/video/video/embed/videohash/frm470h/vt/frame"
                    className="w-full lg:min-h-[450px] rounded-xl"
                    allowFullScreen
                ></iframe> */}
                <Image className="mx-auto" src={'/images/landings/videoPlaceHolder.jpg'} width={800} height={450} alt="video" />
            </div>

        </div>
    );
}
