import React from 'react';
import TextBox from './components/TextBox';
import MimimiTranslator from './components/MimimiTranslator';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const newText = event.currentTarget.value;
    this.setState({text: newText});
  }

  render() {
    return(
      <div className="content-container">

        <TextBox actionToPerform={this.handleInputChange}/>
        
        <MimimiTranslator textToTranslate={this.state.text}/>

      </div>  
    );
  }
}

export default App;