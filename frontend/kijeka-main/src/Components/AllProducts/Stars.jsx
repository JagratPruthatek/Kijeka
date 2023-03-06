import React from 'react'

const Stars = ({ stars, rating }) => {
    const ratingStars = Array.from({ length: 5 }, (elem, index) => {
        return (
            <span key={index} >
                {
                    stars >= index + 1 ? <i className="fa-solid fa-star  w-[19.37px] h-[19.37px] text-[#004B95] pr-[4.04px] text-[12px]"></i> : <i className="fa-regular fa-star w-[19.37px] h-[19.37px] text-[#004B95] pr-[4.04px]   text-[12px]"></i>
                }
            </span>
        )
    })
    return (
        <div className='flex items-baseline '>
            <div className=''>{ratingStars}</div>
            <p className='text-[12px] text-[#004B95]'>( {rating} )</p>
        </div>
    )
}

export default Stars