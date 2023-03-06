import React from 'react'
import PublisherIcon from './PublisherIcon'

const BlogItemsDisplay = () => {
    return (
        <div className='flex flex-col'>
            <p className='text-[#004B95] font-poppins font-bold text-[28px] leading-[42px]'>Latest News</p>
            <p className='text-[#000000] font-poppins font-semibold text-[32px] leading-[48px] tracking-[4%] pt-[32px] ' style={{ letterSpacing: "4%" }}>What is the use of Drum handling equipmets?</p>
            <p className='font-poppins font-normal  text-[18px] leading-[27px] tracking-[5%] pt-[33px] pr-[195px]' style={{ letterSpacing: "5%" }}>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                paragraphswordsbyteslistsStart with 'Loremipsum dolor sit amet...'
            </p>
            <div>
                <img className='  w-[298px] h-[339px] mt-[44px] float-right mr-[100px] ' src="/images/BlogImage.png" alt="" />
                <p className='font-poppins font-normal w-[400px]  text-[18px] leading-[27px] tracking-[5%] pt-[33px] ' style={{ letterSpacing: "5%" }}>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.paragraphswordsbyteslistsStart with 'Loremipsum dolor sit amet...'
                </p>
                <p className='font-poppins font-normal  w-[384px]  text-[18px] leading-[27px] tracking-[5%] pt-[1px] ' style={{ letterSpacing: "5%" }}> piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical </p>
            </div>
            <div>
                {/* publisher icon */}
                <PublisherIcon />
            </div>
            <div className='flex justify-center items-center mt-[73px] gap-3 mr-[48px]'>
                <img className='w-[36px] h-[14px]' src="/images/GreenDots.png" alt="/" />
                <p className='text-[#37A945] text-[20px] leading-[24.2px] font-boldt'>Thank You</p>
                <img className='transform rotate-180' src="/images/GreenDots.png" alt="/" /></div>
        </div>
    )
}

export default BlogItemsDisplay