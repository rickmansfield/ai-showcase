import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product-recommendations">AI Product Solution</Link>
        </li>
        <li>
          <Link to="/chatbot">AI Chatbot</Link>
        </li>
        <li>
          <Link to="/image-search">Image Search</Link>
        </li>
        <li>
          <Link to="/sentiment-analysis">Sentiment Analysis</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
