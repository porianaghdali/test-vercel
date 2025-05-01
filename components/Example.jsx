"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

const DashboardPreview = () => {
  return (
    <div className="grid justify-center hidden lg:block">
      <div className="relative lg:w-[542px]  lg:h-[356px] flex items-center justify-center ">
        <motion.div
          className="absolute lg:w-[542px] lg:h-[356px] bg-white backdrop-blur-md rounded-2xl border border-white/20 flex items-center justify-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/home/landing/chart.png"
            width={500}
            height={176}
            alt="Chart"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 translate-x-[15rem] translate-y-[-4rem]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%) ",
              backdropFilter: "blur(22.320829391479492px)",
            }}
            className="w-[390px] h-[123px] border-[0.8px] border-white rounded-[18px] p-5 grid gap-3 shadow-2xl z-40"
          >
            <div className="flex justify-between sh">
              <div className="flex gap-2 items-center">
                <Image
                  alt=""
                  width={26}
                  height={27}
                  src="/images/home/landing/fire.png"
                ></Image>

                <p className="text-white">اخبار اوراق</p>
              </div>
              <p className="text-white">01:27:04</p>
            </div>
            <div
              style={{ backgroundColor: "rgba(255, 255, 255, 0.15)" }}
              className="w-25 h-4 rounded-4xl bg-[]"
            ></div>
            <div className="w-44 h-4 rounded-4xl bg-[#C3C8DD]"></div>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 translate-x-[-3rem] translate-y-[-5rem]  "
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              background: "linear-gradient(180deg, #F1F5F9 0%, #E1F0FF 100%)",
              backdropFilter: "blur(22.320829391479492px)",
            }}
            className="w-[235px] h-[118px] border-[0.8px] border-white rounded-[18px] p-5 grid gap-3 shadow-2xl"
          >
            <div className="flex justify-between items-end pt-8 ">
              <div className="flex gap-2 items-center">
                <div className="absolute top-0 left-0 trans translate-y-[-2rem] translate-x-[-2rem]">
                  <Image
                    alt=""
                    width={61}
                    height={61}
                    src="/images/home/landing/Avatars.png"
                  ></Image>
                </div>
                <svg
                  width="98"
                  height="37"
                  viewBox="0 0 98 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.899414 20.0367L1.83685 20.4508C2.77428 20.865 4.64914 21.6932 6.524 23.2746C8.39887 24.856 10.2737 27.1906 12.1486 29.097C14.0235 31.0034 15.8983 32.4817 17.7732 30.0563C19.648 27.6309 21.5229 21.3018 23.3978 21.923C25.2726 22.5443 27.1475 30.1158 29.0224 33.4463C30.8972 36.7768 32.7721 35.8661 34.647 34.8143C36.5218 33.7624 38.3967 32.5694 40.2715 29.3015C42.1464 26.0337 44.0213 20.691 45.8961 18.5491C47.771 16.4072 49.6459 17.4662 51.5207 15.5875C53.3956 13.7088 55.2705 8.89254 57.1453 7.03474C59.0202 5.17694 60.895 6.27765 62.7699 8.98025C64.6448 11.6829 66.5196 15.9874 68.3945 15.842C70.2694 15.6966 72.1442 11.1013 74.0191 10.747C75.8939 10.3927 77.7688 14.2793 79.6437 17.996C81.5185 21.7127 83.3934 25.2595 85.2683 22.6406C87.1431 20.0217 89.018 11.2371 90.8929 6.58293C92.7677 1.92873 94.6426 1.40492 95.58 1.14301L96.5174 0.881104"
                    stroke="#0092B3"
                    strokeWidth="1.39588"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div dir="ltr" className="text-white">
                <p className="text-[15px] text-black leading-7">$123,987</p>
                <p className="text-sm text-[#0092B3] leading-6">+$2560.78</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="absolute top-[-1rem] left-[-18rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="">
            <Image
              alt=""
              width={254.3}
              height={93.86}
              src="/images/home/landing/play.png"
            ></Image>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[-1rem] right-[-10rem] flex space-x-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white rounded-2xl    flex flex-col justify-between">
            <div className="p-4">
              <svg
                width="216"
                height="14"
                viewBox="0 0 216 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="134.481"
                  y="0.521484"
                  width="81.0212"
                  height="13.0142"
                  rx="6.5071"
                  fill="#F1F5F9"
                />
                <circle cx="3.02332" cy="7.28211" r="3.00477" fill="#2563EB" />
                <circle cx="17.5653" cy="7.28211" r="3.00477" fill="#24D164" />
                <circle cx="32.1073" cy="7.28211" r="3.00477" fill="#F6A723" />
              </svg>
            </div>
            <div className="bg-[#F7FAFE] w-full rounded-b-2xl ">
              <div className="flex justify-end px-3 pt-3">
                <svg
                  width="74"
                  height="23"
                  viewBox="0 0 74 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6.7793"
                    y="6.83667"
                    width="60.4035"
                    height="8.71383"
                    rx="4.35691"
                    fill="#EBF1F8"
                  />
                </svg>
              </div>
              <div className="grid grid-cols-3 px-3">
                <div>
                  <svg
                    width="60"
                    height="15"
                    viewBox="0 0 60 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.448242"
                      y="0.540039"
                      width="58.6583"
                      height="5.49922"
                      rx="2.74961"
                      fill="#F1F5F9"
                    />
                    <rect
                      x="0.448242"
                      y="10.4167"
                      width="51.8976"
                      height="3.77437"
                      rx="1.88718"
                      fill="#EBF1F8"
                    />
                  </svg>{" "}
                </div>
                <div dir="ltr" className="">
                  <p className="text-[11px] font-medium"> Net P&L</p>
                  <p className=" text-[9px] text-[#3AB67A]"> $27.649.61</p>
                </div>
                <div dir="ltr" className="">
                  <p className="text-[11px] font-medium"> Win rate </p>
                  <p className="text-[9px] text-[#484C56]"> 53.65%</p>
                </div>
              </div>
              <div className="grid grid-cols-3  px-3">
                <div className="flex justify-start">
                  <svg
                    width="60"
                    height="15"
                    viewBox="0 0 60 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.448242"
                      y="0.540039"
                      width="58.6583"
                      height="5.49922"
                      rx="2.74961"
                      fill="#F1F5F9"
                    />
                    <rect
                      x="0.448242"
                      y="10.4167"
                      width="51.8976"
                      height="3.77437"
                      rx="1.88718"
                      fill="#EBF1F8"
                    />
                  </svg>{" "}
                </div>
                <div dir="ltr" className=" ">
                  <p className="text-[9px] font-normal"> Missed trdes</p>
                  <p className=" text-[9px] text-[#484C56]"> 54</p>
                </div>{" "}
                <div className="flex justify-end">
                  <svg
                    width="60"
                    height="15"
                    viewBox="0 0 60 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.448242"
                      y="0.540039"
                      width="58.6583"
                      height="5.49922"
                      rx="2.74961"
                      fill="#F1F5F9"
                    />
                    <rect
                      x="0.448242"
                      y="10.4167"
                      width="51.8976"
                      height="3.77437"
                      rx="1.88718"
                      fill="#EBF1F8"
                    />
                  </svg>{" "}
                </div>
              </div>
              <div className="">
                <Image
                  className="rounded-b-2xl"
                  alt=""
                  width={243.386}
                  height={91.645}
                  src="/images/home/landing/LineGradient.png"
                ></Image>
              </div>
            </div>
          </div>
        </motion.div>{" "}
        <motion.div
          className="absolute bottom-[-4rem] left-[-10rem] flex space-x-4 shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%) ",
              backdropFilter: "blur(22.320829391479492px)",
            }}
            className="w-[279px] h-[269.739px] border-[0.8px] border-white rounded-[18px] p-5 grid gap-3"
          >
            <div className="grid justify-between gap-6">
              <div className="flex gap-2 items-center">
                <svg
                  width="235"
                  height="16"
                  viewBox="0 0 235 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="168.622"
                    y="0.434326"
                    width="65.899"
                    height="14.5929"
                    rx="7.29646"
                    fill="#C3C8DD"
                    fillOpacity="0.42"
                  />
                  <circle
                    cx="4.91958"
                    cy="5.37222"
                    r="4.63931"
                    fill="#2563EB"
                  />
                  <circle
                    cx="21.2067"
                    cy="5.37222"
                    r="4.63931"
                    fill="#24D164"
                  />
                  <circle
                    cx="37.4938"
                    cy="5.37222"
                    r="4.63931"
                    fill="#F6A723"
                  />
                </svg>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7609 2.73584H15.8157C16.6922 2.73584 17.395 3.44651 17.395 4.3151V15.3699C17.395 16.2385 16.6922 16.9492 15.8157 16.9492H4.7609C3.88441 16.9492 3.18164 16.2385 3.18164 15.3699V4.3151C3.18164 3.44651 3.88441 2.73584 4.7609 2.73584ZM4.76101 9.84251L8.70916 13.7907L15.8158 6.68399L14.7024 5.56272L8.70916 11.556L5.87439 8.72913L4.76101 9.84251Z"
                      fill="#AA8AE3"
                    />
                  </svg>

                  <Image
                    alt=""
                    width={39.5}
                    height={39.5}
                    src="/images/home/landing/Avatars.png"
                  ></Image>
                  <div>
                    <p className="text-[#3F3F3F] test-[10px]">علی</p>
                    <p className="text-[10px] text-[#535768]">ali@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7609 2.73584H15.8157C16.6922 2.73584 17.395 3.44651 17.395 4.3151V15.3699C17.395 16.2385 16.6922 16.9492 15.8157 16.9492H4.7609C3.88441 16.9492 3.18164 16.2385 3.18164 15.3699V4.3151C3.18164 3.44651 3.88441 2.73584 4.7609 2.73584ZM4.76101 9.84251L8.70916 13.7907L15.8158 6.68399L14.7024 5.56272L8.70916 11.556L5.87439 8.72913L4.76101 9.84251Z"
                      fill="#AA8AE3"
                    />
                  </svg>

                  <Image
                    alt=""
                    width={39.5}
                    height={39.5}
                    src="/images/home/landing/Avatars.png"
                  ></Image>
                  <div>
                    <p className="text-[#3F3F3F] test-[10px]">علی</p>
                    <p className="text-[10px] text-[#535768]">ali@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7609 2.73584H15.8157C16.6922 2.73584 17.395 3.44651 17.395 4.3151V15.3699C17.395 16.2385 16.6922 16.9492 15.8157 16.9492H4.7609C3.88441 16.9492 3.18164 16.2385 3.18164 15.3699V4.3151C3.18164 3.44651 3.88441 2.73584 4.7609 2.73584ZM4.76101 9.84251L8.70916 13.7907L15.8158 6.68399L14.7024 5.56272L8.70916 11.556L5.87439 8.72913L4.76101 9.84251Z"
                      fill="#AA8AE3"
                    />
                  </svg>

                  <Image
                    alt=""
                    width={39.5}
                    height={39.5}
                    src="/images/home/landing/Avatars.png"
                  ></Image>
                  <div>
                    <p className="text-[#3F3F3F] test-[10px]">علی</p>
                    <p className="text-[10px] text-[#535768]">ali@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7609 2.73584H15.8157C16.6922 2.73584 17.395 3.44651 17.395 4.3151V15.3699C17.395 16.2385 16.6922 16.9492 15.8157 16.9492H4.7609C3.88441 16.9492 3.18164 16.2385 3.18164 15.3699V4.3151C3.18164 3.44651 3.88441 2.73584 4.7609 2.73584ZM4.76101 9.84251L8.70916 13.7907L15.8158 6.68399L14.7024 5.56272L8.70916 11.556L5.87439 8.72913L4.76101 9.84251Z"
                      fill="#AA8AE3"
                    />
                  </svg>

                  <Image
                    alt=""
                    width={39.5}
                    height={39.5}
                    src="/images/home/landing/Avatars.png"
                  ></Image>
                  <div>
                    <p className="text-[#3F3F3F] test-[10px]">علی</p>
                    <p className="text-[10px] text-[#535768]">ali@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPreview;
