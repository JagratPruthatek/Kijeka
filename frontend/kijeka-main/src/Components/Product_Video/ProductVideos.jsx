import React, { useEffect } from 'react'
import '../Product_Video/productvideo.css'
import Background from '../assets/images/Rectangle20.jpg';
import video1 from '../assets/images/Rectangle 31.jpg';
import video2 from '../assets/images/Rectangle 33.jpg';
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import "swiper/css/effect-coverflow";


//aos libarary
//import AOS from 'aos';
//import 'aos/dist/aos.css';


//

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([EffectCoverflow, Autoplay]);

const ProductVideos = () => {
    return (

        <>
            <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group mt-6">
                <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-full duration-300 group"></div>
                <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Product Videos</h4>
            </div>


            {/*====================swiper========================== */}


            <div
                style={{ backgroundImage: 'url(' + Background + ')', backgroundSize: 'auto', height: '400px', width: "100%", marginBottom: "2rem" }}
            >
                <Swiper
                    effect='coverflow'
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    loop={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCoverflow]}
                    className="mySwiper !pt-12"
                >
                    <SwiperSlide >
                        <div className=' w-[100%] text-center ' >
                            <img src={video2} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Drum Handling Equipments</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[100%] text-center ' >
                            <img src={video1} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Forklift</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className=' w-[100%] text-center ' >
                            <img src={video2} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Drum Handling Equipments</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-[100%] text-center ' >
                            <img src={video1} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Forklift</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[100%] text-center ' >
                            <img src={video2} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Drum Handling Equipments</h2>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-[100%] text-center ' >
                            <img src={video2} className="w-[360px] h-[240px] mx-auto pt-4 mt-6" />
                            <h2 className="font-bold text-white">Drum Handling Equipments</h2>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>

    )
}

export default ProductVideos

