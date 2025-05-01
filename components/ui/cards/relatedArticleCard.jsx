import { ArrowLeft } from "lucide-react";

const RelatedArticle = ({ post, bg = "#F6F5FD", header = true, }) => {
  return (
    <a href={`/blog/` + post?.slug}>
      <div
        className=" rounded-2xl py-3 px-2 lg:p-4 grid gap-3 mb-3"
        style={{ backgroundColor: bg }}
      >
        {header && (
          <p className="text-lg lg:text-2xl font-semibold p-0 !m-0 !leading-none">
            {" "}
            مقاله ی مرتبط{" "}
          </p>
        )}
        <div className="flex gap-3">
          <img
            width={1132}
            height={603}
            src={post?._embedded["wp:featuredmedia"][0]?.source_url}
            alt={post?.title?.rendered}
            className="w-28 h-22 lg:w-36 lg:h-28 rounded-lg border-2"
          />
          <div className="">
            <p
              className="text-sm lg:text-base font-semibold !leading-6 text-[#181D27] !m-0  line-clamp-1"
            >
              {post.title.rendered}{" "}
            </p>
            <div
              dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}
              className="text-xs lg:text-sm text-[#535862] [&_p]:!leading-5 !m-1 [&_p]:line-clamp-2 [&_p]:!m-0
          
          "
            />
          </div>
        </div>
      </div>
    </a>
  );
};
export default RelatedArticle;
