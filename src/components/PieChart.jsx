import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6'],
      },
    ],
  };

  return (
    <div>
      <h2>Your Progress</h2>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
