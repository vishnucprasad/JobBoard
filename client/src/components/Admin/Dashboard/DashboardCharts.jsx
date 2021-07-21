import React from "react";
import { Line } from "react-chartjs-2";

const DashboardCharts = () => {
  const array = Array(31)
    .fill()
    .map((_, index) => 1 + index);

  const currentMonth = [];
  const pastMonth = [];

  array.forEach((value) => {
    currentMonth.push(value * Math.floor(Math.random() * (6 - 1) + 1));
    pastMonth.push(value * Math.floor(Math.random() * (6 - 1) + 1));
  });

  const data = {
    labels: array,
    datasets: [
      {
        label: "Current Month",
        data: currentMonth,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
      {
        label: "Past Month",
        data: pastMonth,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="mt-4">
      <div className="card bg-primary shadow-soft border-light">
        <div className="card-header pb-0">
          <h6 className="font-weight-bolder text-uppercase d-flex mb-0">
            <span>Revenue</span>
            <span className="ml-auto">y-axis scale: 1 unit = 1000 INR</span>
          </h6>
        </div>
        <div className="card-body">
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
