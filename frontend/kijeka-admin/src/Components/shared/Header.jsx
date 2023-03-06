import React, { Fragment } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";
import {
  searchBarClass,
  userBarClass,
  searchButtonClass,
  userButtonClass,
  blue,
  navClass,
} from "../../lib/constants/classes";
import { Menu, Transition } from "@headlessui/react";
import MyDropdown from "./MyDropdown";
import MyDropdown1 from "./MyDropdown1";
import MyDropdown2 from "./MyDropdown2";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Header = ({ openSidebar }) => {
  return (
    <div className="z-[999] ">
      <nav className={navClass}>
        {/* Hamburger Menu Icon */}
        <div className="lg:hidden xl:hidden">
          <button
            className="text-2xl text-black  outline-none"
            onClick={() => openSidebar()}
          >
            <HiMenu />
          </button>
        </div>
        {/* End */}
        {/* Header Components */}
        <div className="relative">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className={classNames(
              searchBarClass,
              "placeholder-sidebar font-medium"
            )}
          />
          <AiOutlineSearch
            fontSize={20}
            className={classNames(searchButtonClass)}
          />
        </div>
        <div
          className={classNames(
            "hidden sm:block md:flex md:flex-row md:items-center md:justify-center"
          )}
        >
          <p
            id="header_title"
            className="font-bold text-sidebar text-[20px]"
          ></p>
          <MyDropdown />
          {/* title call from every components */}
        </div>
        <div className="flex items-center justify-between gap-x-5">
          <div>
            <img src={require("../../images/Bell.png")} alt="" />
          </div>
          <div className={userBarClass}>
            <img
              src={require("../../images/people.png")}
              alt=""
              className="w-7 h-7"
            />
            <div>
              <p className="hidden sm:block text-black text-[12px]">
                endemic_stylist_8
              </p>
              <span className="hidden sm:block text-black text-[10px]">
                Admin
              </span>
            </div>
            <MyDropdown1 />
          </div>
          <div>
            <MyDropdown2 />
          </div>
        </div>
        {/* End */}
      </nav>
    </div>
  );
};

export default Header;
