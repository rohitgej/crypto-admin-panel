import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./Chart.module.css";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ backgroundColor: "#1a1a1a", padding: "10px", borderRadius: "5px" }}>
        <p style={{ color: "#fff" }}>{label}</p>
        <p style={{ color: "#00ff00" }}>{`Value 1: ${payload[0].value}`}</p>
        <p style={{ color: "#ffaa00" }}>{`Value 2: ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const DashboardChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.dashboardData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className={styles.chart}>
      <div className={styles.heading}>
        <div className={styles.summary}>
          <p>Total Balance</p>
          <div className={styles.balance}>
            <span>1.82937456</span>
            <button>BTC</button>
          </div>
          <p>$20,974.23</p>
        </div>

        <div className={styles.chartButton}>
          <button>Portfolio</button>
          <button>Funding</button>
          <button>Assets</button>
          <button>P2P</button>
        </div>
      </div>

      <ResponsiveContainer height={200}>
        <AreaChart data={data}>
          <XAxis dataKey="date" stroke="#666" tick={{ fontSize: "0.65rem" }} />
          <Tooltip content={<CustomTooltip />} wrapperStyle={{ backgroundColor: "#333333", color: "#ffffff" }} />
          <Area type="linear" dataKey="value1" stroke="#00ff00" fill="#00ff00" fillOpacity={0.08} strokeWidth={2} dot={false} />
          <Area type="linear" dataKey="value2" stroke="#ffaa00" fill="#ffaa00" fillOpacity={0.0} strokeWidth={2} dot={false} />
          <CartesianGrid vertical={true} horizontal={true} stroke="#333333" strokeDasharray="3 3" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
