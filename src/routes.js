import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import EcommerceProductRecommendations from './components/ECommerceProductRecommendations';
import FoodProductRecommendations from './components/FoodProductRecommendations';
import Chatbot from './components/Chatbot';
import ImageSearch from './components/ImageSearch';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product-recommendations" element={<EcommerceProductRecommendations />} />
    <Route path="/ecommerce-recommendations" element={<EcommerceProductRecommendations />} />
    <Route path="/sentiment-analysis" element={<FoodProductRecommendations />} />
    <Route path="/chatbot" element={<Chatbot />} />
    <Route path="/image-search" element={<ImageSearch />} />
  </Routes>
);

export default AppRoutes;