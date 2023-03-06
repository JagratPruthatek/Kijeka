import { useRef, useState, useEffect } from "react";
// import "../App.css";
// import "../tailwind.css";
import image1 from "./image1.png";
import image2 from "./image2.png";

function Chatbot() {
  const messageEndRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isClosed, setIsClosed] = useState(false)

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    if (inputValue !== "") {
      e.preventDefault();

      setMessages([...messages, { text: inputValue }]);

      setInputValue("");
    }
  };
  const handleClose = () => {
    setIsClosed(true);
  }


  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [messages]);
  return (
    <>
      {!isClosed &&
        <div className="sm:h-[465.69px] sm:w-[361px] w-full rounded-[10px] absolute sm:right-[15%] sm:bottom-[20%] ">
          <div className="h-[70.4px] w-full bg-[#004B95] rounded-t-[10px] text-center sticky top-0 z-20 ">
            <div className="absolute sm:left-[24px] sm:top-[2px]">
              <div className="text">

                <button className="sm:bg-[#FFFFFF] bg-[#004B95]  w-[3.75rem] h-[3.75rem] rounded-[3.75rem] sm:absolute sm:right-[3.125rem] " onClick={handleClose}>
                  <svg
                    className="w-[1.09375rem] h-[1.09375rem] absolute left-[1.34375rem] top-[1.34375rem]"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.616117 0.616117C1.10427 0.127961 1.89573 0.127961 2.38388 0.616117L9 7.23223L15.6161 0.616117C16.1043 0.127961 16.8957 0.127961 17.3839 0.616117C17.872 1.10427 17.872 1.89573 17.3839 2.38388L10.7678 9L17.3839 15.6161C17.872 16.1043 17.872 16.8957 17.3839 17.3839C16.8957 17.872 16.1043 17.872 15.6161 17.3839L9 10.7678L2.38388 17.3839C1.89573 17.872 1.10427 17.872 0.616117 17.3839C0.127961 16.8957 0.127961 16.1043 0.616117 15.6161L7.23223 9L0.616117 2.38388C0.127961 1.89573 0.127961 1.10427 0.616117 0.616117Z"
                      fill="#004B95"
                    />
                    {/* {showComponent &&<Chatbot  handleClose={handleClose}/>} */}
                  </svg>
                </button>
              </div>
            </div>
            <div className="font-[poppins] h-full not-italic font-semibold text-2xl leading-9 capitalize text-[#FFFFFF] relative top-[27%]">
              <p>Chat Bot</p>
            </div>
          </div>
          <div className="sm:h-[69.78%] w-full h-[calc(100vh-140.8px)] bg-[#FFFFFF] overflow-y-scroll z-10">
            <div className="mx-[20px] my-[38px] ">
              <p className="bg-[#A0D0FF] font-[poppins] not-italic font-medium text-sm leading-5 text-[#101010] tracking-[0.03em] rounded-[20px] h-[auto] px-[20px] py-[10px] ">
                Hi!! there ,How can i help you?
              </p>
              <span>
                <img className="pt-[5px]" src={image1} alt="" />
                <div className="ml-[50px] -mt-[25px]">
                  <div className="flex my-[2px] mb-[10px]">
                    <button className="bg-[#FFFFFF] border-[#004B95] font-[poppins] not-italic font-medium text-[10px] flex border-2  rounded-[5px] px-[15px] py-[5px]">
                      Find Products
                    </button>
                    <button className="bg-[#FFFFFF] ml-[5px] border-[#004B95] font-[poppins] not-italic font-medium text-[10px] flex border-2 rounded-[5px] px-[15px] py-[5px] no-break">
                      Get Detailed Brochure
                    </button>
                  </div>
                  <div className="flex">
                    <button className="bg-[#FFFFFF] font-[poppins] not-italic font-medium text-[10px] flex border-2 border-[#004B95] rounded-[5px] px-[15px] py-[5px]">
                      Chat with us
                    </button>
                    <button className="bg-[#FFFFFF] ml-[5px] font-[poppins] not-italic font-medium text-[10px] flex border-2 border-[#004B95] rounded-[5px] px-[15px] py-[5px]">
                      Call with us
                    </button>
                  </div>
                </div>
              </span>
            </div>
            <div className="mx-[20px] my-[38px]">
              <div className="">
                <p className="bg-[#004B95] font-[poppins] not-italic font-medium text-sm leading-5 text-[#FFFFFF] tracking-[0.03em] rounded-[20px] h-[auto] px-[20px] py-[10px] ">
                  How can buy products ?
                </p>
              </div>
              <div className="flex justify-end">
                <img className="pt-[5px]" src={image2} alt="" />
              </div>
            </div>
            <div className="mx-[20px] my-[38px] ">
              <p className="bg-[#A0D0FF] font-[poppins] not-italic font-medium text-sm leading-5 text-[#101010] tracking-[0.03em] rounded-[20px] h-[auto] px-[20px] py-[10px] ">
                Please Enter Category of Product.
              </p>
              <span>
                <img className="pt-[5px]" src={image1} alt="" />
                <div className="ml-[50px] -mt-[25px]">
                  <div className="flex my-[2px] mb-[10px]">
                    <button className="bg-[#FFFFFF] border-[#004B95] font-[poppins] not-italic font-medium text-[10px] flex border-2  rounded-[5px] px-[15px] py-[5px]">
                      Category
                    </button>
                    <button className="bg-[#FFFFFF] ml-[5px] border-[#004B95] font-[poppins] not-italic font-medium text-[10px] flex border-2 rounded-[5px] px-[15px] py-[5px] no-break">
                      Name of Product
                    </button>
                  </div>
                </div>
              </span>
            </div>
            <div className="mx-[20px] my-[38px]">
              <div className="">
                <p className="bg-[#004B95] font-[poppins] not-italic font-medium text-sm leading-5 text-[#FFFFFF] rounded-[20px] h-[auto] px-[20px] py-[10px] ">
                  Arial work Platforms-Aluminium Aerial Work Platform (Single Mast)
                </p>
              </div>
              <div className="flex justify-end">
                <img className="pt-[5px]" src={image2} alt="" />
              </div>
            </div>
            <div className="mx-[20px] my-[38px]">
              {messages.map((message, index) => (
                <div className=" my-[38px]">
                  <p
                    key={index}
                    className="bg-[#004B95] font-[poppins] not-italic font-medium text-sm leading-5 text-[#FFFFFF] tracking-[0.03em] rounded-[20px] h-[auto] px-[20px] py-[10px]"
                  >
                    {message.text}
                  </p>
                  <div className="flex justify-end">
                    <img className="pt-[5px]" src={image2} alt="" />
                  </div>
                </div>
              ))}
              <div ref={messageEndRef}></div>
            </div>
          </div>
          <div className="h-[70.4px] w-full bg-[#FFFFFF] rounded-b-[10px] sticky bottom-0">
            <input
              type="text"
              placeholder="Write Here"
              className="w-[77.75%] h-[53.60%] rounded-[20px] relative top-[23.2%] pl-[7%] left-[2.50%] shadow-tb "
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={(event) =>
                event.key === "Enter" ? handleSubmit(event) : null
              }
            />
            <button
              type="submit"
              className="bg-[#37A945] relative -right-[6.5%] -bottom-[10px] rounded-[45px] w-[45px] h-[45px]"
              onClick={handleSubmit}
            >
              <svg
                className="absolute right-[15px] bottom-[15px]"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.1134 8.8866C8.1134 8.8866 -1.6867 6.85926 1.71889 4.89333C4.59277 3.23446 14.497 0.382345 15.8807 1.11928C16.6177 2.50297 13.7655 12.4072 12.1067 15.2811C10.1407 18.6867 8.1134 8.8866 8.1134 8.8866Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                className="absolute right-[15.12px] bottom-[22.11px]"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.11328 8.88598L8.88058 1.11865"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>}
    </>
  );
}

export default Chatbot;
