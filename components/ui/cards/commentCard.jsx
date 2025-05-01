import { Calendar, ThumbsDown, ThumbsUp } from "lucide-react";

const CommentCard = ({ name, comment, date,like,disLike }) => {
  return (
    <div className=" border border-[#D5D7DA] rounded-2xl bg-[#FAFAFA] p-4 ">
      <p className="font-semibold text-base leading-6 text-black mb-2">
        {name}
      </p>
      <p className="font-medium text-sm text-[#414651] leading-5 mb-6">
        {comment}
      </p>
      <div className="flex justify-between">
        <div className="text-xs font-medium text-[#181D27] flex gap-2 items-center">
          <Calendar size={16} color="#181D27" />
          {date}
        </div>
        <div className="flex justify-between items-center gap-6 text-[#717680] ">
          <button className="flex gap-2 items-center">
            {" "}
            <ThumbsUp size={20} color="#717680" /> <p>{like} نفر</p>
          </button>
          <button className="flex gap-2 items-center">
            {" "}
            <ThumbsDown size={20} color="#717680" />
            <p>{disLike} نفر</p>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CommentCard;
