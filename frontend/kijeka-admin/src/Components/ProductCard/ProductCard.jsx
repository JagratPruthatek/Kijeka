import React from "react";

const ProductCard = ({ name, img }) => {
	return (
		<div
			id={name}
			onClick={(e) => {
				let toggleButton = e.target.getElementsByTagName("input")[0];
				toggleButton.checked = !toggleButton.checked;
			}}
			className="productCard bg-white p-4 rounded-xl shadow-xl border-2 border-transparent hover:border-kijeka-blue "
		>
			<div className="flex items-center justify-between">
				<p className="text-xs font-bold text-kijeka-blue tracking-wider truncate pr-3" title={name}>
					{name}
				</p>
				<input aria-describedby="subCategoryCheckboxID" type="checkbox" className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded" id="subCategoryCheckboxID" />
			</div>
			<div
				onClick={(e) => {
					let toggleButton = e.target.parentElement.getElementsByTagName("input")[0];
					toggleButton.checked = !toggleButton.checked;
				}}
				className="flex justify-center my-2 max-h-32 min-h-32 h-32 object-contain"
			>
				<img src={img} />
			</div>
			<div>
				<button className="bg-kijeka-blue px-10 py-2 text-white text-[13px] font-semibold rounded-lg tracking-widest w-full my-2 outline-none hover:bg-kijeka-blue/80 transition-all duration-300">Update</button>
				<button className="text-sm font-medium text-kijeka-blue w-full outline-none">Remove</button>
			</div>
		</div>
	);
};

export default ProductCard;
