import EmailSection from "../../../components/sections/emailSection";
import Header from "../../../components/sections/header";
import New from "./blogs";

const Blog = () => {
  return (
    <>
      {" "}
      <div className="px-[6%] ">
        <Header title="بلاگ" description="مطالعه کن، معامله کن، موفق شو!" />
        <New categoryType={"blog"} catId={61} />
      </div>
      <EmailSection />
    </>
  );
};
export default Blog;
