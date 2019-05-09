import React from 'react';
import './HalfPage.css';

class HalfPage extends React.Component {
  render() {
    return (
      <div className="half-page">{this.props.children}</div>
    )
  }
};

export default HalfPage;