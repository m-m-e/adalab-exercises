import React from 'react';

class Filters extends React.Component {
  render() {
    const {genderFilter} = this.props;
    return(
      <React.Fragment>
        <div className="filters">

          <h3 className="filter-gender">Gender</h3>
          <div className="input-box">
            <label htmlFor="female" className="checkbox__label">Female</label>
            <input type="checkbox" id="female" onChange={genderFilter}/>
          </div>

          <div className="input-box">
            <label htmlFor="male" className="checkbox__label">Male</label>
            <input type="checkbox" id="male" onChange={genderFilter}/>
          </div>

          <h3 className="filter-city">City</h3>
          <div className="input-box">
            <label htmlFor="" className="checkbox__label"></label>
            <input type="checkbox" id=""/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Filters;