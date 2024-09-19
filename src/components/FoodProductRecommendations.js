import React, { useState } from 'react';
import './FoodProductRecommendations.css';

function FoodProductRecommendations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    setError(null);

    // fetch(`https://world.openfoodfacts.org/api/v0/search.json?search_terms=${searchTerm}&fields=product_name,brands,ingredients_text,image_url,nutrition_grades_tags,nutrition_score_debug,ecoscore_grade,ecoscore_score&nocache=1`, {
    //   headers: {
    //     'User-Agent': `${process.env.REACT_APP_APP_NAME}/${process.env.REACT_APP_APP_VERSION} (${process.env.REACT_APP_CONTACT_EMAIL})`
    //   }
  // })
  fetch(`https://world.openfoodfacts.org/api/v0/search.json?search_terms=spaghetti&fields=product_name,brands,ingredients_text,image_url,nutrition_grades_tags,nutrition_score_debug,ecoscore_grade,ecoscore_score&nocache=1`, {
    headers: {
      'User-Agent': `${process.env.REACT_APP_APP_NAME}/${process.env.REACT_APP_APP_VERSION} (${process.env.REACT_APP_CONTACT_EMAIL})`
    }
  })
  
    
    .then((res) => {
        console.log('res', res);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products || []);
        setIsLoading(false);
        console.log('data', data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setError('Error fetching data. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <div className="food-product-search">
      <h2>AI-Powered Food Product Recommendations</h2>
      <p>Enter a keyword to search for food products:</p>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Enter food product keyword..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image_url} alt={product.product_name} />
            <h3>{product.product_name}</h3>
            <p>{product.brands}</p>
            <p>Nutri-Score: {product.nutrition_grades_tags?.[0]?.toUpperCase() || 'N/A'}</p>
            <p>Eco-Score: {product.ecoscore_grade?.toUpperCase() || 'N/A'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodProductRecommendations;
