import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/sidebar.css";
import { AiOutlineCloseCircle } from "../../../node_modules/react-icons/ai";
import { dashboardTopLink } from "../../lib/constants";
import classNames from "classnames";
import {
  linkClass,
  activeLinkClass,
  sidebarRespClass,
  sidebarClass,
} from "../../lib/constants/classes";

const Sidebar = ({ sidebarOpen, closeSidebar }) => (
  <div
    className={classNames(sidebarOpen ? sidebarRespClass : sidebarClass)}
    id="sidebar"
  >
    <div className="flex items-center justify-between mx-3 mt-4">
      <img
        src={require("../../images/logo.png")}
        alt="logo"
        className=" h-24 w-full object-cover md:h-full md:w-48"
      />
      {/* close button */}
      <button
        onClick={() => closeSidebar()}
        className="lg:hidden xl:hidden outline-none text-white sm:block"
        id="sidebarIcon"
        aria-hidden="true"
      >
        <AiOutlineCloseCircle fontSize={30} />
      </button>
      {/* End */}
    </div>
    {/* Top Link Portion */}
    <div className="flex-1 mt-10">
      {/* Sidebar Top Link Function */}
      {dashboardTopLink.map((item) => (
        <SidebarLink key={item.key} item={item} />
      ))}
    </div>
    {/* End */}
  </div>
);

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation(); // For active link denote
  return (
    // all links import form index.jsx
    <div className="text-white text-xl ml-6 my-4 py-2">
      <Link
        to={item.path}
        className={classNames(
          pathname === item.path ? activeLinkClass : "text-white",
          linkClass
        )}
      >
        {item.label}
        <img src={require("../../images/next.png")} alt="" />
      </Link>
    </div>
  );
}
