import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProductRecommendations from './components/ProductRecommendations';
import Chatbot from './components/Chatbot';
import ImageSearch from './components/ImageSearch';
import SentimentAnalysis from './components/SentimentAnalysis';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProductRecommendations />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/image-search" element={<ImageSearch />} />
          <Route path="/sentiment-analysis" element={<SentimentAnalysis />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
