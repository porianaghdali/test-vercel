import {  Calendar } from "lucide-react";
import Image from "next/image";
import moment from "moment-jalaali";
import PrimaryCard from "../../../components/ui/cards/primaryCard";
import Link from "next/link";
export const revalidate = 30;
async function fetchNews(catId) {
  const res = await fetch(
    `https://admin.hesnical.com/wp-json/wp/v2/posts?categories=${catId}&_embed&per_page=100`,
  );
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}
const convertToJalali = (date) => moment(date).format("jYYYY/jMM/jDD");

const Blogs = async ({ catId = 61, categoryType = "blog" }) => {
  const lastNews = await fetchNews(catId);
  return (
    <>
      <div className="grid gap-4 mb-20">
        <div className="">
          <p className="text-2xl font-semibold">جدید ترین ها</p>
          
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 ">
          <div className="col-span-1 lg:col-span-2  rounded-2xl ">
            <Image
              src={lastNews[0]._embedded?.["wp:featuredmedia"]?.[0].source_url}
              width={730}
              height={484}
              alt=""
              className="h-full w-full rounded-2xl"
            />
          </div>
          <div className="col-span-1 lg:col-span-3 py-3 border-b-[2px] border-t-[2px]  border-[#E9EAEB] ">
            <div className="grid lg:flex gap-2 justify-between mb-2">
              <Link
                href={`/${categoryType}/` + lastNews[0].slug}
                className="text-[#181D27] font-semibold text-lg lg:text-2xl"
              >
                {lastNews[0].title.rendered}
              </Link>
              <div className="flex gap-7">
                <span className="flex gap-2 items-center text-[#181D27] text-[12px] font-medium font-ravifanum">
                  <Calendar size={16} />
                  {convertToJalali(lastNews[0].date)}
                </span>
              </div>
            </div>

            <div
              className="font-medium text-[#414651] text-sm lg:text-lg mb-7"
              dangerouslySetInnerHTML={{ __html: lastNews[0].excerpt.rendered }}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {lastNews.slice(1).map((item, key) => (
          <PrimaryCard
            link={`/${categoryType}/` + item.slug}
            key={key}
            title={item.title.rendered}
            date={convertToJalali(item.date)}
            description={item.excerpt.rendered}
            image={item._embedded?.["wp:featuredmedia"]?.[0].source_url}
          />
        ))}
      </div>
      <hr className="h-[1px] border-[#E9EAEB] my-16" />
    </>
  );
};
export default Blogs;
