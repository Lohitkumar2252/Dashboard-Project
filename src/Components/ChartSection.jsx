import React, { useEffect, useState } from "react";
import { fetchRevenueByPlan } from "../Data";
import Chart from "./Chart";


const ChartSection = () => {
 
  return (
    <div className="border border-[#6b6a6a90] mx-6 px-8  pt-5 rounded-2xl">
      <h2 className="text-[1.3rem] font-semibold">Revenue By Plan</h2>
      <Chart/>
    </div>
  );
};

export default ChartSection;
