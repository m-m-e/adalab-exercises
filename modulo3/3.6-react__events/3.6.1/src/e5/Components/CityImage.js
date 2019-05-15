import React from 'react';

class CityImage extends React.Component {
  constructor(props) {
    super(props);

    this.imageList = {
      'Praga': 'https://www.tripsavvy.com/thmb/dhZ66e_tilNrwElYqI9ckRx1bcs=/950x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/DSC_0057-5c658bfac9e77c0001662942.jpg',
      'Boston': 'https://www.wheretraveler.com/sites/default/files/styles/wt17_promoted_large/public/boston_back_bay_crobbie_shade_wikimedia_commons.jpg?itok=-GohuqOT&timestamp=1518790408',
      'Buenos Aires': 'https://i1.wp.com/www.thebubble.com/wp-content/uploads/La-Rueda-Buenos-Aires.jpg?resize=735%2C395&ssl=1',
      'Sydney': 'https://media-cdn.tripadvisor.com/media/photo-s/08/d8/b7/f1/sydney-opera-house-sydney.jpg',
      'Tokyo': 'https://tokyotreat.cdn.prismic.io/tokyotreat/4b82c625a0daeb4e482de11f5c1448485f480a82_tokyo-main.jpg',
    };
  }
  render() {
    const {city} = this.props;
    return(
      <img src={this.imageList[city]} alt={city}/>
    );
  }
}

export default CityImage;