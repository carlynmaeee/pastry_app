import React from 'react'

const Footer:React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f1f1f1', padding: '20px', textAlign: 'center' }}>
      <div>
        <a href="/about" style={{ margin: '0 15px' }}>About Us</a>
        <a href="/contact" style={{ margin: '0 15px' }}>Contact</a>
        <a href="/privacy" style={{ margin: '0 15px' }}>Privacy Policy</a>
      </div>
      <div style={{ marginTop: '20px' }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Twitter
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          Instagram
        </a>
      </div>
      <p style={{ marginTop: '20px' }}>© 2024 Your Company Name. All rights reserved.</p>
    </div>
  );
}

export default Footer;
