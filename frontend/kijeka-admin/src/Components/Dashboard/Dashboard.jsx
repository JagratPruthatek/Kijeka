import React, { useEffect } from "react";
import Graph from "./dash_components/Graph";
import History from "./dash_components/History";
import Recent from "./dash_components/Recent";
import Pie_Comp from "./dash_components/Pie_Comp";
import { dashboardMainClass } from "../../lib/constants/classes";
import Bar_Comp from "./dash_components/Bar_Comp";

const Dashboard = () => {
  // use to display title and header title
  useEffect(() => {
    document.title = "Kijeka | Home";
    document.getElementById("header_title").innerHTML = "Home";
  });

  return (
    <div className="bg-[#EAEAEA] h-full">
      <div className="flex items-center justify-between px-12 py-2">
        <p className="text-sidebar font-bold text-[20px]">Home</p>
        <p className="bg-sidebar text-white font-medium text-[12px] p-2 rounded-lg">
          Download Data
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-y-3 md:items-center md:justify-between px-12">
        <Pie_Comp />
        {/* <Pie_Comp /> */}
        <Bar_Comp />
        <Pie_Comp />
      </div>
      <div className={dashboardMainClass}>
        {/* This components are display to data on dashboard form ./dash_components/ */}
        <History />
        <Recent />
        {/* <Graph /> */}
      </div>
    </div>
  );
};

export default Dashboard;
