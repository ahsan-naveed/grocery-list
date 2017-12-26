import React, { Component } from 'react';
import './GroceryItem.css';

export default class GroceryItem extends Component {
  render() {
    return (
      <div className="grocery-item">
        <p>
            <span className="item-name">{this.props.item}</span>
            <span className="item-qty">{this.props.qty}</span>
        </p>
      </div>
    )
  }
}
