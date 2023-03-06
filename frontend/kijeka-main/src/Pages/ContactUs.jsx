import React from 'react'

import '../style.css'

const ContactUs = () => {

     document.title = "Kijeka | Contact Us"

     const swipe = () => {
          let anima = document.getElementById('rightSection');
          let mobile = document.getElementById('mobID');
          anima.classList.add('active');
          mobile.classList.add('mobactive');
     };

     const reset = () => {
          let anima = document.getElementById('rightSection');
          let mobile = document.getElementById('mobID');
          anima.classList.remove('active');
          mobile.classList.remove('mobactive');
     };

     return (
          <div className="wrapper mt-24 mb-[300vh] relative">
               <div className="box h-[5rem] w-[10rem] relative flex justify-start items-start mt-[2rem] ml-[2rem] group">
                    <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[15rem] duration-300 group"></div>
                    <h4 className="text-4xl absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Contact</h4>
               </div>

               <div>
                    <img height="200px" width="240px" src="/images/boutique_3.png" alt="loading" className="absolute top-44 left-10 z-10 opacity-20 lg:opacity-100" />
               </div>

               <div className="absolute left-7 lg:left-[430px] lg:w-[400px] w-[300px] lg:top-[150px] top-[170px] h-[197px] text-[#004B95] font-poppins tracking-widest font-normal leading-7">
                    <h2 className="font-bold text-xl mb-2">Plant Address</h2> KIJEKA ENGINEERS PRIVATE LIMITED Plot No. E-344, Road No. 26, Nr. UGVCL Office,GIDC BOL Sanand II, Nr.Rasulpura Village,Taluka SanandDistrict Ahmedabad 382170,Gujarat State, India
               </div>

               <div className="absolute right-10 top-44 hidden lg:block">
                    <img src="/images/phone-contact-icon-sign-symbol-button-blue-speech-bubble-white-background-3d-rendering 1.png" height="150px" width="190px" alt='loading' />
               </div>

               <img src="/images/Vector 162.png" alt="dotted line" className="absolute left-[690px] w-[437px] h-[105px] top-[85px]" />
               <img src="/images/Vector 163.png" alt="loading" className="absolute left-[1050px] top-[310px]" />
               <img src="/images/Vector 164.png" alt="loading" className="absolute left-[1043px] top-[340px]" />


               <div className="absolute left-7 lg:left-10 w-[300px] lg:w-[400px]  top-[450px] h-[197px] text-[#004B95] font-poppins tracking-widest font-normal leading-7"><h2 className="font-bold text-xl mb-2">Office</h2> KIJEKA ENGINEERS PRIVATE LIMITED 404, 4th floor, "ANUSHRI",Near Bank of Baroda,Ashram Road, Usmanpura,AHMEDABAD - 380 013,Gujarat State,India.</div>
               <img src="/images/Vector 159.png" alt="loading" className="absolute left-[160px] top-[335px] " />
               <img src="/images/Vector (1).png" alt="loading" className="absolute left-[165px] top-[439px]" />


               <img src="/images/Group.png" alt="loading" className="absolute left-0 opacity-20 lg:opacity-100 lg:left-[500px] top-[450px] lg:top-[400px] h-[206px] w-[330px] z-10" />
               <img src="/images/Vector 161.png" alt="loading" className="absolute left-[300px] top-[550px]" />
               <img src="/images/Vector 160.png" alt="loading" className="absolute left-[670px] top-[365px]" />
               <img src="/images/Vector (1).png" alt="loading" className="absolute left-[650px] top-[342px]" />

               <div className="absolute left-7 top-[700px] lg:left-[900px] lg:top-[400px]">
                    <h2 className="font-bold text-xl mb-2 text-[#004B95] font-poppins tracking-widest">Contact</h2>
                    <div className="flex flex-row justify-start mb-1 space-x-3">
                         <img src="/images/Vector.png" alt="loading" width="16px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">Customer Care: +91-98795 45352</p>
                    </div>
                    <div className="flex flex-row justify-start mb-1 space-x-3">
                         <img src="/images/Vector.png" alt="loading" width="16px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">+91-63592 37729</p>
                    </div>
                    <div className="flex flex-row justify-start mb-6 space-x-3">
                         <img src="/images/Vector.png" alt="loading" width="16px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">+91-79-2755 0248</p>
                    </div>
                    <div className="flex flex-row justify-start mb-1 space-x-3">
                         <img src="/images/Message.png" alt="loading" width="20px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">info@kijeka.com</p>
                    </div>
                    <div className="flex flex-row justify-start mb-1 space-x-3">
                         <img src="/images/Message.png" alt="loading" width="20px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">overseas@kijeka.com</p>
                    </div>
                    <div className="flex flex-row justify-start mb-1 space-x-3">
                         <img src="/images/Message.png" alt="loading" width="20px" /><p className="text-[#004B95] font-poppins tracking-widest font-normal leading-7">help@kijeka.com</p>
                    </div>
               </div>


               {/* <!--form--> */}
               <div className="absolute top-[1000px] lg:top-[720px]">

                    <div className="box h-[5rem] w-[10rem] relative flex justify-start items-start mt-[2rem] ml-[2rem] group">
                         <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[15rem] duration-300 group"></div>
                         <h4 className="text-4xl absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Inquiry</h4>
                    </div>
                    <br />
                    <img src="/images/back.png" className="relative left-10 mb-5 cursor-pointer" alt="loading" onClick={reset} />

                    <div className="container flex flex-col lg:flex-row justify-between relative left-12">
                         {/* <!--left side--> */}
                         <div className="left-section text-[#004B95]">
                              <div className="title">
                                   <div className="lets text-3xl leading-10 font-bold">Let’s</div>
                                   <div className="lets text-3xl leading-10 font-bold">Known More</div>
                                   <div className="lets text-3xl leading-10 font-bold">About Products!</div>
                                   <div className="talk text-xl font-semibold leading-7">Let’s talk.</div>
                              </div>
                              <br /><br />

                              <div className="inputs">

                                   <div>
                                        <label for="name" className="detail font-bold text-2xl">I am &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <input type="text" id="name" placeholder="Eg.Rahul" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" onClick={swipe} />
                                   </div>
                                   <br />
                                   <div >
                                        <label for="email" className="detail font-bold text-2xl">My Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <input type="email" id="email" placeholder="Eg. Rahul123@gmail.com" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                                   </div>
                                   <br />

                                   <div className='mob' id='mobID'>

                                        <label for="mobileno" className="detail font-bold text-2xl">Mobile No. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                        <input type="text" placeholder="Eg. +91 7777989922" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                                   </div>

                              </div>

                         </div>
                         {/* <!--right side--> */}

                         <div className='right-section' id='rightSection'>

                              <div>
                                   <label for="country" className="detail1 text-[#004B95] font-bold text-2xl">Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                   <input type="text" placeholder="Eg. India" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                              </div>
                              <br />
                              <div >
                                   <label for="company" className="detail1 text-[#004B95] font-bold text-2xl">Company Name&nbsp;&nbsp;</label>
                                   <input type="email" placeholder="Eg. XYZ" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                              </div>
                              <br />
                              <div >
                                   <label for="query" className="detail1 text-[#004B95] font-bold text-2xl">Write Query &nbsp;&nbsp;</label>
                                   <input type="text" placeholder="Eg. xyz" className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                              </div>
                              <br />
                              <div>
                                   <label for="address" className="detail1 text-[#004B95] font-bold text-2xl">Address &nbsp;&nbsp;&nbsp;</label>
                                   <input type="text" placeholder="Eg. Sector -21 ,Gandhinagar " className=" border-b-[2px] font-semibold text-2xl focus:outline-none" />
                              </div>
                              <br />
                              <div>
                                   <input type="checkbox" />
                                   <label for="checkbox" className="detail1 text-[#004B95] font-normal text-base">Subscribe for Latests News</label>
                              </div>


                              <button className=" text-[#004B95] h-[55px] w-[168px] font-poppins text-xl border-2 border-[#004B95] rounded-lg font-bold absolute left-[3px] lg:left-[5px] top-[400px] lg:top-[300px] hover:text-white hover:bg-[#004B95] hover:duration-700 duration-700 hover:cursor-pointer " >Send</button>

                         </div>
                    </div>



                    {/* <!--google map--> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2975403745104!2d72.56871951447971!3d23.049550784939385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84632030cd3b%3A0x420a69ea28813dad!2sKIJEKA%20ENGINEERS%20PVT.%20LTD!5e0!3m2!1sen!2sin!4v1677241767638!5m2!1sen!2sin" title='kijeka' width="930px" height="450px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="absolute top-[1200px] left-[7px] lg:top-[700px] lg:left-[140px] lg:w-[1000px] h-[450px] lg:h-[500px] w-[360px]"></iframe>

               </div>

          </div>
     )
}

export default ContactUs