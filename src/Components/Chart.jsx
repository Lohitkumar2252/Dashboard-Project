import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";
import { fetchRevenueByPlan } from "../Data";
import { planColors } from "../Data";

const Chart = () => {
  const [RevenueByPlan, setRevenueByPlan] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getRevenueByPlan() {
      try {
        const response = await fetchRevenueByPlan();
        setRevenueByPlan(response);
      } catch (err) {
        console.error(err.message);
      } finally {
        setLoading(false);
      }
    }

    getRevenueByPlan();
  }, []);
  const planColorArray = Object.entries(planColors)

  if (loading) return <div className="p-10">Loading...</div>;
  return (
    <div className=" h-80 py-4">
      <BarChart
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: 1.618,
        }}
        responsive
        data={RevenueByPlan}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="label" />
        <YAxis width="auto" />
        <Tooltip />

        <Bar dataKey="mrr" fill="#8884d8" radius={[10, 10, 0, 0]}>
       
        {planColorArray.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry[1].bar} />
        ))}
      


        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
