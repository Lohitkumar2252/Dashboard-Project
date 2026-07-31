import React, { useEffect, useState } from "react";
import { fetchRevenueByPlan } from "../Data";

const ChartSection = () => {
  const [revenueByPlan, setrevenueByPlan] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    async function getRevenueByPlan() {
      try {
        const response = await fetchRevenueByPlan();
        setrevenueByPlan(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getRevenueByPlan();
  }, []);

  if (Loading) return <div className="p-10">Loading...</div>;
  return (
    <div>
      {revenueByPlan.map((e) => {
        return <p>{e.mrr}</p>;
      })}
    </div>
  );
};

export default ChartSection;
