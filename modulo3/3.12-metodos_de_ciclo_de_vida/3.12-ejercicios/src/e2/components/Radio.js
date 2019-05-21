import React from 'react';

class Radio extends React.Component {
    render() {
        const {handleColor, color} = this.props;
        return(
            <form action="" className="form">
                <label htmlFor="light">light</label>
                <input type="radio" name="changeColor" onChange={handleColor} checked={color === 'light' ? true : false} id="light"/>
                <label htmlFor="dark">dark</label>
                <input type="radio" name="changeColor" onChange={handleColor} checked={color === 'dark' ? true : false} id="dark"/>
            </form>
        );
    }
}

export default Radio;