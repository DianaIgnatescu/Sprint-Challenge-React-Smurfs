import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import './App.css';
import Navigation from './components/Navigation';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
    this.getSmurfs = this.getSmurfs.bind(this);
    this.banSmurf = this.banSmurf.bind(this);
  }

  getSmurfs() {
    axios.get('http://localhost:3333/smurfs')
      .then((response) => {
        const smurfs = response.data.map(smurf => ({
          id: smurf.id,
          name: smurf.name,
          age: String(smurf.age),
          height: smurf.height,
        }));
        this.setState({ smurfs });
      })
      .catch(err => console.log(err));
  }

  banSmurf(e, smurfId) {
    e.preventDefault();
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
      .then(() => {
        this.getSmurfs();
      })
      .catch(err => console.log(err));
  }

  // add any needed code to ensure that the smurfs
  // collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    const { smurfs } = this.state;

    return (
      <div className="App">
        <Route
          path="/"
          render={(props) => <Navigation {...props} />}
        />
        <Route
          path="/smurf-form"
          render={props => <SmurfForm {...props} getSmurfs={this.getSmurfs} />}
        />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={smurfs} getSmurfs={this.getSmurfs} banSmurf={this.banSmurf} />}
        />
      </div>
    );
  }
}

export default App;
