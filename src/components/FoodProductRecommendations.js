import React, { useState, useEffect } from 'react';
import './ProductRecommendationsLanding.css';

function FoodProductRecommendations() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from Open Food Facts API (example product)
    fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
      .then((res) => res.json())
      .then((data) => setProducts([data.product])) // Store the product in an array
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-recommendations">
      <h2>Food Product Recommendations</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image_url || '/path/to/default-food-image.jpg'} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>{product.brands}</p>
            <p><strong>Ingredients:</strong> {product.ingredients_text || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodProductRecommendations;
