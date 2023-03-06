import React, { useEffect, useState, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

const heroimages = [
     "/images/hero-1.png",
     "/images/hero-2.png",
     "/images/hero-3.png",
     "/images/hero-4.png",
     "/images/hero-5.png",
]

let count = 0;
let slideInterval;

const Hero = () => {

     const [currentIndex, setCurrentIndex] = useState(0);
     const [text, setText] = useState("")
     const [fullText, setFullText] = useState("Kijeka Engineers")
     const [index, setIndex] = useState(0)

     const slideRef = useRef();

     const removeAnimation = () => {
          slideRef.current.classList.remove('sliderContainer');
     }

     useEffect(() => {
          slideRef.current.addEventListener('animationend', removeAnimation);
          startsliding();
          return () => {
               clearInterval(slideInterval);
          }
     }, [])

     const startsliding = () => {
          slideInterval = setInterval(() => {
               count = (count + 1) % heroimages.length;
               setCurrentIndex(count);
               slideRef.current.classList.add('sliderContainer');
          }, 3000);
     }

     useEffect(() => {
          if (index < fullText.length) {
               setTimeout(() => {
                    setText(text + fullText[index])
                    setIndex(index + 1)
               }, 100)
          }
     }, [index])

     return (
          <div className='h-screen w-full relative mt-16' ref={slideRef}>
               <img src={heroimages[currentIndex]} className='w-full h-full md:object-cover' />
               <div className='w-full h-full absolute top-0 flex flex-col px-7'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between my-auto'>
                         <div className='md:w-[40%] w-full animate__animated animate__fadeInLeft'>
                              <div className='md:w-[500px] md:h-[500px]'>
                                   <img src='/images/tool-1 (1).png' className='w-full h-full min-w-full min-h-full object-cover hidden md:block' />
                              </div>
                         </div>
                         <div className='md:w-[60%] w-full'>
                              <h1 className='text-white text-4xl font-semibold'>{text}</h1>
                              <p className='text-white text-lg my-4 mb-8 animate__animated animate__fadeInUp'>KIJEKA ENGINEERS is a leading Indian material handling equipment manufacturer and supplier of high quality material handling products and industrial machinery equipment since 1980.</p>
                              <div
                                   className='flex items-center gap-2 hover:gap-4 hover:bg-white border group border-white w-fit py-2 px-4 rounded-lg transition-all duration-300 cursor-pointer animate__animated animate__fadeInUp'
                                   style={{ animationDelay: "0.5s" }}
                                   onMouseEnter={() => { document.getElementById("exploreArrow").style.stroke = "black" }}
                                   onMouseLeave={() => { document.getElementById("exploreArrow").style.stroke = "white" }}
                              >
                                   <p className='text-white group-hover:text-black transition-all duration-300'>Explore</p>
                                   <svg width="25" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.0024 2L30 9.5L20.0024 17M2 9.5H29.72" style={{ stroke: 'white' }} id='exploreArrow' strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                              </div>
                         </div>
                    </div>
                    <div className='w-full flex flex-col items-center justify-center mb-10'>
                         <p className='mb-2 text-xl text-white font-semibold'>Scroll Down</p>
                         <svg width="57" height="22" viewBox="0 0 57 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 3L26.4273 18.7713C27.5325 19.5153 28.9767 19.5218 30.0885 18.7877L54 3" stroke="white" stroke-opacity="0.7" stroke-width="4.5" stroke-linecap="round" />
                         </svg>
                    </div>
               </div>
          </div>
     )
}

export default Hero