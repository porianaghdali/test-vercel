import SelectedQuestion from "./selectedQuestion";

const Questions = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-5 p-16 border-[1px] rounded-2xl gap-x-30 gap-y-8 bg-[#FBFCFF] border-[#D5D7DA]">
        <div className="col-span-5 lg:col-span-2">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mb-3">سوالات متداول</p>
          <p className=" text-justify  mb-6 text-sm md:text-base  lg:text-lg ">
            پرسش‌‌های متداول به شما کمک می‌کند تا به راحتی به پاسخ سوالات
            پرتکرار دسترسی پیدا کنید و از خدمات حسنیکال بهره‌مند شوید. در صورت
            داشتن هرگونه پرسش بیشتر، تیم پشتیبانی ما همواره آماده پاسخگویی به
            شماست.{" "}
          </p>
        </div>
        <div className="col-span-5 lg:col-span-3 grid gap-6">
          <div>
            <SelectedQuestion/>
          </div>
        </div>
      </div>
    </>
  );
};
export default Questions;
