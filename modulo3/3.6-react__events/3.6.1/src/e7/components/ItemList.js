import React from 'react';
import Item from './Item';
import CategoryButton from './CategoryButton';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.itemsList = this.props.items;
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleCategoryChange(event) {
    if (event.currentTarget.innerHTML === 'Todos') {
      this.itemsList = this.props.items;
    } else {
      this.itemsList = this.itemsList.filter(item => (
        item.category === event.currentTarget.innerHTML
      ))
    }
    this.forceUpdate();
  }

  render() {
    return (
      <div className="container">
        <ul className="item-list">
        {this.itemsList.map((item, index) => {
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
        <CategoryButton category='Cereales' handleClick={this.handleCategoryChange}/>
        <CategoryButton category='Bebida' handleClick={this.handleCategoryChange}/>
        <CategoryButton category='Fast-food' handleClick={this.handleCategoryChange}/>
        <CategoryButton category='Todos' handleClick={this.handleCategoryChange}/>
      </div>
    );
  }
}

export default ItemList;
