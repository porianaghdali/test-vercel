import Image from "next/image";
import { Clarity, Training, Accompanying, Innovation } from "./svg";
const OurFeatures = () => {
  const content = [
    {
      svg: Clarity,
      title: "شفافیت، اصل اول ماست",
      Description:
        "در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.",
    },
    {
      svg: Training,
      title: "شفافیت، اصل اول ماست",
      Description:
        "در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.",
    },
    {
      svg: Accompanying,
      title: "شفافیت، اصل اول ماست",
      Description:
        "در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.",
    },
    {
      svg: Innovation,
      title: "شفافیت، اصل اول ماست",
      Description:
        "در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.",
    },
  ];
  return (
    <>
      <div className="py-25 px-[6.5%] grid gap-13">
        <div className="flex items-center gap-5 justify-center">
          <p className="text-[#231F20] text-3xl font-bold"> ویژگی های ما</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-7 mb-10 gap-14  lg:mx-[10%]">
          <div   className="flex lg:grid col-span-1 lg:col-span-2 xl:col-span-2 justify-around  
              bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-10  rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]
              "
          >
            <Image
              alt="تجربه رشد مستمر"
              width={188}
              height={198}
              src="/images/home/beginnerToProfessional/1.svg"
              className="w-20 h-16 md:w-28 md:h-24"
            />
            <div className="pr-[5%]  lg:p-0 flex flex-col justify-center">
              <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
                شفافیت، اصل اول ماست{" "}
              </h3>
              <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-[#565656] text-justify ">
                در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده
                است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.{" "}
              </p>
            </div>
          </div>
          <div className=" col-span-1 lg:col-span-3 grid  gap-8 lg:gap-10">
            <div className="flex justify-around lg:justify-between items-center bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-6 rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
              <div className="pl-[5%] lg:pl-4">
                <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
                  شفافیت، اصل اول ماست{" "}
                </h3>
                <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-[#565656] text-justify">
                  در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و
                  گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست
                  منعکس کنیم.{" "}
                </p>
              </div>
              <Image
                alt="جامعه معامله‌گران"
                width={188}
                height={180}
                src="/images/home/beginnerToProfessional/2.svg"
                className="w-20 h-16 md:w-28 md:h-24"
              />
            </div>
            <div className="flex justify-around lg:justify-between items-center bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF]  p-4 lg:p-6 rounded-2xl border border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
              <Image
                alt="ابزارهای هوشمند"
                width={178}
                height={130}
                src="/images/home/beginnerToProfessional/3.svg"
                className="w-20 h-16 md:w-28 md:h-24"
              />
              <div className="pr-[5%] lg:pr-4">
                <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[20px] mb-4">
                  شفافیت، اصل اول ماست{" "}
                </h3>
                <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-[#565656] text-justify">
                  در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و
                  گمراه‌کننده است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست
                  منعکس کنیم.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex flex-row-reverse lg:grid col-span-1 lg:col-span-2 justify-around xl:col-span-2 bg-linear-to-b from-[rgba(231,217,255,0.15)] to-[#FFFFFF] p-4 lg:p-10 rounded-2xl border-[1px] border-[#E1E1E1] shadow-[8px_12px_50px_#A3A3A314]">
            <Image
              alt="آموزش‌های کاربردی"
              width={231}
              height={183}
              src="/images/home/beginnerToProfessional/4.svg"
              className="w-20 h-16 md:w-28 md:h-24"
            />
            <div className="pl-[5%]  lg:p-0  flex flex-col justify-center">
              <h3 className="font-semibold text-[12px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] mb-4">
                شفافیت، اصل اول ماست{" "}
              </h3>
              <p className="font-medium text-[10px] lg:text-[10px] xl:text-[12px] 2xl:text-[16px] text-[#565656] text-justify">
                در بازاری که پر از پیچیدگی و انعکاس‌های غیر واقعی و گمراه‌کننده
                است، ما سعی داریم تا واقعیت‌ها را بدون کم‌وکاست منعکس کنیم.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurFeatures;
