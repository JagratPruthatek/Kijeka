import React from "react";
import {
  totalDivClass,
  totalInnerDivClass,
} from "../../../lib/constants/classes";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip, Legend);

const Pie_Comp = () => {
  return (
    <div className={totalDivClass}>
      <div className={totalInnerDivClass}>
        <div>
          <Pie_Graph />
        </div>
        <div>
          <p>Active Viewers</p>
        </div>
      </div>
    </div>
  );
};

export default Pie_Comp;

const Pie_Graph = () => {
  const data = {
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#34B3F1", "#292D30"],
        // borderColor: ["#34B3F1", "#292D30"],
        hoverOffset: 4,
        rotation: -95,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={data} className="w-32 h-32" />
    </div>
  );
};
