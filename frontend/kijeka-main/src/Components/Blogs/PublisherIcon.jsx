import React from 'react'

const PublisherIcon = () => {
    return (
        <div className='flex justify-start items-center pt-[26px] gap-[102px]'>
            <div className='flex pl-[13px]'>

                <img className=' object-cover object-center w-[64px] h-[62.51px] border-[#004B95] border-[2px] rounded-full shadow-[#D8D8D880]  ' src="/images/creatoricon.png" alt="/" />

                <div className='pl-[13px]'>
                    <h>Davit Hodžić</h>
                    <div className='flex justify-between items-center gap-2'><p>30 Jan 2023</p>
                        <i class="fa-solid fa-eye"></i><p>28765</p>
                    </div>
                </div>
            </div>
            <button className='w-[322px] h-[50px] rounded-[5px] bg-[#004B95] text-[white] font-semibold text-[20px] tracking-[5%] leading-[40.8px] font-poppins'>Read More</button>
        </div>
    )
}

export default PublisherIcon
