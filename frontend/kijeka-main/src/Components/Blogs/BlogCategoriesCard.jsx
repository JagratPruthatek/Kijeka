import React, { useState } from 'react'
import Share from '../AllProducts/Share'



const BlogCategoriesCard = () => {
    const [current, setCurrent] = useState(false)

    const handleOnClick = () => {
        setCurrent((prev) => !prev)

    }
    return (
        <div className='flex flex-col group h-[232px] overflow-hidden rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_20px_rgba(166,166,166,0.5)] border-[2px] hover:border-[#004B95]  '>
            <div className='cursor-pointer  gap-[34px] h-[250px] flex justify-between  '>
                <img className='w-[200.59px]  ' src="/images/BlogImage.png" alt="/" />
                <div className='pr-[22px]'>
                    <div className='flex justify-between pt-[23px]'><p className='font-semibold text-[18px] leading-[27px] tracking-[5%]'>Drum handling Equipments Give better experience  in work. </p>
                        <div className='flex justify-center items-center gap-2 mr-[2px] mb-[35px]'>
                            {/* like */}
                            <svg className=' cursor-pointer'
                                onClick={handleOnClick}
                                width={20}
                                height={20}
                                viewBox="0 0 25 25"
                                fill={current === false ? "none" : "red "}
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15.3815 1.34373C14.0463 1.3229 12.6563 1.75519 11.5878 2.96873C10.5117 1.75727 9.10748 1.34373 7.8073 1.34373C4.61782 1.34373 1.42456 4.25832 1.42456 8.37498C1.42456 12.3562 3.73653 15.6771 6.03431 17.9416C7.05918 18.9511 8.17076 19.8484 9.35334 20.6208C9.83748 20.9333 10.2725 21.1802 10.6261 21.3521C10.8029 21.4375 10.9665 21.5083 11.1131 21.5594C11.2417 21.6041 11.4157 21.6562 11.5897 21.6562C11.7627 21.6562 11.9376 21.6041 12.0662 21.5594C12.2119 21.5083 12.3764 21.4375 12.5532 21.3521C12.9069 21.1802 13.3418 20.9333 13.825 20.6208C15.0079 19.8485 16.1198 18.9512 17.145 17.9416C19.4428 15.6771 21.7548 12.3562 21.7548 8.37498C21.7548 4.2479 18.5549 1.39582 15.3815 1.34373V1.34373Z"
                                    stroke={current === false ? "#004B95" : "red "}
                                    strokeWidth={1.5}
                                />
                            </svg><Share /></div>
                    </div>
                    <p className='font-poppins text-[11px] pt-[15px] tracking-[6%] font-medium w-[304.56px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,</p>
                </div>
            </div>
            <div className='group-hover:translate-x-[-120px] translate-x-[-1px] relative left-[630px] top-[-30px] flex items-center gap-2 ease-linear duration-300  '><i className="fa-solid fa-eye text-[#696969]"></i><p className='text-[#696969]'>28765</p></div>
            <div className='flex rounded-[10px_0px_0px_10px] bg-[rgba(217,217,217,0.1)] backdrop-blur-sm w-[201px] h-[51px] group-hover:translate-y-[-76px] translate-y-[55px] ease-linear duration-300  '>
                <img className='object-cover object-center w-[64px] h-[62.51px]   rounded-full shadow-[#D8D8D880]  ' src="/images/creatoricon.png" alt="/" />
                <div className='pl-[13px]'>
                    <p className='font-poppins font-medium text-[16px] leading-[24px] tracking-[5%] text-[#FFFFFF]'>Davit Hodžić</p>
                    <p className='font-poppins font-medium text-[8px]  leading-[12px] tracking-[5%] text-[#FFFFFF] '>30 Jan 2023</p>
                </div>
            </div>


        </div>
    )
}

export default BlogCategoriesCard