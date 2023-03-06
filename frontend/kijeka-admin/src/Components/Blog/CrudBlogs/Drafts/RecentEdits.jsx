import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper";
import EditCard from "./EditCard";
const RecentEdits = () => {
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
    <>
      <div className="flex justify-between items-center mt-[40px] mb-[8px]">
        <p className="text-[#004B95] font-poppins  font-bold not-italic text-[20px] leading-[30px] tracking-[10%] !pl-[20px] cursor-pointer ">
          Recents Edits
        </p>
        <p className="text-[#004B95] font-poppins  font-semibold not-italic text-[16px] leading-[24px] tracking-[3%] pr-[20px] cursor-pointer ">
          View All Blogs <hr className="border-[1px]  border-[#004B95] " />
        </p>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="mySwiper "
        >
          {array1.slice(0, 10).map((item) => {
            return (
              <SwiperSlide key={item.id} className="w-[500px]">
                <EditCard />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default RecentEdits;
