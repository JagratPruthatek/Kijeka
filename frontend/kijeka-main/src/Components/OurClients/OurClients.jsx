import React from 'react'

const OurClients = () => {
     return (
          <div className='my-10'>
               <div className="box h-[5rem] w-[25rem] relative flex justify-start items-start ml-[2rem] group">
                    <div className="h-14 w-1.5 bg-[#004B95] absolute mr-[1rem] origin-left group-hover:w-[18rem] duration-300 group"></div>
                    <h4 className="text-[28px] absolute font-bold text-[#004B95] mt-[0.5rem] ml-[1rem] group-hover:text-white group-hover:translate-x-5 duration-300">Our clients</h4>
               </div>

               {/* <div className="logo flex flex-col space-y-10 mt-[3rem] items-center lg:flex-row lg:space-x-10 lg:justify-center"> */}
               <div className="logo grid space-y-10 gap-10 items-center justify-center md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 my-5">

                    <div className="group relative w-fit mx-auto">
                         <img src="./images/Property 1=Variant2.png" className="absolute opacity-0 group-hover:opacity-100 duration-700" />
                         <img src="./images/pngegg (1) 1.png" alt="" className="relative group-hover:opacity-0 duration-700" />
                    </div>

                    <div className="relative group w-fit mx-auto" style={{ marginTop: 0 }}>
                         <img src="./images/pngegg 1 (1).png" alt="" className="absolute opacity-0 group-hover:opacity-100 duration-700" />
                         <img src="./images/pngegg 1.png" alt="" className="relative group-hover:opacity-0 duration-700" />
                    </div>

                    <div className="relative group w-fit mx-auto" style={{ marginTop: 0 }}>
                         <img src="./images/adanilogo 1 (1).png" alt="" className="absolute opacity-0 group-hover:opacity-100 duration-700" />
                         <img src="./images/adanilogo 1.png" alt="" className="relative group-hover:opacity-0 duration-700" />
                    </div>

                    <div className="relative group w-fit mx-auto" style={{ marginTop: 0 }}>
                         <img src="./images/essar 1 (1).png" alt="" className="absolute opacity-0 group-hover:opacity-100 duration-700" />
                         <img src="./images/essar 1.png" alt="" className="relative group-hover:opacity-0 duration-700" />
                    </div>

                    <div className="relative group w-fit mx-auto" style={{ marginTop: 0 }}>
                         <img src="./images/ongc 1 (1).png" alt="" className="absolute opacity-0 group-hover:opacity-100 duration-700" />
                         <img src="./images/ongc 1.png" alt="" className="relative group-hover:opacity-0 duration-700" />
                    </div>
               </div>
          </div>
     )
}

export default OurClients