import React from "react";
import { useNavigate } from "react-router-dom";
const Goback = () => {
  const navigate = useNavigate();
  return (
    <div
      className="ml-[20px] cursor-pointer flex justify-start items-center text-[#004B95] font-poppins  font-bold not-italic text-[20px] leading-[30px] tracking-[10%] py-10"
      onClick={() => navigate(-1)}
    >
      <svg
        width="15"
        height="9"
        viewBox="0 0 15 9"
        fill="none"
        className="rotate-90 mr-[15px]"
      >
        <path
          d="M0.513105 0.680097C0.919901 0.273301 1.57945 0.273301 1.98624 0.680097L7.49968 6.19353L13.0131 0.680097C13.4199 0.2733 14.0794 0.2733 14.4862 0.680097C14.893 1.08689 14.893 1.74644 14.4862 2.15324L8.23625 8.40324C7.82945 8.81003 7.1699 8.81003 6.76311 8.40324L0.513105 2.15324C0.106309 1.74644 0.106309 1.08689 0.513105 0.680097Z"
          fill="#004B95"
        />
      </svg>
      Go back
      <i className="pl-[20px] fa-solid fa-arrow-right-long"></i>
      <p className=" text-[#004B95] font-poppins  font-bold not-italic text-[12px] leading-[14.52px] tracking-[10%] pl-[10px]">
        Blogs
      </p>{" "}
    </div>
  );
};

export default Goback;
