import React, { useState } from "react";
import ProductCard from "./ProductCard";
import data from './data.json'
const Cards = () => {
    const [startIndex, setStartIndex] = useState(0);

    const handleScroll = (event) => {
        const container = event.target;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const currentPosition = container.scrollLeft;
console.log(maxScroll)
        if (currentPosition === maxScroll) {
            // reached the end of the container, update startIndex
            setStartIndex(startIndex + 6);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-3 gap-4 my-8">
                {data.slice(startIndex, startIndex + 6).map((data) => (
                    <ProductCard key={data.id} data={data} />
                ))}
            </div>
            <div className="overflow-x-scroll">
                <div className="flex">
                    {data.slice(startIndex + 6).map((data) => (
                        <ProductCard key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Cards;