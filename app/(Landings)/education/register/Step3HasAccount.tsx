'use client'

import Image from "next/image";
import { useState } from "react";
import FAQAccordion from "./FAQAccordion";
import VideoStreamer from "@/components/VideoStreamer";

export default function Step3HasAccount({ setStep, selectedBroker, videoUrl }: { setStep: (value: number) => void, selectedBroker: string | undefined; videoUrl: string | undefined }) {
    const [copied, setCopied] = useState(false);
    const faqItems = [
        { question: "آیا با وارد کردن این کد به حساب من دسترسی پیدا می‌کنید؟", answer: "خیر. این کد فقط جهت شناسایی شما به‌عنوان عضوی از حسنیکال استفاده می‌شود و هیچ‌گونه دسترسی به اطلاعات یا موجودی حساب شما ایجاد نمی‌کند." },
        { question: "آیا اسپرد یا کمیسیون حساب من تغییر می‌کند؟", answer: "خیر. شرایط معاملاتی شما کاملاً بدون تغییر می‌ماند. حتی در برخی موارد، امکان دریافت مزایایی مانند ریبیت یا پشتیبانی ویژه وجود دارد." },
        { question: "چرا باید از این طریق در بروکر ثبت‌نام کنم؟", answer: "این کد ارتباط رسمی بین بروکر و حسنیکال را برقرار می‌کند و برای ما شرایطی را فراهم می‌کند تا بتوانیم بدون دریافت هزینه از شما، خدمات آموزشی و مشاوره‌ای با کیفیت را به طور مستمر به شما ارائه دهیم." },
    ];
    return (

        <>
            <div className="lg:max-w-4/5 mx-auto">
                <p className="font-medium lg:font-semibold text-[12px] lg:text-[20px] text-[#CECFD2] mb-1">کد همکاری اختصاصی شما:</p>
                <p className="font-medium text-[12px] lg:text-[14px] text-[#CECFD2] mb-1">Hesnical code</p>
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
                        برای اطلاع از نحوه وارد کردن صحیح کد، ویدیوی زیر را مشاهده کنید.
                    </p>

                    {/* <iframe
                        src="https://www.aparat.com/video/video/embed/videohash/frm470h/vt/frame"
                        className="w-full lg:min-h-[450px] lg:min-w-[900px] rounded-xl"
                        allowFullScreen
                    ></iframe> */}
                    {/* <Image className="mx-auto" src={'/images/landings/videoPlaceHolder.jpg'} width={800} height={450} alt="video" /> */}
                    {videoUrl && <VideoStreamer file={videoUrl}  poster={'/images/landings/videoPlaceHolder.jpg'}/>}
                </div>

                <button onClick={() => { setStep(4) }} className="w-full text-[12px] lg:text-[16px] text-white rounded-[8px] px-[12px] lg:px-[36px] py-[10px] py-[8px] mt-4 border border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">تکمیل ثبت نام</button>
            </div>
            <FAQAccordion items={faqItems} />
        </>
    )
}