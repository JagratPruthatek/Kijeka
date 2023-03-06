import React, { useState } from 'react'
import BlogCategoriesCard from './BlogCategoriesCard'
import BlogItemsDisplay from './BlogItemsDisplay'
import BlogMidImage from './BlogMidImage'
import BlogsList from './BlogsList'
import BlogTwoImage from './BlogTwoImage'
import listdData from './listdData.json'
import axios from "axios";
const Blog = () => {

    document.title = "Kijeka | Blog"

    const [category, setCategory] = useState([]);
    if (category.length === 0) {
            axios
                .get("http://" + process.env.REACT_APP_SERVER + "/api/categorySideBar/")
                .then((data) => setCategory(data["data"]["data"]))
                .catch((error) => console.log(error));
        }

    return (
        <>
            <div className='grid pl-[30px] pt-[15px] grid-cols-4 max-sm:overflow-hidden mt-24'>
                <div className='col-span-1 '>
                    <BlogsList listdData={category} />
                </div>
                <div className='col-span-3 pl-[150px] pr-[67px] '><BlogItemsDisplay listdData={listdData} /></div>
            </div>
            {/* <div className='pt-[47px] pb-[39px] hover:scale-75  bg-[blue] h-[] w-[]'>Categories</div> */}
            <div className="flex ml-[60px] py-[46px]">
                <div className="w-[6px] bg-[#004B95] hover:w-[240px] cursor-pointer  transition-all duration-500 font-poppins font-bold text-[#004B95] text-[28px] leading-[42px] hover:text-[white] hover:translate-x-1 gap-2 ">
                    <p className='pl-[30px]'>Categories</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-[22px] px-[52px] mb-10'>
                {
                    category.map((item, index) => {
                        return (
                            <BlogCategoriesCard key={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Blog