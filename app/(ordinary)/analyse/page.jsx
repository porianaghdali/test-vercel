import Header from "../../../components/sections/header";
import EmailSection from "../../../components/sections/emailSection";
import MostImportant from "../../../components/sections/mostImportant";
import Filter from "../../../components/sections/filter";
import Latest from "../../../components/sections/latest";
import Newest from "../../../components/sections/Newest";


const Analyse = async() => {
  return (
    <>
      <div className="px-[6%]">
        <Header
          title="تحلیل"
          description="عددها حرف می‌زنند، ما ترجمه می‌کنیم"
        />
        {/* <Filter /> */}
        <Newest  id={68} Link="analyse"/>

        <MostImportant Link="analyse"
        id={67}
        />
        <Latest Link="analyse" title="آخرین تحلیل" id={60} />
      </div>
      <EmailSection />
    </>
  );
};
export default Analyse;
