import React, { Component } from 'react';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import './global.css'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
