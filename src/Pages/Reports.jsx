import React from "react";
import Header from "../Components/Header";

import ByPlan from "../Components/ByPlan";
import RevenueChart from "../Components/RevenueChart";

const Reports = () => {
  
 

  return (
    <div className="p-3 overflow-y-auto">
      <Header page="reports" />
      <RevenueChart/>
      <ByPlan/>
    </div>
  );
};

export default Reports;
