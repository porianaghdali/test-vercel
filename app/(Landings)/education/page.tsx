import Image from "next/image";

import SimpleFooter from "@/components/SimpleFooter";
import Intro from "./Intro";
import MoreInfo from "./MoreInfo";
import RegisterStart from "./RegisterStart";

export default function Education() {
    return (
        <>
            <div className="bg-[#07021C] bg-[url('/images/landings/VectorBG1.svg')] lg:bg-[url('/images/landings/VectorBG1.svg')] bg-contain bg-top-right bg-no-repeat px-4 lg:px-[72px] pb-8 lg:pb-16">
                <div className="py-10 z-10 relative">
                    <Image src={'/images/landings/farsiLogo.svg'} alt="logo" width={135} height={40} />
                </div>
                <Intro />
            </div>
            <div className="bg-[#07021C]  px-4 lg:px-[72px] pb-10" id="moreInfo">
                <MoreInfo />
                <RegisterStart />

            </div>









            <SimpleFooter />
        </>
    )
}