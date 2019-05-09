import React from 'react';

class Destiny extends React.Component {
  selectCity(event) {
    alert(`Tu destino es viajar a ${event.target.value}`);
  }
  render() {
    return (
    <select id="cities" onChange={this.selectCity}>
      <option value="Buenos Aires">Buenos Aires</option>
      <option value="Sydney">Sydney</option>
      <option value="Praga">Praga</option>
      <option value="Boston">Boston</option>
      <option value="Tokyo">Tokyo</option>
    </select>
    )
  }
}

export default Destiny;