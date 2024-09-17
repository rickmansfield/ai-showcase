// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Product Recommendations</Link>
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
