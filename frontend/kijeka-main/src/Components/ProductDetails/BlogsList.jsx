import React from "react";

const BlogsList = ({ listdData }) => {
  return (
    <div className="w-[378px] h-[929px] border-[#004B95] border-[1px] rounded-[10px]  ">
      <div className="w-[6px] ml-[70px] bg-[#004B95] hover:w-[240px] cursor-pointer  transition-all duration-500 mt-[43px] mb-[93px] text-center  font-poppins font-bold text-[#004B95] text-[28px] leading-[42px] hover:text-[white] hover:translate-x-1  ">
        <p className="pl-[30px]">Categories</p>
      </div>
      <div className=" flex justify-start pl-[20px] items-center relative border-[1px] border-[#004B95] rounded-[5px] h-[38px]  mx-[49px] ">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search here"
          className=" font-medium  leading-[30px]  outline-none focus:outline-none  tracking-[5%] text-[#004B95]  "
        />
        <i className="fa-solid fa-magnifying-glass text-[#004B95] relative"></i>
      </div>
      <div className="w-[376.85px] h-[664px] px-[40px] mt-[43px] overflow-y-scroll scrollbar-track-none">
        {listdData.map((item, index) => {
          return (
            <ul key={index} className>
              <li className="font-poppins font-medium text-[20px] leading-[30px] text-[#004B95] list-disc pb-[18px] pt-[12px] ">
                {item.listname}
              </li>
              <hr className=" border-[1px] border-[#80808099] " />
              {/* {<span><ul>
                                <li>Cylinder Carts</li>
                                <hr />
                                <li>Hand Carts/Wheel Barrows</li>
                                <hr />
                                <li>Platform Trucks</li>
                                <hr />
                            </ul></span>} */}
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;
