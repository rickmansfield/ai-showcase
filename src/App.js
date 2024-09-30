import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import NavBar from './components/NavBar';
import AppRoutes from './routes';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
