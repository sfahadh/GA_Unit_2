import React, { Component } from 'react';
import Clicker from './components/Clicker';
import Fizzer from './components/Fizzer';
import './App.css';
import PokeList from './components/PokeList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ctr: 0,
      pokemon: []
    };
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const data = await response.json();
    this.setState({pokemon: data.results});
  }

  renderPoke(poke, title) {
    return (
      <div>
        <h1>{title}</h1>
        <PokeList poke={poke} />
      </div>
    )
  }

  renderVowelPoke() {
    const poke = this.state.pokemon;
    let vowelPoke;
    if (poke.length < 0) {
      vowelPoke = [];
    } else {
      vowelPoke = poke.filter(p => ['a', 'e', 'i', 'o', 'u'].indexOf(p.name[0]) > -1);
    }

    return this.renderPoke(vowelPoke, `these pokémon's names start with a vowel.`);
  }

  renderFinalConsonantPoke() {
    const poke = this.state.pokemon;
    const consPoke = poke.filter(p => {
      const name = p.name;
      const char = name[name.length - 1];

      return ['a', 'e', 'i', 'o', 'u'].indexOf(char) < 0
    });

    return this.renderPoke(consPoke, `these pokémon's names end with a consonant.`);
  }

  increment() {
    this.setState(prevState => ({
      ctr: prevState.ctr + 1
    }));
  }

  title() {
    return <h1>hey there wats up</h1>;
  }

  render() {
    return (
      <div className="App">
        {this.title()}
        <div onMouseEnter={() => console.log('called')}>Hover over me</div>
        <Clicker handleClick={() => this.increment()} />
        <Fizzer ctr={this.state.ctr} />
        {this.renderFinalConsonantPoke()}
        {this.renderVowelPoke()}
      </div>
    );
  }
}

export default App;
