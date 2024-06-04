import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(
  'e5UX3sOvZfOY3qwvIdw0b7v18JdUn9ihz34chyhF', // Application ID
'rSRY7ybwkJThcFwIQirObv3v83Bfa40LWPyaZQNf' // JavaScript key
);
Parse.serverURL = 'https://parseapi.back4app.com';

const SchoolStatusChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchSchoolStatusData = async () => {
      const Dashboard = Parse.Object.extend('Dashboard');
      const query = new Parse.Query(Dashboard);

      query.equalTo('SG_UF', 'BA');
      query.equalTo('NO_MUNICIPIO', 'CamaÃ§ari');

      try {
        const results = await query.find();
        const schoolStatusData = results.map(school => school.get('TP_OCUPACAO_PREDIO_ESCOLAR'));

        const totalCount = schoolStatusData.length;
        const counts = schoolStatusData.reduce((acc, value) => {
          acc[value] = (acc[value] || 0) + 1;
          return acc;
        }, {});

        const columnMapping = {
          "1": "Próprio",
          "2": "Alugado",
          "3": "Cedido",
          "undefined" : "não é prédio escolar",
        };

        const seriesData = Object.entries(counts).map(([key, value]) => {
          return {
            x: columnMapping[key] || key,
            y: value,
          };
        });

        const chartData = {
          options: {
            colors: ["#92fd8c", "#ff5959", "#a6a6a6"],
            chart: {
              type: 'bar',
            },
            xaxis: {
              categories: seriesData.map(data => data.x)
            },
          },
          series: [{
            name: 'Número de Escolas',
            data: seriesData.map(data => data.y)
          }],
        };

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSchoolStatusData();
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Ocupação do Prédio Escolar em Camaçari - BA</h1>
      <Chart options={chartData.options} series={chartData.series} type="area" height={400} />
    </div>
  );
};

export default SchoolStatusChart;
