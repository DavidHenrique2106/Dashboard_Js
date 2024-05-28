import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const UrbanRuralSchoolsChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const urbanRuralData = [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 2, 1, 1, 1, 1, 1,
      1, 1, 2, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 2, 1, 1, 1,
    ];

    const totalCount = urbanRuralData.length;
    const counts = urbanRuralData.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const percentages = {};
    for (const [key, value] of Object.entries(counts)) {
      percentages[key] = ((value / totalCount) * 100).toFixed(2);
    }

    const seriesData = Object.entries(percentages).map(([key, value]) => {
      let area;
      if (key === '1') {
        area = 'Área Urbana';
      } else {
        area = 'Área Rural';
      }

      return {
        x: area,
        y: parseFloat(value),
      };
    });

    const chartData = {
      options: {
        colors: ["#92FD8CFF"],
        chart: {
          type: 'line',
        },
        xaxis: {
          categories: seriesData.map(data => data.x),
        },
      },
      series: [
        {
          name: 'Porcentagem',
          data: seriesData.map(data => data.y),
        },
      ],
    };

    setChartData(chartData);
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      const element = <h1 style={{color: 'white'}}>Distribuição escolas áreas urbanas e rurais em Paulista - PE
    </h1>
      <Chart options={chartData.options} series={chartData.series} type="line" height={400} />
    </div>
  );
};

export default UrbanRuralSchoolsChart;
