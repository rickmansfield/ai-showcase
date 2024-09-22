import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './Pages/Home';
import EcommerceProductRecommendations from './components/ECommerceProductRecommendations';
import FoodProductRecommendations from './components/FoodProductRecommendations';
import Chatbot from './components/Chatbot';
import ImageSearch from './components/ImageSearch';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-recommendations" element={<EcommerceProductRecommendations />} />
          <Route path="/ecommerce-recommendations" element={<EcommerceProductRecommendations />} />
          <Route path="/sentiment-analysis" element={<FoodProductRecommendations />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/image-search" element={<ImageSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
