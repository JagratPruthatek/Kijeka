import React from "react";
import {
  totalDivClass,
  totalInnerDivClass,
} from "../../../lib/constants/classes";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Bar_Comp = () => {
  return (
    <div className={totalDivClass}>
      <div className={totalInnerDivClass}>
        <div>
          <Bar_Graph />
        </div>
        <div>
          <p>Active Viewers</p>
        </div>
      </div>
    </div>
  );
};

export default Bar_Comp;

const Bar_Graph = () => {
  const labels = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const data = {
    labels,
    datasets: [
      {
        data: [0, 2, 4, 6, 8, 10, 12],
        label: "Series1",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        barThickness: 5,
        borderRadius: 10,
        grouped: true,
      },
    ],
  };
  const options = {
    aspectRatio: 1,
    title: {
      display: true,
      text: "Monthly Summery",
    },
    width: 100,

    scales: {
      y: {
        beginAtZero: false,
        min: 0,
        max: 16,
        ticks: {
          stepSize: 4
        }
      },
      x: {
        beginAtZero: false,
        font: {
          size: 3
        }
      }
    },
  };

  return (
    <div className="w-32 ">
      <Bar data={data} options={options} />
    </div>
  );
  // return (
  //   <div class="m-10 flex gap-6">
  //     <div class="col-1 grid h-2 w-10 grid-flow-row gap-0 rounded-full">
  //       <p>{((12 - 0) / 6) * 6}</p>
  //       <p>{((12 - 0) / 6) * 5}</p>
  //       <p>{((12 - 0) / 6) * 4}</p>
  //       <p>{((12 - 0) / 6) * 3}</p>
  //       <p>{((12 - 0) / 6) * 2}</p>
  //       <p>{((12 - 0) / 6) * 1}</p>
  //     </div>
  //     <div class="relative h-[77px] w-2 rounded-full bg-slate-300">
  //       <div class="absolute bottom-0 z-20 h-[calc(77px*0.5)] w-2 rounded-full bg-blue-400"></div>
  //       <div class="absolute bottom-0 z-10 h-[calc(77px*0.6)] w-2 rounded-full bg-red-400"></div>
  //       <p class="absolute bottom-0 translate-y-6 -translate-x-3">Mon</p>
  //     </div>
  //     <div class="relative h-[77px] w-2 rounded-full bg-slate-300">
  //       <div class="absolute bottom-0 z-20 h-[calc(77px*0.5)] w-2 rounded-full bg-blue-400"></div>
  //       <div class="absolute bottom-0 z-10 h-[calc(77px*0.6)] w-2 rounded-full bg-red-400"></div>
  //       <p class="absolute bottom-0 translate-y-6 -translate-x-3">Tue</p>
  //     </div>
  //     <div class="relative h-[77px] w-2 rounded-full bg-slate-300">
  //       <div class="absolute bottom-0 z-20 h-[calc(77px*0.5)] w-2 rounded-full bg-blue-400"></div>
  //       <div class="absolute bottom-0 z-10 h-[calc(77px*0.6)] w-2 rounded-full bg-red-400"></div>
  //       <p class="absolute bottom-0 translate-y-6 -translate-x-3">Wed</p>
  //     </div>
  //     <div class="relative h-[77px] w-2 rounded-full bg-slate-300">
  //       <div class="absolute bottom-0 z-20 h-[calc(77px*0.5)] w-2 rounded-full bg-blue-400"></div>
  //       <div class="absolute bottom-0 z-10 h-[calc(77px*0.6)] w-2 rounded-full bg-red-400"></div>
  //       <p class="absolute bottom-0 translate-y-6 -translate-x-3">Thurs</p>
  //     </div>
  //   </div>
  // );
};
