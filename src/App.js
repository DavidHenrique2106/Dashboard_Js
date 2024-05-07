import React from 'react';
import './App.css';
import ExcelChartComponent from './components/EdBasica';
import SchoolStatusChart from './components/Funcionamento';
import UrbanRuralChart from './components/RuralUrbana';
import SchoolTypeChart from './components/RespRegula';
import SchoolBuildingChart from './components/TipoPredio';
import Footer from './components/Footer';
import Presentation from './components/Apresentacao';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gráficos de Educação Básica no Brasil (Censo de 2023)</h1>
      </header>
      <main>
        <section className="chart-section">
          <Presentation />
        </section>
        <section className="chart-section">
          <h2>Gráfico de Regulamento em Porto Velho</h2>
          <ExcelChartComponent />
        </section>
        <section className="chart-section">
          <h2>Gráfico de Status das Escolas</h2>
          <SchoolStatusChart />
        </section>
        <section className="chart-section">
          <h2>Gráfico de Distribuição Urbana e Rural</h2>
          <UrbanRuralChart />
        </section>
        <section className="chart-section">
          <h2>Gráfico de Tipo de Escola</h2>
          <SchoolTypeChart />
        </section>
        <section className="chart-section">
          <h2>Gráfico de Tipo de Prédio Escolar</h2>
          <SchoolBuildingChart />
        </section>
      </main>
    </div>
  );
}

export default App;
