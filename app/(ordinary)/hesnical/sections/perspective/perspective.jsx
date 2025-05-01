import Image from "next/image";

const Perspective = () => {
  const content = [
    {
      imgUrl: "/images/aboutHesnical/hesnical/right.png",
      title: "چشم انداز ",
      Description:
        "در دنیایی که شفافیت و اعتماد در بازارهای مالی به مهم‌ترین دغدغه هر معامله‌گری تبدیل شده است، حسنیکال همواره تلاش می‌کند تا مرجعی قابل اعتماد در ارائه خدمات آموزشی باکیفیت و ابزارهای حرفه‌ای در فارکس و ارز دیجیتال باشد. ما در حسنیکال آینده‌ای را تصور می‌کنیم که در آن هر معامله‌گر، با اتکا به دانش به‌روز، ابزارهای هوشمند و حس تکامل‌ یافته خود در بازارهای مالی، می‌تواند با اطمینان و امنیت خاطر معامله کند.",
    },
    {
      imgUrl: "/images/aboutHesnical/hesnical/left.png",
      title: "ماموریت",
      Description:
        "در دنیایی که شفافیت و اعتماد در بازارهای مالی به مهم‌ترین دغدغه هر معامله‌گری تبدیل شده است، حسنیکال همواره تلاش می‌کند تا مرجعی قابل اعتماد در ارائه خدمات آموزشی باکیفیت و ابزارهای حرفه‌ای در فارکس و ارز دیجیتال باشد. ما در حسنیکال آینده‌ای را تصور می‌کنیم که در آن هر معامله‌گر، با اتکا به دانش به‌روز، ابزارهای هوشمند و حس تکامل‌ یافته خود در بازارهای مالی، می‌تواند با اطمینان و امنیت خاطر معامله کند.",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-[10vw] py-[5vw]">
        {content.map((item, key) => {
          return (
            <div key={key} className="border p-8 rounded-2xl">
              <div className="flex items-center gap-4 pb-4 border-b-[1px] border-[#C9CBD1] ">
                <Image alt="" width={48} height={48} src={item.imgUrl} className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"></Image>
                <p className="text-md md:text-xl lg:text-2xl xl:text-3xl font-medium text-[#231F20] ">{item.title}</p>
              </div>
              <p className="mt-4 text-xs md:text-sm lg:text-base font-semibold text-[#535051]">{item.Description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Perspective;
