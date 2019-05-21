import React from 'react';

class People extends React.Component {
  render(){
    const {peopleData} = this.props;
    return(
      <ul className="people">
        {peopleData.map((person, index) => {
          return(
            <li className="person" key={index}>
              <h1 className="person-name">{person.name.first} {person.name.last}</h1>
              <p>{person.gender}</p>
            </li>
          )
        })}
      </ul>
    );
  }
}

export default People;