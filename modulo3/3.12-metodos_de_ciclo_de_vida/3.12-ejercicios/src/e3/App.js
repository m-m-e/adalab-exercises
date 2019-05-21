import React from 'react';
import People from './components/People';
import Button from './components/Button';
import {fetchPeople} from './services/peopleService';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    }
    this.updatePeople = this.updatePeople.bind(this);
  }

  componentDidMount(){
    fetchPeople()
      .then(data =>
        this.setState({data: data.results})
      )
  }

  updatePeople(){
    fetchPeople()
      .then(data =>
        this.setState({data: data.results})
      )
  }

  render(){
    return(
      <div className="app">
        <People peopleData={this.state.data}/>
        <Button updatePeople={this.updatePeople}/>
      </div>
    );
  }
}

export default App;