import React from "react";
import BlogsCardsClient from "../BlogsCardsClient";
import Goback from "../Drafts/Goback";
import DropDown from "../DropDown";

const Approved = () => {
  const array1 = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];
  return (
    <div className="px-12">
      <Goback />
      <div className="flex justify-between items-center p-6 ">
        <p className="font-bold text-[20px] leading-[30px] tracking-[10%] text-[#004B95] font-poppins cursor-pointer ">
          All Approved Blogs
        </p>
        <div className="flex justify-center items-center gap-6">
          <label
            htmlFor="recover"
            id=""
            className="text-[#004B95] font-poppins  font-semibold not-italic text-[16px] leading-[24px] tracking-[3%] cursor-pointer "
          >
            Select All
          </label>
          <input type="checkbox" name="" id="recover" />
          <span
            className="text-[20px] leading-[30px] tracking-[3.5%] text-[#808080] font-poppins cursor-pointer "
            style={{ letterSpacing: "3.5%" }}
          >
            Publish
          </span>
          <DropDown />

          <p className="text-[#004B95] font-poppins  font-semibold not-italic text-[16px] leading-[24px] tracking-[3%] cursor-pointer ">
            View All <hr className="border-[1px]  border-[#004B95] " />
          </p>
        </div>
      </div>
      <div className="grid  grid-cols-2 mt-[21px] gap-9 p-4 ">
        {array1.map((item) => {
          return <BlogsCardsClient key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Approved;
