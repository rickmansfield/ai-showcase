import React, { useState, useEffect } from 'react';
import './ECommerceProductRecommendations.css';

function ECommerceProductRecommendations() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="product-recommendations">
      <h2>Ecommerce Product Recommendations</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ECommerceProductRecommendations;
