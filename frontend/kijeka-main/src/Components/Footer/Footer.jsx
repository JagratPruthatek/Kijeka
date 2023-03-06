import React from 'react'

const Footer = () => {
     return (
          <div>
               <div className='bg-kijeka-blue p-8 flex flex-col items-center md:items-start md:flex-row justify-center' id='footer'>
                    <div className='md:w-[38%] flex flex-col justify-between' id='footerDiv1' data-aos="fade-up"
                         data-aos-duration="1000" data-aos-offset="-500">
                         <div className="relative flex justify-start items-center group mb-4">
                              <div className="h-10 w-1.5 bg-white mr-[1rem] origin-left group-hover:w-[15rem] duration-300 group"></div>
                              <h4 className="text-lg absolute font-bold text-white ml-[1rem] group-hover:text-kijeka-blue group-hover:translate-x-5 duration-300">About Us</h4>
                         </div>
                         <div className='flex items-baseline gap-3 relative'>
                              <svg width="30" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M19.63 6.4517C20.5007 7.31645 21.1917 8.34313 21.6629 9.47311C22.1343 10.6031 22.3767 11.8142 22.3767 13.0373C22.3767 14.2604 22.1343 15.4715 21.6629 16.6015C21.1917 17.7315 20.5007 18.7582 19.63 19.6229L13 26.2048L6.37 19.6211C5.49934 18.7563 4.80869 17.7295 4.3375 16.5996C3.86629 15.4696 3.62376 14.2585 3.62376 13.0355C3.62376 11.8124 3.86629 10.6013 4.3375 9.47135C4.80869 8.34138 5.49934 7.31466 6.37 6.44984C7.24067 5.58499 8.27431 4.89897 9.41187 4.43092C10.5494 3.96287 11.7687 3.72198 13 3.72198C14.2313 3.72198 15.4505 3.96287 16.5881 4.43092C17.7257 4.89897 18.7593 5.58499 19.63 6.44984V6.4517ZM21.6175 21.5971C23.3221 19.9042 24.4829 17.7471 24.9533 15.3987C25.4236 13.0504 25.1822 10.6162 24.2599 8.40409C23.3374 6.19196 21.7754 4.30122 19.7712 2.97094C17.7668 1.64069 15.4105 0.930664 13 0.930664C10.5895 0.930664 8.23313 1.64069 6.22889 2.97094C4.22464 4.30122 2.66254 6.19196 1.74012 8.40409C0.817712 10.6162 0.576419 13.0504 1.04676 15.3987C1.51711 17.7471 2.67796 19.9042 4.3825 21.5971L11.0106 28.1828C11.2718 28.4424 11.5819 28.6484 11.9233 28.7888C12.2646 28.9294 12.6305 29.0017 13 29.0017C13.3695 29.0017 13.7354 28.9294 14.0767 28.7888C14.4181 28.6484 14.7282 28.4424 14.9894 28.1828L21.6175 21.5971ZM13 16.7622C13.9946 16.7622 14.9484 16.3698 15.6517 15.6712C16.3549 14.9727 16.75 14.0252 16.75 13.0373C16.75 12.0494 16.3549 11.102 15.6517 10.4034C14.9484 9.70486 13.9946 9.31242 13 9.31242C12.0054 9.31242 11.0516 9.70486 10.3484 10.4034C9.6451 11.102 9.25 12.0494 9.25 13.0373C9.25 14.0252 9.6451 14.9727 10.3484 15.6712C11.0516 16.3698 12.0054 16.7622 13 16.7622Z" fill="white" />
                              </svg>
                              <p className='text-sm text-white leading-7 text-justify font-medium pl-9 tracking-widest'>KIJEKA ENGINEERS founded on 12th May 1980, by an Engineer Mr. Rameshchandra Dave having presence in Ahmedabad, Gujarat to provide Handling Solutions for the various Industries.</p>
                         </div>
                         <div className='w-full flex justify-center mt-4'>
                              <a href="/" className='bg-white text-kijeka-blue w-full text-center font-semibold py-3' >Privacy Policy</a>
                         </div>
                    </div>
                    <div className='md:w-[30%] w-full my-5 md:my-0 md:mx-8' id='footerDiv2' data-aos="fade-up"
                         data-aos-duration="1000" data-aos-offset="-500">
                         <div className="relative flex justify-start items-center group mb-4">
                              <div className="h-10 w-1.5 bg-white mr-[1rem] origin-left group-hover:w-[15rem] duration-300 group"></div>
                              <h4 className="text-lg absolute font-bold text-white ml-[1rem] group-hover:text-kijeka-blue group-hover:translate-x-5 duration-300">Address</h4>
                         </div>
                         <div className='flex items-baseline gap-3 relative'>
                              <svg width="30" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute'>
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M19.63 6.4517C20.5007 7.31645 21.1917 8.34313 21.6629 9.47311C22.1343 10.6031 22.3767 11.8142 22.3767 13.0373C22.3767 14.2604 22.1343 15.4715 21.6629 16.6015C21.1917 17.7315 20.5007 18.7582 19.63 19.6229L13 26.2048L6.37 19.6211C5.49934 18.7563 4.80869 17.7295 4.3375 16.5996C3.86629 15.4696 3.62376 14.2585 3.62376 13.0355C3.62376 11.8124 3.86629 10.6013 4.3375 9.47135C4.80869 8.34138 5.49934 7.31466 6.37 6.44984C7.24067 5.58499 8.27431 4.89897 9.41187 4.43092C10.5494 3.96287 11.7687 3.72198 13 3.72198C14.2313 3.72198 15.4505 3.96287 16.5881 4.43092C17.7257 4.89897 18.7593 5.58499 19.63 6.44984V6.4517ZM21.6175 21.5971C23.3221 19.9042 24.4829 17.7471 24.9533 15.3987C25.4236 13.0504 25.1822 10.6162 24.2599 8.40409C23.3374 6.19196 21.7754 4.30122 19.7712 2.97094C17.7668 1.64069 15.4105 0.930664 13 0.930664C10.5895 0.930664 8.23313 1.64069 6.22889 2.97094C4.22464 4.30122 2.66254 6.19196 1.74012 8.40409C0.817712 10.6162 0.576419 13.0504 1.04676 15.3987C1.51711 17.7471 2.67796 19.9042 4.3825 21.5971L11.0106 28.1828C11.2718 28.4424 11.5819 28.6484 11.9233 28.7888C12.2646 28.9294 12.6305 29.0017 13 29.0017C13.3695 29.0017 13.7354 28.9294 14.0767 28.7888C14.4181 28.6484 14.7282 28.4424 14.9894 28.1828L21.6175 21.5971ZM13 16.7622C13.9946 16.7622 14.9484 16.3698 15.6517 15.6712C16.3549 14.9727 16.75 14.0252 16.75 13.0373C16.75 12.0494 16.3549 11.102 15.6517 10.4034C14.9484 9.70486 13.9946 9.31242 13 9.31242C12.0054 9.31242 11.0516 9.70486 10.3484 10.4034C9.6451 11.102 9.25 12.0494 9.25 13.0373C9.25 14.0252 9.6451 14.9727 10.3484 15.6712C11.0516 16.3698 12.0054 16.7622 13 16.7622Z" fill="white" />
                              </svg>
                              <p className='text-sm text-white leading-7 text-justify font-medium pl-9 tracking-widest'>404, 4th floor, "ANUSHRI", <br />
                                   Near Bank of Baroda, Ashram Road,<br />
                                   Usmanpura, AHMEDABAD - 380 013,<br />
                                   Gujarat State, India.</p>
                         </div>
                         <div className='w-full flex justify-center mt-4'>
                              <a href="/" className='bg-white text-kijeka-blue w-full text-center font-semibold py-3' >Term & Conditions</a>
                         </div>
                    </div>
                    <div className='md:w-[30%] w-full flex flex-col justify-between' id='footerDiv3' data-aos="fade-up"
                         data-aos-duration="1000" data-aos-offset="-500">
                         <div className="relative flex justify-start items-center group mb-4">
                              <div className="h-10 w-1.5 bg-white mr-[1rem] origin-left group-hover:w-[15rem] duration-300 group"></div>
                              <h4 className="text-lg absolute font-bold text-white ml-[1rem] group-hover:text-kijeka-blue group-hover:translate-x-5 duration-300">Contact</h4>
                         </div>
                         <div className='flex items-center gap-3 my-6'>
                              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M11.8125 16.3336L9.5 18.6306C9.0125 19.1148 8.2375 19.1148 7.7375 18.643C7.6 18.5064 7.4625 18.3823 7.325 18.2457C6.06096 16.9817 4.89512 15.6244 3.8375 14.1855C2.8125 12.7701 1.9875 11.3546 1.3875 9.95156C0.8 8.5361 0.5 7.18271 0.5 5.89141C0.5 5.0471 0.65 4.24004 0.95 3.49506C1.25 2.73766 1.725 2.04235 2.3875 1.42153C3.1875 0.639301 4.0625 0.254395 4.9875 0.254395C5.3375 0.254395 5.6875 0.328893 6 0.477889C6.325 0.626885 6.6125 0.850379 6.8375 1.1732L9.7375 5.23335C9.9625 5.54376 10.125 5.82933 10.2375 6.10249C10.35 6.36323 10.4125 6.62398 10.4125 6.85989C10.4125 7.15788 10.325 7.45587 10.15 7.74145C9.9875 8.02702 9.75 8.32502 9.45 8.62301L8.5 9.6039C8.3625 9.74048 8.3 9.90189 8.3 10.1006C8.3 10.1999 8.3125 10.2868 8.3375 10.3861C8.375 10.4855 8.4125 10.56 8.4375 10.6345C8.6625 11.0442 9.05 11.5781 9.6 12.2237C10.1625 12.8694 10.7625 13.5275 11.4125 14.1855C11.5375 14.3097 11.675 14.4339 11.8 14.558C12.3 15.0423 12.3125 15.8369 11.8125 16.3336ZM25.4625 20.5303C25.4608 20.9989 25.3541 21.4612 25.15 21.8837C24.9375 22.3307 24.6625 22.7528 24.3 23.1501C23.6875 23.8206 23.0125 24.3049 22.25 24.6153C22.2375 24.6153 22.225 24.6277 22.2125 24.6277C21.475 24.9257 20.675 25.0871 19.8125 25.0871C18.5375 25.0871 17.175 24.7891 15.7375 24.1807C14.3 23.5723 12.8625 22.7528 11.4375 21.7223C10.95 21.3622 10.4625 21.0021 10 20.6172L14.0875 16.5571C14.4375 16.8178 14.75 17.0165 15.0125 17.153C15.075 17.1779 15.15 17.2151 15.2375 17.2524C15.3375 17.2896 15.4375 17.302 15.55 17.302C15.7625 17.302 15.925 17.2275 16.0625 17.091L17.0125 16.1597C17.325 15.8493 17.625 15.6134 17.9125 15.4644C18.2 15.2906 18.4875 15.2037 18.8 15.2037C19.0375 15.2037 19.2875 15.2533 19.5625 15.3651C19.8375 15.4768 20.125 15.6382 20.4375 15.8493L24.575 18.7672C24.9 18.9907 25.125 19.2514 25.2625 19.5618C25.3875 19.8722 25.4625 20.1826 25.4625 20.5303Z" fill="white" />
                              </svg>
                              <p className='text-white font-medium tracking-widest'>+91-9879545352</p>
                         </div>
                         <div className='flex items-center gap-3'>
                              <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.4" d="M25.5 16.1006C25.5 19.5648 22.7 22.3708 19.2125 22.3833H19.2H6.8125C3.3375 22.3833 0.5 19.5896 0.5 16.1254V16.113C0.5 16.113 0.5075 10.6175 0.5175 7.85366C0.51875 7.33466 1.11875 7.04411 1.5275 7.36694C4.4975 9.70742 9.80875 13.9749 9.875 14.0308C10.7625 14.7373 11.8875 15.1358 13.0375 15.1358C14.1875 15.1358 15.3125 14.7373 16.2 14.0171C16.2663 13.9737 21.4588 9.83407 24.4738 7.45509C24.8838 7.13103 25.4863 7.42157 25.4875 7.93933C25.5 10.6821 25.5 16.1006 25.5 16.1006Z" fill="white" />
                                   <path d="M24.8451 3.35333C23.7626 1.32699 21.6326 0.0332031 19.2876 0.0332031H6.8126C4.4676 0.0332031 2.3376 1.32699 1.2551 3.35333C1.0126 3.80653 1.1276 4.37147 1.53135 4.69181L10.8126 12.0659C11.4626 12.5874 12.2501 12.8469 13.0376 12.8469C13.0426 12.8469 13.0463 12.8469 13.0501 12.8469C13.0539 12.8469 13.0589 12.8469 13.0626 12.8469C13.8501 12.8469 14.6376 12.5874 15.2876 12.0659L24.5688 4.69181C24.9726 4.37147 25.0876 3.80653 24.8451 3.35333Z" fill="white" />
                              </svg>
                              <p className='text-white font-medium tracking-widest'>info@kijka.com</p>
                         </div>
                         <div className='w-full flex justify-center mt-7'>
                              <a href="/" className='bg-white text-kijeka-blue w-full text-center font-semibold py-3' >SiteMap</a>
                         </div>
                    </div>
               </div>
               <div className='w-full px-8 py-2'>
                    <h1 className='text-kijeka-blue text-lg font-medium'>2023 ©All rights Reserved by Kijeka</h1>
               </div>
          </div>
     )
}

export default Footer