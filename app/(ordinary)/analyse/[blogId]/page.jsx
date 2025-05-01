


import { Calendar, Eye, FileText } from "lucide-react";
import Image from "next/image";
import moment from "moment-jalaali";
import { notFound } from "next/navigation";

import OtherBlogs from "./otherBlogs";


const convertToJalali = (date) => moment(date).format("jYYYY/jMM/jDD");




export async function generateStaticParams() {
  const res = await fetch(
    "https://admin.hesnical.com/wp-json/wp/v2/posts?_fields=slug&categories=60&per_page=100",
    { next: { revalidate: 180 } }
  );

  if (!res.ok) return [];

  const posts = await res.json();

  return posts.map((post) => ({
    blogId: post.slug,
  }));
}


export async function generateMetadata() {
  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function BlogPage({ params }) {
  const { blogId } = params; // اینجا هم نیازی به await نبود

  if (!blogId) return notFound();

  const res = await fetch(
    `https://admin.hesnical.com/wp-json/wp/v2/posts?slug=${blogId}&_embed`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) return notFound();

  const posts = await res.json();
  const post = posts[0];


  if (!post) return notFound();

 
  
  
  return (
    <main className="px-[6%] mt-16 lg:mt-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="col-span-2">
          {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
            <div className="mb-6">
              <Image
                width={1132}
                height={603}
                src={post._embedded["wp:featuredmedia"][0].source_url}
                alt={post.title.rendered}
                className="w-full h-full rounded-lg border-2"
              />
            </div>
          )}

          <div className="grid gap-4 pb-5 border-b border-[#E9EAEB]">
            <h1 className="text-lg md:text-xl lg:text-3xl font-semibold">{post.title.rendered}</h1>
            <div className="flex items-center justify-end">
              <div className="pl-3 border-l">حسنیکال</div>
              <div className="flex font-ravifanum gap-7 pr-3">
                <div className="font-medium text-xs flex gap-1 items-center">
                  <Calendar size={16} />
                  <p>{convertToJalali(post.date_gmt)}</p>
                </div>
                <div className="font-medium text-xs flex gap-1 items-center">
                  <Eye size={16} />
                  <p>43</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 my-4 pb-5 border-b border-[#E9EAEB]">
            <div className="flex gap-2">
              <FileText size={24} color="#181D27" />
              <p>آنچه در این مقاله می‌خوانید</p>
            </div>
            <ul className="list-disc grid gap-4 px-12 text-[#414651] text-sm lg:text-base font-medium">
        
            </ul>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            className="prose
              [&_button]:border [&_button]:border-[#CABEF4]
              [&_button]:mx-auto lg:[&_button]:mx-0
              [&_button]:w-fit [&_button]:text-[#713FC2]
              [&_button]:font-medium [&_button]:text-[14px] lg:[&_button]:text-[16px]
              [&_button]:py-2 [&_button]:px-3 lg:[&_button]:px-4 lg:[&_button]:py-2.5
              [&_button]:rounded-[8px] hover:[&_button]:bg-[#F6F5FD]
              [&_button]:transition-all [&_button]:duration-300 [&_button]:ease-out
              [&_p]:mb-4 [&_p]:leading-9
              [&_h2]:mb-4
              [&_a]:text-[#713FC2] [&_a]:font-semibold
              [&_table]:table-auto [&_table]:border-collapse [&_table]:border [&_table]:border-gray-400
              [&_td]:border [&_td]:border-gray-300 [&_td]:p-2
              [&_table]:w-full [&_table]:mb-4
              [&_td_p]:!text-right [&_td_]:!text-right
              [&_h1]:text-[2em] [&_h1]:font-bold
              [&_h2]:text-[1.5em] [&_h2]:font-bold
              [&_h3]:text-[1.17em] [&_h3]:font-bold
              [&_h4]:text-[1em] [&_h4]:font-bold
              [&_h5]:text-[0.83em] [&_h5]:font-bold
              [&_h6]:text-[0.67em] [&_h6]:font-bold"
          />

         

          <div>
            {/* <Comments /> */}
          </div>
        </div>

        <div className="col-span-1">
          <OtherBlogs />
        </div>
      </div>
    </main>
  );
}
