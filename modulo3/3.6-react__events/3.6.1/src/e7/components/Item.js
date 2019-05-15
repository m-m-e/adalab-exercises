import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const {quantity, name, description, category, price} = this.props;
    return (
      <div className="item">
        <h5 className="quantity">{ quantity }</h5>
        <div>
          <h5>{ name }</h5>
          <h6 className="text-muted">{ description }</h6>
        </div>
        <div className="badge badge-info">{ category }</div>
        <h5 className="price">{ price }€</h5>
      </div>
    );
  }
};

Item.defaultProps = {
  description: 'No hay descripción',
  price: 6,
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Item;