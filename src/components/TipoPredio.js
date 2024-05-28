import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const SchoolBuildingChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const buildingTypeData = [
      1, 2, 1, 1, 1, 1, 3, 1, 1, 1,
      1, 2, 1, 1, 1, 1, 3, 1, 2, 1,
      1, 1, 3, 1, 1, 1, 1, 2, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 3, 3, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    const totalCount = buildingTypeData.length;
    const counts = buildingTypeData.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const percentages = {};
    for (const [key, value] of Object.entries(counts)) {
      percentages[key] = ((value / totalCount) * 100).toFixed(2);
    }

    const seriesData = Object.entries(percentages).map(([key, value]) => {
      let type;
      switch (key) {
        case '1':
          type = 'Próprio';
          break;
        case '2':
          type = 'Alugado';
          break;
        case '3':
          type = 'Cedido';
          break;
        default:
          type = 'Não aplicável';
          break;
      }

      return {
        x: type,
        y: parseFloat(value),
      };
    });

    const chartData = {
      options: {
        colors:["#92FD8CFF"],
        chart: {
          type: 'area',
        },
        xaxis: {
          type: 'category',
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
      const element = <h1 style={{ color: 'white' }}>Tipo de ocupação em prédio escolar em Camaçari - BA
    </h1>
      <Chart options={chartData.options} series={chartData.series} type="area" height={400} />
    </div>
  );
};

export default SchoolBuildingChart;
