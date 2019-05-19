import React from 'react';
import { fetchPeople } from './components/peopleService';
import UserCard from './components/UserCard';
import Filters from './components/Filters';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleStore: [],
      showMen: false,
      showWomen: false,
      // cityList: {}
    };

    this.handleGenderFilter = this.handleGenderFilter.bind(this);
  }
  
  fetchNewPeople = () => {
    fetchPeople()
    .then(data => {
      this.setState({
        peopleStore: data.results
      });
    });
  };
  
  componentDidMount () {
    this.fetchNewPeople();
  }

  handleGenderFilter(event) {
    const target = event.currentTarget;
    const id = target.id;
    const value = target.checked;
    this.setState(
      id === 'female'
      ?
      {showWomen: value}
      :
      {showMen: value}
    )
  }

  // makeCityArray(city) {
  //   this.setState({prevState => ...prevState.cityList, cityList: city})
  // }

  render(){
    return (
      <div className="app">
        <h1 className="main__title">"Linked in"</h1>
        <ul className="people__list">
          {this.state.peopleStore.map(person =>
            person.gender === 'female' ?
              <li className={this.state.showWomen === true ? "list__item" : "list__item hidden"} key={person.login.username} gender={person.gender}>
                <UserCard userInfo={person}/>
              </li>
            :
            <li className={this.state.showMen === true ? "list__item" : "list__item hidden"} key={person.login.username} gender={person.gender}>
                <UserCard userInfo={person}/>
              </li>
          )
          }
        </ul>
        <Filters genderFilter={this.handleGenderFilter}/>
      </div>
    );
  }
}

export default App;
