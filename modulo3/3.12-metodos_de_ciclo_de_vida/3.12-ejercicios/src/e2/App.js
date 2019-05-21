import React from 'react';
import './App.css';
import Radio from './components/Radio';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
this.handleColor = this.handleColor.bind(this);

  }
handleColor (event) {
  const trigger = event.currentTarget;
    this.setState({color: trigger.id});
}

componentDidUpdate() {
  localStorage.setItem('color', JSON.stringify(this.state.color));
}
componentDidMount() {
  const savedColor = JSON.parse(localStorage.getItem('color'));
    if(savedColor !== null) {
      this.setState({color: savedColor});
    }
}
handleBackgroundColor() {
  const {color} = this.state;
    if(color === 'light') {
      return 'light app'
    }else if (color === 'dark') {
      return 'dark app'
    }else {
      return 'app'
    }
}

  render() {
    return (
      <div className={this.handleBackgroundColor()}>
        <Radio handleColor={this.handleColor} color={this.state.color}/>
      </div>
    );
  }
}

export default App;
