// import Image from "next/image";
// import { ArrowLeft } from "lucide-react";
// import Link from "next/link";

// const SecondaryCard = ({
//   title,
//   date,
//   view,
//   description,
//   link,
//   image = "/images/news/test.png",
// }) => {
//   return (
//     <div className=" flex gap-4 ">
//       <Image
//         className="rounded-md w-36 h-[88px]   "
//         width={1600}
//         height={900}
//         alt={title}
//         src={image}
//       />
//       <div className="grid gap-1">
//         <p className="text-[16px] font-semibold">{title}</p>
//         <div
//           className=" text-[14px]   truncate "
//           dangerouslySetInnerHTML={{ __html: description }}
//         />

//         <div className=" flex mt-1">
//           <Link
//             href={link}
//             className="font-semibold text-[14px]  text-[#713FC2] flex gap-1  cursor-pointer"
//           >
//             بیشتر بخوانید <ArrowLeft size={20} />
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SecondaryCard;
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const SecondaryCard = ({
  title,
  date,
  view,
  description,
  link,
  image = "/images/news/test.png",
}) => {
  return (
    <Link href={link}>
      <div className="flex gap-4 group relative">
        <div className="relative w-36 h-[88px] rounded-md overflow-hidden shrink-0">
          <Image
            className="object-cover w-full h-full"
            fill
            alt={title}
            src={image}
          />

          {/* --- لایه سفید زیرین --- */}
          <div className="absolute inset-0 opacity-90 bg-white mix-blend-color rotate-180 z-0 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 rounded-md" />

          {/* --- لایه گرادینت رنگی رویی --- */}
          <div
            className="absolute inset-0 mix-blend-color scale-x-[-1] z-10 transition-opacity duration-300 group-hover:opacity-0 group-focus:opacity-0 rounded-md"
            style={{
              background:
                "linear-gradient(62.17deg, rgba(77, 60, 142, 0.7) 0%, rgba(134, 88, 215, 0.7) 42.79%, rgba(198, 228, 244, 0.35) 99.5%)",
            }}
          />
        </div>

        <div className="grid gap-1">
          <p className="text-[16px] font-semibold">{title}</p>
          <div
            className="text-[14px] truncate"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="flex mt-1">
            <p className="font-semibold text-[14px] text-[#713FC2] flex gap-1 cursor-pointer">
              بیشتر بخوانید <ArrowLeft size={20} />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SecondaryCard;
