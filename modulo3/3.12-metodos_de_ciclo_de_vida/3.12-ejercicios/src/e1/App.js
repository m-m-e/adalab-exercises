import React from 'react';
import './App.css';
import {Link,  Route, Switch } from 'react-router-dom';
import Clock from './components/Clock';
import NoClock from './components/NoClock';



class App extends React.Component {
  render(){
      return (
        <div className="App">
        <ul>
          <li>
            <Link to="/">Clock</Link>
          </li>
          <li>
            <Link to="/NoClock">NoClock</Link>
          </li>         
        </ul>
          <Switch>
            <Route exact path="/" component={Clock} />
            <Route path="/NoClock" component={NoClock} />
          </Switch>
        </div>
      );
    }
  }
 

export default App;
