import React from "react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

//Components
import Page from "../Page/Page";
import Page2 from "../Page2/Page2";
import Page3 from "../Page3/Page3";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const BlogSlider = () => {
	return (
		<div className="relative mx-auto">
			<div className="box h-[3rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group my-6">
				<div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[10rem] duration-300 group"></div>
				<h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Blogs</h4>
			</div>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Scrollbar, A11y, Autoplay]}
				spaceBetween={50}
				slidesPerView={1}
				navigation={{
					prevEl: ".swiper-button-prev",
					nextEl: ".swiper-button-next",
				}}
				// scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				className="no-scrollbar"
			>
				<SwiperSlide className="!h-fit">
					<Page />
				</SwiperSlide>
				<SwiperSlide className="!h-fit">
					<Page2 />
				</SwiperSlide>
				<SwiperSlide className="!h-fit">
					<Page3 />
				</SwiperSlide>
			</Swiper>
			<div className="swiper-button-prev"></div>
			<div className="swiper-button-next"></div>
		</div>
	);
};

export default BlogSlider;
