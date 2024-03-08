import React from 'react';
import  Navbar from './Navbar';
import  Home from './Home';

import  { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Home/>
      
      </Router>
    </div>
  );
}

export default App;
