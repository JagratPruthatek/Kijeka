import React from "react";
import classNames from "classnames";
import {
  recentDivClass,
  transactionBoxClass,
} from "../../../lib/constants/classes";
import { dashRecentData } from "../../../lib/constants/index";

const Recent = () => {
  return (
    <div className={recentDivClass}>
      <div>
        <p>Recent Transaction</p>
      </div>
      <div>
        {/* Dashboard Recent data call by Function */}
        {dashRecentData.map((item) => (
          <RecentData item={item} key={item.key}/>
        ))}
      </div>
    </div>
  );
};

export default Recent;

function RecentData({ item }) {
  // Recent Data function
  return (
    <div
      className={classNames(
        transactionBoxClass,
        item.bg,
        item.border,
        item.border_color
      )}
    >
      <div>
        <img src={item.img} alt="" className="w-12" />
      </div>
      <div>
        <p>{item.title}</p>
        <span>{item.title_span}</span>
      </div>
      <div className={item.class}>
        <p>{item.transaction}</p>
      </div>
    </div>
  );
}
