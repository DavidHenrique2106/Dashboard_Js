import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import './App.css';
import ExcelChartComponent from './components/EdBasica';
import SchoolStatusChart from './components/Funcionamento';
import UrbanRuralChart from './components/RuralUrbana';
import SchoolTypeChart from './components/RespRegula';
import SchoolBuildingChart from './components/TipoPredio';
import Footer from './components/Footer';
import Presentation from './components/Apresentacao';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #d3d3d3;
    font-family: 'Arial, sans-serif';
  }
`;

const AppContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #d3d3d3;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 40px;
  display: inline-block;
  width: 48%;
  vertical-align: top;
  margin-right: 2%; 
  &:nth-child(2n) {
    margin-right: 0; 
  }
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  color: #666;
`;

const FooterContainer = styled.footer`
  margin-top: 40px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Title>Gráficos de Educação Básica no Brasil (Censo de 2023)</Title>
        </Header>
        <main>
          <section>
            <Presentation />
          </section> <br /> <br />
          <Section>
            <SectionTitle>Gráfico de Regulamento em Porto Velho</SectionTitle>
            <ExcelChartComponent />
          </Section>
          <Section>
            <SectionTitle>Gráfico de Status das Escolas</SectionTitle>
            <SchoolStatusChart />
          </Section>
          <Section>
            <SectionTitle>Gráfico de Distribuição Urbana e Rural</SectionTitle>
            <UrbanRuralChart />
          </Section>
          <Section>
            <SectionTitle>Gráfico de Tipo de Escola</SectionTitle>
            <SchoolTypeChart />
          </Section>
          <Section>
            <SectionTitle>Gráfico de Tipo de Prédio Escolar</SectionTitle>
            <SchoolBuildingChart />
          </Section>
        </main>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </AppContainer>
    </>
  );
}

export default App;
