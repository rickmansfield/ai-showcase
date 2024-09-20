import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function HomePage() {
  const features = [
    { title: 'AI Product Solution', path: '/ecommerce-recommendations', image: 'path/to/product-image.jpg' },
    { title: 'Sentiment Analysis', path: '/sentiment-analysis', image: 'path/to/sentiment-image.jpg' },
    { title: 'Chatbot', path: '/chatbot', image: 'path/to/chatbot-image.jpg' },
    { title: 'Image Search', path: '/image-search', image: 'path/to/image-search-image.jpg' },
  ];

  return (
    <div className="home-page">
      <h1>Welcome to Our AI-Powered Solutions</h1>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <img src={feature.image} alt={feature.title} />
            <h2>{feature.title}</h2>
            <Link to={feature.path} className="feature-link">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;