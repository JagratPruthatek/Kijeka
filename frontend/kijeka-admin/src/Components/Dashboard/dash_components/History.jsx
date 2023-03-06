import classNames from "classnames";
import React from "react";
import {
  dashHistoryTableData,
  dashHistoryTableTitle,
} from "../../../lib/constants/index";
import {
  historyDivClass,
  tableClass,
  recipientClass,
} from "../../../lib/constants/classes";

const History = () => {
  return (
    <div className={classNames(historyDivClass)}>
      <div>
        <p className="font-semibold px-5 mt-5 text-lg">Our History</p>
      </div>
      <div>
        <table className={tableClass}>
          <thead className="bg-sidebar text-white">
            <tr>
              {/* History Table Title Function */}
              {dashHistoryTableTitle.map((item) => (
                <td item={item} key={item.key} className="p-3">
                  {item.title}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* History Table Data Function */}
            {dashHistoryTableData.map((item) => (
              <TrData item={item} key={item.key} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;

function TrData({ item }) {
  {
    /* History Table Title Function */
  }
  return (
    <tr>
      <td className=" p-6">{item.tracking_id}</td>
      <td className={recipientClass}>
        <img src={item.img} alt="" className="w-5 h-4 md:h-6" />
        <p>{item.title}</p>
      </td>
      <td className=" p-6">{item.status}</td>
      <td className=" p-6">{item.payment}</td>
    </tr>
  );
}
