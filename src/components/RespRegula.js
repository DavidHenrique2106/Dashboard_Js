import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const SchoolTypeChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const schoolTypeData = [
      2, 3, 2, 2, 2, 2, 2, 2, 2, 2,
      3, 2, 2, 3, 3, 3, 3, 3, 2, 2,
      2, 4, 4, 3, 2, 3, 2, 2, 3, 3,
      2, 2, 3, 2, 2, 2, 3, 3, 3, 4,
      2, 2, 3, 2, 2, 2, 3, 2, 2, 3,
      3, 3, 3, 3, 4,
      2, 2, 3, 3, 2, 2, 2, 3, 2, 2,
      3, 2, 3, 1, 2, 4, 2, 3, 4, 2,
      2, 2, 3, 4, 4,
      2, 4, 2, 4, 2, 3, 2, 3, 2, 2,
      4, 2, 3, 2, 3, 2, 3, 3, 3,
      3, 2, 2, 2, 2, 2, 2, 2, 2, 2,
      3, 3, 3, 2, 3, 3, 3, 3, 4, 4,
      2, 2, 4, 3, 3, 3,
    ];

    const totalCount = schoolTypeData.length;
    const counts = schoolTypeData.reduce((acc, value) => {
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
          type = 'Federal';
          break;
        case '2':
          type = 'Estadual';
          break;
        case '3':
          type = 'Municipal';
          break;
        case '4':
          type = 'Estadual e Municipal';
          break;
        case '5':
          type = 'Federal e Estadual';
          break;
        case '6':
          type = 'Federal, Estadual e Municipal';
          break;
        case '9':
          type = 'Não informado';
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
        chart: {
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
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
      <h1>Distribuição de tipos de escolas Recife - PE</h1>
      <p>
        Em Recife por ser uma cidade totalmente urbana, as escolas são dividas em Fedral, Estadual e Municipal 
        veja no grafíco abaixo a distribuição de escolas na cidade. 
      </p>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={400} />
    </div>
  );
};

export default SchoolTypeChart;
