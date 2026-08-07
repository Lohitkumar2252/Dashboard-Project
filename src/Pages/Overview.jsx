import React from "react";

import Header from "../Components/Header";
import Cards from "../Components/Cards";
import ChartSection from "../Components/ChartSection";
import UsersSection from "../Components/UsersSection";

const Overview = () => {
  return (
    
      <div className="w-full overflow-y-auto p-3">
        <Header page="overview" />
        <Cards />
        <ChartSection />
        <UsersSection />
      </div>
   
  );
};

export default Overview;
