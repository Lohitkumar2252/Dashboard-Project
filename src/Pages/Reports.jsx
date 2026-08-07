import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ReportCard from "../Components/ReportCard";
import { fetchRevenueByPlan } from "../Data";

const Reports = () => {
  const [RevenueByPlan, setRevenueByPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRevenueByPlan() {
      try {
        const response = await fetchRevenueByPlan();
        setRevenueByPlan(response);
        console.log(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getRevenueByPlan();
  }, []);
  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-3">
      <Header page="reports" />
      <div className="border border-[#b3b3b3] rounded-xl p-5">
        <h3 className="font-semibold text-[1.2rem]">By Plan</h3>
        <div className="wrapper mt-4 ">
          <div className="header flex items-center justify-between px-1 py-2 border-b border-b-[#6b6a6a90] text-[#5B5F68]">
            <h3 className="w-full  text-left">Plan</h3>

            <h3 className="w-full  text-left">MRR</h3>
            <h3 className="w-full  text-left">Customers</h3>
            <h3 className="w-full  text-left">Avg Deal</h3>
          </div>
          {RevenueByPlan.map((e, i) => {
            return (
              <ReportCard
                key={i}
                plan={e.plan}
                MRR={e.mrr}
                customers={e.customerCount}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reports;
