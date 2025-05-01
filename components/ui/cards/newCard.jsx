import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";

const NewCard = ({
  title,
  date,

  link,
  image = "/images/news/test2.png",
}) => {
  return (
    <Link href={link}>
      <div
        className="relative flex rounded-2xl h-60 items-end group bg-cover bg-center"
        tabIndex="0"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* --- لایه سفید زیرین --- */}
        <div className="absolute inset-0 opacity-90 bg-white mix-blend-color rounded-2xl rotate-180 z-0 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0" />

        {/* --- لایه گرادینت رنگی رویی --- */}
        <div
          className="absolute inset-0 mix-blend-color rounded-2xl z-10 scale-x-[-1] transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0"
          style={{
            background:
              "linear-gradient(62.17deg, rgba(77, 60, 142, 0.7) 0%, rgba(134, 88, 215, 0.7) 42.79%, rgba(198, 228, 244, 0.35) 99.5%)",
          }}
        />

        {/* --- محتوای اصلی --- */}
        <div className="relative z-20 flex flex-col w-full rounded-b-2xl h-1/5 group-focus:h-1/2 group-hover:h-1/2 max-h-fit text-white py-2 px-2 items-end overflow-hidden transition-all duration-300 ease-out backdrop-blur-[10px] bg-[linear-gradient(0deg,rgba(13,11,11,0.30)_0%,rgba(13,11,11,0.30)_100%)]">
          <div className="w-full">
            <p className="text-[14px] lg:text-[14px] xl:text-[14px] 2xl:text-[16px] font-semibold w-full min-h-[2.25rem]">
              {title}
            </p>
          </div>

          <div className="flex w-full justify-between">
            <div className="flex gap-3 p-1 lg:p-2 xl:p-3 2xl:p-4 items-center">
              <p className="flex items-center gap-2 font-ravifanum">
                <Calendar />
                {date}
              </p>
            </div>

            <div className="p-1 lg:p-2 xl:p-3 2xl:p-4 flex justify-end items-center">
              <p
              
                className="font-semibold text-[14px] text-[#F6F5FD] flex gap-1 cursor-pointer"
              >
                بیشتر بخوانید
                <ArrowLeft size={20} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewCard;
