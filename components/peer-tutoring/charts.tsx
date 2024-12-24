import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar, Pie } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Line Chart Component
export const LineChart = ({ data }: { data: any }) => {
  const lineData = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "Sessions Completed",
        data: [10, 20, 30, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        tension: 0.4, // Smooth curve
      },
    ],
  };

  return <Line data={data || lineData} />;
};

// Bar Chart Component
export const BarChart = ({ data }: { data: any }) => {
  const barData = {
    labels: ["Guitar", "Piano", "Drums", "Violin"],
    datasets: [
      {
        label: "Number of Students",
        data: [50, 30, 20, 15],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data || barData} />;
};

// Pie Chart Component
export const PieChart = ({ data }: { data: any }) => {
  const pieData = {
    labels: ["Virtual", "In-person"],
    datasets: [
      {
        label: "Session Modes",
        data: [60, 40],
        backgroundColor: [
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
        ],
        borderColor: ["rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data || pieData} />;
};
