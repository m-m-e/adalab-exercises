import React from 'react';
import './usercard.css';

class UserCard extends React.Component {
  render() {
    const {userInfo} = this.props;
    const {picture, name, location, dob} = userInfo;
    return(
      <React.Fragment>
        <img 
          src={picture.medium} 
          alt={`${name.first}${name.last}`} 
          className="user-image"
        />
        <div className="user-text">
          <h2 className="user-name">{`${name.first}${name.last}`}</h2>
          <p className="user-location">{location.city}</p>
          <p className="user-age">{dob.age}</p>
        </div>
      </React.Fragment>
    );
  }
}

export default UserCard;