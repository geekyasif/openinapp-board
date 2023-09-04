import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function BarChart({ data }) {
  const chartRef = useRef(null);
  let myChart = null; // Declare myChart outside of the useEffect to access it in the cleanup function

  useEffect(() => {
    if (chartRef.current && data) {
      const ctx = chartRef.current.getContext("2d");

      myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.labels,
          datasets: data.datasets.map((dataset, index) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: index === 0 ? "#36A2EB" : "#FF6384",
            backgroundColor: index === 0 ? "#9BD0F5" : "#FFB1C1",
          })),
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              align: "end",
            },
          },
        },
      });
    }

    return () => {
      // Cleanup the chart when the component unmounts
      if (myChart) {
        myChart.destroy();
      }
    };
  }, [data]);

  return <canvas height="200" ref={chartRef} />;
}
