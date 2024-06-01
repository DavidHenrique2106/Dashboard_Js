import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Parse from 'parse/dist/parse.min.js';

Parse.initialize(
  'e5UX3sOvZfOY3qwvIdw0b7v18JdUn9ihz34chyhF', // Application ID
  'rSRY7ybwkJThcFwIQirObv3v83Bfa40LWPyaZQNf'  // JavaScript key
);
Parse.serverURL = 'https://parseapi.back4app.com';

const SchoolTypeChart = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const fetchSchoolTypeData = async () => {
      const Dashboard = Parse.Object.extend('Dashboard');
      const query = new Parse.Query(Dashboard);

      // Filtros específicos
      query.equalTo('SG_UF', 'PE');
      query.equalTo('NO_MUNICIPIO', 'Recife');

      try {
        const results = await query.find();
        const schoolTypeData = results.map(school => school.get('TP_RESPONSAVEL_REGULAMENTACAO'));

        const totalCount = schoolTypeData.length;
        const counts = schoolTypeData.reduce((acc, value) => {
          acc[value] = (acc[value] || 0) + 1;
          return acc;
        }, {});

        const seriesData = Object.entries(counts).map(([key, value]) => {
          const columnMapping = {
            "1": "Federal",
            "2": "Estadual",
            "3": "Municipal",
            "4": "Estadual e Municipal",
            "5": "Federal e Estadual",
            "6": "Federal, Estadual e Municipal",
            "9": "Não informado"
          };
          return {
            x: columnMapping[key] || 'Não aplicável',
            y: value,
          };
        });

        const chartData = {
          options: {
            colors: ["#92FD8CFF"],
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchSchoolTypeData();
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1 style={{ color: 'white' }}>Distribuição de tipos de escolas em Recife - PE</h1>
      <Chart options={chartData.options} series={chartData.series} type="bar" height={400} />
    </div>
  );
};

export default SchoolTypeChart;
