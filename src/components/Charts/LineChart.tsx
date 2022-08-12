import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  ScriptableContext,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart = () => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        mode: "nearest" as const,
        usePointStyle: false,
        callbacks: {
          // labelColor: (context: any) => {
          //   return {
          //     borderColor: "rgb(0, 0, 255)",
          //     backgroundColor: "rgb(255, 0, 0)",
          //     borderWidth: 2,
          //     borderDash: [2, 2],
          //     borderRadius: 2,
          //   };
          // },
          label: (context: any) => {
            let label = "";
            if (context.parsed.y !== null) {
              label = context.parsed.y;
            }
            return label;
          },
          // labelPointStyle: (context: any) => {
          //   return {
          //     pointStyle: "triangle",
          //     rotation: 0,
          //   };
          // },
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
        },
      },
      y: {
        display: false,
        ticks: {
          // forces step size to be 50 units
          stepSize: 35,
        },
        title: {
          display: false,
          text: "Value",
        },
      },
    },
  };

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Expenses",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 20)),
        borderColor: "rgba(220, 76, 151, 0.6)",
        fill: true,
        borderWidth: 2,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(220, 76, 151,0.5)");
          gradient.addColorStop(1, "rgba(220, 76, 151,0)");
          return gradient;
        },
        tension: 0.4,
        pointRadius: 3,
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
      {
        label: "Income",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 20)),
        borderColor: "rgba(74, 97, 210, 0.6)",
        fill: true,
        borderWidth: 2,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(74, 97, 210, 0.5)");
          gradient.addColorStop(1, "rgba(74, 97, 210,0)");
          return gradient;
        },
        tension: 0.4,
        pointRadius: 3,
        pointBorderColor: "rgba(0, 0, 0, 0)",
      },
    ],
  };

  return (
    <div className="mt-8" style={{ width: "100%", height: "300px" }}>
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
