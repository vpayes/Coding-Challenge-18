// Implement Specific Chart Components
// src/components/BarChart.jsx
import React from 'react';
import ChartComponent from './ChartComponent';

const BarChart = ({ data }) => {
  const chartData = {
    labels: data.months,
    datasets: [
      {
        label: 'Sales',
        data: data.sales,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="bar" data={chartData} options={options} />;
};

export default BarChart;
