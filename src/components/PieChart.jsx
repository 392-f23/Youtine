import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { getDatabase, ref, onValue } from "firebase/database";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ selectedDate }) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      hoverBackgroundColor: [],
    }],
  });

  useEffect(() => {
    const db = getDatabase();
    const tasksRef = ref(db, 'tasks');
    onValue(tasksRef, (snapshot) => {
      const tasksDataSnapshot = snapshot.val()
      const tasksData = tasksDataSnapshot ? Object.values(tasksDataSnapshot) : [];
      //const tasksData = snapshot.val();
      const newLabels = [];
      const newData = [];
      const backgroundColors = [
        '#FF6384', // Bright Pink
        '#36A2EB', // Sky Blue
        '#FFCE56', // Soft Yellow
        '#4BC0C0', // Turquoise
        '#9966FF', // Amethyst Purple
        '#FF9F40', // Tangerine Orange
        '#66FF66', // Lime Green
        '#C9CBFF', // Pastel Violet
        '#FF6666', // Salmon Red
        '#FFCC66', // Peach Orange
        '#66CCFF', // Light Blue
        '#33CC99', // Mint Green
        '#CC66FF', // Lavender Purple
        '#FF99CC', // Pink
        '#99CC99'  // Pastel Green
      ];


      let totalPercentage = 0;
      tasksData.forEach((task, index) => {
        console.log(task)
        console.log(selectedDate)
        if (task.progress && task.progress.hasOwnProperty(selectedDate)) {
          console.log(task.progress[selectedDate]);
          const percentDone = (task.progress[selectedDate] / task.daily_goal) * 100;
          totalPercentage += percentDone;

          newLabels.push(task.title);
          newData.push(percentDone);
        }
      });

      // Normalize the data if totalPercentage exceeds 100%
      const normalizedData = totalPercentage > 100 ? newData.map(data => (data / totalPercentage) * 100) : newData;

      setChartData({
        labels: newLabels,
        datasets: [{
          data: normalizedData,
          backgroundColor: backgroundColors.slice(0, newLabels.length), // Only use as many colors as there are labels
          hoverBackgroundColor: backgroundColors.slice(0, newLabels.length),
        }],
      });
    });
  }, [selectedDate]);
  // console.log(chartData);

  return (
    <div>
      <h2>A Balanced Life is Best, Here is Where You Have Devoted Your Time</h2>
      <div>
        {chartData.datasets && chartData.datasets.length > 0 && chartData.datasets[0].data.length > 0 ?
          <Pie data={chartData} /> :
          <div>
            <br></br>
            <p>You did not work on any routines today</p>
            <br></br><br></br>
          </div>
        }
      </div>
    </div>
  );
};

export default PieChart;
