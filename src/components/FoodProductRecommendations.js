import React, { useState } from 'react';
import './FoodProductRecommendations.css';

function FoodProductRecommendations() {
  // State variables
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sentiment, setSentiment] = useState(null); // State for storing sentiment analysis result

  // Handle input changes for the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

    // Determine the API URL based on the environment
    const apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_API_URL_PROD
    : process.env.REACT_APP_API_URL_DEV;

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Perform sentiment analysis first by calling the Express server
    //A POST request is used when you need to send data to a server to create or update a resource. In our case, we're sending a piece of text (the search term) to our Express server for sentiment analysis. This is part of a RESTful API design where the POST request is used to send data to the server.
    fetch(`${apiUrl}/analyze-sentiment`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: searchTerm }), // Send search term for sentiment analysis
    })
      .then((res) => res.json())
      .then((data) => {
        setSentiment(data.sentiment); // Store the sentiment score
        console.log('Sentiment analysis result:', data);

        // After sentiment analysis, make the Open Food Facts API call
        fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${searchTerm}&search_simple=1&action=process&json=1`, {
          headers: {
            'User-Agent': `${process.env.REACT_APP_APP_NAME}/${process.env.REACT_APP_APP_VERSION} (${process.env.REACT_APP_CONTACT_EMAIL})`,
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error(`HTTP error! status: ${res.status}`);
            }
            return res.json();
          })
          .then((data) => {
            setProducts(data.products || []); // Store the fetched products
            setIsLoading(false); // Stop loading
          })
          .catch((err) => {
            console.error('Fetch error:', err);
            setError('Error fetching data. Please try again.');
            setIsLoading(false);
          });
      })
      .catch((err) => {
        console.error('Sentiment analysis error:', err);
        setError('Error performing sentiment analysis. Please try again.');
        setIsLoading(false);
      });
  };

  return (
    <div className="food-product-search">
      <h2>AI-Powered Food Product Recommendations</h2>
      <p>Enter a keyword to search for food products:</p>

      {/* Form for searching products */}
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

      {/* Display sentiment analysis result */}
      <p>
      
      </p>
      {sentiment !== null && (
        <div className="sentiment-result">
          <h3>AI Sentiment Score</h3>
          <p>
            Sentiment analysis is performed on the search term to help understand its tone. 
            A positive score indicates the term has a positive tone, a negative score reflects negativity, 
            and a neutral score means the term is neutral.
          </p>
          <p>Sentiment score: {sentiment}</p>
          {sentiment > 0 ? (
            <p>Positive sentiment! This term is seen positively by the sentiment analyzer.</p>
          ) : sentiment < 0 ? (
            <p>Negative sentiment. This term might have a negative connotation.</p>
          ) : (
            <p>Neutral sentiment. This term seems neutral.</p>
          )}
        </div>
      )}

      {/* Display the products fetched from Open Food Facts */}
      <div className="food-products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="image-container">
              <img src={product.image_url} alt={product.product_name} />
            </div>
            <h3>{product.product_name}</h3>
            <p><strong>Brand:</strong> {product.brands}</p>
            <p><strong>Nutri-Score:</strong> {product.nutrition_grades_tags?.[0]?.toUpperCase() || 'N/A'}</p>
            <p><strong>Eco-Score:</strong> {product.ecoscore_grade?.toUpperCase() || 'N/A'}</p>
            <p><strong>Allergens:</strong> {product.allergens || 'None listed'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodProductRecommendations;
