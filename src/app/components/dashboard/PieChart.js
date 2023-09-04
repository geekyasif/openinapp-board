import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function PieChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      const myChart = new Chart(chartRef.current, {
        type: "doughnut",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: "My First Dataset",
              data: data.data,
              backgroundColor: ["#98D89E", "#F6DC7D", "#EE8484"],
              hoverOffset: 4,
            },
          ],
        },
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return () => {
        myChart.destroy();
      };
    }
  }, [data]);

  return <canvas width="200" height="200" ref={chartRef} />;
}
