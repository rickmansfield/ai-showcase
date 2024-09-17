import React, { useState, useEffect } from 'react';
import './ProductRecommendations.css';

function ProductRecommendations() {
  const [fakeStoreProducts, setFakeStoreProducts] = useState([]);
  const [openFoodProducts, setOpenFoodProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch data from Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setFakeStoreProducts(data))
      .catch((err) => console.error(err));

    // Fetch data from Open Product Data API (Open Food Facts)
    fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json') // Example product
      .then((res) => res.json())
      .then((data) => setOpenFoodProducts([data.product])) // Store the product in an array
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter Fake Store products by category
  const filteredFakeStoreProducts =
    selectedCategory === 'All'
      ? fakeStoreProducts
      : fakeStoreProducts.filter((product) => product.category === selectedCategory.toLowerCase());

  return (
    <div className="product-recommendations">
      <h2>AI-Powered Product Recommendations</h2>

      <div className="filter-container">
        <label htmlFor="category">Choose a category: </label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Jewelery">Jewelery</option>
          <option value="Men's Clothing">Men's Clothing</option>
          <option value="Women's Clothing">Women's Clothing</option>
        </select>
      </div>

      <h3>Products from Fake Store API:</h3>
      <div className="products-grid">
        {filteredFakeStoreProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
          </div>
        ))}
      </div>

      <h3>Products from Open Product Data API (Food):</h3>
      <div className="products-grid">
        {openFoodProducts.map((product, index) => (
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

export default ProductRecommendations;
