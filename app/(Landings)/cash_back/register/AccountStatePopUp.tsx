import Image from "next/image"

type AccountStatePopUpProps = {
    showPopUp: boolean;
    setShowPopUp: (value: boolean) => void;
    selectedBroker: string | null|undefined;
    setHasBrokerAccount:(value: boolean) => void;
    setStep:(value: number) => void;
    
  };
  
  export default function AccountStatePopUp({
    showPopUp,
    setShowPopUp,
    selectedBroker,
    setHasBrokerAccount,
    setStep
  }: AccountStatePopUpProps) {
    return(
             showPopUp && <div className="fixed flex items-end lg:items-center justify-center top-0 right-0 w-full h-full z-20 bg-[#2E2455]/40 backdrop-blur-[50px]">
                        <div className="bg-[#07021D] rounded-t-[24px] rounded-b-0 lg:rounded-b-[24px] border border-[#3D2585] flex flex-col lg:py-8 py-6 lg:px-12 px-8">
        
                            <p className="flex mb-8 lg:mb-4">
                                <Image
                                    onClick={() => { setShowPopUp(false) }}
                                    className="ml-3"
                                    src={'/images/icons/x-close.svg'}
                                    width={24}
                                    height={24}
                                    alt="close" />
                            </p>
                            <p className="font-semibold text-[16px] lg:text-[18px] lg:mb-1 text-[#FFF]">آیا در کارگزاری {selectedBroker} حساب دارید؟</p>
                            <p className="font-medium text-[12px] lg:text-[16px] lg:mb-1 text-[#94979C] mb-8 lg:mb-6">
                                برای ادامه فرایند، مشخص کنید که در کارگزاری {selectedBroker} حساب دارید یا خیر؛
                                <br/>
                                «ادامه مراحل بر اساس این انتخاب تنظیم می‌شود.»
                            </p>
                            <div className="flex justify-center mb-6 space-x-2">
                        <button
                        onClick={()=>{setHasBrokerAccount(true);setShowPopUp(false);setStep(3)}}
                            className={`
                                px-3 lg:px-4 py-2 lg:py-3
                                text-[#FFFFFF] text-[14px] font-semibold
                                rounded-[8px]
                                border border-[#373A41]
                                hover:bg-[#713FC2] transition-all duration-300 ease-out
                                bg-[#8658D7]`}
                          
                        >
                            حساب {selectedBroker} دارم
                        </button>
                        <button
                         onClick={()=>{setHasBrokerAccount(false);setShowPopUp(false);setStep(3)}}
                            className={`
                                px-3 lg:px-4 py-2 lg:py-3
                                text-[#CECFD2] text-[14px] font-semibold
                                rounded-[8px]
                                border border-[#373A41] border-r-0
                                hover:bg-[#FAFAFA] hover:text-[#252B37] transition-all duration-300 ease-out
                                bg-[#1B1532]`}
                           
                        >
                            حساب {selectedBroker} ندارم
                        </button>
                    </div>
        
        
                        </div>
                    </div>
    )
}