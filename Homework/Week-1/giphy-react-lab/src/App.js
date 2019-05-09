import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      allGifs: [],
      fetchOK: null
    }
  }

  componentDidMount() {
    this.fetchAllGifs()
  }

  fetchAllGifs() {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=ydSM0tcrbRhWRNylyZKBQ7lZgRAjyoNx&tag=&rating=G")
    .then((resp) => resp.json())
    .then((data) => {
      this.setState({
        allGifs: data.data.image_url,
        fetchOK: true
      });
      return data;
    })
    .catch((err) => err.message);
  }

  renderFetch() {
    if (this.state.fetchOK) { 
      return <h1>Done</h1> 
    } else { 
      return <h1>Loading...</h1> 
    }
  }

  render() {
    return (
      <div className="App">
      {this.renderFetch()}
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <h1>I'm going to show a collection of gifs!</h1>
        <main>
          <button onClick={() => this.fetchAllGifs()}>New Gif</button>
          <img src={this.state.allGifs}/>
        </main>
      </div>
    );
  }
}


export default App;
