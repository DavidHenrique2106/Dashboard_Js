import React from 'react';
import styled from 'styled-components';

const Presentation = () => {
  return (
    <PresentationContainer>
      <PresentationTitle>Resumo do Projeto:</PresentationTitle>
      <PresentationList>
        <li><Paragraph>Desenvolvimento de um Dashboard interativo para análise de dados do Censo Escolar 2023.</Paragraph></li>
        <li><Paragraph>Incorporação de gráficos e informações resumidas para facilitar a compreensão dos dados.</Paragraph></li>
        <li><Paragraph>Disponibilização de dados brutos para usuários avançados que desejam realizar análises específicas.</Paragraph></li>
        <li><Paragraph>Utilização de tecnologias de Programação para Web, Banco de dados, Engenharia de Software e Estatística para garantir a eficiência e precisão do Dashboard.</Paragraph></li>
      </PresentationList>
    </PresentationContainer>
  );
};

const PresentationContainer = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const PresentationTitle = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
`;

const PresentationList = styled.ol`
  margin-left: 20px;
  list-style-type: none;
  counter-reset: item;

  li {
    color: #555;
    font-size: 16px;
    margin-bottom: 8px;
    position: relative;
    counter-increment: item;

    &:before {
      content: counter(item) ') ';
      position: absolute;
      left: -20px;
      color: #555;
    }
  }
`;

const Paragraph = styled.p`
  display: inline;
`;

export default Presentation;
