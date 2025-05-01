
"use client";

import { useEffect, useState } from "react";
import RelatedArticle from "../../../../components/ui/cards/relatedArticleCard";
import { ArrowLeft, ArrowRight } from "lucide-react";

const POSTS_PER_PAGE = 4;

async function fetchNews(page, category) {
  const offset = (page - 1) * POSTS_PER_PAGE;
  const res = await fetch(
    `https://admin.hesnical.com/wp-json/wp/v2/posts?categories=${category}&per_page=${POSTS_PER_PAGE}&offset=${offset}&_embed`
  );
  if (!res.ok) throw new Error("Failed to fetch news");

  const total = res.headers.get("X-WP-Total") || "0";
  const totalPages = Math.ceil(parseInt(total) / POSTS_PER_PAGE);
  const data = await res.json();
  return { data, totalPages };
}

const OtherBlogs = () => {
  const [list, setList] = useState("popular");
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const category = list === "new" ? 69 : 70;

  const loadPosts = async (page) => {
    try {
      const { data, totalPages } = await fetchNews(page, category);
      setPosts(data);
      setTotalPages(totalPages);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    loadPosts(currentPage);
  }, [currentPage, list]); // وقتی لیست تغییر کنه، دوباره fetch می‌کنه

  return (
    <div className="grid gap-2 ">
      <div className="flex gap-1">
        <button
          onClick={() => {
            setCurrentPage(1);
            setList("popular");
          }}
          className={
            list === "popular"
              ? "px-3 py-2 rounded-md bg-[#F6F5FD] text-[#713FC2] text-sm font-semibold leading-5"
              : "px-3 py-2 rounded-md text-[#717680] text-sm font-semibold leading-5"
          }
        >
          محبوب‌ترین‌ها
        </button>
        <button
          onClick={() => {
            setCurrentPage(1);
            setList("new");
          }}
          className={
            list === "new"
              ? "px-3 py-2 rounded-md bg-[#F6F5FD] text-[#713FC2] text-sm font-semibold leading-5"
              : "px-3 py-2 rounded-md text-[#717680] text-sm font-semibold leading-5"
          }
        >
          جدیدترین‌ها
        </button>
      </div>

      <div className="rounded-2xl border border-[#D5D7DA] bg-[#FAFAFA] mb-4 p-3">
        <div>
          {posts.map((item, key) => (
            <div key={key}>
              <RelatedArticle bg="#FAFAFA" post={item} header={false} />
            </div>
          ))}
        </div>

        <div className="flex justify-between w-3/4 mx-auto mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className="p-2 border rounded-lg bg-white disabled:opacity-50"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05)",
            }}
          >
            <ArrowRight size={20} color="#414651" />
          </button>
          <div className="grid items-center">
            <p className="text-[#414651] text-sm leading-5">
              صفحه {currentPage} از {totalPages}
            </p>
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className="p-2 border rounded-lg bg-white disabled:opacity-50"
            style={{
              boxShadow:
                "0px 0px 0px 1px rgba(10, 13, 18, 0.18) inset, 0px -2px 0px 0px rgba(10, 13, 18, 0.05) inset, 0px 1px 2px 0px rgba(10, 13, 18, 0.05)",
            }}
          >
            <ArrowLeft size={20} color="#414651" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtherBlogs;
