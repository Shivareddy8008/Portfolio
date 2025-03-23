import React from 'react';
import './footer.css'; // Import the CSS for styling

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
       

       

        <div className="footer-section">
          <h4>Connect with Me</h4>
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/shiva-reddy-baddam-345290314/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
           
            <li><a href="https://github.com/Shivareddy8008" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          
            <li>shivareddybaddam6@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 B.Shiva Reddy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
