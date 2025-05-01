'use client'

import Image from "next/image";
import { useState } from "react";
import FAQAccordion from "./FAQAccordion";

export default function Step3HasNotAccount({setStep,selectedBroker}:{setStep:(value: number) => void,selectedBroker:string|undefined}) {
    const [copied, setCopied] = useState(false);
    const faqItems = [
        { question: "آیا با وارد کردن این کد به حساب من دسترسی پیدا می‌کنید؟", answer: "خیر. این کد فقط جهت شناسایی شما به‌عنوان عضوی از حسنیکال استفاده می‌شود و هیچ‌گونه دسترسی به اطلاعات یا موجودی حساب شما ایجاد نمی‌کند." },
        { question: "آیا اسپرد یا کمیسیون حساب من تغییر می‌کند؟", answer: "خیر. شرایط معاملاتی شما کاملاً بدون تغییر می‌ماند. حتی در برخی موارد، امکان دریافت مزایایی مانند ریبیت یا پشتیبانی ویژه وجود دارد." },
        { question: "کش‌بک چگونه و چه زمانی واریز می‌شود؟", answer: "پس از بررسی و تایید حساب، کش‌بک به صورت روزانه یا دوره‌ای، طبق جدول نرخ‌ها، به حساب شما واریز خواهد شد." },
    ];
    return (

        <>
            <div className="lg:max-w-4/5 mx-auto">
                <p className="font-medium lg:font-semibold text-[12px] lg:text-[20px] text-[#CECFD2] mb-1">لینک همکاری:</p>
                <p className="font-medium text-[12px] lg:text-[14px] text-[#CECFD2] mb-1">Hesnical link</p>
                <div className="flex items-center justify-start mb-6 lg:mb-8">
                    <p className="text-[#85888E] text-[16px] truncate px-4 py-3 bg-[#1B1532] rounded-[8px] border border-[#373A41]">
                    {selectedBroker}
                    </p>
                    <button
                        onClick={() => {
                            navigator.clipboard.writeText(`${selectedBroker}`)

                            setCopied(true);
                            setTimeout(() => setCopied(false), 2000); // Hide after 2 seconds
                        }}
                        className="flex items-center group transition-all duration-300"
                    >
                        <Image
                            src="/images/icons/copyButton.svg"
                            width={36}
                            height={36}
                            alt="copy"
                            className="mr-2 group-hover:bg-[#f9f9f92e] rounded-[8px]"
                        />
                        <span className={`text-[#85888E] text-[14px] mr-2 ${copied ? 'block' : 'hidden'}`}>
                            کپی شد !
                        </span>
                    </button>
                </div>


                <div className="flex flex-col lg:flex-row flex-wrap  w-full ">

                    <p className="font-medium text-[14px] lg:text-[20px] text-[#CECFD2] mb-1 lg:mb-2">
                    برای اطلاع از نحوه ثبت‌ نام از طریق لینک همکاری، ویدیوی زیر را مشاهده کنید.
                    </p>

                    {/* <iframe
                        src="https://www.aparat.com/video/video/embed/videohash/frm470h/vt/frame"
                        className="w-full lg:min-h-[450px] lg:min-w-[900px] rounded-xl"
                        allowFullScreen
                    ></iframe> */}
                          <Image className="mx-auto" src={'/images/landings/videoPlaceHolder.jpg'} width={800} height={450} alt="video" />
                </div>

                <button onClick={()=>{setStep(4)}}className="w-full text-[12px] lg:text-[16px] text-white rounded-[8px] px-[12px] lg:px-[36px] py-[10px] py-[8px] mt-4 border border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">تکمیل ثبت نام</button>
            </div>
            <FAQAccordion items={faqItems} />
        </>
    )
}