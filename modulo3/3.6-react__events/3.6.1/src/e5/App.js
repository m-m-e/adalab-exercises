import React from 'react';
import './App.css';
import CitySelector from './Components/CitySelector';
import CityImage from './Components/CityImage';

class App extends React.Component {
  constructor(props){
    super(props);

    this.selectedCity = '';
    this.selectCity = this.selectCity.bind(this);
  }
  
  selectCity(event) {
    this.selectedCity = event.currentTarget.value;
    this.forceUpdate();
  };

  render() {
    
    return (
      <div className="destinySelector">
        <CitySelector onSelectChange={this.selectCity}/>
      <p>{this.selectedCity ? `Tu destino es viajar a ${this.selectedCity}` : null}</p>
      <CityImage city={this.selectedCity} />
    </div>
    );
  }
}

export default App;
