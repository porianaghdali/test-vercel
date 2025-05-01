import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import he from "he";
import Image from "next/image";

const PrimaryCard = ({
  title,
  date,
  view,
  description,
  link,
  image = "/images/news/test.png",
}) => {
  const removeHtmlTags = (htmlContent) => htmlContent.replace(/<[^>]*>/g, "");

  return (
    <Link href={link}>
      <div className="group border border-[#E9EAEB]  rounded-2xl shadow-custom h-full overflow-hidden">
        <div className="relative w-full h-52">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-2xl"
          />

          {/* --- لایه سفید زیرین --- */}
          <div className="absolute inset-0 opacity-90 bg-white mix-blend-color rounded-t-2xl rotate-180 z-0 transition-opacity duration-300 group-hover:opacity-0" />

          {/* --- لایه گرادینت رنگی رویی --- */}
          <div
            className="absolute inset-0 mix-blend-color rounded-t-2xl z-10 scale-x-[-1] transition-opacity duration-300 group-hover:opacity-0"
            style={{
              background:
                "linear-gradient(62.17deg, rgba(77, 60, 142, 0.7) 0%, rgba(134, 88, 215, 0.7) 42.79%, rgba(198, 228, 244, 0.35) 99.5%)",
            }}
          />
        </div>

        <div className="p-4 grid gap-4 ">
          <h2 className="text-base font-semibold leading-6 truncate">
            <p className="cursor-pointer">{title}</p>
          </h2>

          <p className="mb-8 line-clamp-5 leading-6 max-h-[7.25rem] overflow-hidden font-medium text-xs xl:text-sm text-[#414651]">
            {removeHtmlTags(he.decode(description))}
          </p>

          <div className="flex justify-between items-center mt-auto  ">
            <p className="font-ravifanum text-[#717680] flex items-center gap-2 text-xs font-medium">
              <Calendar size={16} color="#717680" /> {date}
            </p>

            <p
              
              className="font-semibold text-sm text-[#713FC2] flex gap-1 items-center"
            >
              بیشتر بخوانید <ArrowLeft size={16} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PrimaryCard;
