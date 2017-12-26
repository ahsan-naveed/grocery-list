import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroceryItem from './GorceryItem';
import Total from './Total';
import './GroceryList.css';

export default class GroceryList extends Component {
  render() {
    const { groceryDataItems, groceryDataQts } = this.props;
    const totalQts = groceryDataQts.reduce((a, b) => { return a + b}, 0);
    const totalItems = groceryDataItems.length;

    return (
      <div className="list-of-grocery">
          {
            groceryDataItems.map((item, idx) => {
                return (
                    <GroceryItem 
                        key={idx}
                        item={item}
                        qty={groceryDataQts[idx]}
                    />
                )
            })
          }
          <Total totalQts={totalQts} 
                 totalItems={totalItems}/>
      </div>
    )
  }
}

GroceryList.propTypes = {
    groceryDataItems: PropTypes.array,
    groceryDataQts: PropTypes.array,
}
