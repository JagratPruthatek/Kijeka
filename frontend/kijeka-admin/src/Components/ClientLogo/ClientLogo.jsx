import React, { useState } from "react";

const ClientLogo = () => {
  // use to display title and header title
  React.useEffect(() => {
    document.title = "Kijeka | Client Logos";
    document.getElementById("header_title").innerHTML = "Client Logos";
  });

  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    // FOR BUG IN CHROME
    event.target.value = "";
  };

  return (
    <>
      {/*  ========================title =========================================== */}
      <div className="sm:bg-[#EAEAEA] min-h-screen px-12 w-full py-10">
        <div className="ml-[2rem] ">
          <div>
            <h2 className="text-[#004895] text-[1rem] font-bold ">Clients</h2>
          </div>

          {/*===============================form ================================================= */}
          <div className="mt-3 bg-white rounded-2xl">
            <div className="ml-5">
              <form>
                <div className="relative truncate inline-block my-4">
                  <h3 className="text-[#000000] text-[0.9rem] my-3 leading-3 ">
                    Upload Images
                  </h3>
                  <button className="border-solid  border-gray-400 w-24 text-white- bg-gray-100 rounded-full text-[0.9rem] py-2">
                    choose
                  </button>
                  <input
                    type="file"
                    name="images"
                    onChange={onSelectFile}
                    multiple
                    accept="image/png , image/jpeg, image/webp"
                    className="absolute  left-0 top- opacity-0 w-20 h-5"
                  />

                  <button
                    onClick={() => {
                      console.log(selectedImages);
                    }}
                    className=" text-[1rem]  rounded w-20 h-8 bg-[#004894] text-white bg-none  ml-[2rem]  "
                  >
                    Add
                  </button>
                </div>
              </form>

              {/*=================================================end form============================== */}
              <div class="box-border rounded-2xl h-[40vh] w-[90%] p-4 border-2 sm:w-[80%] sm:h-[50vh] md:w-[65%] md:h-[50vh] lg:w-[55%] xl:w-[95%] ">
                <div className="flex space-x-4">
                  {selectedImages &&
                    selectedImages.map((image, index) => {
                      return (
                        <div key={image} className="w-[10rem] h-[10rem]">
                          <img src={image} height="200" alt="upload" />
                        </div>
                      );
                    })}
                </div>
              </div>

              <div class="font-poppins font-medium text-[12px] text-[#004B95]">
                *Arrange Images According to you.
              </div>

              <div className="my-2 ml-[10rem] sm:ml-[20rem] md:ml-[18rem] lg:ml-[20rem] xl:ml-[50rem] py-10">
                <button class="rounded w-20 h-8 bg-[#004894] text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientLogo;
