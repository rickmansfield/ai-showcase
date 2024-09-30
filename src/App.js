import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes';
import Footer from './components/Footer';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
