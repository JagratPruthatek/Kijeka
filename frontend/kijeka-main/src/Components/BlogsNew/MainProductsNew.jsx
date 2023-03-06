import React, { useState } from "react";
import ProductCard from "../AllProducts/ProductCard";
import data from "../AllProducts/data.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "aos/dist/aos.css";
import "swiper/css/grid";
const MainProducts = (props) => {
	const [productShown, setProductShown] = useState(-1);

	return (
		<>
			<div className="flex p-[10px] gap-[15px] max-w-full mb-10">
				<div className="grid grid-flow-row grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4  w-full h-full">
					{props.product.map((data, index) => {
						if (data[0] !== "") {
							return <ProductCard key={index} index={index} title={data[0]} description={data[1]} img={"http://" + process.env.REACT_APP_SERVER + data[2]} rating={5} stars={4} setProductShown={setProductShown} />;
						} else {
							return <></>;
						}
					})}
				</div>
			</div>
		</>
	);
};

export default MainProducts;
