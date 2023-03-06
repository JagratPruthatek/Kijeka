import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";
import EditCard from "./EditCard";
import RecentEdits from "./RecentEdits";
import Goback from "./Goback";

const Drafts = () => {
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
      <div className="w-[calc(100vw-296px)]  pl-[2rem]">
        <div className="flex justify-between items-center pt-[40px] pb-[8px] ">
          <p className="text-[#004B95] font-poppins  font-bold not-italic text-[20px] leading-[30px] tracking-[10%] cursor-pointer ">
            Drafts
          </p>
          <p className="text-[#004B95] font-poppins  font-semibold not-italic text-[16px] leading-[24px] tracking-[3%] pr-[20px] cursor-pointer ">
            View All
            <hr className="border-[1px]  border-[#004B95] " />
          </p>
        </div>
        {/* SubHeading */}
        <div className="  flex  justify-between items-center">
          <div className="w-full mr-10 h-[198.2px] flex flex-col justify-center items-center  rounded-[10px]  bg-[#FFFFFF] shadow-[0px_4px_20px_rgba(166,166,166,0.5)]">
            {/* edit icon */}
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              stroke="#37A945"
            >
              <path
                d="M21.3802 1.91309H13.1354C6.35487 1.91309 2.10352 6.7135 2.10352 13.5095V31.8424C2.10352 38.6384 6.33503 43.4388 13.1354 43.4388H32.5929C39.3955 43.4388 43.627 38.6384 43.627 31.8424V22.9604"
                stroke="#004B95"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.505 19.8446L31.9834 3.36615C34.0363 1.31545 37.3637 1.31545 39.4166 3.36615L42.1002 6.04971C44.1531 8.10263 44.1531 11.4323 42.1002 13.483L25.5424 30.0408C24.6449 30.9382 23.4277 31.4432 22.1576 31.4432H13.8975L14.1047 23.1081C14.1356 21.8821 14.6362 20.7134 15.505 19.8446Z"
                stroke="#004B95"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.4795 5.91211L39.5478 15.9804"
                stroke="#004B95"
                stroke-width="3.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-semibold text-[18px] leading-[27px] tracking-[5%] text-[#004B95] font-poppins pt-[20px] cursor-pointer">
              Write New Blog
            </p>
          </div>
          <Swiper
            slidesPerView={1.7}
            spaceBetween={30}
            freeMode={true}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {array1.map((item) => {
              return (
                <SwiperSlide key={item.id} className="w-[500px]">
                  <EditCard />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <RecentEdits />
      </div>
    </div>
  );
};

export default Drafts;
