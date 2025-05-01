"use client";
import Image from "next/image";
import React from "react";

type StepProgressProps = {
  steps: string[];
  finish:boolean;
  currentStep: number; // index-based, starting from 1
  onStepChange?: (step: number) => void; // optional callback
};

export default function StepIndicator({ steps, currentStep, onStepChange,finish }: StepProgressProps) {
  return (
    <div className="flex flex-col gap-4 w-full mb-12 lg:mb-16">
      <div className="flex justify-between items-start w-full relative">
        {steps.map((label, index) => {
          const stepNumber = index + 1;
          const isPassed = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          let circleBg = "transparent border-[2px] rounded-full border-[#22262F] p-[2px]";
          let lineColor = "bg-[#61656C]";
          if (isPassed || finish ) {
            circleBg = "bg-[#9270E2]";
            lineColor = "bg-[#8658D7]";
          } else if (isActive) {
            circleBg = "transparent border-[2px] rounded-full border-[#8658D7] p-[2px]";
            lineColor = "bg-[#CABEF4]";
          }

          const handleClick = () => {
            if (isPassed && onStepChange) {
              onStepChange(stepNumber);
            }
          };

          return (
            <div
              key={index}
              className={`flex-1 text-center relative ${isPassed ? 'cursor-pointer' : ''}`}
              onClick={handleClick}
            >
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold text-sm z-10 relative transition-all duration-500 ease-in-out ${circleBg}`}
              >
                {isPassed || finish? (
                  <Image
                    src={'/images/icons/Tick.svg'}
                    width={20}
                    height={17.5}
                    alt="passed"
                    className="transition-opacity duration-300 ease-in-out opacity-100"
                  />
                ) : isActive ? (
                  <span className="w-full h-full bg-[#8658D7] rounded-full flex items-center justify-center">
                  <span className="size-[6px] lg:size-[12px] bg-white flex rounded-full animate-ping"></span>
                </span>
                ) : (
                  <span className="w-full h-full bg-[#22262F] rounded-full flex items-center justify-center transition-all duration-300">
                    <span className="size-[6px] lg:size-[12px] bg-[#61656C] flex rounded-full"></span>
                  </span>
                )}
              </div>
              <p className="lg:text-[16px] lg:font-semibold font-medium text-[12px] mt-2 text-[#CECFD2]">{label}</p>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-5 right-1/2 w-full h-[2px] ${lineColor} transition-all duration-500`}
                ></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
