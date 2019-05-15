import React from 'react';

class CategoryButton extends React.Component {
  render(){
    const {category, handleClick} = this.props;
    return(
      <button className="btn" onClick={handleClick}>{category}</button>
    );
  }
}

export default CategoryButton;