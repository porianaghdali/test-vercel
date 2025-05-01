"use client";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FAQItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openStates, setOpenStates] = useState<boolean[]>(items.map(() => false));

  const toggle = (index: number) => {
    const updated = [...openStates];
    updated[index] = !updated[index];
    setOpenStates(updated);
  };

  return (
    <div className="lg:max-w-4/5 mx-auto lg:mt-15 mt-10">
      <p className="relative text-center text-white font-medium lg:font-semibold text-[14px] lg:text-[18px] overflow-hidden mb-8 lg:mb-12">
        <span className="relative inline-block px-2 before:content-[''] before:absolute before:top-1/2 before:right-full before:w-screen before:h-[1px] before:bg-[#ccc] before:translate-y-1/2
                                    after:content-[''] after:absolute after:top-1/2 after:left-full after:w-screen after:h-[1px] after:bg-[#ccc] after:translate-y-1/2">
          سوالات متداول
        </span>
      </p>
      <div className="w-full lg:px-20 mx-auto">
        {items.map((item, index) => {
          const isOpen = openStates[index];
          return (
            <div
            key={index}
            className={`overflow-hidden transition-all duration-300 ${index !== items.length - 1 ? "border-b border-[#22262F]" : ""} py-6`}
          >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-start items-center px-4 py-3 text-white font-medium focus:outline-none"
              >
                   <span className="transition-transform duration-300 ml-1 ml-6">
                  {isOpen ?
                   <CircleMinus className="text-[#85888E]" /> 
                   :
                   <CirclePlus className="text-[#85888E]" />
                  }
                </span>
                <span className="text-[#AD9AEB] font-medium text-[12px] lg:text-[18px]">{item.question}</span>
             
              </button>

              <div
                className={`px-4 lg:text-[16px] text-[12px] text-[#94979C] transition-all duration-300 ease-in-out grid ${isOpen ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr] py-0"
                  }`}
              >
                <div className="overflow-hidden lg:pr-13 pr-8">
                  {item.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
