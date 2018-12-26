import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
//import Modal from 'react-modal';
import '../styles/App.css';

export default class Beer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beer_results: []
    };
  }
  componentDidMount() {
    let self = this;
    fetch('/api/v1/util/beer_types', {
      method: 'GET',
    }).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server.");
      }
      return response.json();
    }).then(function (data) {
      self.setState({ beer_results: data });
    }).catch(err => {
      console.log('caught an error!', err);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="BeerList">
          <h2>The Wide World of Beer</h2>
          <p>Beers are as diverse in type as they are in flavor, consistency, and appearance. Here is just a sampling of the most frequently available beer types.</p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Beer Type</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {this.state.beer_results.map(beer =>
                <tr key={beer.beer_id}>
                  <td padding='10px'>{beer.beer_type}</td>
                  <td padding='10px'>{beer.description}</td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
    );
  }

};
