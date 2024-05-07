import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '20px',
    textAlign: 'center'
  };

  const contentStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const contactStyle = {
    marginTop: '10px'
  };

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none'
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={{marginBottom: '10px'}}>&copy; David Henrique</p>
        <div style={contactStyle}>
          <p>Email: <a href="mailto:dh210605@gmail.com" style={linkStyle}>dh210605@gmail.com</a></p>
          <p>Whats: <a href="tel:+5581983181645" style={linkStyle}>(81) 9.8318-1645</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/david-henrique" style={linkStyle}>David Henrique</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
