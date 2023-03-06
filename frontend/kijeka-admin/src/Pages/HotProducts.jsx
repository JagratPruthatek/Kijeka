import React, { useState } from "react";
import axios from "axios";
//Components
import ProductCard from "../Components/ProductCard/ProductCard";

const HotProducts = () => {
	const [products, setProducts] = useState([]);
	if (products.length === 0) {
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/homeProductList/")
			.then((data) => setProducts(data["data"]["data"]))
			.catch((error) => console.log(error));
	}
	document.title = "Kijeka | Hot Products";
	document.getElementById("header_title").innerHTML = "Hot Products";

	return (
		<div className="w-full min-h-screen bg-grayBG md:p-8 p-4">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between">
				<h1 className="font-bold text-xl">Hot Products</h1>
				<div className="flex flex-col md:flex-row md:items-center my-2 md:my-0 md:gap-7">
					<p className="bg-[#D9D9D9] px-2 py-1 text-gray-400 text-xs font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 my-2 md:my-0 w-fit">Remove</p>
					<a href="/all-products" className="text-sm font-bold text-kijeka-blue w-fit">
						Add New Hot Product
					</a>
				</div>
			</div>
			<div className="mt-2 relative group">
				<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} className="absolute top-0 m-3 fill-[#BEBEBE] group-focus:fill-kijeka-blue " viewBox="0 0 16 16">
					<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
				</svg>
				<input
					type="text"
					id="searchProduct"
					onKeyUp={() => {
						let searchQuery = document.getElementById("searchProduct").value.toLowerCase();
						let products = document.getElementsByClassName("productCard");
						for (let i = 0; i < products.length; i++) {
							let productName = products[i].id.toLowerCase();
							if (productName.includes(searchQuery)) {
								products[i].style.display = "block";
							} else {
								products[i].style.display = "none";
							}
						}
					}}
					placeholder="Search Products"
					className="pl-8 w-full md:w-1/4 h-10 px-2 border-2 bg-transparent border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kijeka-blue focus:border-transparent"
				/>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
				{products.map((product, index) => (
					<ProductCard name={product[0]} img={"http://" + process.env.REACT_APP_SERVER + product[1]} key={index} />
				))}
			</div>
		</div>
	);
};

export default HotProducts;
