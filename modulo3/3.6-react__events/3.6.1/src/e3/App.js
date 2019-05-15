import React from 'react';
import './App.css';
import OnionHater from './components/OnionHater';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.isHating = false;
    this.onChangeListener = this.onChangeListener.bind(this);
  }
  onChangeListener(event) {
    if (event.target.value.includes('cebolla')) {
      this.isHating = true;
      this.forceUpdate();
    } else {
      this.isHating = false;
      this.forceUpdate();
    }
  }

  render() {
    
    return (
      <OnionHater isHating={this.isHating} actionToPerform={this.onChangeListener}/>
    );
  }
}

export default App;
