import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {

     const [activeMenu, setActiveMenu] = useState("Home");

     const navlinks = [["Home","/"], ["Our Products","/our-products"], ["About Us","/about"], ["Blog","/blog"], ["Contact","/contact"], ["Careers","/careers"]]

     return (
          <div className='flex items-center justify-between bg-transparent py-3 px-8 fixed top-0 w-full z-50 bg-white shadow-lg'>
               <div className='md:w-32 w-28'>
                    <a href='/'>
                         <img src='/images/logo-color.png' className='w-full h-full object-cover' />
                    </a>
               </div>
               <div>
                    <ul className='md:flex items-center hidden'>
                         {navlinks.map((link, index) => (
                              <li className='mx-3' key={index}>
                                   <NavLink to={link[1]} activeClassName="active">{link[0]}</NavLink>
                              </li>
                         ))}
                    </ul>
               </div>
               
               <div className='flex items-center gap-8 relative'>
               <div className='relative group'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="none" className='absolute top-1/2 -translate-y-1/2 right-3 w-4 h-4'>
                         <circle cx="8.03713" cy="8.11061" r="6.76271" stroke="#004B95" strokeWidth="2" />
                         <path d="M14.7998 14.8735L20.2744 20.0261" stroke="#004B95" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <input type='text' className='bg-transparent border border-kijeka-blue outline-none rounded-lg text-sm px-3 py-1 text-kijeka-blue placeholder:text-kijeka-blue transition-all duration-300 md:w-36  w-32 group-hover:w-48 focus:w-48' placeholder='Search' />
               </div>
                    <a className='hidden md:block cursor-pointer' onClick={() => {
                         document.getElementById("cartOverlay").classList.toggle("left-[200%]")
                         document.getElementById("cartOverlay").classList.toggle("-left-[80%]")
                    }}>
                         <svg width="20" height="27" viewBox="0 0 20 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5626 3.32863L15.5793 3.45525C17.926 3.74751 19.6875 5.74199 19.6875 8.10681V21.2186C19.6875 23.5147 17.9772 25.4512 15.6987 25.735C11.9142 26.2063 8.08583 26.2063 4.30134 25.735C2.02282 25.4512 0.3125 23.5147 0.3125 21.2186V8.10681C0.3125 5.74199 2.07399 3.74751 4.42069 3.45525L5.43738 3.32863C5.8401 1.87757 7.17067 0.8125 8.75 0.8125H11.25C12.8293 0.8125 14.1599 1.87757 14.5626 3.32863ZM5.3125 5.23366L4.65241 5.31587C3.2444 5.49123 2.1875 6.68792 2.1875 8.10681V21.2186C2.1875 22.5688 3.19323 23.7075 4.53307 23.8744C8.16367 24.3266 11.8363 24.3266 15.4669 23.8744C16.8068 23.7075 17.8125 22.5688 17.8125 21.2186V8.10681C17.8125 6.68792 16.7556 5.49123 15.3476 5.31587L14.6875 5.23366V6.75C14.6875 7.26777 14.2678 7.6875 13.75 7.6875H6.25C5.73223 7.6875 5.3125 7.26777 5.3125 6.75V5.23366ZM7.1875 4.25C7.1875 3.38705 7.88706 2.6875 8.75 2.6875H11.25C12.1129 2.6875 12.8125 3.38705 12.8125 4.25V5.8125H7.1875V4.25Z" fill="#004B95" />
                              <path d="M14.6875 12.6875C14.6875 12.1697 14.2678 11.75 13.75 11.75H6.25C5.73223 11.75 5.3125 12.1697 5.3125 12.6875C5.3125 13.2053 5.73223 13.625 6.25 13.625H13.75C14.2678 13.625 14.6875 13.2053 14.6875 12.6875Z" fill="#004B95" />
                              <path d="M13.4375 16.4375C13.4375 15.9197 13.0178 15.5 12.5 15.5H6.25C5.73223 15.5 5.3125 15.9197 5.3125 16.4375C5.3125 16.9553 5.73223 17.375 6.25 17.375H12.5C13.0178 17.375 13.4375 16.9553 13.4375 16.4375Z" fill="#004B95" />
                         </svg>
                    </a>
                    <div className='absolute top-14 left-[200%] w-max bg-white rounded-lg transition-all duration-300' id='cartOverlay'>
                         <div className='flex items-center gap-3 px-2 py-2 border-b border-[rgba(166,166,166,0.3)] last-of-type:border-none'>
                              <div className='border border-kijeka-blue rounded-lg'>
                                   <img src='/images/chaindrumlifter.png' />
                              </div>
                              <p className='truncate text-kijeka-blue text-base font-semibold'>Chain drum Lifter</p>
                              <p className='bg-[#D9D9D9] px-2 py-1 text-gray-400 text-xs font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 my-2 md:my-0 w-fit'>Remove</p>
                         </div>
                         <div className='flex items-center gap-3 px-2 py-2 border-b border-[rgba(166,166,166,0.3)] last-of-type:border-none'>
                              <div className='border border-kijeka-blue rounded-lg'>
                                   <img src='/images/chaindrumlifter.png' />
                              </div>
                              <p className='truncate text-kijeka-blue text-base font-semibold'>Chain drum Lifter</p>
                              <p className='bg-[#D9D9D9] px-2 py-1 text-gray-400 text-xs font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 my-2 md:my-0 w-fit'>Remove</p>
                         </div>
                         <div className='flex items-center gap-3 px-2 py-2 border-b border-[rgba(166,166,166,0.3)] last-of-type:border-none'>
                              <div className='border border-kijeka-blue rounded-lg'>
                                   <img src='/images/chaindrumlifter.png' />
                              </div>
                              <p className='truncate text-kijeka-blue text-base font-semibold'>Chain drum Lifter</p>
                              <p className='bg-[#D9D9D9] px-2 py-1 text-gray-400 text-xs font-semibold rounded-full hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-300 my-2 md:my-0 w-fit'>Remove</p>
                         </div>
                    </div>
                    <div className='flex items-center gap-1 relative cursor-pointer'>
                         <div className='flex items-center gap-1' onClick={() => {
                              document.getElementById("languageOverlay").classList.toggle("scale-y-0")
                              document.getElementById("languageOverlay").classList.toggle("opacity-0")
                         }}>
                              <svg width="22" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M8.9375 14.4556C9.39558 17.6218 10.4931 19.8517 11.7742 19.8517C13.0553 19.8517 14.1528 17.6218 14.6108 14.4556C13.7119 14.3439 12.7601 14.283 11.7742 14.283C10.7882 14.283 9.83642 14.3439 8.9375 14.4556Z" fill="#004B95" />
                                   <path d="M8.78352 9.23462C8.73446 9.85182 8.70801 10.4923 8.70801 11.151C8.70801 11.8096 8.73446 12.4501 8.78352 13.0673C9.73112 12.9524 10.7324 12.8915 11.7747 12.8915C12.817 12.8915 13.8182 12.9524 14.7658 13.0673C14.8149 12.4501 14.8413 11.8096 14.8413 11.151C14.8413 10.4923 14.8149 9.85182 14.7658 9.23462C13.8182 9.3495 12.817 9.41041 11.7747 9.41041C10.7324 9.41041 9.73112 9.3495 8.78352 9.23462Z" fill="#004B95" />
                                   <path d="M14.5586 19.4781C16.711 18.8852 18.5422 17.6244 19.7597 15.9604C18.8094 15.4281 17.5632 14.994 16.1234 14.7009C15.8451 16.586 15.3302 18.284 14.5586 19.4781Z" fill="#004B95" />
                                   <path d="M8.99013 19.4782C8.2181 18.2841 7.70366 16.5861 7.42536 14.7007C5.98556 14.9938 4.73896 15.4279 3.78906 15.9602C5.00691 17.6245 6.83771 18.8857 8.99013 19.4782Z" fill="#004B95" />
                                   <path d="M8.99013 2.82397C6.83771 3.41681 5.00653 4.67767 3.78906 6.34164C4.73935 6.8739 5.98556 7.308 7.42536 7.60111C7.70366 5.71609 8.21848 4.018 8.99013 2.82397Z" fill="#004B95" />
                                   <path d="M3.05237 14.7539C4.18512 14.1236 5.61687 13.6262 7.26482 13.305C7.20541 12.5957 7.17474 11.8728 7.17474 11.1506C7.17474 10.4284 7.20541 9.7055 7.26482 8.99653C5.61687 8.67528 4.18512 8.17757 3.05237 7.54761C2.50114 8.64569 2.19141 9.8649 2.19141 11.1506C2.19141 12.4363 2.50114 13.6555 3.05237 14.7539Z" fill="#004B95" />
                                   <path d="M11.7742 2.44946C10.4931 2.44946 9.39558 4.6794 8.9375 7.84557C9.83642 7.9573 10.7882 8.0182 11.7742 8.0182C12.7601 8.0182 13.7119 7.9573 14.6108 7.84557C14.1528 4.6794 13.0553 2.44946 11.7742 2.44946Z" fill="#004B95" />
                                   <path d="M20.4966 7.54736C19.3639 8.17768 17.9321 8.67503 16.2842 8.99628C16.3436 9.7056 16.3743 10.4285 16.3743 11.1507C16.3743 11.8729 16.3436 12.5958 16.2842 13.3047C17.9321 13.626 19.3639 14.1237 20.4966 14.7537C21.0479 13.6556 21.3576 12.4364 21.3576 11.1507C21.3576 9.86501 21.0479 8.6458 20.4966 7.54736Z" fill="#004B95" />
                                   <path d="M14.5586 2.82397C15.3306 4.018 15.8451 5.71609 16.1234 7.60146C17.5632 7.30835 18.8098 6.87426 19.7597 6.34199C18.5418 4.67767 16.711 3.41646 14.5586 2.82397Z" fill="#004B95" />
                              </svg>
                              <p className='text-kijeka-blue'>EN</p>
                              <svg width="10" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5.55998 8.76855L10.5087 0.986159H0.61127L5.55998 8.76855Z" fill="#004B95" />
                              </svg>
                         </div>
                         <div className='bg-white absolute top-10 -left-[50%] scale-y-0 opacity-0 origin-top transition-all duration-300 w-max rounded-lg' id='languageOverlay'>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>English</p>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>Gujarati</p>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>Hindi</p>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>Chinese</p>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>Russian</p>
                              <p className='px-4 py-2 border-b border-[rgba(166,166,166,0.3)] hover:text-kijeka-blue cursor-pointer text-base font-medium'>View more</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Navbar