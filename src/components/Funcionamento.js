import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const SchoolStatusChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const schoolStatusData = [
      3, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 2, 1, 1, 1, 1, 1, 1, 3, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 3, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 3, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 3, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    const totalCount = schoolStatusData.length;
    const counts = schoolStatusData.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const percentages = {};
    for (const [key, value] of Object.entries(counts)) {
      percentages[key] = ((value / totalCount) * 100).toFixed(2);
    }

    const seriesData = Object.entries(percentages).map(([key, value]) => {
      let status;
      if (key === '1') {
        status = 'Em Atividade';
      } else if (key === '2') {
        status = 'Paralisada';
      } else if (key === '3') {
        status = 'Extinta (ano do Censo)';
      } else {
        status = 'Extinta em Anos Anteriores';
      }

      return {
        x: status,
        y: parseFloat(value),
      };
    });

    const chartData = {
      options: {
        colors:["#92fd8c","#ff5959", "#a6a6a6" ],
        chart: {
          type: 'pie',
        },
        labels: seriesData.map(data => data.x),
      },
      series: seriesData.map(data => data.y),
    };

    setChartData(chartData);
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      const element = <h1 style={{ color: 'white' }}>Status de funcionamento das escolas de Caori - RO</h1>
      <Chart options={chartData.options} series={chartData.series} type="pie" height={400}/>
    </div>
  );
};

export default SchoolStatusChart;
