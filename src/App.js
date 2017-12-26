import React, { Component } from 'react';
import SearchInput from './SearchInput';
import GroceryList from './GroceryList';
import Header from './Header';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      quantities: [],
    }
  }
  addItem = (item) => {
    const items = [...this.state.items];
    const quantities = [...this.state.quantities];
    const idx = items.indexOf(item);
    
    if (item && items.length <= 20) {
      if (idx !== -1) {
        quantities[idx] ++;
      }
      else {
        quantities.push(1);
        items.push(item);
      }
      this.setState({ items, quantities });
    }

    //TODO: add localStorage
  }

  render() {
    const { items, quantities } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchInput addItem={this.addItem}/>
        <GroceryList groceryDataItems={ items }
                     groceryDataQts={ quantities }/>
      </div>
    );
  }
}

export default App;
