import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//Components
import TabContent from "../Components/TabContent/TabContent";
import TabNavItem from "../Components/TabNavItem/TabNavItem";

//Styles for text editor logic
import "../css/froala_editor.css";

const AddProducts = () => {
	//Text Editor Logic
	const javaScripts = ["https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.min.js", "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/xml/xml.min.js", "/js/froala_editor.min.js", "/js/output.min.js", "/js/editorLoader.js"];
	const [category, setCategory] = useState([]);
	const [loading, setLoading] = useState("hidden");

	for (let i = 0; i < javaScripts.length; i++) {
		let element = javaScripts[i];
		let script = document.createElement("script");
		script.src = element;
		script.type = "text/javascript";
		document.body.appendChild(script);
	}

	//Text Editor Logic Over

	if (category.length === 0) {
		axios
			.get("http://" + process.env.REACT_APP_SERVER + "/api/categoryList/")
			.then((data) => setCategory(data["data"]["data"]))
			.catch((error) => console.log(error));
	}

	const handleSubCategory = () => {
		if (document.getElementById("isSubCategory").checked) {
			document.getElementById("subCategoryName").disabled = false;
			document.getElementById("subCategoryName").classList.remove("cursor-not-allowed");
			document.getElementById("subCategoryLabel").classList.remove("text-gray-300");
		} else {
			document.getElementById("subCategoryName").disabled = true;
			document.getElementById("subCategoryName").classList.add("cursor-not-allowed");
			document.getElementById("subCategoryLabel").classList.add("text-gray-300");
		}
	};

	const [activeTab, setActiveTab] = useState("tab1");

	if (activeTab === "tab1") {
		document.title = "Kijeka | Add Products";
		document.getElementById("header_title").innerHTML = "Add Products";
	} else if (activeTab === "tab2") {
		document.title = "Kijeka | Add Category";
		document.getElementById("header_title").innerHTML = "Add Category";
	}

	return (
		<div className="w-full min-h-screen bg-grayBG p-12">
			<div className={"absolute top-0 z-50 origin-center w-[calc(100%-32px)] h-[calc(100%-32px)] flex items-center justify-center overflow-hidden " + loading}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					style={{
						margin: "auto",
						display: "block",
					}}
					width="200px"
					height="200px"
					viewBox="0 0 100 100"
					preserveAspectRatio="xMidYMid"
				>
					<circle cx={50} cy={50} fill="none" stroke="#004b95" strokeWidth={10} r={40} strokeDasharray="188.49555921538757 64.83185307179586">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1" />
					</circle>
				</svg>
			</div>
			<div className="my-5 bg-white rounded-lg overflow-hidden shadow-[0px_2px_20px_rgba(166,166,166,0.25)]">
				<ul className="flex flex-col md:flex-row md:items-center justify-between bg-grayBG">
					<div className="flex items-center">
						<TabNavItem title="Add Product" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} />
						<TabNavItem title="Add Category" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} />
					</div>
					<Link to={`/all-products`}>
						<p className="md:px-5 px-2 text-sm font-semibold text-kijeka-blue underline">View All Uploaded Products</p>
					</Link>
				</ul>
				<div>
					<TabContent id="tab1" activeTab={activeTab}>
						<div className="p-5">
							<div className="flex items-center gap-10">
								<div>
									<p className="font-medium">Name of Product</p>
									<input type="text" id="productName" name="productName" className="outline-none border border-gray-400 rounded-lg py-2 px-4 my-3 focus:ring-1 focus:ring-kijeka-blue focus:border-kijeka-blue w-64 transition-all duration-300" placeholder="Product name" />
								</div>
								<div>
									<p className="font-medium">Select category</p>
									<select name="category" id="category" className="outline-none border border-gray-400 rounded-lg py-2 px-4 my-3 focus:ring-1 focus:ring-kijeka-blue focus:border-kijeka-blue w-64 transition-all duration-300">
										<option value="Select Category" selected disabled>
											Select Category
										</option>
										{category.map((item, index) => {
											return (
												<option key={index} value={item}>
													{item}
												</option>
											);
										})}
									</select>
								</div>
								<div>
									<p className="font-medium">Model No.</p>
									<input type="text" id="modelNo" name="modelNo" className="outline-none border border-gray-400 rounded-lg py-2 px-4 my-3 focus:ring-1 focus:ring-kijeka-blue focus:border-kijeka-blue w-64 transition-all duration-300" placeholder="Model No." />
								</div>
							</div>
							<div className="my-5 flex items-center justify-between">
								<div>
									<p className="font-medium">Upload Images</p>
									<div className="relative text-sm bg-grayBG2 hover:bg-kijeka-blue px-3 py-1 mt-2 w-fit text-center text-white rounded-full transition-all duration-300 cursor-pointer">
										<p id="imageContainer">Choose</p>
										<input
											required
											type="file"
											onInputCapture={() => {
												let imageInput = document.getElementById("images");
												imageInput.addEventListener("change", () => {
													if (imageInput.files.length > 0) {
														const fileName = document.getElementById("images").files[0].name;
														document.getElementById("imageContainer").innerHTML = fileName;
													}
												});
											}}
											id="images"
											name="images"
											className="h-full w-full opacity-0 absolute top-0 left-0"
											accept=".jpg,.jpeg,.png"
										></input>
									</div>
									<div className="flex items-center mt-3 gap-3">
										<input id="isOnHome" name="isOnHome" aria-describedby="checkbox-1" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" />
										<label htmlFor="isOnHome" className="font-normal text-kijeka-blue">
											Add this product on Home Page Hot product section
										</label>
									</div>
								</div>
								<div>
									<p className="font-medium">Upload Excel Sheet</p>
									<div className="flex flex-row flex-nowrap gap-2">
										<div className="relative text-sm bg-grayBG2 hover:bg-kijeka-blue px-3 py-1 mt-2 w-fit text-center text-white rounded-full transition-all duration-300 cursor-pointer">
											<p id="excelContainer">Choose</p>
											<input
												required
												type="file"
												onInputCapture={() => {
													let imageInput = document.getElementById("excelSheet");
													imageInput.addEventListener("change", () => {
														if (imageInput.files.length > 0) {
															const fileName = document.getElementById("excelSheet").files[0].name;
															document.getElementById("excelContainer").innerHTML = fileName;
														}
													});
												}}
												id="excelSheet"
												name="excelSheet"
												className="h-full w-full opacity-0 absolute top-0 left-0"
												accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,.xlsx,.xls,"
											></input>
										</div>
										<div
											onClick={() => {
												window.open("http://" + process.env.REACT_APP_SERVER + "/media/excels/Sample Products List.xlsx");
											}}
											className="relative text-sm bg-grayBG2 hover:bg-kijeka-blue px-3 py-1 mt-2 w-fit text-center text-white rounded-full transition-all duration-300 cursor-pointer"
										>
											Download
										</div>
									</div>
									<Link to={`/hot-products`} className="flex items-center mt-2 gap-2">
										<p className="text-kijeka-blue font-normal underline">View Hot Product List</p>
										<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M5.68306 0.308058C5.92713 0.0639806 6.32286 0.0639806 6.56694 0.308058L10.3169 4.05806C10.4341 4.17527 10.5 4.33424 10.5 4.5C10.5 4.66576 10.4341 4.82473 10.3169 4.94194L6.56694 8.69194C6.32286 8.93602 5.92713 8.93602 5.68306 8.69194C5.43898 8.44787 5.43898 8.05214 5.68306 7.80806L8.36611 5.125L1.125 5.125C0.779822 5.125 0.5 4.84518 0.5 4.5C0.5 4.15482 0.779822 3.875 1.125 3.875L8.36611 3.875L5.68306 1.19194C5.43898 0.947864 5.43898 0.552136 5.68306 0.308058Z" fill="#004B95" />
										</svg>
									</Link>
								</div>
							</div>
						</div>
						<div id="editorContainer" className="w-full px-5">
							<div id="editor">
								<textarea id="edit" name="edit" className="opacity-0"></textarea>
							</div>
						</div>
						<div className="w-full px-5 mt-3 flex items-center justify-end gap-4">
							<button className="border border-gray-300 px-5 py-2 bg-[rgba(166,166,166,0.3)] text-[#808080] font-semibold rounded-lg tracking-widest">Cancel</button>
							<button
								onClick={() => {
									setLoading("");
									let formData = new FormData();
									if (document.getElementById("excelSheet").files.length < 0) {
										if (document.getElementById("productName").value === "" || document.getElementById("category").value === "" || document.getElementById("modelNo").value === "" || document.getElementById("edit").value === "<!DOCTYPE html><html><head><title></title></head><body></body></html>" || document.getElementById("images").files.length === 0) {
											setLoading("hidden");
											alert("Please fill all the fields");
										} else {
											formData.append("productName", document.getElementById("productName").value);
											formData.append("category", document.getElementById("category").value);
											formData.append("modelNo", document.getElementById("modelNo").value);
											formData.append("description", document.getElementById("edit").value);
											formData.append("isOnHome", document.getElementById("isOnHome").checked);
											formData.append("images", document.getElementById("images").files[0]);
											formData.append("excelSheet", document.getElementById("excelSheet").files[0]);
											axios({
												url: "http://" + process.env.REACT_APP_SERVER + "/api/addProduct/",
												method: "POST",
												headers: {
													"Content-Type": "multipart/form-data",
												},
												data: formData,
											})
												.then((res) => {
													setLoading("hidden");
													alert(res["data"]["msg"]);
												})
												.catch((err) => {
													setLoading("hidden");
													alert(err);
												});
										}
									} else {
										formData.append("productName", document.getElementById("productName").value);
										formData.append("category", document.getElementById("category").value);
										formData.append("modelNo", document.getElementById("modelNo").value);
										formData.append("description", document.getElementById("edit").value);
										console.log(document.getElementById("edit").value);
										formData.append("isOnHome", document.getElementById("isOnHome").checked);
										formData.append("images", document.getElementById("images").files[0]);
										formData.append("excelSheet", document.getElementById("excelSheet").files[0]);
										axios({
											url: "http://" + process.env.REACT_APP_SERVER + "/api/addProduct/",
											method: "POST",
											headers: {
												"Content-Type": "multipart/form-data",
											},
											data: formData,
										})
											.then((res) => {
												setLoading("hidden");
												alert(res["data"]["msg"]);
												document.getElementById("productName").value = "";
												document.getElementById("category").value = "Select Category";
												document.getElementById("modelNo").value = "";
												document.getElementById("edit").value = "";
												document.getElementById("isOnHome").checked = false;
												document.getElementById("images").files.length = 0;
												document.getElementById("excelSheet").files.length = 0;
											})
											.catch((err) => {
												setLoading("hidden");
												alert(err);
											});
									}
								}}
								className="border border-kijeka-blue px-7 py-2 text-kijeka-blue font-semibold rounded-lg tracking-widest"
							>
								Save
							</button>
							<button className="bg-kijeka-blue px-5 py-2 text-white rounded-lg tracking-widest">Upload</button>
						</div>
					</TabContent>
					<TabContent id="tab2" activeTab={activeTab}>
						<div className="w-full">
							<div className="p-5 flex items-center gap-5">
								<div className="flex items-start gap-5 w-[60%]">
									<div>
										<div>
											<p className="font-medium">Name Of Category</p>
											<input type="text" id="categoryName" name="categoryName" className="outline-none border border-gray-400 rounded-lg py-2 px-4 mt-3 focus:ring-1 focus:ring-kijeka-blue focus:border-kijeka-blue w-64 transition-all duration-300" placeholder="Category Name" />
										</div>
										<div className="flex items-center my-5 gap-3">
											<input aria-describedby="subCategoryCheckboxID" id="isSubCategory" name="isSubCategory" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" onClick={handleSubCategory} />
											<label htmlFor="subCategoryCheckboxID" className="font-normal">
												Sub Category
											</label>
										</div>
										<div>
											<p className="font-medium text-gray-300" id="subCategoryLabel">
												Name Of Sub-Category
											</p>
											<input type="text" id="subCategoryName" name="subCategoryName" className="outline-none border border-gray-400 rounded-lg py-2 px-4 my-3 focus:ring-1 focus:ring-kijeka-blue focus:border-kijeka-blue w-64 transition-all duration-300 cursor-not-allowed" placeholder="Sub-Category Name" disabled />
										</div>
									</div>
									<div id="editorContainerCategory" className="w-full">
										<div id="editorCategory">
											<textarea id="editCategory" name="editCategory"></textarea>
										</div>
									</div>
								</div>
								<div className="w-[40%]">
									<h1 className="text-kijeka-blue font-bold text-base">Added Categories</h1>
									<div className="max-h-[300px] overflow-y-scroll no-scrollbar">
										{category.map((category, index) => (
											<div className="flex items-center justify-between w-full bg-white px-4 py-3 rounded-lg shadow-md border border-[#EBEBEB] my-2" key={index}>
												<div className="flex items-center gap-4">
													<p className="text-sm font-semibold text-kijeka-blue">{index + 1}.</p>
													<p className="text-sm font-semibold text-kijeka-blue">{category}</p>
												</div>
												<div className="flex items-center gap-4">
													<svg
														onClick={() => {
															document.getElementById("categoryName").value = category;
															let formData = new FormData();
															formData.append("category", category);
															axios({
																url: "http://" + process.env.REACT_APP_SERVER + "/api/getCategoryDescription/",
																method: "POST",
																headers: {
																	"Content-Type": "multipart/form-data",
																},
																data: formData,
															})
																.then((res) => {
																	document.getElementById("editCategory").value = res["data"]["data"];
																	document.getElementById("editorCategory").getElementsByTagName("iframe")[0].contentWindow.document.body.innerHTML = res["data"]["data"];
																})
																.catch((err) => {
																	alert(err);
																});
														}}
														width="20"
														height="20"
														viewBox="0 0 19 19"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
														className="cursor-pointer"
													>
														<path d="M8.45589 1.44043H5.18427C2.49364 1.44043 0.806641 3.3453 0.806641 6.04205V13.3168C0.806641 16.0136 2.48577 17.9184 5.18427 17.9184H12.9053C15.6046 17.9184 17.2838 16.0136 17.2838 13.3168V9.7923" stroke="#004B95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
														<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12469 8.55544L12.6636 2.01656C13.4782 1.20281 14.7986 1.20281 15.6132 2.01656L16.6781 3.08144C17.4927 3.89606 17.4927 5.21731 16.6781 6.03106L10.1077 12.6014C9.75157 12.9576 9.26857 13.1579 8.76457 13.1579H5.48682L5.56907 9.85044C5.58132 9.36394 5.77994 8.90019 6.12469 8.55544Z" stroke="#004B95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
														<path d="M11.6694 3.02637L15.6647 7.02162" stroke="#004B95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
													</svg>
													<p className="bg-[#D9D9D9] px-2 py-1 text-gray-400 text-xs font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300">Remove</p>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
							<div className="w-full px-5 mt-3 flex items-center gap-4">
								<button className="border border-gray-300 px-5 py-2 bg-[rgba(166,166,166,0.3)] text-[#808080] font-semibold rounded-lg tracking-widest">Cancel</button>
								<button
									onClick={() => {
										setLoading("");
										let formData = new FormData();
										if (document.getElementById("categoryName").value === "" || document.getElementById("editCategory").value === "<!DOCTYPE html><html><head><title></title></head><body></body></html>") {
											setLoading("hidden");
											alert("Please fill all the fields");
										} else {
											formData.append("categoryName", document.getElementById("categoryName").value);
											formData.append("isSubCategory", document.getElementById("isSubCategory").value);
											if (document.getElementById("isSubCategory").value === "true") {
												formData.append("subCategoryName", document.getElementById("subCategoryName").value);
											}
											formData.append("discription", document.getElementById("editCategory").value);
											axios({
												url: "http://" + process.env.REACT_APP_SERVER + "/api/addCategory/",
												method: "POST",
												headers: {
													"Content-Type": "multipart/form-data",
												},
												data: formData,
											})
												.then((res) => {
													setLoading("hidden");
													alert(res["data"]["msg"]);
												})
												.catch((err) => {
													setLoading("hidden");
													alert(err);
												});
										}
									}}
									className="bg-kijeka-blue px-10 py-2 text-white rounded-lg tracking-widest"
								>
									Add
								</button>
							</div>
						</div>
					</TabContent>
				</div>
			</div>
		</div>
	);
};

export default AddProducts;
