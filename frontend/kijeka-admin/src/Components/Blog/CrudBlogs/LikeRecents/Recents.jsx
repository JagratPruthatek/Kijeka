import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BlogsCardsClient from '../BlogsCardsClient';
const Recents = () => {
    const array1 = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        },
        {
            id: 5
        },
        {
            id: 6
        },
        {
            id: 7
        },
        {
            id: 8
        },
    ]
    return (
        <>
            <div className='flex justify-between items-center mt-[40px] mb-[8px] pl-4'>
                <p className='text-[#004B95] font-poppins  font-bold not-italic text-[20px] leading-[30px] tracking-[10%] cursor-pointer '>Recents</p>
                <p className='text-[#004B95] font-poppins  font-semibold not-italic text-[16px] leading-[24px] tracking-[3%] pr-[24px] cursor-pointer '>View All Blogs  <hr className='border-[1px]  border-[#004B95] ' /></p>
            </div>

            <div className='pl-4'>
                <Swiper className="mySwiper "
                    slidesPerView={2}
                    spaceBetween={10}
                >
                    {
                        array1.map((item) => {
                            return (
                                <SwiperSlide key={item.id}><BlogsCardsClient /></SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>




        </>
    )
}

export default Recents
