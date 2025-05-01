import Image from "next/image";
import Link from "next/link";

export default function SimpleFooter() {
    return (
        <div className="bg-[#1B1532]">
            <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className="order-3 lg:order-1 flex-1  mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <p className="text-[#94979C] text-[16px]">تمامی حقوق برای کاربر این محصول محفوظ است.</p>
                </div>
                <div className="py-10 z-10 relative order-1 lg:order-2 flex justify-center flex-1">
                    <Image src={'/images/landings/farsiLogo.svg'} alt="logo" width={135} height={40} />
                </div>
                <div className="order-2 lg:order-3 flex space-x-4 flex-1  justify-center lg:justify-end mb-6 lg:mb-0">
                    <Link href={'https://www.instagram.com/hesnical?igsh=MWZmZmVtcGJwdjJuZA=='}>
                        <Image src={'/images/icons/instagram.svg'} alt="instagram" width={24} height={24} />
                    </Link>
                    <Link href={'https://t.me/hesnical_official'}>
                        <Image src={'/images/icons/telegram.svg'} alt="linkedin" width={24} height={24} />
                    </Link>
                    {/* <Link href={'#'}>
                        <Image src={'/images/icons/x.svg'} alt="x" width={24} height={24} />
                    </Link> */}
                </div>
            </div>
        </div>
    )
} 
