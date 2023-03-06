import React from "react";
import Approved from "./Approves/Approved";
import Delete from "./Deleted/Delete";
import Drafts from "./Drafts/Drafts";
import LikedBlogs from "./LikeRecents/LikedBlogs";
import Published from "./Publish/Published";
import Recents from "./LikeRecents/Recents";
import Rejected from "./Reject/Rejected";
import ReviewBlog from "./UnderReview/ReviewBlog";
import { Link } from "react-router-dom";
import LiikedAndRecents from "./LikeRecents/LiikedAndRecents";

const BlogMain = () => {
  // use to display title and header title
  React.useEffect(() => {
    document.title = "Kijeka | Blog";
    document.getElementById("header_title").innerHTML = "Blog";
  });
  return (
    <>
      {/* SubHeading */}
      <div className="w-full bg-[#EAEAEA] px-12 py-12 h-full">
        <div>
          <p className=" text-[#004B95] font-poppins  font-bold not-italic text-[12px] leading-[14.52px] tracking-[10%] pl-[30px]">
            Blogs
          </p>
          <div className="grid grid-cols-4 p-4 gap-y-8">
            {/* new blog */}
            <Link
              to={`newblog`}
              className=" cursor-pointer bg-[#FFFFFF] w-[200px] h-[75px] flex justify-center items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1432_16014)">
                  <path
                    d="M26.25 8.44625L23.75 10.9463V5H12.5V11.25H6.25003V25H23.75V21.5538L26.25 19.0538V26.26C26.2497 26.589 26.1188 26.9044 25.886 27.1369C25.6533 27.3694 25.3378 27.5 25.0088 27.5H4.99128C4.82713 27.4989 4.66481 27.4654 4.51359 27.4015C4.36237 27.3376 4.22521 27.2446 4.10995 27.1277C3.99469 27.0108 3.90358 26.8724 3.84182 26.7203C3.78007 26.5682 3.74888 26.4054 3.75003 26.2413V10L11.2538 2.5H24.9975C25.6875 2.5 26.25 3.06875 26.25 3.74V8.44625ZM27.2225 11.0088L28.99 12.7775L19.2675 22.5L17.4975 22.4975L17.5 20.7325L27.2225 11.01V11.0088Z"
                    fill="#004B95"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1432_16014">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                New Blog
              </p>
            </Link>
            {/* Draft */}
            <Link
              to={`drafts`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex  items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 2.5C25.69 2.5 26.25 3.06 26.25 3.75V8.44625L23.75 10.9463V5H6.25V25H23.75V21.5525L26.25 19.0525V26.25C26.25 26.94 25.69 27.5 25 27.5H5C4.31 27.5 3.75 26.94 3.75 26.25V3.75C3.75 3.06 4.31 2.5 5 2.5H25ZM27.2225 11.01L28.99 12.7775L19.2675 22.5L17.4975 22.4975L17.5 20.7325L27.2225 11.01V11.01ZM16.25 15V17.5H10V15H16.25ZM20 10V12.5H10V10H20Z"
                  fill="#004B95"
                />
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Draft
              </p>
            </Link>
            {/* Under review */}
            <Link
              to={`reviewblog`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex  items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1467_10243)">
                  <path
                    d="M18.75 5H6.25V25H23.75V10H18.75V5ZM3.75 3.74C3.75 3.055 4.30875 2.5 4.99875 2.5H20L26.25 8.75V26.2413C26.2512 26.4054 26.22 26.5682 26.1582 26.7203C26.0965 26.8724 26.0054 27.0108 25.8901 27.1277C25.7748 27.2446 25.6377 27.3376 25.4865 27.4015C25.3352 27.4654 25.1729 27.4989 25.0088 27.5H4.99125C4.66297 27.4977 4.34877 27.3664 4.11652 27.1344C3.88427 26.9023 3.75262 26.5883 3.75 26.26V3.74ZM16.9113 18.0575C15.8629 18.67 14.6276 18.8804 13.4356 18.6493C12.2436 18.4183 11.1763 17.7616 10.4328 16.8017C9.68924 15.8418 9.32018 14.6443 9.39441 13.4324C9.46865 12.2205 9.98111 11.077 10.8363 10.215C11.6968 9.3546 12.8416 8.83757 14.0561 8.76082C15.2706 8.68406 16.4714 9.05286 17.4334 9.79807C18.3954 10.5433 19.0527 11.6138 19.2819 12.8089C19.5112 14.004 19.2967 15.2417 18.6788 16.29L21.4413 19.0525L19.6738 20.8213L16.9113 18.0588V18.0575ZM16.1388 15.5175C16.3775 15.2869 16.568 15.011 16.699 14.706C16.83 14.401 16.899 14.073 16.9019 13.741C16.9048 13.4091 16.8415 13.0799 16.7158 12.7726C16.5901 12.4654 16.4045 12.1862 16.1697 11.9515C15.935 11.7168 15.6559 11.5311 15.3486 11.4054C15.0414 11.2797 14.7122 11.2165 14.3803 11.2194C14.0483 11.2223 13.7203 11.2912 13.4152 11.4222C13.1102 11.5533 12.8344 11.7437 12.6038 11.9825C12.1484 12.454 11.8964 13.0855 11.9021 13.741C11.9078 14.3965 12.1707 15.0235 12.6342 15.4871C13.0977 15.9506 13.7248 16.2135 14.3803 16.2192C15.0357 16.2249 15.6673 15.9729 16.1388 15.5175Z"
                    fill="#004B95"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1467_10243">
                    <rect width={30} height={30} fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Under Review
              </p>
            </Link>
            {/* Approved */}
            <Link
              to={`approved`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex  items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5002 21C13.5002 21.946 13.1687 22.8145 12.6172 23.5H25.0002C26.3812 23.5 27.5002 22.381 27.5002 21V20H13.5002V21Z"
                  fill="#004B95"
                />
                <path
                  d="M24 4.5V2.5C24 1.948 23.552 1.5 23 1.5C22.448 1.5 22 1.948 22 2.5V6.25C22 6.664 21.664 7 21.25 7C20.836 7 20.5 6.664 20.5 6.25V4.5H18.5V2.5C18.5 1.948 18.052 1.5 17.5 1.5C16.948 1.5 16.5 1.948 16.5 2.5V6.25C16.5 6.664 16.164 7 15.75 7C15.336 7 15 6.664 15 6.25V4.5H13V2.5C13 1.948 12.552 1.5 12 1.5C11.448 1.5 11 1.948 11 2.5V6.25C11 6.664 10.664 7 10.25 7C9.836 7 9.5 6.664 9.5 6.25V4.5H9C7.8955 4.5 7 5.3955 7 6.5V21C7 22.381 8.119 23.5 9.5 23.5C10.881 23.5 12 22.381 12 21V18.5H26V6.5C26 5.3955 25.1045 4.5 24 4.5ZM21.1835 11.2295L16.6835 15.7295C16.505 15.8975 16.2645 16 16 16C15.7235 16 15.4735 15.888 15.293 15.707L12.793 13.207C12.612 13.0265 12.5 12.7765 12.5 12.5C12.5 11.948 12.948 11.5 13.5 11.5C13.7765 11.5 14.0265 11.612 14.207 11.793L16.0225 13.6085L19.8165 9.7705C19.995 9.6025 20.2355 9.5 20.5 9.5C21.052 9.5 21.5 9.948 21.5 10.5C21.5 10.788 21.3785 11.0475 21.1835 11.2295Z"
                  fill="#004B95"
                />
                <path
                  d="M9.5 25C7.2945 25 5.5 23.2055 5.5 21V6.5H4C3.7235 6.5 3.5 6.7235 3.5 7V27.5C3.5 27.7765 3.7235 28 4 28H22C22.2765 28 22.5 27.7765 22.5 27.5V25H9.5Z"
                  fill="#004B95"
                />
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Approved
              </p>
            </Link>
            {/* Published */}
            <Link
              to={`published`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex  items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25.375 14.5C25.375 20.5061 20.5061 25.375 14.5 25.375M25.375 14.5C25.375 8.4939 20.5061 3.625 14.5 3.625M25.375 14.5H3.625M14.5 25.375C8.4939 25.375 3.625 20.5061 3.625 14.5M14.5 25.375C14.5 25.375 19.3333 21.75 19.3333 14.5C19.3333 7.25 14.5 3.625 14.5 3.625M14.5 25.375C14.5 25.375 9.66667 21.75 9.66667 14.5C9.66667 7.25 14.5 3.625 14.5 3.625M3.625 14.5C3.625 8.4939 8.4939 3.625 14.5 3.625"
                  stroke="#004B95"
                  stroke-width="2.5"
                />
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Published
              </p>
            </Link>
            {/* Rejected */}
            <Link
              to={`rejected`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.028 2.41602H9.97391C5.32908 2.41602 2.41699 5.30756 2.41699 9.97172V12.7775C2.41579 13.2874 2.82904 13.7018 3.33895 13.7018H3.34137H3.35224C3.85612 13.7018 4.26574 13.2934 4.26574 12.7883V12.7666V9.97172C4.26574 6.29477 6.29574 4.26477 9.9727 4.26477H19.028C22.717 4.26477 24.7349 6.29477 24.7349 9.97172V19.0342C24.7349 22.7112 22.7049 24.7303 19.028 24.7303H9.97391C6.28608 24.7303 4.26695 22.7003 4.26695 19.0342C4.26695 18.5243 3.85249 18.1098 3.34258 18.1098C2.83145 18.1098 2.4182 18.5243 2.4182 19.0342C2.41699 23.6923 5.30733 26.5827 9.96183 26.5827H19.028C23.6933 26.5827 26.5837 23.6923 26.5837 19.0378V9.97535C26.5837 5.30756 23.6933 2.41602 19.028 2.41602ZM14.4937 19.9923C13.9934 19.9923 13.5874 19.5863 13.5874 19.0861V13.7452C13.5874 13.245 13.9934 12.839 14.4937 12.839C14.9939 12.839 15.3999 13.245 15.3999 13.7452V19.0861C15.3999 19.5863 14.9939 19.9923 14.4937 19.9923ZM14.494 10.8189H14.5061C15.0064 10.8189 15.4124 10.4129 15.4124 9.91264C15.4124 9.41239 15.0064 9.00639 14.5061 9.00639C14.0059 9.00639 13.5938 9.41239 13.5938 9.91264C13.5938 10.4129 13.9938 10.8189 14.494 10.8189Z"
                  fill="#004B95"
                />
              </svg>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Rejected
              </p>
            </Link>
            {/* Deleted */}
            <Link
              to={`delete`}
              className="w-[210px] cursor-pointer bg-[#FFFFFF] justify-center h-[75px] flex  items-center shadow-[0px_2px_20px_rgba(166,166,166,0.25)] shadow-[#A6A6A640] rounded-[5px] border-2 "
            >
              <i class="fa-solid fa-trash text-[#004B95]"></i>
              <p className=" pl-[22px] font-semibold font-poppins text-[20px] leading-[30px] tracking-[5.5%] text-[#004B95] ">
                Deleted
              </p>
            </Link>
          </div>
        </div>
        {/* <LiikedAndRecents/> */}
        {/*most liked blogs*/}
        {/* <LikedBlogs /> */}
        {/* <Recents />                 */}
        {/* recents */}
        {/* <hr className='my-4'/> */}
        {/* drafts */}
        {/* <Drafts /> */}

        {/* rejected */}
        {/* <Rejected /> */}
        {/* <hr className='my-4'/> */}
        {/* Published */}
        {/* <Published /> */}

        {/* delete */}
        {/* <Delete /> */}

        {/* approved */}
        {/* <Approved /> */}
        {/* Review */}
        {/* <Review /> */}
      </div>
      {/* </div> */}
    </>
  );
};

export default BlogMain;
