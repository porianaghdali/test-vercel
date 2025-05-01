'use client'
import Image from "next/image";
import StepIndicator from "./StepIndicator";
import { useEffect, useState } from "react";
import Step1 from "./Step1";
import SimpleFooter from "@/components/SimpleFooter";
import Step2 from "./Step2";
import AccountStatePopUp from "./AccountStatePopUp";
import Step3HasAccount from "./Step3HasAccount";
import Step3HasNotAccount from "./Step3HasNotAccount";
import Step4 from "./Step4";

export default function register() {
    const [step, setStep] = useState(1)
    const [showPopUp, setShowPopUp] = useState(false)
    const [isFinished, setIsFinished] = useState(false)
    const [hasBrokerAccount, setHasBrokerAccount] = useState(false)
    const [selectedBroker, setSelectedBroker] = useState<{
        name: string; farsiName: string;code:string;link:string;videoAcc:string;videoHsntAcc:string
      } | null>(null);

    const [finishState, setFinishState] = useState<any>(null);
    const [fullName, setFullName] = useState<string | null>(null);
    const [phone, setPhone] = useState<string | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const stepDescription = [
        'برای شروع فرایند ثبت نام، کافی‌ است اطلاعات خود را در فرم زیر وارد کنید:',
        'برای تکمیل فرآیند ثبت نام، لازم است در یکی از بروکرهای مورد تایید حسنیکال ثبت‌ نام کنید و یا حساب فعلی خود را با وارد کردن کد اختصاصی متصل نمایید.',
        'برای تکمیل فرآیند ثبت نام، لازم است در یکی از بروکرهای مورد تایید حسنیکال ثبت‌ نام کنید و یا حساب فعلی خود را با وارد کردن کد اختصاصی متصل نمایید.',
        '«ثبت‌نام شما با موفقیت انجام شد. از اعتماد شما سپاسگزاریم و خرسندیم که به جمع کاربران ما پیوسته‌اید. امیدواریم تجربه‌ای حرفه‌ای، ایمن و رضایت‌بخش در استفاده از خدمات ما داشته باشید.»'
    ]
    useEffect(() => {
        if (step === 4) {
          
    
            const sendData = async () => {
                try {
                    const response = await fetch('/api/education', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fullName,
                            phone,
                            email,
                            hasBrokerAccount,
                            selectedBroker:selectedBroker?.farsiName,
                        }),
                    });
    
                    if (response.ok) {
                        const data = await response.json();
                   
                        setFinishState(data)
                        // می‌تونی با data یه کاری انجام بدی
                    } else {
                        const errorData = await response.json();
                        console.error('Server Error:', errorData);
                        setFinishState(errorData)
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('خطا در ارتباط با سرور');
                } finally {
                    setIsFinished(true);
                }
            };


            sendData();
        }
    }, [step]);
    
    return (
        <>
            <div className="bg-[#07021C] px-4 lg:px-[72px] lg:min-h-screen  pb-8 lg:pb-16">
                <div className="py-10 z-10 relative">
                    <Image src={'/images/landings/farsiLogo.svg'} alt="logo" width={135} height={40} />
                </div>
                <div className="flex flex-col lg:flex-row items-start justify-between">
                    <p className="font-medium lg:font-semibold text-[14px] lg:text-[20px] text-[#CECFD2]">
                        {stepDescription[step - 1]}
                    </p>
                    <Image className="lg:ml-14 mb-4 lg:-mb-[50px] z-10" src={'/images/landings/education/main.png'} width={397} height={197} alt="hesnical" />
                </div>



                <div className="p-[1px] rounded-[24px] bg-gradient-to-b from-[#1B1532] to-[#52409800]  mx-auto overflow-hidden mb-8 lg:mb-16 ">
                    <div className="bg-gradient-to-b from-[#1B1532] to-[#0603171A] lg:px-11 px-5 lg:py-14 py-6 backdrop-blur-[37.07px] rounded-[24px]">
                        <StepIndicator finish={isFinished} steps={["اطلاعات شخصی", "انتخاب بروکر", "ثبت نام در بروکر", "تکمیل ثبت نام"]} currentStep={step} onStepChange={(step) => setStep(step)}/>

                        {
                            (() => {
                                switch (step) {
                                    case 1:
                                        return <Step1 setStep={setStep} setFullName={setFullName} setPhone={setPhone} setEmail={setEmail} />;
                                    case 2:
                                        return (<Step2 setShowPopUp={setShowPopUp} setSelectedBroker={setSelectedBroker} />);
                                    case 3:
                                        return hasBrokerAccount ?
                                         (<Step3HasAccount setStep={setStep}  selectedBroker={selectedBroker?.code} videoUrl={selectedBroker?.videoAcc}/>)
                                         :(<Step3HasNotAccount setStep={setStep}  selectedBroker={selectedBroker?.link}  videoUrl={selectedBroker?.videoHsntAcc}/>);
                                        case 4:
                                            return <Step4 isFinished={isFinished} finishState={finishState}/>;
                                    default:
                                        return <Step1 setStep={setStep}  setFullName={setFullName} setPhone={setPhone} setEmail={setEmail} />;
                                }
                            })()
                        }


                    </div>
                </div>


            </div>
      
            <AccountStatePopUp showPopUp={showPopUp} setStep={setStep} setShowPopUp={setShowPopUp} selectedBroker={selectedBroker?.farsiName} setHasBrokerAccount={setHasBrokerAccount} />
            <SimpleFooter />
        </>
    )
}