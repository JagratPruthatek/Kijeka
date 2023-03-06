import React from "react";

function Yt() {
  return (
    // <!-- STORE FORM -->
    <>
      <div className="l sm:bg-[#EAEAEA] min-h-screen px-12 w-full">
        <div className="k max-sm:text-center max-sm:pt-5 pl-7 max-sm:pl-24 pt-5 flex justify-start">
          <h1 className=" text-sidebar  flex max-sm:text-2xl  max-sm:mt-1 text-xl font-bold">
            YouTube Video
          </h1>
        </div>
        <div className="k sm:flex overflow-x-hidden sm:justify-between">
          <div className="l sm:border-2 sm:rounded-2xl sm:bg-white sm:shadow-inner sm:flex sm:m-5 pr-12 w-[1000px]">
            <div className=" pr-80 max-sm:pr-0 ">
              <div className=" pr-60 max-sm:pr-0 ">
                <div className="flex flex-col mx-10 mt-11 max-sm:pr-0 pr-96  ">
                  <h2 className="font-semibold pt-2 max-sm:mt-8 text-xl mt-2">
                    Enter Title Of Your Video
                  </h2>
                  <input
                    className="outline-none max-sm:w-72  px-5 h-10 mt-2 border-2  rounded-lg text-sm my-3 "
                    type="text"
                    placeholder="Title"
                  />
                  <h2 className="font-semibold text-xl mt-5 my-2">
                    Upload Thumbnail Image
                  </h2>
                  <button class="outline-none w-32 text-center  px-5 h-10 mt-2 cursor-pointer shadow-inner font-semibold text-white rounded-2xl text-sm my-1 mx-1 bg-slate-300">
                    Choose
                  </button>
                  <h2 className="font-semibold text-xl mt-10 my-2">
                    Paste Link Here
                  </h2>
                  <input
                    className="outline-none w-96 px-5 max-sm:w-72 h-11 mt-2 border-2  rounded-lg text-sm my-1 "
                    type="text"
                    placeholder="Link"
                  />
                  <div className="m max-sm:pl-2 mt-10 max-sm:justify-center max-sm:flex">
                    <div className="flex justify-start my-4">
                      <button className=" bg-slate-400 text-white rounded-lg py-2 max-sm:px-8 px-20">
                        Cancel
                      </button>
                      <div className="  mx-3">
                        <button className="bg-sidebar text-white rounded-lg py-2 max-sm:px-8 px-20">
                          Upload
                        </button>
                      </div>
                    </div>
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

export default Yt;
