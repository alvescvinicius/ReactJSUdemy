import React, { Component } from 'react';

import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import './global.css';
import firebase from './firebase'

class App extends Component {

  state = {
    firebaseInitialized: false
  };

  componentDidMount(){
    firebase.isInitialized().then(resultado => {
      // Devolve usuario
      this.setState({firebaseInitialized: resultado});
    })
  }

  render(){
    return this.state.firebaseInitialized !== false ? (
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/dashboard' component={Dashboard}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </BrowserRouter>
    ) : (
      <h1>Carregando...</h1>
    );
  }
}
export default App;
