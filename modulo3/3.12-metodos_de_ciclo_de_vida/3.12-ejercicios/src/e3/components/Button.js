import React from 'react';

class Button extends React.Component {
  render(){
    const {updatePeople} = this.props;
    return(
      <button className="btn" onClick={updatePeople}>Click me to update users</button>
    );
  }
}

export default Button;