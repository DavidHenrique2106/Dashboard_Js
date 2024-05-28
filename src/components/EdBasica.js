import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ExcelChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const portoVelhoSchools = [
      3, 3, 2, 2, 2, 3, 3, 2, 2, 3,
      3, 3, 2, 3, 2, 3, 2, 2, 3, 2,
      2, 3, 2, 2, 2, 2, 3, 3, 3, 2,
      3, 4, 2, 2, 2, 2, 3, 4, 4, 4,
      2, 4, 2, 3, 2, 3, 2, 3, 4, 3,
      2, 3, 3, 3, 2, 3, 3, 3, 3, 2,
      3, 4, 3, 3, 3, 3, 3, 2, 2, 3,
      3, 3, 3, 3, 4, 2, 2, 2, 3, 3,
      3, 3, 3, 3, 3, 3, 3, 3, 2, 3,
      3, 2, 2, 3, 3, 3, 2, 3, 3, 3,
      3, 3, 3, 2, 2, 3, 2, 3, 4, 2,
      3, 3, 3, 3, 3, 3, 2, 2, 3, 2,
      2, 3, 3, 2, 3, 2, 2, 2, 2, 2,
    ];

    const totalCount = portoVelhoSchools.length;
    const counts = portoVelhoSchools.reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    const percentages = {};
    for (const [key, value] of Object.entries(counts)) {
      percentages[key] = ((value / totalCount) * 100).toFixed(2);
    }

    const seriesData = Object.entries(percentages).map(([key, value]) => {
      let name;
      let color;
      if (key === '1') {
        name = 'Federal';
        color = '#ffffff';
      } else if (key === '2') {
        name = 'Estadual';
        color = '#ffffff';
      } else if (key === '3') {
        name = 'Municipal';
        color = '#ffffff';
      } else {
        name = 'Privada';
        color = '#ffffff';
      }

      return {
        x: name,
        y: parseFloat(value),
        goals: [
          {
            name: 'Expected',
            value: parseFloat(value),
            strokeColor: color,
          }
        ]
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
            barHeight: '80%',
          },
        },
        colors: ['#92fd8c', '#ff2222', '#1fff00', '#FFEB3B'],
        tooltip: {
          enabled: true,
          x: {
            show: true,
            formatter: function (val) {
              return '<span style="color: black;">' + val + '</span>';
            }
          },
        },
      },
      series: [
        {
          data: seriesData,
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
      const element = <h1 style={{color: 'white'}}><h1>Dependência regulamento das Escolas em Porto Velho - RO</h1></h1>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={400} />
      <br />
    </div>
  );
};

export default ExcelChartComponent;
