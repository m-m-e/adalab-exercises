import React from 'react';

class OnionHater extends React.Component {
  
  render() {
    const { 
      isHating,
      actionToPerform
     } = this.props;
    return (
      <div className={`text__container ${isHating ? 'background__red' : ''}`}>
        <textarea className="text" onChange={actionToPerform}/>
      </div>
    );
  }
};

export default OnionHater;
