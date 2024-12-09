// Implement Specific Chart Components
// src/components/BubbleChart.jsx
import React from 'react';
import ChartComponent from '../../ChartComponent';

const BubbleChart = ({ data }) => {
  const chartData = {
    datasets: [
      {
        label: 'Sales vs Profits vs Expenses',
        data: data.expenses.map((expense, index) => ({
          x: expense,
          y: data.profits[index],
          r: data.sales[index] / 100, // Scale size of bubbles based on sales
        })),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Expenses',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Profits',
        },
      },
    },
  };

  return <ChartComponent type="bubble" data={chartData} options={options} />;
};

export default BubbleChart;
