import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';
// import backgroundImage from './background.png';
import hotel from './hotelexterior.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="text-white h5">&lt;  Back</span>
          </button>
          <a className="navbar-brand text-center" href="#"><h3>Hotel Details</h3></a>
          <img src={logo} className="logo" alt="logo" />
        </nav>
        <div className="container">
          <div className="mt-4 mb-5">
            <img src={hotel} alt="..." className="img-thumbnail" />
          </div>
          <p className="h3">Hilton Chicago</p>
          <p className="h5">720 South Michigan Avenue</p>
          <p className="h5">Chicago, Illinous, 60605 </p>
          <p className="h5"><u>1-322-922-4400</u></p>
          <ul className="list-group text-body mt-5">
            <a href="#" className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center h3">Map <span>&gt;</span></a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center h3">Photo Gallery <span>&gt;</span></a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center h3">Amenties <span>&gt;</span></a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center h3">Porta ac consectetur ac <span>&gt;</span></a>
            <a href="#" className="list-group-item list-group-item-action list-group-item-light d-flex justify-content-between align-items-center h3">Vestibulum at eros <span>&gt;</span></a>
          </ul> 
        </div>
      </div>
    );
  }
}

export default App;
