// import Important from "./sections/important/important";
import Header from "../../../components/sections/header";
import EmailSection from "../../../components/sections/emailSection";
import MostImportant from "../../../components/sections/mostImportant";
import Filter from "../../../components/sections/filter";
import Latest from "../../../components/sections/latest";
import Newest from "../../../components/sections/Newest";

const News = () => {
  return (
    <>
      <div className="px-[6%]">
        <Header title="اخبار" description="باخبر بمانید، هوشمند معامله کنید" />
        {/* <Filter /> */}
        <Newest Link="news" id={1} />
        <MostImportant Link="news" id={1} />
        <Latest Link="news" title="آخرین اخبار" id={1} />
      </div>
      <EmailSection />
    </>
  );
};
export default News;
