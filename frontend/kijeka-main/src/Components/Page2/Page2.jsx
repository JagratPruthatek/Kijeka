import React from "react";
// import Truck from "../Truck.png";
// import SVGComponent from "../svg/SVGComponent";
import SVGComponent from "../SVGComponent/SVGComponent";
import { BsArrowRight } from "react-icons/bs";

const Page2 = () => {
     return (
          // <div className=""  >
          //      <div className="">
          //           <div className="mt-28 w-full">
          //                <SVGComponent />
          //           </div>
          //           <div className="absolute top-64 translate-x-20  text-white text-left">
          //                <h1 className=" text-4xl font-bold" data-aos="zoom-out-down" data-aos-duration="1500">New Forklift</h1>
          //                <p className="mt-3 h-20 text-[20px] font-normal space-x-28" data-aos="zoom-out-right" data-aos-duration="1500">
          //                     t is a long established fact that a reader will be distracted by the{" "}
          //                     <br />
          //                     readable content of a page when looking at its layout.The point of
          //                     <br />
          //                     using Lorem ipusm is that
          //                </p>

          //                <button data-aos-offset="0" className="group  flex items-center border-2 border-white  text-white bg-transparent mt-12  rounded-md cursor-pointer px-12 py-1 my-2 " >
          //                     Explore
          //                     <span className="">
          //                          <BsArrowRight name="page2" className="ml-3" />
          //                     </span>
          //                </button>
          //                {/* className=" flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" */}
          //           </div>
          //      </div>
          //      <div className="absolute top-44 right-[11rem] w-96 " data-aos="fade-down-right" data-aos-duration="1500">
          //           <img src='/images/Truck2.png' alt="" />
          //      </div>

          // </div>

          <div className="v text-left">
               <div className=" w-full">
                    <SVGComponent />
               </div>

               <div className=" absolute top-1/2 -translate-y-1/2 translate-x-20  text-white text-left">
                    <h1 className="text-4xl font-bold" data-aos="zoom-out-down" data-aos-duration="1500" >New Forklift</h1>
                    <p className="mt-3 h-20 text-[20px] font-normal space-x-28" data-aos="zoom-out-right" data-aos-duration="1500">
                         t is a long established fact that a reader will be distracted by the{" "}
                         <br />
                         readable content of a page when looking at its layout.The point of
                         <br />
                         using Lorem ipusm is that
                    </p>

                    <button data-aos-offset="0" data-aos-duration="1500" className="group  flex items-center border-2 border-white  text-white bg-transparent mt-12 rounded-md cursor-pointer px-12 py-1 my-2" data-aos="zoom-out-right" >
                         Explore
                         <span className="">
                              <BsArrowRight name="page" className="ml-3" />
                         </span>
                    </button>
                    {/* className=" flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer" */}
               </div>
               <div className="absolute top-[15%] right-[11rem] w-96" data-aos="fade-down-right" data-aos-duration="1500">
                    <img src='/images/Truck2.png' alt="" />
               </div>
          </div>
     );
};

export default Page2;
