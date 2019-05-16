import React from 'react';

class CheckboxSelect extends React.Component {
  render() {
    const {handleGenre, genres} = this.props;
    return (
      <div className="checkbox-list">
        <div className="genre">
            <input 
              type="checkbox"
              id="Comedia"
              name="genre"
              value="Comedia"
              onChange={handleGenre}
              checked={genres.includes('Comedia') ? true : false}
            />
            <label name="age" htmlFor="Comedia">Comedia</label> 
            </div>

            <div className="genre">
            <input 
              type="checkbox"
              id="Drama"
              name="genre"
              value="Drama"
              onChange={handleGenre}
              checked={genres.includes('Drama') ? true : false}
            />
            <label name="age" htmlFor="Drama">Drama</label> 
            </div>

            <div className="genre">
            <input 
                type="checkbox"
                id="Fantasia"
                name="genre"
                value="Fantasia"
                onChange={handleGenre}
                checked={genres.includes('Fantasia') ? true : false}
                />
                <label name="age" htmlFor="Fantasia">Fantasia</label> 
            </div>

            <div className="genre">
            <input 
                type="checkbox"
                id="Acción"
                name="genre"
                value="Acción"
                onChange={handleGenre}
                checked={genres.includes('Acción') ? true : false}
                />
                <label name="age" htmlFor="Acción">Acción</label> 
            </div>

            <div className="genre">
            <input 
                type="checkbox"
                id="Familia"
                name="genre"
                value="Familia"
                onChange={handleGenre}
                checked={genres.includes('Familia') ? true : false}
                />
                <label name="age" htmlFor="Familia">Familia</label> 
            </div>

            <div className="genre">
            <input 
                type="checkbox"
                id="Terror"
                name="genre"
                value="Terror"
                onChange={handleGenre}
                checked={genres.includes('Terror') ? true : false}
                />
                <label name="age" htmlFor="Terror">Terror</label> 
            </div>
      </div>
    );
  }
}

export default CheckboxSelect;