// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ProductRecommendations from './components/ProductRecommendations';
import Chatbot from './components/Chatbot';
import ImageSearch from './components/ImageSearch';
import SentimentAnalysis from './components/SentimentAnalysis';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="sections">
        <ProductRecommendations />
        <Chatbot />
        <ImageSearch />
        <SentimentAnalysis />
      </div>
    </div>
  );
}

export default App;
