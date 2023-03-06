import React from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

function Contact() {
  React.useEffect(() => {
    document.title = "Kijeka | Contact Details";
    document.getElementById("header_title").innerHTML = "Contact Details";
  });

  const [state, setstate] = useState(true);
  const toggleBtn = () => {
    setstate((prevState) => !prevState);
  };
  return (
    <>
      {/*  CONTACT Form START */}
      <div className="l bg-[#EAEAEA]  min-h-screen px-10 py-2">
        <div className="k pt-5 max-sm:mb-3 flex justify-start">
          <h1 className=" text-sidebar max-sm:text-center flex max-sm:text-2xl mt-5 max-sm:mt-0  text-xl font-bold">
            Contact Details
          </h1>
        </div>

        <div className="k sm:flex overflow-x-hidden sm:justify-between ">
          <div className="l sm:border-2   max-sm:bg-white  bg-white w-[1070px] sm:shadow-inner sm:flex  rounded-2xl mt-4">
            <div className="py-10 px-6">
              <h1 className="text-xl  mt-1 text-sidebar font-bold">
                Note:- This Changes will be apply on Footer Only.
              </h1>

              <div class="sm:flex sm:w-1/3 mt-5 my-2 gap-x-6">
                <div className="sm:flex sm:flex-col sm:justify-start ">
                  <h2 className="font-semibold max-sm:flex flex flex-row ">
                    Edit Address Label
                    <div className="l flex flex-row">
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
                  </h2>
                  <input
                    className="outline-none w-60 max-sm:w-72  px-7  h-10  border-2  rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Address"
                  />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-start">
                  <h2 className="font-semibold   flex flex-row">
                    Edit About us Label
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none border-2 max-sm:w-72 rounded-lg text-sm px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="About us"
                  />
                </div>
              </div>
              <div class="flex  justify-start my-2 gap-x-6">
                <div className="flex flex-col justify-start ">
                  <h2 className="font-semibold  flex flex-row">
                    Edit Contact Us Label
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none w-60  px-7  h-10 max-sm:w-72 border-2  rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Contact us"
                  />
                </div>
              </div>
              <div class="sm:flex sm:justify-start my-2 gap-x-6">
                <div className="sm:flex sm:flex-col sm:justify-start ">
                  <h2 className="font-semibold  flex flex-row">
                    Edit Address text
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="max-sm:w-72 outline-none w-60  px-7  h-10  border-2  rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Address"
                  />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-start">
                  <h2 className="font-semibold   flex flex-row">
                    Edit About us text
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none max-sm:w-72 border-2  rounded-lg text-sm px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="xyz"
                  />
                </div>
              </div>
            </div>
            <div className="l mt-14 max-sm:pl-10 mb-10 max-sm:mt-0 max-sm:border-t pr-7">
              <div class=" mt-12 sm:flex sm:justify-start  max-sm:mt-7 my-2 gap-x-6">
                <div className=" sm:flex sm:flex-col sm:justify-start max-sm:mt-0">
                  <h2 className="font-semibold  flex flex-row">
                    Edit Mobile No.1
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none w-60  px-7 max-sm:w-72 h-10  border-2  rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Mobile no.1"
                  />
                </div>
                <div className="sm:flex sm:flex-col sm:justify-start">
                  <h2 className="font-semibold   flex flex-row">
                    Edit Email 1
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none border-2  rounded-lg max-sm:w-72 text-sm px-7 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="E.g india"
                  />
                </div>
              </div>
              <div class="sm:flex justify-start my-2 gap-x-6  sm:justify-start">
                <div className="sm:flex sm:flex-col sm:justify-start ">
                  <h2 className="font-semibold  flex flex-row">
                    Edit Mobile No.2
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none w-60  px-7  h-10  border-2 max-sm:w-72 rounded-lg text-sm my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Mobile no.2"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h2 className="font-semibold   flex flex-row">
                    Edit Email 2
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none border-2  rounded-lg text-sm px-7 max-sm:w-72 h-10 w-60 my-2  "
                    type={state ? "text" : "password"}
                    placeholder="xyz"
                  />
                </div>
              </div>
              <div class="  my-2 gap-x-6 sm:flex  sm:justify-start">
                <div className="sm:flex sm:flex-col sm:justify-start ">
                  <h2 className="font-semibold  flex flex-row">
                    Edit Mobile No.3
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none w-60  px-7  h-10  border-2  rounded-lg text-sm max-sm:w-72 my-2 block"
                    type={state ? "text" : "password"}
                    placeholder="Mobile no.3"
                  />
                </div>
                <div className="flex flex-col justify-start">
                  <h2 className="font-semibold   flex flex-row">
                    Edit Email 3
                    <div className="l flex flex-row">
                      <button onClick={toggleBtn} className="mt-1 pl-3">
                        <AiOutlineEyeInvisible size={20} color="#004B95" />
                      </button>
                      <div
                        onClick={toggleBtn}
                        className="l flex flex-row pl-2 text-sidebar"
                      >
                        Hide
                      </div>
                    </div>
                  </h2>
                  <input
                    className="outline-none border-2  rounded-lg text-sm px-7 h-10 w-60 my-2 max-sm:w-72 "
                    type={state ? "text" : "password"}
                    placeholder="xyz"
                  />
                </div>
              </div>
              <div className="m max-sm:pr-0  max-sm:justify-center max-sm:flex">
                <div className="flex justify-end mt-20  max-sm:my-4   ">
                  <button className=" bg-[#A6A6A6] text-white rounded-lg py-1 px-14">
                    Cancel
                  </button>
                  <div className="  mx-3">
                    <button className="   bg-[#004B95] text-white rounded-lg py-1 px-14">
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
