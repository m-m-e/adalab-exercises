import React from 'react';
import ItemList from './ItemList';
import HalfPage from './HalfPage';

const items = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    // description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    // price: 5,
  },
  {
    name: 'Chocolate',
    description: 'Chocolate delicioso',
    quantity: 1,
    category: 'Comida',
    price: 10,
  },
];

class App extends React.Component {
  render() {
    return (
      <ItemList items={items} />
      // <div>
      //   <HalfPage>
      //     <ItemList items={items} />
      //   </HalfPage>
      //   <HalfPage>
      //     <h1>Title 2</h1>
      //   </HalfPage>
      // </div>
    );
  }
}

export default App;