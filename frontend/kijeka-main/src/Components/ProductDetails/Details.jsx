import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img5.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import TableData from "./TableData";
import Stars from "./Stars";
import BlogsList from "../Blogs/BlogsList";
import listdData1 from "./listdData.json";
import { useParams } from "react-router-dom";
import axios from "axios";

// import TableData from "./TableData";

const Details = () => {
	const params = useParams();
	const [product, setProduct] = useState(params["link"]);
	document.title = "Kijeka | " + product.replace(/-/g, " ").toUpperCase();

	const images = [img1, img2, img3, img4, img5];
	const [selectedImage, setSelectedImage] = useState("");
	const [showModal, setShowModal] = useState(false);
	const [category, setCategory] = useState([]);
	const [productData, setProductData] = useState([]);
	if (category.length === 0) {
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/categorySideBar/")
			.then((data) => setCategory(data["data"]["data"]))
			.catch((error) => console.log(error));
	}
	if (productData.length === 0) {
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/getProductDetail/?productName=" + product)
			.then((data) => setProductData(data["data"]["data"]))
			.catch((error) => console.log(error));
	}
	useEffect(() => {
		setSelectedImage(images[0]);
	}, []);

	const handleButtonClick = (image) => {
		setSelectedImage(image);
	};
	const handleImageClick = (image) => {
		setSelectedImage(image);
		setShowModal(true);
	};

	return (
		<>
			<div className="relative sticky z-10 top-0 flex ">
				{showModal && (
					<div className="absolute top-0 w-screen h-screen flex justify-center item-center">
						<span className="bg-[#000] opacity-[0.6] w-full h-full" onClick={(e) => setShowModal(false)}></span>
						<div className="absolute bg-[#fff] h-[80%] mt-[10vh] absolute top-0 flex justify-center item-center">
							<img className="z-11" src={selectedImage} alt="" />
						</div>
					</div>
				)}
			</div>
			<div className="h-auto mx-[5%]">
				<p className="font-[poppins] font-bold text-2xl leading-[31.44px] tracking-[5.5%] text-[#004B95] relative left-[5.13%] top-[35px]">{productData.productName}</p>
				<div className="flex flex-row">
					<div className="h-[929px] rounded-[10px] relative top-[80px]">
						<BlogsList listdData={category} />
					</div>
					<div className="bg-[#FFFFFF] w-[70%] relative left-[1.7%] h-auto top-[80px]">
						<div className="w-full flex flex-row">
							<p className=" sm:text-2xl text-lg font-poppins font-bold text-[#004B95] leading-[31.44px] tracking-[5.5%] my-[15px] w-[90.80%]">{productData.productName}</p>
							<button className=" sm:my-[21px] my-[25px] absolute right-[5%]">
								<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[20px] sm:h-[20px] w-[12px] h-[12px] ">
									<path d="M17.4208 19.2104L8.59173 14.7959M8.57919 11.2104L17.4166 6.7917M25 21C25 23.2091 23.2091 25 21 25C18.7909 25 17 23.2091 17 21C17 18.7909 18.7909 17 21 17C23.2091 17 25 18.7909 25 21ZM25 5C25 7.20914 23.2091 9 21 9C18.7909 9 17 7.20914 17 5C17 2.79086 18.7909 1 21 1C23.2091 1 25 2.79086 25 5ZM9 13C9 15.2091 7.20914 17 5 17C2.79086 17 1 15.2091 1 13C1 10.7909 2.79086 9 5 9C7.20914 9 9 10.7909 9 13Z" stroke="#004B95" stroke-width="1.5" />
								</svg>
							</button>
						</div>
						<div className="w-full xl:flex xl:flex-row">
							<div className="xl:mb-[0%] mb-[2%]">
								<Stars />
							</div>
							<div className="flex flex-row xl:absolute xl:left-[40%] xl:mb-[0%] mb-[2%]">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M5 0C4.44772 0 4 0.447715 4 1V5H2C0.89543 5 0 5.89543 0 7V15C0 16.1046 0.895432 17 2 17H4V19C4 19.5523 4.44772 20 5 20H15C15.5523 20 16 19.5523 16 19V17H18C19.1046 17 20 16.1046 20 15V7C20 5.89543 19.1046 5 18 5H16V1C16 0.447715 15.5523 0 15 0H5ZM15 12H5C4.44772 12 4 12.4477 4 13V15H2V7H5H15H18V15H16V13C16 12.4477 15.5523 12 15 12ZM14 5H6V2H14V5ZM3 8V10H6V8H3ZM14 14V18H6V14H14Z" fill="#37A945" />
								</svg>
								<div className="ml-[7px] text-[#37A945] underline font-poppins font-semibold sm:text-[18px] text-sm leading-[32.4px] tracking-[5%] -my-[6px]" onClick={() => window.print()}>
									{" "}
									Print Page
								</div>
							</div>
							<div className="flex flex-row xl:absolute xl:left-[58%] xl:mb-[0%] mb-[2%]">
								<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M14 19.9999H2C0.89543 19.9999 0 19.1045 0 17.9999V1.99989C0 0.895325 0.89543 -0.000105089 2 -0.000105089H9C9.00896 -0.00126705 9.01804 -0.00126705 9.027 -0.000105089H9.033C9.04244 0.00285297 9.05216 0.0048629 9.062 0.00589491C9.15019 0.0115481 9.23726 0.0286931 9.321 0.0568949H9.336H9.351H9.363C9.38145 0.0698207 9.39884 0.0841998 9.415 0.0998949C9.52394 0.148318 9.62321 0.216079 9.708 0.299895L15.708 6.2999C15.7918 6.38468 15.8596 6.48395 15.908 6.5929C15.917 6.61489 15.924 6.6359 15.931 6.6589L15.941 6.68689C15.9689 6.77029 15.9854 6.85708 15.99 6.9449C15.9909 6.95486 15.9932 6.96463 15.997 6.9739V6.9799C15.9986 6.98645 15.9996 6.99315 16 6.9999V17.9999C16 18.5303 15.7893 19.039 15.4142 19.4141C15.0391 19.7892 14.5304 19.9999 14 19.9999ZM10.424 11.9999V16.9999H11.364V14.9599H12.824V14.1219H11.364V12.8409H13V11.9999H10.424ZM6.724 11.9999V16.9999H7.93C8.43593 17.0248 8.92583 16.8188 9.262 16.4399C9.6069 15.9998 9.77967 15.4491 9.748 14.8909V14.0809C9.77117 13.5285 9.59356 12.9864 9.248 12.5549C8.92263 12.1845 8.44761 11.9806 7.955 11.9999H6.724ZM3 11.9999V16.9999H3.94V15.2409H4.566C4.98402 15.264 5.39232 15.1093 5.69 14.8149C5.97408 14.4973 6.12141 14.0805 6.1 13.6549C6.11856 13.2191 5.97135 12.7925 5.688 12.4609C5.40772 12.1501 5.00309 11.981 4.585 11.9999H3ZM9 1.99989V6.9999H14L9 1.99989ZM7.946 16.1619H7.664V12.8409H8.006C8.24885 12.8266 8.48236 12.9366 8.626 13.1329C8.77261 13.4362 8.83544 13.7732 8.808 14.1089V14.9779C8.82996 15.2976 8.7606 15.6171 8.608 15.8989C8.4441 16.0902 8.19651 16.1886 7.946 16.1619ZM4.585 14.3999H3.939V12.8409H4.594C4.75752 12.8427 4.90863 12.9284 4.994 13.0679C5.10222 13.2465 5.15447 13.4534 5.144 13.6619C5.15654 13.8564 5.1049 14.0496 4.997 14.2119C4.89754 14.3367 4.74447 14.4066 4.585 14.3999Z"
										fill="#37A945"
									/>
								</svg>
								<div className="ml-[7px] text-[#37A945] underline font-poppins font-semibold sm:text-[18px] text-sm leading-[32.4px] tracking-[5%] -my-[6px]"> Download PDF</div>
							</div>
							<div className="flex flex-row xl:absolute xl:left-[80%] xl:mb-[0%] mb-[2%]">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#37A945" />
									<path d="M10 8C10.5523 8 11 8.44771 11 9V15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15V9C9 8.44771 9.44771 8 10 8Z" fill="#37A945" />
									<path d="M11.5 5.5C11.5 6.32843 10.8284 7 10 7C9.17157 7 8.5 6.32843 8.5 5.5C8.5 4.67157 9.17157 4 10 4C10.8284 4 11.5 4.67157 11.5 5.5Z" fill="#37A945" />
								</svg>
								<div className="ml-[7px] text-[#37A945] underline font-poppins font-semibold sm:text-[18px] text-sm leading-[32.4px] tracking-[5%] -my-[6px]">Add to Inquiry</div>
							</div>
						</div>
						<div className={images.length > 4 ? "sm:h-[300px] h-[200px] w-full mt-[15px] grid grid-rows-4 grid-flow-col sm:gap-x-[calc(100%-114px)] gap-x-[calc(100%-70px)]" : "sm:h-[300px] h-[200px] w-full mt-[15px] flex flex-col justify-between sm:gap-x-[calc(100%-114px)] gap-x-[calc(100%-70px)]"}>
							<div className="sm:h-[300px] sm:w-[64.32%] sm:mt-[0%] mt-[20%] w-[50%] h-[160px] absolute sm:left-[18.09%] left-[25%] flex justify-center">{<img src={"http://" + process.env.REACT_APP_SERVER + productData.image} alt="." onClick={(e) => setShowModal(true)} />}</div>
							{images.map((image, index) => (
								<button className="sm:w-[57px] sm:h-[57px] w-[35px] h-[35px] bg-[#FFFFFF] mt-[8px] rounded-[10px] border border-[#004B95]" key={index} onClick={(e) => setSelectedImage(image)}>
									<img src={image} alt="" />
								</button>
							))}
						</div>
						<div className="h-auto w-full mt-[15px] overflow-x-hidden">{productData.length !== 0 ? parse(productData.description) : ""}</div>
					</div>
				</div>
			</div>
			<div className="my-[100px]">
				<TableData />
			</div>
		</>
	);
};

export default Details;
