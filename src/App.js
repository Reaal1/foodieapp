import React from 'react';
import  Navbar from './Navbar';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import  Home from './Home';
import Recipes from './Recipes';
import Bloglist from "./Bloglist";
/*import Contact from "./Contact";
import  About from './About';*/



function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/">
          <Home />
       </Route>
       <Route path="/recipes">
         <Recipes />
      </Route>
      <Route path="/Bloglist">
         <Bloglist />
      </Route>
       </Switch>
    </div>
    </Router>
  )
}

export default App;
