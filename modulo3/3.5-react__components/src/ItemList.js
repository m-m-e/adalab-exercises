import React from 'react';
import Item from './Item';
import './App.css';

class ItemList extends React.Component {
  render() {
    // const itemsCheap = this.props.items.filter(item => item.price < 10);
    return (
      <ul className="item-list">
      {this.props.items.map((item, index) => {
        return (
        <li key={index}>
          <Item 
            name={item.name} 
            description={item.description} 
            quantity={item.quantity}
            category={item.category}
            price={item.price} 
          />
        </li>
        )}
      )}
      </ul>
    );
  }
}

export default ItemList;
