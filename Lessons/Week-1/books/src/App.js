import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Books from "./books"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Books data = {books} />
      </div>
    );
  }
}

const books = [
  {
    title: "The Left hand of Darkness",
    author: "Ursula Le Guin",
    author_image_url: "http://humantransit.org/wp-content/uploads/Ursula-K-Le-Guin-1.jpg",
    description: "The novel follows the story of Genly Ai..."
  },
  {
    title: "Hear the Wind Sing",
    author: "Haruki Murakami",
    author_image_url: "http://2.bp.blogspot.com/-wWv2bbCimxI/VH5_c4EYTGI/AAAAAAAAHUA/sXz1-f5kZKo/s1600/murakami%2Bharuki%2Bin%2Bsweater.jpg",
    description: "Hear the Wind Sing is the first novel by Haruki Murakami.."
  }
];

export default App;
