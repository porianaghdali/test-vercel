'use client'
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type FinishState = {
  success?: boolean;
  details?: string;
};

export default function Step4({ isFinished, finishState }: { isFinished: boolean, finishState: FinishState }) {
  if (!isFinished) {
    return (
      <p className="text-[#CABEF4] text-center font-semibold text-[14px] lg:text-[24px] mb-1 lg:mb-2">
        لطفا چند لحظه صبر کنید...
      </p>
    );
  }

  // ✅ حالت موفقیت‌آمیز
  if (finishState?.success) {
    return (
      <>
        <p className="text-[#CABEF4] text-center font-semibold text-[14px] lg:text-[24px] mb-1 lg:mb-2">
          ثبت‌نام شما با موفقیت انجام شد!
        </p>
        <p className="text-[#CECFD2] text-center font-medium text-[12px] lg:text-[20px] lg:mb-6 mb-4">
          کارشناسان ما در حسنیکال به‌زودی برای شروع آموزش و مشاوره با شما تماس خواهند گرفت.
        </p>
        <div className="flex">
          <Link
            href="/education"
            className="
              flex mx-auto
              px-3 lg:px-4 py-2 lg:py-3
              text-[#FFFFFF] text-[14px] font-semibold
              rounded-[8px]
              border border-[#373A41]
              hover:bg-[#713FC2] transition-all duration-300 ease-out
              bg-[#8658D7]"
          >
            بازگشت به صفحه اصلی
            <ArrowLeft className="ml-2" />
          </Link>
        </div>
      </>
    );
  }

  // ❌ حالت ایمیل تکراری
  if (finishState?.details === "ER_DUP_ENTRY") {
    return (
      <p className="text-[#FF6B6B] text-center font-semibold text-[14px] lg:text-[20px]">
        این ایمیل قبلاً ثبت شده است.
      </p>
    );
  }

  // ❌ سایر خطاها
  return (
    <p className="text-[#FF6B6B] text-center font-semibold text-[14px] lg:text-[20px]">
      خطایی در ثبت‌نام رخ داده است. لطفاً بعداً دوباره تلاش کنید.
    </p>
  );
}
