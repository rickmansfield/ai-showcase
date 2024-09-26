import React from 'react'
import { Link } from 'react-router-dom';
import './CoreExamples.css';

function CoreExamples() {
  const features = [
    {
      title: 'AI Product Solution', path: '/ecommerce-recommendations', image: 'images/workflow-01.png' },
    { title: 'Sentiment Analysis', path: '/sentiment-analysis', image: 'images/workflow-02.png' },
    { title: 'Chatbot', path: '/chatbot', image: 'images/workflow-03.png' },
    { title: 'Image Search', path: '/image-search', image: 'images/workflow-01.png' },
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
  )
}

export default CoreExamples