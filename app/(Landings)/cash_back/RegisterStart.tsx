import Image from "next/image";
import Link from "next/link";

export default function RegisterStart(){
    return(<>
          
                <div className="p-[1px] rounded-[24px] bg-gradient-to-b from-[#1B1532] to-[#52409800] lg:max-w-3/4 mx-auto overflow-hidden lg:mt-8 mt-4 mb-10">
                    <div className="bg-gradient-to-b from-[#1B1532] to-[#06031700] lg:px-11 px-5 lg:py-14 py-6 backdrop-blur-[37.07px] rounded-[24px]">
                    
                        <p className="font-semibold lg:text-[24px] text-[16px] text-white mb-6 lg:mb-12 text-center">
                        قدم اول در مسیر معامله‌گری را با اطمینان بردارید!
                        </p>

                        <div className="flex space-x-4 justify-center">
                            <Link href={'./cash_back/register'} className=" flex font-semibold text-justify text-[14px] lg:text-[16px] text-white rounded-[8px] px-[30px] lg:px-[60px] lg:py-[10px] py-[10px] border border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">
                                <Image className="me-1" src={'/images/landings/education/register.svg'} width={20} height={20} alt="register" />
                                ثبت نام در کش بک 
                               
                            </Link>
                         
                        </div>
                    </div>
                </div>
                </>)
}