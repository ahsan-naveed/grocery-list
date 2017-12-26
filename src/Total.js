import './Total.css';
import React, { Component } from 'react';

export default class Total extends Component {
  render() {
    return (
      <div className="main-total">
        <div className="total">
          <p>Total Items: {this.props.totalItems}</p>
          <p>Total Quantity: {this.props.totalQts}</p>
        </div>
      </div>
    )
  }
}
