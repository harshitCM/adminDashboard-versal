import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const BarChartExample = (props) => {
  const chartRef = useRef();
  const chartObj = useRef();

  const createBarChart = (el) => {
    const data = [
      { year: 2017, count: 10 },
      { year: 2018, count: 20 },
      { year: 2019, count: 18 },
      { year: 2020, count: 25 },
      { year: 2021, count: 22 },
      { year: 2022, count: 27 },
      { year: 2023, count: 28 },
    ];

    chartObj.current = new Chart(el, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Acquisitions By Year",
            data: data.map((row) => row.count),
          },
        ],
      },
    });
  };

  useEffect(() => {
    const el = chartRef.current;
    //const el = document.getElementById("chart");
    if (chartObj.current) chartObj.current.destroy();
    createBarChart(el);

    return () => chartObj.current.destroy();
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default BarChartExample;
