import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function Form() {
  React.useEffect(() => {
    document.title = "Kijeka | Reach US From";
    document.getElementById("header_title").innerHTML = "Reach US From";
  });

  const [state, setstate] = useState(true);
  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };

  return (
    <>
      <div className="l w-full bg-[#EAEAEA]  min-h-screen px-10 py-3">
        <div className="k flex justify-start mb-4">
          <h1 className=" text-sidebar max-sm:text-center flex max-sm:text-2xl   text-xl font-bold">
            Reach us Form
          </h1>
        </div>
        {/*  Reach Form START */}
        <div className=" sm:flex sm:justify-between overflow-x-hidden">
          <div className=" sm:border-2 max-sm:rounded-2xl rounded-2xl shadow-[0px_2px_20px_rgba(166,166,166,0.25)] max-sm:bg-white bg-white sm:shadow-inner sm:flex w-[1070px]">
            <div className=" max-sm:border-none border-r py-10 px-3">
              <div class=" sm:flex sm:w-1/3  gap-x-6">
                <div className=" sm:flex sm:flex-col   sm:justify-start ">
                  <div className=" font-semibold pr-12 text-[13px]  max-sm:mb-0 flex flex-row items-center justify-center ">
                    Edit Heading text 1
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60 max-sm:w-72 max-sm:mb-4  px-7  h-10  border-2  rounded-lg text-sm my-2 max-sm:block"
                    type={state ? "text" : "password"}
                    placeholder="Let's Talk"
                  />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-start">
                  <div className="flex flex-row font-semibold pr-12 text-[13px] max-sm:mb-0  ">
                    Edit Heading text 2
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2 max-sm:w-72 max-sm:mb-4 rounded-lg text-sm px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="Let's Know More"
                  />
                </div>
              </div>
              <div class="sm:flex max-sm:mt-0 mt-12 sm:justify-start my-2 gap-x-6">
                <div className="sm:flex sm:flex-col sm:justify-start ">
                  <div className="font-semibold pr-12 text-[13px] text-sm flex flex-row  max-sm:mb-0">
                    Edit Label of Name
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7  h-10 max-sm:w-72 max-sm:mb-4 border-2  rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="I am"
                  />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-start">
                  <div className="font-semibold pr-7 text-[13px] max-sm:mb-0 text-sm flex flex-row ">
                    Edit TextFiled of Name
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2  rounded-lg max-sm:w-72 text-sm max-sm:mb-4 px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="E.g Rahul"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start my-2 gap-x-6">
                <div className="flex flex-col justify-start ">
                  <div className="font-semibold pr-12 text-[13px] max-sm:mb-0 flex text-sm flex-row">
                    Edit Label of Email
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7  h-10  border-2 max-sm:w-72 rounded-lg max-sm:mb-4 text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="My Email"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="font-semibold pr-7 text-[13px]   max-sm:mb-0 flex text-sm flex-row">
                    Edit TextFiled of Email
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2  rounded-lg text-sm px-7 max-sm:w-72 h-10 w-60 my-2 max-sm:mb-4 "
                    type={state ? "text" : "password"}
                    placeholder="Eg Rahul@gmail.com"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start my-2 gap-x-6">
                <div className="flex flex-col justify-start ">
                  <div className="font-semibold pr-12 text-[13px] text-sm max-sm:mb-0 flex flex-row">
                    Edit Label of Country
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7  h-10 max-sm:mb-4 border-2  rounded-lg max-sm:w-72 text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Country"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="font-semibold pr-4 text-[13px] text-sm max-sm:mb-0 flex flex-row">
                    Edit TextFiled of Country
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2  rounded-lg max-sm:mb-4 max-sm:w-72 text-sm px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="Eg.india"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start my-2 gap-x-6">
                <div className="flex flex-col justify-start ">
                  <div className="font-semibold  text-[13px] text-sm flex flex-row  max-sm:mb-0">
                    Edit Label of Company Name
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7  h-10  border-2 max-sm:mb-4 max-sm:w-72 rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Country name"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="font-semibold  text-[12px]   max-sm:mb-0 flex flex-row">
                    Edit TextFiled of Company Name
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className=" pl-1 ">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-0 text-sidebar items-center justify-between"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2  rounded-lg text-sm px-7 max-sm:mb-4 max-sm:w-72 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="Eg.xyz"
                  />
                </div>
              </div>
            </div>
            <div className="l max-sm:pl-12 pl-7 max-sm:border-t max-sm:mt-0 mt-28 pr-7">
              <div class="sm:flex mt-12  my-2 gap-x-6">
                <div className=" ">
                  <div className="font-semibold pr-1 text-[13px] text-sm max-sm:mb-0 flex flex-row">
                    Edit Label of Write query
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7 max-sm:mb-4 h-10  border-2  rounded-lg text-sm max-sm:w-72 my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Write Query"
                  />
                </div>
                <div className="">
                  <div className="font-semibold pr-1 text-[13px] text-sm  max-sm:mb-0 flex flex-row">
                    Edit TextFiled of Write query
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-1">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-0 text-sidebar items-center"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="max-sm:mb-4 outline-none border-2  rounded-lg text-sm px-7 h-10 w-60 my-2  max-sm:w-72"
                    type={state ? "text" : "password"}
                    placeholder="Eg.xyzl"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start my-2 gap-x-6">
                <div className="flex flex-col justify-start ">
                  <div className="font-semibold pr-12 text-[13px] text-sm max-sm:mb-0 flex flex-row">
                    Edit Label of Address
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none max-sm:mb-4 w-60  px-7  h-10  border-2  rounded-lg text-sm my-2 block max-sm:w-72"
                    type={state ? "text" : "password"}
                    placeholder="Address"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="font-semibold  text-[13px] text-sm  max-sm:mb-0 flex flex-row">
                    Edit TextFiled of Address
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2 max-sm:mb-4 rounded-lg text-sm px-7 h-10 w-60 my-2  max-sm:w-72"
                    type={state ? "text" : "password"}
                    placeholder="Eg.sector 15 Gandhinagar"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start  gap-x-6">
                <div className="flex flex-col justify-start ">
                  <div className="font-semibold text-[13px] text-sm max-sm:mb-0 flex flex-row">
                    Edit Text of News Subscription
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-1">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row  text-sidebar items-center"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none w-60  px-7  h-10 max-sm:mb-4 border-2  rounded-lg text-sm my-2 block max-sm:w-72"
                    type={state ? "text" : "password"}
                    placeholder="Sub. for"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <div className="font-semibold  text-[13px] text-sm  max-sm:mb-0 flex flex-row">
                    Edit Text of Submit button
                    <div className="l items-center flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l cursor-pointer flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </div>
                  <input
                    className="outline-none border-2  rounded-lg text-sm max-sm:mb-4 px-7 h-10 w-60 my-2  max-sm:w-72"
                    type={state ? "text" : "password"}
                    placeholder="Send"
                  />
                </div>
              </div>
              <div className="m max-sm:pl-7 max-sm:justify-center max-sm:flex">
                <div className="flex justify-end mt-20 mb-5    max-sm:my-3   ">
                  <button className=" bg-[#A6A6A6] text-white max-sm:px-10 rounded-lg py-1 px-14">
                    Cancel
                  </button>
                  <div className="  mx-3">
                    <button className="   bg-[#004B95] text-white max-sm:px-10 rounded-lg py-1 px-14">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  CONTACT Form END */}
    </>
  );
}
export default Form;
