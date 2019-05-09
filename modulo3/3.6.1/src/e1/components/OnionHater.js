import React from 'react';

class OnionHater extends React.Component {
  onChangeListener(event) {
    if (event.target.value.includes('cebolla')) {
      alert('ODIO LA CEBOLLA');
    }
  }

  render() {
    return (
      <textarea className="text" onChange={this.onChangeListener}/>
    );
  }
}

export default OnionHater;