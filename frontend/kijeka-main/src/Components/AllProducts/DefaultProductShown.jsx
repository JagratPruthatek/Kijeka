import React, { useState } from 'react'

const DefaultProductShown = () => {

    const [defult, setDefult] = useState("")
    return (

        <div className='w-[374px] p-4 h-[810px] max-sm:p-4 max-md:p-4 drop-shadow shadow-[0px_4px_20px_rgba(166,166,166,0.3)] rounded-xl flex items-center justify-center flex-col ' data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine " style={{ border: "3px solid #E1E1E1" }}>
            <p className='font-poppins font-bold text-[26px] leading-[34.06px] tracking-[5.5%] text-[#A6A6A6] pb-[41px]'>See More Product
                Details hear</p>
            <p className='font-poppins font-normal text-[16px] leading-[20.96px] tracking-[5.5%] text-[#A6A6A6'>Click on right side products to view in detail</p>
        </div>
    )
}

export default DefaultProductShown