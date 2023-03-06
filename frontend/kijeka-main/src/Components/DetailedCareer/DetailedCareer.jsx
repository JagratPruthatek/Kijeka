import React, { useState } from 'react'
import ByNewsDropdown from './ByNewsDropdown'
import Card from './Card'
import Jobcategory from './Jobcategory'
import { Scheduledropdown } from './Scheduledropdown'

const DetailedCareer = () => {

    const [selected5, setSelected5] = useState("Job category")
    const [selected7, setSelected7] = useState("By News")
    const [selected8, setSelected8] = useState("By News")
    return (
        <>
            <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group mt-24">
                <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[18rem] duration-300 group"></div>
                <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Let's join We</h4>
            </div>

            {/*===============================search =========================== */}

            <form>
                <label for="default-search"  className="mb-2 text-sm font-medium  sr-only">Search</label>
                <div  className="relative ml-5 my-3 sm:ml-6 sm:my-4 justify-between">

                    <input type="search" id="default-search"  className="w-[13rem] p-2 pl-5 text-[#004B95] border border-[#004B95] rounded-lg bg-[#ffff] focus:ring-blue-500 focus:border-blue-500 focus:outline-none  placeholder-[#004B95] placeholder sm:w-[15rem] md:w-[20rem] lg:w-[25rem] xl-w-[22rem]" placeholder="Search job by category , Title" required />


                    <div className="absolute inset-x-[10rem] top-1/2 right-2 -translate-y-1/2 flex items-center ml-5 pointer-events-none sm:absolute sm:inset-x-[10rem] md:absolute md:inset-x-[12rem] lg:absolute lg:inset-x-[15rem]">
                        <i  className="fa fa-search text-[#004B95] text-[1rem]" aria-hidden="true"></i>
                    </div>
                </div>
            </form>
            {/*===============================Drop down ========================== */}

            <div className='relative flex space-x-5 ml-5 my-3 sm:ml-6 sm:my-4 z-10'>
                <Jobcategory selected5={selected5} setSelected5={setSelected5} />
                <Scheduledropdown selected8={selected8} setSelected8={setSelected8} />
                <ByNewsDropdown selected7={selected7} setSelected7={setSelected7} />

                <div  className="border-solid border-2 border-indigo-600 w-[5rem] rounded-lg absolute bottom-0 right-10 bg-[#fff] text-[#004B95] text-center font-bold inset-y-[5rem] top-1/2 -translate-y-1/2"> Reset</div>
            </div>

            {/*============================title================================================ */}


            <div  className="inline-flex items-center justify-center w-full">
                <hr  className="w-[95%] h-0.5 my-8 bg-[#004895] border-0 rounded " />
                <div  className="absolute px-4 -translate-x-1/2 bg-white left-1/2 ">
                    <h1 className='text-[1rem] font-bold  text-[#004895] not-italic leading-10  p-[0.2rem] mr-[2rem] cursor-pointer  sm:text-[1.1rem] md:text-[1.2rem] lg:[1.3rem] xl:text-[1.4rem]'>Showing 10 of 15 Opportunities</h1>
                </div>
            </div>

            {/*====================================Application Card======================================== */}
            <div className='my-5'>
                <div className="h-[30rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#004895] text-[0.8rem]  font-bold xl:text-[1rem] xl:text-bold'>Mechanical Engineer</h1>
                        <a href="/career-details">
                            <h5 className="mb-2 text-[0.8rem] text-[#004895]  font-bold tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        </a>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#004B95" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex space-x-3 my-3'>
                        <h4 className='text-[#101010] text-lg font-semibold'>Schedule : <span className=' text-lg font-normal'>Full Time</span> </h4>
                        <h4 className='text-[#101010] text-lg font-semibold'>Job Category :<span className=' text-lg font-normal'> Engineering</span> </h4>

                        <h4 className='text-[#101010] text-lg font-semibold'>Requisition Number : <span className=' text-lg font-normal'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>20 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#004B95] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*===============================================second======================================================= */}
            <div className='my-5 '>
                <div  className="h-[30rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#004895] text-[0.8rem]  font-bold xl:text-[1rem] xl:text-bold'>Manufacturing Project Engineer</h1>
                        <a href="/career-details">
                            <h5  className="mb-2 text-[0.8rem] text-[#004895]  font-bold tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        </a>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#004B95" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex space-x-3 my-3'>
                        <h4 className='text-[#101010] text-lg font-semibold'>Schedule : <span className=' text-lg font-normal'>Full Time</span> </h4>
                        <h4 className='text-[#101010] text-lg font-semibold'>Job Category :<span className=' text-lg font-normal'> Engineering</span> </h4>

                        <h4 className='text-[#101010] text-lg font-semibold'>Requisition Number : <span className=' text-lg font-normal'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>10 Feb 2023</span>
                        <h3 className='text-[0.8rem] text-[#004B95] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>


            {/*=======================================================================third=================================== */}
            <div className='my-5 '>
                <div  className="h-[30rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#004895] text-[0.8rem]  font-bold xl:text-[1rem] xl:text-bold'>Design & Installation Engineer</h1>
                        <a href="/career-details">
                            <h5  className="mb-2 text-[0.8rem] text-[#004895]  font-bold tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        </a>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#004B95" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex space-x-3 my-3'>
                        <h4 className='text-[#101010] text-lg font-semibold'>Schedule : <span className=' text-lg font-normal'>Full Time</span> </h4>
                        <h4 className='text-[#101010] text-lg font-semibold'>Job Category :<span className=' text-lg font-normal'> Engineering</span> </h4>

                        <h4 className='text-[#101010] text-lg font-semibold'>Requisition Number : <span className=' text-lg font-normal'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>10 Feb 2023</span>
                        <h3 className='text-[0.8rem] text-[#004B95] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*=================================fourt====================================================== */}

            <div className='my-5 '>
                <div  className="h-[30rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#004895] text-[0.8rem]  font-bold xl:text-[1rem] xl:text-bold'>Design & Installation Engineer</h1>
                        <a href="/career-details">
                            <h5  className="mb-2 text-[0.8rem] text-[#004895]  font-bold tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        </a>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#004B95" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex space-x-3 my-3'>
                        <h4 className='text-[#101010] text-lg font-semibold'>Schedule : <span className=' text-lg font-normal'>Full Time</span> </h4>
                        <h4 className='text-[#101010] text-lg font-semibold'>Job Category :<span className=' text-lg font-normal'> Engineering</span> </h4>

                        <h4 className='text-[#101010] text-lg font-semibold'>Requisition Number : <span className=' text-lg font-normal'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>07 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#004B95] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>

            {/*====================================================five=================================== */}

            <div className='my-5 '>
                <div  className="h-[30rem] mx-[2rem] p-6 bg-white border border-[#A6A6A680] rounded-lg shadow  sm:h-[18rem] xl:h-[15rem] ">
                    <div className='flex space-x-10 sm:flex sm:space-x-40 md:flex md:space-x-60 lg:flex lg:space-x-80 xl:flex xl:justify-between'>
                        <h1 className='text-[#004895] text-[0.8rem]  font-bold xl:text-[1rem] xl:text-bold'>Industrial Sewing Machine Operator</h1>
                        <a href="/career-details">
                            <h5  className="mb-2 text-[0.8rem] text-[#004895]  font-bold tracking-tight sm:absolute sm:inset-x[30rem] sm:right-50 xl:absolute xl:inset-x-[65rem] xl:right-10">Apply Now</h5>
                        </a>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.4208 19.393L8.59173 14.9785M8.57919 11.393L17.4166 6.97431M25 21.1826C25 23.3918 23.2091 25.1826 21 25.1826C18.7909 25.1826 17 23.3918 17 21.1826C17 18.9735 18.7909 17.1826 21 17.1826C23.2091 17.1826 25 18.9735 25 21.1826ZM25 5.18262C25 7.39176 23.2091 9.18262 21 9.18262C18.7909 9.18262 17 7.39176 17 5.18262C17 2.97348 18.7909 1.18262 21 1.18262C23.2091 1.18262 25 2.97348 25 5.18262ZM9 13.1826C9 15.3918 7.20914 17.1826 5 17.1826C2.79086 17.1826 1 15.3918 1 13.1826C1 10.9735 2.79086 9.18262 5 9.18262C7.20914 9.18262 9 10.9735 9 13.1826Z" stroke="#004B95" stroke-width="1.5" />
                        </svg>

                    </div>

                    <div className='flex space-x-3 my-3'>
                        <h4 className='text-[#101010] text-lg font-semibold'>Schedule : <span className=' text-lg font-normal'>Full Time</span> </h4>
                        <h4 className='text-[#101010] text-lg font-semibold'>Job Category :<span className=' text-lg font-normal'> Engineering</span> </h4>

                        <h4 className='text-[#101010] text-lg font-semibold'>Requisition Number : <span className=' text-lg font-normal'>MEF2001988F</span> </h4>


                    </div>

                    <p  className="mb-3 font-normal text-gray-700 ">The Mechanical Engineer will design and develop new and modified products based on team interaction with the marketing and sales department. He / she will produce and maintain manufacturing instructions via detailed Bills of Materials and CAD drawings while continuously improving the quality and robustness of the products and manufacturing processes. This position will be at the Fort Worth Plant.</p>

                    <div className='flex space-x-10'>
                        <span className='text-[0.8rem] text-[#808080]'>02 Jan 2023</span>
                        <h3 className='text-[0.8rem] text-[#004B95] sm:absolute sm:inset-x-[28rem] sm:right-10 md:absolute md:inset-x-[35rem] md:right-10 lg:absolute lg:inset-x-[50rem] lg:right-10 xl:absolute xl:inset-x-[68rem] xl:right-10'>20 already Applied</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailedCareer