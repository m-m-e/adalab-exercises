import React from 'react';

class TextBox extends React.Component {
  render() {
    return(
      <div className="box">
        <textarea className="text-box" id="input" cols="30" rows="10" onChange={this.props.actionToPerform}/>
      </div>  
    );
  }
}

export default TextBox;