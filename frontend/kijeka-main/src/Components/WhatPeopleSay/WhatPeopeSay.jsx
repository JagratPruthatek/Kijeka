import React from 'react'
import Background2 from '../assets/images/background2.jpg';
import simage1 from '../assets/images/simage1.jpg';
import simage2 from '../assets/images/simage2.jpg';
import simage3 from '../assets/images/simage3.jpg';
import simage4 from '../assets/images/simage4.jpg';
import RevieStars from './RevieStars';
//import data from '../Datajson/data.json'

import { Navigation, Scrollbar, A11y } from 'swiper';
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Quotation from './Quotation';

SwiperCore.use([EffectCoverflow, Autoplay, Pagination]);




export const WhatPeopeSay = () => {


  return (
    <>
      <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group">
        <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-full duration-300 group"></div>
        <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">What People Say</h4>
      </div>

      <div
        style={{ backgroundImage: 'url(' + Background2 + ')', backgroundSize: 'auto', width: "100%" }}
      >

        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <div className='mx-auto mt-16 mb-10'>
              <div  className="max-w-md mx-auto py-4 w-[14rem] bg-[#D9D9D91A] border-4 border-[#787575] backdrop-blur-lg rounded-xl shadow-md overflow-hidden md:max-w-2xl lg:w-[100%] xl:w-[100%] md:w-[80%] 2xl:w-[100%]">
                <div  className="md:flex items-center">
                  <div  className="md:shrink-0">
                    <img  className="w-[4rem] ml-11 object-cover xl:w-[10rem] md:w-[8rem]" src={simage1} alt="Modern building architecture" />
                  </div>
                  <div  className="p-5">

                    {/*==========================Quotation=====================================  */}

                    <Quotation />

                    <p  className="mr-[2rem] ml-[1rem] text-[0.4rem] text-white xl:text-[0.9rem] md:text-[0.6rem]">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                    {/*==============review stars */}

                    <RevieStars />

                    <div className='flex space-x-0.5 pt-[0.5rem] xl:pt-[1rem] sm:pt-[0.5rem]  '>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>Anna fry</h3>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>20 jun 2020</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
            <div className='mx-auto mt-16 mb-10'>
              <div  className=" max-w-md mx-auto py-4 w-[14rem] bg-[#D9D9D91A] border-4 border-[#787575] backdrop-blur-lg  rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:w-[100%] md:w-[80%]">
                <div  className="md:flex items-center">
                  <div  className="md:shrink-0">
                    <img  className="w-[4rem] ml-11 object-cover xl:w-[10rem] md:w-[8rem]" src={simage2} alt="Modern building architecture" />
                  </div>
                  <div  className="p-5">
                    {/*==========================Quotation=====================================  */}

                    <Quotation />

                    <p  className="mr-[2rem] ml-[1rem] text-[0.4rem] text-white xl:text-[0.9rem] md:text-[0.6rem]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>

                    {/*==============review stars */}

                    <RevieStars />

                    <div className='flex space-x-0.5 pt-[0.5rem] xl:pt-[1rem] sm:pt-[0.5rem]  '>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>Jordan Ray</h3>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>10  March  2014</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
            <div className='mx-auto mt-16 mb-10'>
              <div  className=" max-w-md mx-auto py-4 w-[14rem] bg-[#D9D9D91A] border-4 border-[#787575] backdrop-blur-lg  rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:w-[100%] md:w-[80%]">
                <div  className="md:flex items-center">
                  <div  className="md:shrink-0">
                    <img  className="w-[4rem] ml-11 object-cover xl:w-[10rem] md:w-[8rem]" src={simage3} alt="Modern building architecture" />
                  </div>
                  <div  className="p-5">
                    {/*==========================Quotation=====================================  */}

                    <Quotation />

                    <p  className="mr-[2rem] ml-[1rem] text-[0.4rem] text-white xl:text-[0.9rem] md:text-[0.6rem]">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    {/*==============review stars */}

                    <RevieStars />

                    <div className='flex space-x-0.5 pt-[0.5rem] xl:pt-[1rem] sm:pt-[0.5rem]  '>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>Anna fry</h3>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>20 jun 2020</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </SwiperSlide>
          <SwiperSlide>
            <div className='mx-auto mt-16 mb-10'>
              <div  className=" max-w-md mx-auto py-4 w-[14rem] bg-[#D9D9D91A] border-4 border-[#787575] backdrop-blur-lg  rounded-xl shadow-md overflow-hidden md:max-w-2xl xl:w-[100%] md:w-[80%]">
                <div  className="md:flex items-center">
                  <div  className="md:shrink-0">
                    <img  className="w-[4rem] ml-11 object-cover xl:w-[10rem] md:w-[8rem]" src={simage4} alt="Modern building architecture" />
                  </div>
                  <div  className="p-5">
                    {/*==========================Quotation=====================================  */}

                    <Quotation />

                    <p  className="mr-[2rem] ml-[1rem] text-[0.4rem] text-white xl:text-[0.9rem] md:text-[0.6rem]">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                    {/*==============review stars */}

                    <RevieStars />

                    <div className='flex space-x-0.5 pt-[0.5rem] xl:pt-[1rem] sm:pt-[0.5rem]  '>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>Jordan Ray</h3>
                      <h3 className='text-white mr-[2rem] ml-[1rem] text-[0.4rem] xl:text-[0.8rem] sm:text-[0.7rem]'>10  March  2014</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>



      </div>


    </>
  )
}

export default WhatPeopeSay
