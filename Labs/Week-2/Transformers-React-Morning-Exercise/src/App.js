import React, { Component } from 'react';
import './App.css';
import transformers from './transformers/transformer-data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformer: transformers
    }
  }

  //step 1:
  renderNames = () =>  {
    this.state.transformer.map(i => i.name);
  }


   //step 2:
   renderAutobots = () => {
    let a = this.state.transformer.filter(i => i.team === "Autobot");
    // console.log(a);
    let b = a.map(i => `${i.name} `);
    return <div>{b}</div>
    // console.log(b);
  }

  //steps 3
  renderVehicleForms() {
    let c = this.state.transformer.filter(i => i.form_type === "vehicle")
    // console.log(c);
  }

  //step 4
  renderBeetleVehicle() {
    let d = this.state.transformer.filter(i => i.form_type);
    // console.log(d);
    let e = d.filter(i => i.form.includes("VW Beetle"))
    console.log(e);
  }
 
  //Step 5. 
  renderPhotoProperty() {
    // let photoName = {
    //   name: this.state.transformer.map(i => i.name),
    //   photo: this.state.transformer.map(i => i.photo)
    // }

    // let f = this.state.transformer.map(i => i.name, i.photo);
    // console.log(f);
  }
  
  
  //Use map to return an array of objects that have a name and a photo property. Then, loop through the new //array and render an h1 with the name and an img element with the photo in App.js.



  render() {
    this.renderNames();
    this.renderAutobots();
    this.renderVehicleForms();
    this.renderBeetleVehicle();
    this.renderPhotoProperty();
    return (
      <div className="App">
        <h1>All transformers:</h1>
        {this.renderNames()}
        <h2>All Autobots:</h2>
        {this.renderAutobots()}
      </div>
    );
  }
}

export default App;
