import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchInput.css';

export default class SearchInput extends Component {
  handleChange = () => {
      this.props.addItem(this.name.value);
  }

  handleKeyDown = (event) => {
      if (event.keyCode === 13) {
          this.props.addItem(event.target.value);
      }
  }
  render() {
    return (
      <div className="search-input-component">
        <div>
            <input type="text" 
                   name="groceryItem"
                   placeholder="Add grocery..." 
                   onKeyDown={this.handleKeyDown}
                   ref={(input) => this.name = input}/>
            <button onClick={this.handleChange}> + Add Item </button>
        </div>
      </div>
    )
  }
}

SearchInput.propTypes = {
    addItem: PropTypes.func,
};
