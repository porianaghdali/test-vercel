import { CircleHelp, ThumbsDown, ThumbsUp } from "lucide-react";
import CustomInput from "../../../../components/ui/inputs/input";
import CommentCard from "../../../../components/ui/cards/commentCard";

const Comments = () => {
  const array = [
    {
      name: "پوریا",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
      like: 22,
      disLike: 14,
      date: "1403/12/12",
    },
    {
      name: "محسن",
      comment: "لورم ایپسوم مولوژی مورد نیاز",
      like: 221,
      disLike: 142,
      date: "1403/12/12",
    },
    {
      name: "رضا",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز",
      like: 42,
      disLike: 14,
      date: "1404/12/12",
    },
    {
      name: "علی",
      comment:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنانلوژی مورد نیاز",
      like: 22,
      disLike: 14,
      date: "1402/12/12",
    },
  ];
  return (
    <div className="font-ravifanum " >
      <p className="text-lg md:text-xl  lg:text-2xl xl:text-4xl font-semibold text-black">نظرات</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="border-l pl-6 h-fit">
          <p className="font-semibold lg:font-bold text-sm  md:text-lg mb-4">ثبت دیدگاه</p>
          <p className="font-semibold lg:font-bold text-sm  md:text-lg text-[#079455] mb-2.5">
            70 % کاربران این مقاله را دوست داشتند{" "}
          </p>
          <p className="font-medium text-base text-[#414651] mb-4">
            شما میتوانید با ثبت دیدگاه خود مارا در بهبود انتشار مقالات یاری
            نمایید.
          </p>
          <CustomInput
            placeholder="نام و نام خانوادگی"
            label="نام و نام خانوادگی"
            required={false}
            id={2}
          />
          <CustomInput
            placeholder="ایمیل"
            label="ایمیل"
            required={false}
            id={2}
          />

          <div className="grid gap-1.5 mb-3">
            <label
              className=" text-[#414651] text-sm font-medium flex gap-1"
              htmlFor="des"
            >
              ثبت دیدگاه
              <CircleHelp size={16} color="#A4A7AE" />
            </label>
            <textarea
              style={{ resize: "none" }}
              name="des"
              id=""
              placeholder="توضیحات را وارد کنید..."
              className="h-32 w-full py-2.5 px-3.5 border border-[#D5D7DA] rounded-lg outline-[#9270E2]"
            ></textarea>
          </div>
          <div className="flex justify-between items-center ">
            <button className="py-2.5 px-3.5 rounded-lg border border-[rgba(255, 255, 255, 0.12)] text-sm font-semibold bg-[#8658D7] text-white">
              ثبت دیدگاه
            </button>
            <div className="flex gap-4  items-center">
              <button className="p-2.5 rounded-md border shadow-sm"><ThumbsUp size={20} color="#A4A7AE"/></button>
              <button className="p-2.5 rounded-md border shadow-sm"><ThumbsDown size={20} color="#A4A7AE"/> </button>
            </div>
          </div>
        </div>
        <div className="h-[580px] ">
          <p className="font-semibold lg:font-bold text-sm  md:text-lg mb-4">
            {" "}
            نظرات کاربران در مورد این مقاله
          </p>
          <div className="grid gap-4 h-[500px] overflow-scroll">
            {array.map((item, key) => {
              return (
                <div key={key}>
                  <CommentCard
                    name={item.name}
                    date={item.date}
                    comment={item.comment}
                    like={item.like}
                    disLike={item.disLike}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Comments;
