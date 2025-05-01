'use client'
import Image from "next/image"


export default function Step2({
    setSelectedBroker,
    setShowPopUp,
}: {
    setSelectedBroker: (broker: { name: string; farsiName: string; code: string; link: string; videoAcc: string; videoHsntAcc: string }) => void;
    setShowPopUp: (state: boolean) => void;
}) {
    const brokers = [
        {
            name: 'Capitalxtend',
            farsiName: 'کپیتال‌اکستند',
            logo: 'Capitalxtend.png',
            width: 66,
            height: 50,
            link: 'https://capitalxtend.com/register?referral=9vTs0w',
            code: '3828',
            videoAcc: 'landings/education/Capital-acc.mp4',
            videoHsntAcc: 'landings/education/Capital-hsntacc.mp4'
        },
        {
            name: 'alpari',
            farsiName: 'آلپاری',
            logo: 'alpari.png',
            width: 66,
            height: 50,
            link: 'https://alpari.com/?Referral=62034',
            code: '62034',
            videoAcc: 'landings/education/Alapari-acc.mp4',
                 videoHsntAcc: 'landings/education/Alapari-hasntacc.mp4'
        },
        {
            name: 'AMarkets',
            farsiName: 'آمارکتز',
            logo: 'AMarkets.png',
            width: 78,
            height: 55,
            link: 'https://fa.amarketsworld.com/sign-up/real-persian/?g=HESNICAL',
            code: 'HESNICAL',
                  videoAcc: 'landings/education/Amarkets-acc.mp4',
                 videoHsntAcc: 'landings/education/Amarkets-hasntacc.mp4'
        },
        {
            name: 'opo finance',
            farsiName: 'اپوفایننس',
            logo: 'apo_finance.png',
            width: 98,
            height: 50,
            link: 'https://myaccount.opofinance.com/links/go/5542',
            code: 'opo247150',
            videoAcc: 'landings/education/Amarkets-acc.mp4',
            videoHsntAcc: 'landings/education/Opo-hsntacc.mp4'
        },
        // {
        //     name: 'Errante',
        //     farsiName: 'ارانته',
        //     logo: 'Errante.png',
        //     width: 159,
        //     height: 50,
        //     link: 'https://myportal.errante.net/fa/links/go/7592',
        //     code: '7592',
        //     videoAcc: '',
        //     videoHsntAcc: ''
        // },
    ]

    const handleSelectBroker = (item: { name: string; farsiName: string; code: string; link: string; videoAcc: string; videoHsntAcc: string }) => {

        setSelectedBroker(item)
        setShowPopUp(true)
    }
    return (
        <>
            <p className="text-center text-[#CECFD2] font-medium text-[12px] lg:text-[20px] mb-4 lg:mb-8">از لیست بروکرهای معتبر، گزینه مورد نظر خود را انتخاب کنید.</p>
            <div className="grid grid-cols-3 gap-x-2 gap-y-3 lg:grid-cols-5 lg:gap-x-6 lg:w-3/4 mx-auto">
                {brokers.map((item, index) => (
                    <div key={index} className="rounded-[8px] bg-[#1B1532] border border-[#311B5A] flex flex-col items-center group cursor-pointer" onClick={() => handleSelectBroker(item)}>
                        <Image className="brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300" src={'/images/landings/education/' + item.logo} width={item.width} height={item.height} alt="broker" />
                        <p className="font-medium text-[14px] lg:font-semibold lg:text-[20px] text-white mt-2 lg:mt-4 ">{item.name}</p>
                    </div>
                ))}
            </div>





        </>
    )
}