import React from "react";

import Header from "../Components/Header";
import Cards from "../Components/Cards";
import ChartSection from "../Components/ChartSection";
import UsersSection from "../Components/UsersSection";


const Overview = () => {
  
  return (
    <div>
      <Header />
      <Cards/>
      <ChartSection/>
      <UsersSection/>
    </div>
  );
};

export default Overview;
