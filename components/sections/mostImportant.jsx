import Link from "next/link";
import moment from "moment-jalaali";
import SwiperNewsSlider from "../ui/SwiperNewsSlider";
import SecondaryCard from "../ui/cards/secondaryCard";

const MostImportant = async ({ Link, id }) => {
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
  const ImportantNewsSlider = await fetchNewsSlider();

  return (
    lastNews.length != 0 &&
    ImportantNewsSlider.length != 0 && (
      <>
        <div className=" grid gap-4">
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">مهم ترین ها</p>
            {/* <Link href={`/news/mostImportant`} className="font-semibold text-[14px] text-[#713FC2] flex gap-1  cursor-pointer">
            مشاهده همه
            {leftArrow}
          </Link> */}
          </div>
          <div className="grid grid-cols-10 gap-6">
            <div className="col-span-10 lg:col-span-5 xl:col-span-4 rounded-2xl">
              <SwiperNewsSlider items={ImportantNewsSlider} />
            </div>
            <div className="col-span-10 lg:col-span-5 xl:col-span-6 grid grid-cols-1 gap-6">
              {lastNews.map((item, key) => {
                return (
                  <div key={key} className="">
                    <SecondaryCard
                      link={`/${Link}/` + item.slug}
                      key={key}
                      title={item.title.rendered}
                      date={moment(item.date).format("jYYYY,jMM,jDD")}
                      description={item.excerpt.rendered}
                      image={
                        item._embedded?.["wp:featuredmedia"]?.[0]?.source_url
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="h-[1px] border-[#E9EAEB] my-16" />
      </>
    )
  );
};
export default MostImportant;
