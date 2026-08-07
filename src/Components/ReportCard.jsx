import React from "react";
import { planColors } from "../Data";

const ReportCard = ({ plan, MRR, customers }) => {
  const planColorArray = Object.entries(planColors);
  const currentPlan = planColorArray.filter((e) => {
    return e[0] == plan;
  });

  return (
    <div
      className={`border-b border-b-[#6b6a6a90] grid grid-cols-4 grid-rows-1 p-1 py-2 w-full gap-5`}
    >
      <div
        className={` text-sm  text-left capitalize p-1 rounded-lg w-fit`}
        style={{
          backgroundColor: currentPlan[0][1].bg,
          color: currentPlan[0][1].text,
        }}
      >
        {plan}
      </div>
      <p className="capitalize">{`$${MRR}`}</p>
      <p className="capitalize">{`${customers}`}</p>
      <p className="capitalize">{`$19`}</p>
    </div>
  );
};

export default ReportCard;
