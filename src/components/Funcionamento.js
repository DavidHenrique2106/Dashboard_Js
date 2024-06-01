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

      // Filtros específicos
      query.equalTo('SG_UF', 'AM');
      query.equalTo('NO_MUNICIPIO', 'Coari');

      try {
        const results = await query.find();
        const schoolStatusData = results.map(school => school.get('TP_SITUACAO_FUNCIONAMENTO'));

        const totalCount = schoolStatusData.length;
        const counts = schoolStatusData.reduce((acc, value) => {
          acc[value] = (acc[value] || 0) + 1;
          return acc;
        }, {});

        const columnMapping = {
          "1": "Em Atividade",
          "2": "Paralisada",
          "3": "Extinta (ano do Censo)",
          
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
              type: 'pie',
            },
            labels: seriesData.map(data => data.x),
          },
          series: seriesData.map(data => data.y),
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
      <h1 style={{ color: 'white' }}>Status de funcionamento das escolas de Coari - AM</h1>
      <Chart options={chartData.options} series={chartData.series} type="pie" height={400} />
    </div>
  );
};


export default SchoolStatusChart;
