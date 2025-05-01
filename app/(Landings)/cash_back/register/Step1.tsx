import { FormEvent } from "react";

type Props = {
    setStep: (step: number) => void;
    setFullName: (step: string) => void;
    setPhone: (step: string) => void;
    setEmail: (step: string) => void;

  };
  
  export default function Step1({ setStep,setFullName,setPhone,setEmail }: Props) {
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
      
      setStep(2);
    };
    return (
        <div className=" lg:max-w-[28vw] mx-auto">
            <p className="font-semibold text-white text-[14px] lg:text-[20px] mb-2">ثبت نام</p>
            <p className="font-medium text-[#CECFD2] text-[12px] lg:text-[16px] mb-6">اطلاعات وارد شده توسط شما صرفاً جهت ایجاد پروفایل و برقراری ارتباط رسمی با بروکر استفاده خواهد شد.</p>
            <form className="flex flex-col" onSubmit={(e)=>handleSubmit(e)}>
                <label className="font-medium text-[#CECFD2] text-[12px] lg:text-[16px] mb-1 lg:mb-2">
                    نام و نام خانوادگی
                </label>
                <input
                   required
                   onChange={(e)=>{setFullName(e.target.value)}}
                    className="bg-[#1B1532] rounded-[8px] border border-[#373A41] px-3 lg:px-4 py-2 lg:py-3 text-[#85888E] text-[16px] mb-4"
                    placeholder="نام و نام خانوادگی"
                    type="text" />

                <label className="font-medium text-[#CECFD2] text-[12px] lg:text-[16px] mb-1 lg:mb-2">
                    شماره تماس
                </label>
                <input
                    type="text"
                    onChange={(e)=>{setPhone(e.target.value)}}
                    pattern="^09\d{9}$"
                    placeholder="09xxxxxxxx"
                    required
                    title="شماره موبایل باید با 09 شروع شود و 11 رقم داشته باشد"
                    className="bg-[#1B1532] rounded-[8px] border border-[#373A41] px-3 lg:px-4 py-2 lg:py-3 text-[#85888E] text-[16px] mb-4"
                />

                <label className="font-medium text-[#CECFD2] text-[12px] lg:text-[16px] mb-1 lg:mb-2">
                    ایمیل
                </label>
                <input type="mail"
                onChange={(e)=>{setEmail(e.target.value)}}
                   required
                 placeholder="ایمیل"
                    className="bg-[#1B1532] rounded-[8px] border border-[#373A41] px-3 lg:px-4 py-2 lg:py-3 text-[#85888E] text-[16px] mb-4"
                />
                <button type="submit" className="w-full text-[12px] lg:text-[16px] text-white rounded-[8px] px-[12px] lg:px-[36px] py-[10px] py-[8px] mt-4 border border-2 border-[#ffffff1f] bg-[#8658D7] hover:bg-[#713FC2] transition-all duration-300 ease-out">تکمیل اطلاعات شخصی</button>

            </form>
        </div>
    )
}