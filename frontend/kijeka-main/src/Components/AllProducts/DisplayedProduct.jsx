import React from "react";
import { textDescription, displayHeading } from "../lib/Classes";
import LikeShare from "./LikeShare";
import Stars from "./Stars";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

// import required modules
import { Autoplay, Pagination } from "swiper";
import DefaultProductShown from "./DefaultProductShown";
const DisplayedProduct = ({ data, productShown }) => {
	if (productShown === -1) {
		return <DefaultProductShown />;
	}

	return (
		<div className="w-[374px]  h-[810px] border-[3px] border-[#E1E1E1]  drop-shadow shadow-[0px_4px_20px_rgba(166,166,166,0.3)] rounded-[10px] bg-[rgba(255,255,255,0.1)] " data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
			<div className="flex  justify-between items-center">
				<p className={`text-start ${displayHeading} mt-[27px] ml-[15px] w-[14rem]`}>{data.title}</p>
				<div className=" right-[15px] relative">
					<LikeShare />
				</div>
			</div>
			<div className="ml-[18px]">
				<Stars rating={data.rating} stars={data.stars} />
			</div>

			<div className="flex justify-center items-center !w-[40%] h-[29%] m-auto ">
				<Swiper
					spaceBetween={10}
					centeredSlides={true}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					pagination={{
						clickable: true,
					}}
					modules={[Autoplay, Pagination]}
					className="mySwiper"
				>
					<SwiperSlide>
						<img className="!w-[161.58px] !h-[178px] m-auto pb-[12px] " data-aos="fade-right" data-aos-easing="ease-in-sine" src={data.img} alt="/" />
					</SwiperSlide>
					<SwiperSlide>
						{" "}
						<img className="w-[161.58px] h-[178px] m-auto  pb-[12px] " data-aos="fade-right" data-aos-easing="ease-in-sine" src={data.img2} alt="/" />
					</SwiperSlide>
				</Swiper>
			</div>
			<p className="font-poppins font-normal text-[16px] leading-[22.96px] tracking-[2%] text-[#004B95] ml-[18px] ">{data.description2}</p>
			<ul className={`mb-[25px] list-disc ml-[12px]  pl-[32px]`}>
				<span className={`ml-[-32px] font-semibold text-[16px] leading-[22.96px] tracking-[2%] text-[#004B95]`}>Features:</span>
				<li className={`${textDescription}`}> Aluminium mast structure,lifting smooth,lightweight mobile</li>
				<li className={`${textDescription}`}>Platform can be controlled up and down,with emergency button</li>
				<li className={`${textDescription}`}>Aluminium mast structure,lifting</li>
				<li className={`${textDescription}`}>Quick to set-up and simple to operate</li>
			</ul>
			<button className="relative text-center font-poppins font-semibold top-[25px] text-[#FFFFFF] bg-[#004B95] w-[88%] px-3 h-[50px] rounded-[5px] text-[20px] leading-[40.8px] tracking-[5%] left-[20px]">
				<Link to="/product-details">Read More</Link>
			</button>
			<p className="font-Poppins text-center mt-[35px] text-[16px] leading-[204%] tracking-[0.05em] text-[#004B95] font-normal not-italic">See More Products</p>
		</div>
	);
};

export default DisplayedProduct;
