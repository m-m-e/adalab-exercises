import React from 'react';

class MimimiTranslator extends React.Component {

  translateText(text) {
    const translatedText = text.replace(/[aeiou]/ig,'');

    return translatedText;

  }

  render() {
    const text = this.props.textToTranslate;
    return(
      <div className="translator">
      <p className="results">{this.translateText(text)}</p>
      </div>  
    );
  }
}

export default MimimiTranslator;