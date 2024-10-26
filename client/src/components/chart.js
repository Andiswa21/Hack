// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Feb', 'Mar', 'Apr', 'May'], // Mixed labels for days and months
    datasets: [
      {
        label: 'Daily Data',
        data: [30, 40, 35, 50, 1, null, null, null], // Daily data for the first few days
        fill: true,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.4,
      },
      {
        label: 'Monthly Data',
        data: [65, 59, 80, 81, 56, 55, 40, 70], // Monthly data
        fill: true,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Line Chart with Days and Months',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Line options={options} data={data} />;
};

export default LineChart;
