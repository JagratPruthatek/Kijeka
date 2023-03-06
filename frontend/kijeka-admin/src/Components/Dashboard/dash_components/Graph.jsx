import classNames from "classnames";
import React from "react";
import { weekSummary } from "../../../lib/constants/index";
import { graphBodyClass, flexClass } from "../../../lib/constants/classes";

const Graph = () => {
  return (
    <div className={graphBodyClass}>
      <div>
        <p className="font-semibold px-5 mt-5 text-lg">Weekly Summary</p>
      </div>
      <div className={classNames(flexClass, "px-6 py-6 gap-x-10")}>
        <div>
          {/* week summary function */}
          {weekSummary.map((item) => (
            <WeekSummary key={item.key} item={item} />
          ))}
        </div>
        <div>
          <img src={require("../../../images/pie.png")} alt="" />
        </div>
        <div>
          <img src={require("../../../images/graph.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Graph;

function WeekSummary({ item }) {
  return (
    <div className={classNames(flexClass, item.class, item.gap)}>
      <img src={item.img} alt="" className="w-5" />
      <p>{item.title}</p>
      <span className={item.class_left}>{item.title_span}</span>
    </div>
  );
}
