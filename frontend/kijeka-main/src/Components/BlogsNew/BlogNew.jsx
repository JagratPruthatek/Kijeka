import React, { useState } from "react";
import MainProducts from "./MainProductsNew";
// import BlogItemsDisplay from "./BlogItemsDisplay";
import BlogsList from "../Blogs/BlogsList";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogNew = () => {
	const params = useParams();
	const [selectedCat, setSelectedCat] = useState(params["link"]);
	console.log(selectedCat);
	if (selectedCat === undefined) {
		document.title = "Kijeka | Hot Products";
	} else {
		document.title = "Kijeka | " + selectedCat.replace(/-/g, " ").toUpperCase();
	}
	const [category, setCategory] = useState([]);
	const [products, setProducts] = useState([]);
	if (category.length === 0) {
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/categorySideBar/")
			.then((data) => setCategory(data["data"]["data"]))
			.catch((error) => console.log(error));
	}
	if (products.length === 0) {
		// post in axios
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/getCategoryProducts/?category=" + selectedCat)
			.then((data) => setProducts(data["data"]["data"]))
			.catch((error) => console.log(error));
	}
	return (
		<div className="grid pl-[38px] py-[15px] mt-24 grid-cols-4">
			<div className="col-span-1">
				<BlogsList listdData={category} />
			</div>
			<div className="col-span-3 pl-[40px] ">
				<MainProducts product={products} />
			</div>
		</div>
	);
};

export default BlogNew;
