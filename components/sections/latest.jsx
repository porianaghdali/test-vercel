"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment-jalaali";
import { Loader } from "lucide-react";
import PrimaryCard from "../ui/cards/primaryCard";
const Latest = ({ id,title ,Link}) => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const [loadingState, setLoadingState] = useState(false); // Loading state for button

  const convertToJalali = (date) => moment(date).format("jYYYY/jMM/jDD");
 
  // Function to load posts
  const loadPosts = async (page = 1) => {
    setLoadingState(true);
    const response = await axios.get(
      "https://admin.hesnical.com/wp-json/wp/v2/posts?_embed",
      {
        params: {
          categories: id,
          per_page: 4,
          page: page, // Use the current page for pagination
        },
      }
    );
 
    const newPosts = response.data;

    if (page === 1) {
      setPosts(newPosts); // Reset posts for the first page
    } else {
      setPosts((prevPosts) => [...prevPosts, ...newPosts]); // Append new posts
    }

    setLoadingState(false);
  };

  // Load the first page of posts when component mounts
  useEffect(() => {
    loadPosts(currentPage);
  }, [currentPage]);

  // Handle the "Load More" button click
  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1); // Increment page number
  };
  return (
    <div className="grid gap-4 scroll-mt-[150px]" id="allNews">
      <div className="flex justify-between">
        <p className="text-2xl font-semibold">{title}</p>
      </div>

      {!posts?.length ? (
        <p>هیچ خبری موجود نیست.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {posts.map((item, key) => (
            <PrimaryCard
              link={`/${Link}/` + item.slug}
              key={key}
              title={item.title.rendered}
              date={convertToJalali(item.date)}
              description={item.excerpt.rendered}
              image={item._embedded?.["wp:featuredmedia"]?.[0].source_url}
            />
          ))}
        </div>
      )}

      {loadingState ? (
        <div className="flex justify-center">
          <span className="animate-spin mt-20 mb-10">
            <Loader size={20} color="#414651" />
          </span>{" "}
          {/* Optionally show a loading spinner */}
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            className="flex gap-2 mt-20 mb-10 cursor-pointer border border-[#D5D7DA] rounded-xl py-4 px-5"
          >
           
            مشاهده بیشتر
          </button>
        </div>
      )}
    </div>
  );
};

export default Latest;
