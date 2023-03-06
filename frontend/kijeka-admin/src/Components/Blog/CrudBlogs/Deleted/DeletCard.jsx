import React, { useState } from "react";
import RecoverSvg from "./RecoverSvg";
const DeleteCard = () => {
  const [current, setCurrent] = useState(false);

  const handleOnClick = () => {
    setCurrent((prev) => !prev);
  };
  // 229 h
  return (
    <>
      <div className="flex flex-col group w-[474px] overflow-hidden h-[229px] rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_20px_rgba(166,166,166,0.5)] border-[2px] hover:border-[#004B95]  ">
        <div className="cursor-pointer  gap-[10px] h-[250px] flex justify-between   ">
          <img
            className="w-[200.59px]  "
            src={require("../../../../images/BlogImage.png")}
            alt="/"
          />
          <div className="pr-[22px]">
            <div className="flex justify-between pt-[10px]">
              <p className="font-semibold text-[16px] w-[210px] text-left leading-[22px] tracking-[5%] duration-300 group-hover:scale-90">
                Drum handling Equipments Give better experience in work.{" "}
              </p>
              <div className=" flex justify-center items-center flex-col gap-4 mr-[2px] mb-[15px]  duration-300  opacity-0  group-hover:opacity-100">
                <RecoverSvg />
                <svg
                  onClick={handleOnClick}
                  width={19}
                  height={21}
                  viewBox="0 0 19 21"
                  fill={current === false ? "none" : "red "}
                >
                  <path
                    d="M16.3249 7.54004C16.3249 7.54004 15.7819 14.275 15.4669 17.112C15.3169 18.467 14.4799 19.261 13.1089 19.286C10.4999 19.333 7.88791 19.336 5.27991 19.281C3.96091 19.254 3.13791 18.45 2.99091 17.119C2.67391 14.257 2.13391 7.54004 2.13391 7.54004"
                    stroke={current === false ? "#004B95" : "red "}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.7082 4.31152H0.750244"
                    stroke={current === false ? "#004B95" : "red "}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.4407 4.31127C13.6557 4.31127 12.9797 3.75627 12.8257 2.98727L12.5827 1.77127C12.4327 1.21027 11.9247 0.822266 11.3457 0.822266H7.1127C6.5337 0.822266 6.0257 1.21027 5.8757 1.77127L5.6327 2.98727C5.4787 3.75627 4.8027 4.31127 4.0177 4.31127"
                    stroke={current === false ? "#004B95" : "red "}
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <p className="relative top-[-17px] font-poppins group-hover:transform group-hover:scale-95  duration-300  text-left text-[10px] pt-[5px] tracking-[6%] font-medium w-[250px] overflow-hidden h-[97.67px]  ">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here'making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text,
            </p>
          </div>
        </div>
        <div className=" relative left-[352px] top-[-1px] group-hover:translate-y-[-42px] flex items-center gap-2 ease-out duration-300  ">
          <button className="text-center bg-[#37A945] text-[13px] tracking-[6%] leading-[26.72px] font-semibold text-[#FFFFFF] font-poppins rounded-[5px] w-[111px] h-[34px]">
            Publish
          </button>
        </div>
        <div className="flex items-center justify-center rounded-[10px_0px_0px_10px] bg-[rgba(217,217,217,0.1)] backdrop-blur-sm w-[200px] h-[51px] group-hover:translate-y-[-84px] translate-y-[55px] ease-out duration-300  ">
          <img
            className="object-cover object-center w-[64px] h-[62.51px]   rounded-full shadow-[#D8D8D880]  "
            src={require("../../../../images/creatoricon.png")}
            alt="/"
          />
          <div className="pl-[13px]">
            <p className="font-poppins font-medium text-[16px] leading-[24px] tracking-[5%] text-[#FFFFFF]">
              Davit Hodžić
            </p>
            <p className="font-poppins font-medium text-[8px]  leading-[12px] tracking-[5%] text-[#FFFFFF] ">
              30 Jan 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteCard;
