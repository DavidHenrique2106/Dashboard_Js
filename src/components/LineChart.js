import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ data }) => {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (data) {
      const ctx = document.getElementById('lineChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'line',
        data: data,
      });
      setChart(newChart);
    }
  }, [data]);

  return <canvas id="lineChart" />;
};

export default LineChart;
