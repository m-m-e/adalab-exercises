import React from 'react';
import CityImage from './CityImage';

class Destiny extends React.Component {
  constructor(props){
    super(props);

    this.city = '';
    this.selectCity = this.selectCity.bind(this);
  }
  
  selectCity(event) {
    this.city = event.currentTarget.value;
    this.forceUpdate();
  };

  render() {
    return (
      <div className="destinySelector">
        <select id="cities" onChange={this.selectCity}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        <p>{this.city ? `Tu destino es viajar a ${this.city}` : null}</p>
        <CityImage city={this.city} />
      </div>
    )
  }
}

export default Destiny;

// Para conseguirlo os recomendamos usar un atributo de la clase this.city que cambie su valor al cambiar el select. También tendremos que usar forceUpdate para se ejecute el método render y a) se pasen unas props diferentes al componente CityImage y b) se pinte una ciudad diferente en el título.