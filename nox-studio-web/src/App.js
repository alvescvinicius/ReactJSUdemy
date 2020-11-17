import React, { Component } from 'react';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import './global.css';

class App extends Component {

  state = {
    firebaseInitialized: false
  };

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}
export default App;
