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
  const appStyle = {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f7f7f7',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    marginBottom: '20px',
  };

  const h1Style = {
    fontSize: '24px',
    color: '#333',
  };

  const sectionStyle = {
    marginBottom: '40px',
  };

  const h2Style = {
    fontSize: '20px',
    marginBottom: '10px',
    color: '#666',
  };

  const footerStyle = {
    marginTop: '40px',
  };

  return (
    <div className="App" style={appStyle}>
      <header style={headerStyle}>
        <h1 style={h1Style}>Gráficos de Educação Básica no Brasil (Censo de 2023)</h1>
      </header>
      <main>
        <section className="chart-section" style={sectionStyle}>
          <Presentation />
        </section>
        <section className="chart-section" style={sectionStyle}>
          <h2 style={h2Style}>Gráfico de Regulamento em Porto Velho</h2>
          <ExcelChartComponent />
        </section>
        <section className="chart-section" style={sectionStyle}>
          <h2 style={h2Style}>Gráfico de Status das Escolas</h2>
          <SchoolStatusChart />
        </section>
        <section className="chart-section" style={sectionStyle}>
          <h2 style={h2Style}>Gráfico de Distribuição Urbana e Rural</h2>
          <UrbanRuralChart />
        </section>
        <section className="chart-section" style={sectionStyle}>
          <h2 style={h2Style}>Gráfico de Tipo de Escola</h2>
          <SchoolTypeChart />
        </section>
        <section className="chart-section" style={sectionStyle}>
          <h2 style={h2Style}>Gráfico de Tipo de Prédio Escolar</h2>
          <SchoolBuildingChart />
        </section>
      </main>
      <footer style={footerStyle}>
        <Footer style={footerStyle} />
      </footer>
    </div>
  );
}

export default App;
