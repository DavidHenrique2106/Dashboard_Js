import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(
  'e5UX3sOvZfOY3qwvIdw0b7v18JdUn9ihz34chyhF', // Application ID
  'rSRY7ybwkJThcFwIQirObv3v83Bfa40LWPyaZQNf' // JavaScript key
);
Parse.serverURL = 'https://parseapi.back4app.com';

const UrbanRuralSchoolsChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchUrbanRuralData = async () => {
      const Dashboard = Parse.Object.extend('Dashboard');
      const query = new Parse.Query(Dashboard);

      query.equalTo('SG_UF', 'PE');
      query.equalTo('NO_MUNICIPIO', 'Paulista');

      try {
        const results = await query.find();
        const urbanRuralData = results.map(school => school.get('TP_LOCALIZACAO'));

        const totalCount = urbanRuralData.length;
        const counts = urbanRuralData.reduce((acc, value) => {
          acc[value] = (acc[value] || 0) + 1;
          return acc;
        }, {});

        const columnMapping = {
          "1": "Área Urbana",
          "2": "Área Rural"
        };

        const seriesData = Object.entries(counts).map(([key, value]) => {
          return {
            x: columnMapping[key] || key,
            y: ((value / totalCount) * 100).toFixed(2),
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUrbanRuralData();
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Distribuição escolas áreas urbanas e rurais em Paulista - PE</h1>
      <Chart options={chartData.options} series={chartData.series} type="line" height={400} />
    </div>
  );
};

export default UrbanRuralSchoolsChart;
  