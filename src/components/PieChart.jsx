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
      const tasksData = snapshot.val();
      const newLabels = [];
      const newData = [];
      const backgroundColors = ['#FF6384', '#36A2EB', '#FFCE56', '#2ECC71', '#9B59B6']; // Add more colors if needed

      let totalPercentage = 0;
      tasksData.forEach((task, index) => {
        if (task.progress[selectedDate]) {
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

  return (
    <div>
      <h2>A Balanced Life is Best, Here is Where Your Progress Is</h2>
      <Pie data={chartData} />
    </div>
  );
};

export default PieChart;
