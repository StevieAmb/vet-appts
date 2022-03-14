import React, { Component } from 'react';
import ApptMaker from './ApptMaker';
import ApptBooks from './ApptBooks';
import NavBar from './NavBar';
import logo from './logo.svg';
import './App.css';
import { getAppts, postAppt } from './apiCalls';

class App extends Component { 
  constructor() {
    super()
    this.state = {
      appts: []
    }
  }

  componentDidMount() {
    getAppts()
    .then(data => this.setState({appts: data}))
    .catch(error => this.setState({error: error.message}))
  }


  addAppt = (newAppt) => {
    this.setState({appts: [...this.state.appts, newAppt]})
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <ApptMaker addAppt={this.addAppt} />
        <ApptBooks appts={this.state.appts}/>
      </div>
    );

  }
}

export default App;
