import React from 'react';

class RadioSelect extends React.Component {
  render(){
    const {age, handleAge} = this.props;
    return (
      <ul className="radio-options">
            <li className="radio">
              <input 
              type="radio"
              id="A"
              name="age"
              value="A"
              onChange={handleAge}
              checked={age === 'A' ? true : false}
              />
              <label name="age" htmlFor="A">A</label> 
            </li>

            <li className="radio">
              <input 
              type="radio"
              id="7"
              name="age"
              value="7"
              onChange={handleAge}
              checked={age === '7' ? true : false}
              />
              <label name="age" htmlFor="7">7</label> 
            </li>

            <li className="radio">
              <input 
              type="radio"
              id="12"
              name="age"
              value="12"
              onChange={handleAge}
              checked={age === '12' ? true : false}
              />
              <label name="age" htmlFor="12">12</label> 
            </li>

            <li className="radio">
              <input 
              type="radio"
              id="16"
              name="age"
              value="16"
              onChange={handleAge}
              checked={age === '16' ? true : false}
              />
              <label name="age" htmlFor="16">16</label> 
            </li>

            <li className="radio">
              <input 
              type="radio"
              id="18"
              name="age"
              value="18"
              onChange={handleAge}
              checked={age === '18' ? true : false}
              />
              <label name="age" htmlFor="18">18</label> 
            </li>
          
          </ul>
    );
  }
}

export default RadioSelect;