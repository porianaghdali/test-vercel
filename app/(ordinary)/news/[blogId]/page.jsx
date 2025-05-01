
  import {  Calendar, Eye, FileText } from "lucide-react";
  import Image from "next/image";
  import moment from "moment-jalaali";
  import { notFound } from "next/navigation";


  import OtherBlogs from "./otherBlogs";

  
  const convertToJalali = (date) => moment(date).format("jYYYY/jMM/jDD");
  
  // export async function generateStaticParams() {
  //   const res = await fetch(
  //     "https://admin.hesnical.com/wp-json/wp/v2/posts?_fields=slug&categories=1&per_page=100",
  //     { next: { revalidate: 180 } }
  //   );
  
  //   if (!res.ok) return [];
  
  //   const posts = await res.json();
  
  //   return posts.map((post) => ({
  //     blogId: post.slug,
  //   }));
  // }
  
  export async function generateMetadata() {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }
  

  export default async function BlogPage({ params }) {
    const { blogId } = params;
  
    if (!blogId) return notFound();
  
console.log('%capp\(ordinary)\news\[blogId]\page.jsx:42 blogId', 'color: #007acc;', blogId);

    
    const res = await fetch(
      `https://admin.hesnical.com/wp-json/wp/v2/posts?slug=${blogId}&_embed`,
      { 
        next: {
          revalidate: 60, // Revalidate every 60 seconds
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
                  src={post._embedded["wp:featuredmedia"][0]?.source_url}
                  alt={post.title?.rendered}
                  className="w-full h-full rounded-lg border-2"
                />
              </div>
            )}
  
            <div className="grid gap-4 pb-5 border-b border-[#E9EAEB]">
              <h1 className="text-lg md:text-xl lg:text-3xl font-semibold">
                {post.title.rendered}
              </h1>
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
                [...استایل‌هایی که گذاشتی]
              "
            />

  
            <div>{/* <Comments /> */}</div>
          </div>
  
          <div className="col-span-1">
            <OtherBlogs />
          </div>
        </div>
      </main>
    );
  }
  