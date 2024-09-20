import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to Our AI-Powered Solutions</h1>
      <nav>
        <ul>
          <li><Link to="/ecommerce-recommendations">AI Product Solution</Link></li>
          <li><Link to="/sentiment-analysis">Sentiment Analysis</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/image-search">Image Search</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;