'use client'
import Image from "next/image"


export default function Step2({ setSelectedBroker,setShowPopUp }: { setSelectedBroker: (broker: { name: string; farsiName: string;code:string;link:string}) => void,setShowPopUp:(state:boolean) => void }) {
    const brokers = [
        // {
        //     name: 'Capitalxtend',
        //     farsiName: 'کپیتال‌اکستند',
        //     logo: 'Capitalxtend.png',
        //     width: 66,
        //     height: 50
        // },
        {
            name: 'alpari',
            farsiName: 'آلپاری',
            logo: 'alpari.png',
            width: 66,
            height: 50,
            docLink:'./sss',
            link:'https://alpari.com/?Referral=62034',
            code:'62034'

        },
        {
            name: 'AMarkets',
            farsiName: 'آمارکتز',
            logo: 'AMarkets.png',
            width: 78,
            height: 55,
            docLink:'./sss',
            link:'https://fa.amarketsworld.com/sign-up/real-persian/?g=HESNICAL',
            code:'HESNICAL'
        },
        // {
        //     name: 'apo finance',
        //     farsiName: 'اپوفایننس',
        //     logo: 'apo_finance.png',
        //     width: 98,
        //     height: 50
        // },
        // {
        //     name: 'Errante',
        //     farsiName: 'ارینت',
        //     logo: 'Errante.png',
        //     width: 159,
        //     height: 50
        // },
    ]
 
    const handleSelectBroker = (item: { name: string; farsiName: string;code:string;link:string }) => {
        
        setSelectedBroker(item)
        setShowPopUp(true)
    }
    return (
        <>
            <p className="text-center text-[#CECFD2] font-medium text-[12px] lg:text-[20px] mb-4 lg:mb-8">«برای مشاهده نرخ کش‌بک هر بروکر، لطفاً روی لینک مربوط به آن در زیر هر بروکر کلیک کنید و اطلاعات دقیق را  بررسی نمایید سپس از لیست بروکرهای معتبر، گزینه مورد نظر خود را انتخاب کنید..»</p>
            <div className="flex flex-col lg:flex-row lg:gap-x-6 justify-center lg:w-3/4 mx-auto">
                {brokers.map((item, index) => (
               
                    <div key={index} className="rounded-[8px] bg-[#1B1532] border border-[#311B5A] flex flex-col items-center  justify-center group cursor-pointer lg:min-w-[300px] lg:min-h-[200px] lg:mb-6 mb-2" onClick={() => handleSelectBroker(item)}>
                        <Image className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" src={'/images/landings/education/' + item.logo} width={item.width} height={item.height} alt="broker" />
                        <p className="font-medium text-[14px] lg:font-semibold lg:text-[20px] text-white mt-2 lg:mt-4 ">{item.name}</p>
                    </div>
            
                ))}
            </div>


           


        </>
    )
}