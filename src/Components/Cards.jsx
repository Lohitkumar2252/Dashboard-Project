
  import React, { useEffect, useState } from "react";
  import { fetchKpiSummary } from "../Data";
  import { secondsFormatter } from "../Components/secondsFormatter";
  const Cards = () => {
      const [kpiData, setKpiData] = useState(null);
    const [loading, setLoading] = useState(true);

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
    }, []);

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
    )
  }

  export default Cards
