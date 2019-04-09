import React, { Component } from 'react';
import './App.css';
import GenerateSimpson from './JSX/GenerateEmployee';
import DisplaySimpson from './JSX/DisplayEmployee';
import persoSimpson from "./JSX/sampleEmployee"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      perso:  persoSimpson
    };
  }

  addCharacters() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response  =>  response.json())
      .then(data  => {
        console.log(this.data)
        this.setState({
          perso:  data[0],
        });
    });
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <GenerateSimpson  selectEmployee={() =>  this.addCharacters()}  />
          <DisplaySimpson  perso={this.state.perso}  />
        </header>
      </div>
    );
  }
}


export default App;
