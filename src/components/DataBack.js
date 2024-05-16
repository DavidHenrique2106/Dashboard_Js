import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataBack = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        setData(response.data); // Atualizando o estado com a string recebida do backend
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="back">
      <h1>Dados do Backend:</h1>
      {data} 
    </div>
  );
}

export default DataBack;
