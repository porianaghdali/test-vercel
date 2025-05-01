"use client";
import { useState } from "react";
import { CirclePlus, CircleMinus } from "lucide-react";
const SelectedQuestion = () => {
  const [showItem, setShowItem] = useState(null);

  const questions = [
    {
      title: "چطور می‌توانم از خدمات حسنیکال استفاده کنم؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید. پس از ایجاد حساب کاربری، به تمامی ابزارها و محتوای آموزشی دسترسی خواهید داشت.",
    },
    {
      title: "از کجا باید شروع کنم؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: " آیا پشتیبانی و مشاوره آنلاین برای من فراهم است؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title:
        "چگونه می‌توانم از تحلیل‌های لحظه‌ای و ابزارهای حرفه‌ای بهره‌مند شوم؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: " آیا حسنیکال برای افراد مبتدی مانند من مناسب است؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
    {
      title: "از کجا می‌توانم هزینه‌ها و تعرفه‌های اشتراک را ببینم؟",
      description:
        "برای بهره‌مندی از خدمات ما کافی‌ است در پلتفرم‌های Pro Trader، Tradology، Signalist یا Hesnical Academy ثبت نام کنید.",
    },
  ];

  return (
    <div className=" ">
      {questions.map((item, key) => (
        <div key={key} className="py-2">
          <button
            className="flex items-center justify-center py-3 gap-8"
            aria-expanded={showItem === key}
            onClick={() => setShowItem(showItem === key ? null : key)}
          >
            <span>
              {showItem !== key ? (
                <CirclePlus size={24} color="#A4A7AE" />
              ) : (
                <CircleMinus size={24} color="#A4A7AE" />
              )}
            </span>
            <span className="">
              <p className="text-start text-sm md:text-bae  lg:text-lg text-[#181D27] font-medium">
                {item.title}
              </p>
              <p
                className={`text-start text-sm md:text-bae  lg:text-lg text-[#535862] overflow-hidden transition-[opacity,max-height] duration-500 ease-in-out ${
                  showItem === key
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                {item.description}
              </p>
            </span>
          </button>
          <hr className="border-b-[1px] border-[#E9EAEB]" />
        </div>
      ))}
    </div>
  );
};

export default SelectedQuestion;
