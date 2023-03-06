import React from "react";

function Review() {
  return (
    // <!-- STORE FORM -->
    <>
      <div className="sm:bg-[#EAEAEA] min-h-screen px-12">
        <div className="pl-7 pt-5  max-sm:pt-7 max-sm:pl-36 flex justify-start">
          <h1 className="text-sidebar max-sm:text-center flex max-sm:text-2xl text-xl font-bold">
            Review
          </h1>
        </div>

        <div className="sm:flex sm:bg-[#EAEAEA] overflow-x-hidden  sm:justify-between">
          <div className="sm:border-2 sm:rounded-2xl sm:bg-white sm:shadow-inner sm:flex sm:m-5 w-[1000px]">
            <div className="flex flex-col mx-10 max-sm:mx-0 max-sm:ml-10  mt-0  ">
              <div class="flex justify-start my-2   gap-x-6">
                <div className="flex flex-col justify-start ">
                  <h2 className=" max-sm:mb-0 font-semibold mt-7 max-sm:mt-10 mb-2">
                    Name Of Client
                  </h2>
                  <input
                    className="outline-none w-full mr-96 max-sm:mr-0 max-sm:w-72 px-7  h-10  border-2  rounded-lg text-sm my-2 block"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="max-sm:absolute flex max-sm:mt-32 max-sm:flex-col max-sm:justify-start flex-col">
                  <h2 className="font-semibold max-sm:mb-0 mt-7 mb-2">
                    Write Content
                  </h2>
                  <textarea
                    className="outline-none border-2 mr-96   rounded-lg max-sm:mr-0 text-sm p-2  w-96 max-sm:w-72 pr-32 my-2  "
                    type="text"
                    placeholder=""
                    rows="5"
                  />
                </div>
              </div>
              <div className="j">
                <div className="l mb-5  max-sm:absolute max-sm:mt-28">
                  <h2 className="font-semibold  my-2 max-sm:mb-0 max-sm:mt-20">
                    Upload Profile Image
                  </h2>
                  <button class="outline-none w-32 text-center  px-5 h-10 mt-2 cursor-pointer shadow-inner font-semibold text-white rounded-2xl text-sm my-1 mx-1 bg-[#D9D9D9]">
                    Choose
                  </button>
                  <h2 className="font-semibold max-sm:mt-10 max-sm:mb-0 my-2">
                    No. Of Stars
                  </h2>
                  <input
                    className="outline-none w-96 px-5 h-11 mt-2 max-sm:w-72 border-2 rounded-lg text-sm my-1 "
                    type="text"
                    placeholder="1 to 5"
                  />
                </div>
              </div>
              <div className="absolute mt-80 max-sm:justify-center ml-32 max-sm:pl-36 max-sm:mt-96 pl-96 max-sm:flex max-sm:ml-0 max-sm:pr-32">
                <div className="flex justify-center mt-10 max-sm:absolute pl-10 max-sm:pl-1 max-sm:pr-0 max-sm:my-4 max-sm:mt-44">
                  <button className=" bg-[#a6a6a64d] text-white  max-sm:mb-5 max-sm:px-10 rounded-lg py-1 px-14">
                    Cancel
                  </button>
                  <div className="mx-3">
                    <button className=" max-sm:mb-5 bg-sidebar text-white max-sm:px-10  rounded-lg py-1 px-14">
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

export default Review;
