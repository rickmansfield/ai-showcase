import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ECommerceProductRecommendations from './ECommerceProductRecommendations';
import FoodProductRecommendations from './FoodProductRecommendations';
import './ProductRecommendationsLanding.css';

function ProductRecommendationsLanding() {
  const { type } = useParams(); // Captures the dynamic navigation parameter
  const navigate = useNavigate();

  const handleSelectRecommendation = (selectedType) => {
    navigate(`/product-recommendations/${selectedType}`);
  };

  const renderRecommendations = () => {
    if (type === 'ecommerce') {
      return <ECommerceProductRecommendations />;
    } else if (type === 'food') {
      return <FoodProductRecommendations />;
    } else {
      return (
        <div className="recommendation-options">
          <h2>AI-Powered Product Solutions</h2>
          <p className="ai-explanation">
            AI-powered product recommendations use sophisticated algorithms and data analysis 
            to provide personalized product suggestions. By analyzing user behavior, preferences, 
            and trends, AI can suggest the most relevant products to users, enhancing their shopping 
            experience. Below are some examples:
          </p>
          <ul className="ai-benefits">
            <li>
              <strong>Ecommerce Product Recommendations:</strong> 
              AI can analyze purchasing behavior, browsing patterns, and product preferences 
              to recommend products that a customer is most likely to buy, increasing sales and 
              customer satisfaction.
            </li>
            <li>
              <strong>Food Product Recommendations:</strong> 
              In the food industry, AI can recommend new ingredients, recipe ideas, or food products 
              based on dietary preferences, previous orders, or nutritional requirements.
            </li>
          </ul>
          <div className="recommendation-buttons">
            <button onClick={() => handleSelectRecommendation('ecommerce')}>
              View ECommerce Products
            </button>
            <button onClick={() => handleSelectRecommendation('food')}>
              View Food Products
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="product-recommendations">
      {renderRecommendations()}
    </div>
  );
}

export default ProductRecommendationsLanding;
