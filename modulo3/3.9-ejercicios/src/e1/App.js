import React from 'react';
import './App.css';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      isChecked: false
    }

    this.handleNumber = this.handleNumber.bind(this);
    this.handleEvenNumbers = this.handleEvenNumbers.bind(this);
  }

  handleNumber(event) {
    this.setState({number: parseInt(event.currentTarget.value)});
  }

  handleEvenNumbers(event) {
    this.setState({isChecked: event.currentTarget.checked})
  }

  render() {
    return (
      <div className="container">
        <form action="" className="form">
          <label htmlFor="">Type a number here:  </label>
          <input type="number" onChange={this.handleNumber}/>

          <label htmlFor="">I only want even numbers!</label>
          <input type="checkbox" value="even" onChange={this.handleEvenNumbers}/>

        </form>

        <ul className="list">
          {numbers
          .filter(number => number > this.state.number)
          .filter(
            number => {
              return (
                this.state.isChecked === true 
                ? 
                number % 2 === 0
                :
                number
              )
            }
          )
          .map(number => {
            return (
            <li className="list-item" key={number}>
              {number}
            </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;

