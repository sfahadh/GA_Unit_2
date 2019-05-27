import React, { Component } from 'react';
import './App.css';
import Address from './components/Address/Address';

let API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
console.log(API_KEY);
class App extends Component {
  constructor() {
    super()

    this.state = {
      zipCode: 11106,
      temperature: 0,
      tempMin: 0,
      tempMax: 0,
      weather: "",
      location: ""
    }

    this.setZipCode = this.setZipCode.bind(this);
    this.handleWeather = this.handleWeather.bind(this);
  }

  setZipCode(e) {
    e.preventDefault();
    this.setState = ({
      zipCode: e.target.value
    })
  }
  
  handleWeather() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zipCode},us&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        temperature: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        weather: data.weather[0].main,
        location: data.name
      })
    })
    .catch(error => error.message);
  }

  render() {
    const {temperature, location, tempMin, tempMax, weather} = this.state;
    return (
      <div className="App">
        <button onClick={this.handleWeather}>Search</button>
        <Address 
          zipCode={this.setzipCode} 
          temperature={temperature}
          location={location}
          tempMin={tempMin}
          tempMax={tempMax}
          weather={weather}
        />
      </div>
    );
  }
}

export default App;
