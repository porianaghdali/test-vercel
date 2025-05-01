

import { Search } from "lucide-react";

const Filter=()=>{
    return(
        <> <div className="grid grid-cols-3 justify-between   px-7 py-5   border-b-[1px]  border-[#E9EAEB] mb-16">
                  <div className="col-span-1 flex gap-5">
                    <select
                      defaultValue=""
                      className="py-2 px-3 border border-[#D5D7DA] rounded-[12px] w-full"
                    >
                      <option value="" disabled hidden>
                        نوع نماد
                      </option>
                      <option value="1">گزینه ۱</option>
                      <option value="2">گزینه ۲</option>
                    </select>
        
                    <select
                      defaultValue=""
                      className="py-2 px-3 border border-[#D5D7DA] rounded-[12px] w-full"
                    >
                      <option value="" disabled hidden>
                        نوع محتوا
                      </option>
                      <option value="1">گزینه ۱</option>
                      <option value="2">گزینه ۲</option>
                    </select>
                  </div>
                  <div className="col-span-1"></div>
                  <div className="col-span-1 relative ">
                    <span className=" absolute top-[50%] translate-y-[-50%] right-4">
                    <Search size={20} color="#717680" />                    </span>
                    <input
                      placeholder="جستجو"
                      className=" pl-4 py-2 pr-10  border-[1px] border-[#D5D7DA] rounded-[12px] w-full"
                      type="text"
                    />
                    <button className=" absolute top-[50%] translate-y-[-50%] left-4 bg-[#8658D7] p-1.5 rounded-[6px] cursor-pointer">
                    <Search color="white" size={16} />                    </button>
                  </div>
                </div>{" "}
        </>
    )
}
export default Filter