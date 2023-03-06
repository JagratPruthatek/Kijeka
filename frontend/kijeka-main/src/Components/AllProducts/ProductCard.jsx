import React, { useEffect } from 'react'
import LikeShare from './LikeShare'
import AOS from 'aos';
import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import Stars from './Stars'
const ProductCard = ({ title, description, img, rating, stars, setProductShown, index, onLiked, current }) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        // <Link to='/product-details'>
            <div data-aos="fade-down"
                data-aos-duration="1000"
                className='w-auto pb-[26px] px-4 h-[390px] rounded-[10px] border-[2px] hover:border-[#004B95] drop-shadow bg-white shadow-[0px_4px_20px_rgba(166,166,166,0.3)] mt-[12px]' >
                <div className='flex justify-between items-center'>
                    <p className={`text-start font-poppins font-bold text-[16px] leading-[131%] tracking-[0.055em] text-[#004B95] `}>{title}</p>
                    <LikeShare onLiked={onLiked} current={current} index={index} />
                </div>
                <img className='w-[145px] h-[145px] object-contain relative left-[40px] pb-[16px]' src={img} alt="/" />
                {/* rating */}
                <Stars rating={rating} stars={stars} />
                {/* description */}
                <p className='font-normal text-left text-[10px] pt-[3px] pb-[11px] leading-[14.35px] tracking-[5.5%] text-[#004B95] discriptionTruncate h-12 mb-3'>{parse(description)}
                </p>

                <div className='text-center '>
                    <a href={"/product-details/"+title.replace(/ /g,"-")}>
                    <button
                        className='text-center text-[#FFFFFF] bg-[#004B95] w-[80%] h-[40px] rounded-[5px] font-poppins font-medium text-[18px] leading-[25.83px] tracking-[6%]'
                        onClick={() => setProductShown(index)}
                    >Read More</button>
                    </a>
                    <p className='font-poppins text-[12px] pt-[5px] font-medium leading-[24.48px] tracking-[5%] text-[#37A945]'>See More Products</p>
                </div>
            </div>
        // {/* </Link> */}
    )
}

export default ProductCard