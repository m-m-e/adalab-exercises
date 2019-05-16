import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      language: '',
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(event) {
    const currentInput = event.currentTarget;
    const name = currentInput.id;
    const value = currentInput.value;
    // const newObj = {};
    // newObj[name] = value;
    this.setState({[name]: value});
  }

  render() {
    const { name, description, language } = this.state;
    return (
      <div className="App">
        <h1 className="title">Formulario para películas</h1>
        <form className="form">
          <label htmlFor="name">Nombre de la película</label>
          <input 
            type="text"
            id="name"
            className="input"
            value={name}
            onChange={this.handleInput}
          />

          <label htmlFor="description">Descripción de la película</label>
          <textarea 
            id="description" 
            cols="30" 
            rows="10" 
            className="input"
            value={description} 
            onChange={this.handleInput}
          />

          <label htmlFor="language">Idioma de la película:</label>
          <select 
            name="language"
            id="language"
            className="input"
            value={language}
            onChange={this.handleInput}
          >
            <option value="Español">Español</option>
            <option value="Inglés">Inglés</option>
            <option value="Portugués">Portugués</option>
          </select>

          {/* <input type="submit" className="send-button" value="Enviar" /> */}
        </form>

        <div className="card">
          <h2 className="card-title">
            {name !== '' ? name : 'Nombre de la película'}
          </h2>
          <p className="card-description">
            {description !== '' ? description : 'Descripción de la película'}
          </p>
          <h3 className="card-language">
            {language !== '' ? `Idioma: ${language}` : 'Idioma de la película' }
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
