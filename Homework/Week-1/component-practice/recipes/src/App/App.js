import React, { Component } from 'react';
import './style.css';
import recipes from '../data/recipes';
import Navbar from "../components/Navbar/Navbar"
import RecipeHeader from "../components/RecipeHeader/RecipeHeader"
import Recipe from "../components/Recipe/Recipe"
import Footer from "../components/Footer/Footer"
const recipe = recipes[0];

class App extends Component {
  render() {
    return (
      <div className="flex-container">
        <Navbar/>
        <RecipeHeader recipe={recipe}/>
        <Recipe recipe={recipe}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
