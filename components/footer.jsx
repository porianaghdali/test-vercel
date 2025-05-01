import Link from "next/link";
import { Hesnical, insta, telegram } from "../svg/dummy";
import Image from "next/image";
const Footer = () => {
  const headerList = [
    { title: "خانه", href: "/home" },
    { title: "خدمات", href: "/Services" },
    { title: "حسنیکال", href: "/hesnical" },
    { title: "ارتباط با ما", href: "/ContactUs" },
    { title: "اخبار و تحلیل", href: "/news" },
    { title: "بلاگ", href: "/blog" },
  ];
  return (
    <>



    <div className="flex flex-col gap-6 bg-[#281B41] py-4  px-[6vw] lg:py-8 ">
      <div className="flex items-end h-fit gap-8 w-full  md:border-b-[1px] border-[#F2F0F0] py-10">
        <div className="mx-auto md:m-0">{Hesnical}</div>
        <ul className="hidden md:flex flex-wrap gap-8">
          {headerList.map((item, key, array) => { 
            return (
              <li
                key={key}
                className="text-white text-[16px] flex gap-[28px] items-center h-fit"
              >
                <Link href={item.href}>{item.title}</Link>
                {array.length != key + 1 ? (
                  <hr className="w-[1px] h-4 bg-[#7B808C]" />
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-between">
        <p className="text-sm text-[#7B808C]">
          تمامی حقوق برای کاربر این محصول محفوظ است.
        </p>
        
      </div>
    </div>
    </>
  );
};
export default Footer;
