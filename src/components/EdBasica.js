import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const ExcelChartComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const importExcelData = async () => {
      const nuAnoCenso = [2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023, 2023];
      const noRegiao = ["Norte", "Norte", "Norte", "Norte", "Norte", "Norte", "Norte", "Norte", "Norte"];
      const coRegiao = [1, 1, 1, 1, 1, 1, 1, 1, 1];
      const noUf = ["Rondônia", "Rondônia", "Rondônia", "Rondônia", "Rondônia", "Rondônia", "Rondônia", "Rondônia", "Rondônia"];
      const sgUf = ["RO", "RO", "RO", "RO", "RO", "RO", "RO", "RO", "RO"];
      
      const countUniqueOccurrences = (array) => {
        return Array.from(new Set(array)).reduce((acc, value) => {
          acc[value] = array.filter(item => item === value).length;
          return acc;
        }, {});
      };
      
      const nuAnoCensoCounts = countUniqueOccurrences(nuAnoCenso);
      const noRegiaoCounts = countUniqueOccurrences(noRegiao);
      const coRegiaoCounts = countUniqueOccurrences(coRegiao);
      const noUfCounts = countUniqueOccurrences(noUf);
      const sgUfCounts = countUniqueOccurrences(sgUf);

      const chartData = {
        options: {
          chart: {
            type: 'bar',
          },
          xaxis: {
            categories: Object.keys(nuAnoCensoCounts), 
          },
        },
        series: [
          {
            name: 'NU_ANO_CENSO',
            data: Object.values(nuAnoCensoCounts), 
          },
          {
            name: 'NO_REGIAO',
            data: Object.values(noRegiaoCounts), 
          },
          {
            name: 'CO_REGIAO',
            data: Object.values(coRegiaoCounts),  
          },
          {
            name: 'NO_UF',
            data: Object.values(noUfCounts),
          },
          {
            name: 'SG_UF',
            data: Object.values(sgUfCounts),
          },
        ],
      };

      setChartData(chartData);
    };

    importExcelData(); 
  }, []);

  if (Object.keys(chartData).length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Educação básica:</h1>
      <Chart options={chartData.options} series={chartData.series} type="bar" width={500} />
    </div>
  );
};

export default ExcelChartComponent;
