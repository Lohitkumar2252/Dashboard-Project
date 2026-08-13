import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { fetchRevenueSeries } from "../Data";

const RevenueChart = () => {
  const [RevenueSeries, setRevenueSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getRevenueSeries() {
      try {
        const response = await fetchRevenueSeries();
        setRevenueSeries(response);
    
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getRevenueSeries();
  }, []);
  if (loading) return <div className="p-10">Loading...</div>;
  return (
    <div className="border rounded-xl h-[70vh] max-h-180 p-5 border-[#b3b3b3] my-5">
      <LineChart
        style={{
          width: "100%",
        //   maxWidth: "700px",
          height: "100%",
        //   maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={RevenueSeries}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" stroke="#ababab" />
        <YAxis width="auto" stroke="#ababab" />
        <Tooltip
          cursor={{
            stroke: "var(--color-border-2)",
          }}
          contentStyle={{
            backgroundColor: "var(--color-surface-raised)",
            borderColor: "var(--color-border-2)",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="revenue"
          stroke="#2A9D8F"
          strokeWidth={5}
          dot={false}
          activeDot={{ r: 8, stroke: "var(--color-surface-base)" }}
        />
        
        
      </LineChart>
    </div>
  );
};

export default RevenueChart;
