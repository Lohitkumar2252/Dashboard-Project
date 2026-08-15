import React, { useContext, useEffect, useState } from "react";

import { secondsFormatter } from "../Components/secondsFormatter";
import UserContext from "./UserContext";
import { NETWORK_DELAY, REVENUE_SERIES } from "../Data";
const Cards = () => {
  const [kpiData, setKpiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { UserData } = useContext(UserContext);

  function fetchKpiSummary() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const totalRevenue = REVENUE_SERIES.reduce(
          (sum, d) => sum + d.revenue,
          0,
        );
        const activeUsers = UserData.length;
        resolve({
          revenue: totalRevenue,
          activeUsers,
          churnRate: 2.3,
          avgSessionSeconds: 402,
        });
      }, NETWORK_DELAY);
    });
  }
  useEffect(() => {
    async function getKpiSummary() {
      try {
        const response = await fetchKpiSummary();
        setKpiData(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getKpiSummary();
  }, [UserData]);

  if (loading) return <div className="p-10">Loading...</div>;

  const cards = [
    {
      text: "Revenue",
      number: `$${kpiData.revenue.toLocaleString()}`,
      percentage: "+12.4%",
    },
    {
      text: "Active Users",
      number: kpiData.activeUsers,
      percentage: "+12.4%",
    },
    {
      text: "Churn Rate",
      number: `${kpiData.churnRate}%`,
      percentage: "-2.1%",
    },
    {
      text: "Avg Session",
      number: kpiData.avgSessionSeconds,
      percentage: "+5.2%",
    },
  ];

  return (
    <div className="cardContainer px-5 py-10 flex items-center justify-center gap-10">
      {cards.map((card, index) => {
        const displayNumber =
          card.text === "Avg Session"
            ? secondsFormatter(card.number)
            : card.number;

        return (
          <div
            key={index}
            className=" w-full bg-[#F1F0EC] rounded-xl p-4 flex flex-col gap-2"
          >
            <p className="text-[#735F74] text-xs">{card.text}</p>
            <h2 className="text-3xl font-semibold">{displayNumber}</h2>
            <p className="text-[#735F74] text-sm">{card.percentage}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
