import React from 'react';
// import './App.css';
import RadioSelect from './components/RadioSelect';
import CheckboxSelect from './components/CheckboxSelect';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      language: '',
      age: 'A',
      genre: []
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
  }

  handleInput(event) {
    const currentInput = event.currentTarget;
    const name = currentInput.id;
    const value = currentInput.value;
    this.setState({[name]: value});
  }

  handleAge(event) {
    const currentInput = event.currentTarget;
    const key = currentInput.name;
    const value = currentInput.value;
    this.setState({[key]: value});
  }

  handleGenre(event) {
    const currentInput = event.currentTarget;
    const key = currentInput.name;
    const value = currentInput.value;
    if (this.state.genre.length < 3) {
      this.setState(prevState => {
        return (
          {[key]: [...prevState.genre,  value]}
        )
      });
    } else {
      console.log('3 máximo');
    }
  }
  // this.setState((prevState) => {return {algo}});
  render() {
    const { name, description, language, age, genre } = this.state;
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

          <RadioSelect age={age} handleAge={this.handleAge}/>

          <h3 className="subtitle">Género</h3>
          <CheckboxSelect handleGenre={this.handleGenre} genres={genre}/>
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

          <p className="card-age">Edad: {age}</p>
          <p className="card-genre">Genre: </p>
        </div>
      </div>
    );
  }
}

export default App;
