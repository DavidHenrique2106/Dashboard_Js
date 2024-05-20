import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>&copy; David Henrique</FooterText>
        <FooterText>&copy; David Pontes</FooterText>
        <FooterText>&copy; Gabriel Miranda</FooterText>
        <FooterText>&copy; Luis Henrique</FooterText>
        <FooterText>&copy; Erick Abraão</FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-radius: 8px; /* Small border radius */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Small box shadow */
  margin-top: 20px;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin-bottom: 10px;
  color: #333;
`;

export default Footer;
