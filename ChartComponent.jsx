// Create a Reusable ChartComponent 
// src/components/ChartComponent.jsx
import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';

ChartJS.register(...registerables);

const ChartComponent = ({ type, data, options }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = new ChartJS(chartRef.current, {
        type: type,
        data: data,
        options: options,
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [type, data, options]);

  return <canvas ref={chartRef} />;
};

export default ChartComponent;
