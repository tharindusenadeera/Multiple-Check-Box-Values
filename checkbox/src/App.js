import React, { Component } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gps: false,
      bike: false,
      bluetooth: false
    };
  }


  toggleChangeGPS = () => {
    this.setState(prevState => ({
      gps: !prevState.gps,
    }));
  }

  toggleChangeBike = () => {
    this.setState(prevState => ({
      bike: !prevState.bike,
    }));
  }

  toggleChangeBluetooth = () => {
    this.setState(prevState => ({
      bluetooth: !prevState.bluetooth,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let arr = [];

    for (var key in this.state) {
      if (this.state[key] === true) {
        arr.push(key);
      }
    }

    let data = {
      check: arr.toString()
    };

    console.log(data);
  }

  render() {
    return (
      <div className="container">
        <h3>Multiple Checkboxes</h3>
        <hr />
        <form onSubmit={this.onSubmit}>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.gps}
                onChange={this.toggleChangeGPS}
                className="form-check-input"
              />
              GPS
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.bike}
                onChange={this.toggleChangeBike}
                className="form-check-input"
              />
              Bike
            </label>
          </div>

          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.bluetooth}
                onChange={this.toggleChangeBluetooth}
                className="form-check-input"
              />
              Bluetooth
            </label>
          </div>
          <br />
          <div className="form-group">
            <button className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
