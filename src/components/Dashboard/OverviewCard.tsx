"use client";

import { Card, Title } from "@mantine/core";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export const options = {
  responsive: true,
  smooth: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Item A",
      data: labels.map(() => Math.random() * 1000),
      tension: 0.4,
      borderColor: "#0891b2",
      backgroundColor: "#0891b2",
    },
    {
      label: "Item B",
      data: labels.map(() => Math.random() * 1000),
      tension: 0.4,
      borderColor: "#748FFC",
      backgroundColor: "#748FFC",
    },
  ],
};

export function OverviewCard() {
  return (
    <Card
      radius="md"
      w="100%"
      h="100%"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Title order={5}>Overview</Title>
      <Line options={options} data={data} />
    </Card>
  );
}
