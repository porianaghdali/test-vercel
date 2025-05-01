import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import moment from "moment-jalaali";
import SwiperNewsSlider from "../ui/SwiperNewsSlider";
import NewCard from "../ui/cards/newCard";

const Newest = async ({  id,Link }) => {
  async function fetchNews() {
    const res = await fetch(
      `https://admin.hesnical.com/wp-json/wp/v2/posts?categories=${id}&per_page=4&_embed`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
  }

  async function fetchNewsSlider() {
    const res = await fetch(
      `https://admin.hesnical.com/wp-json/wp/v2/posts?categories=${id}&per_page=4&offset=4&_embed`,
      {
        next: {
          revalidate: 60, // Revalidate every 60 seconds
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch news");
    return res.json();
  }
  const lastNews = await fetchNews();
  const lastNewsSlider = await fetchNewsSlider();

  return (
    lastNews.length != 0 &&
    lastNewsSlider != 0 && (
      <>
        <div className="grid gap-4">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">جدید ترین ها</p>
           
          </div>
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-10 lg:col-span-5 xl:col-span-4 rounded-2xl">
              <SwiperNewsSlider href="" items={lastNewsSlider} />
            </div>
            <div className="col-span-10 lg:col-span-5 xl:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {lastNews.map((item, key) => (
                <NewCard
                  link={`/${Link}/` + item.slug}
                  key={key}
                  title={item.title.rendered}
                  date={moment(item.date).format("jYYYY,jMM,jDD")}
                  description={item.content.rendered}
                  image={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[#E9EAEB] my-16" />
      </>
    )
  );
};

export default Newest;
