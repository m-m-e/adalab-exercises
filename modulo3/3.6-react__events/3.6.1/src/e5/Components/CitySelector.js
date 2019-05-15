import React from 'react';

class Destiny extends React.Component {
  render() {
    return (
      <select id="cities" onChange={this.props.onSelectChange}>
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