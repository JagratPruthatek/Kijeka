import React from "react";

const ImageSlider = () => {
  return (
    <div className="bg-[#EAEAEA] min-h-screen px-12">
      <div className="flex lg:flex-col text-[#004B95] font-inter font-bold text-xs tracking-widest ml-[30px] pt-[20px]">
        Image Slider
      </div>
      <div className="h-[485px] w-[900px] mt-[20px] ml-[30px] bg-white rounded-[10px] shadow shadow-shadowcolor-500/40">
        <div className="font-poppins font-medium text-xs tracking-wider pl-[35px] pt-[20px]">
          Upload Images
        </div>
        <div className="flex flex-row mt-[10px] ml-[30px] space-x-[40px]">
          <div className="relative text-sm bg-grayBG2 hover:bg-kijeka-blue px-3 py-1  w-32 text-center text-white rounded-full transition-all duration-300 cursor-pointer">
            <p id="imageContainer" className="mt-1.5">Choose</p>
            <input
              required
              type="file"
              onInputCapture={() => {
                let imageInput = document.getElementById("images");
                imageInput.addEventListener("change", () => {
                  if (imageInput.files.length > 0) {
                    const fileName = document.getElementById("images").files[0].name;
                    document.getElementById("imageContainer").innerHTML = fileName;
                  }
                });
              }}
              id="images"
              name="images"
              className="h-full w-full opacity-0 absolute top-0 left-0"
              accept=".jpg,.jpeg,.png"
            ></input>
          </div>
          <button className="h-[40px] w-[103px] bg-[#004B95] rounded-[5px] text-white font-poppins text-base font-semibold tracking-widest">
            Add
          </button>
        </div>

        <div className="ml-[50px] mt-[20px] w-[800px] h-[300px] border-2 rounded-[5px]"></div>
        <div className="font-poppins font-medium text-xs text-[#004B95] ml-[50px] mt-[10px]">
          *Arrange Images According to you.
        </div>
        <div className="flex justify-end mr-[50px]">
          <button className=" w-[136px] h-[40px] rounded-[5px] bg-[#004B95] text-white font-poppins font-semibold text-base">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
