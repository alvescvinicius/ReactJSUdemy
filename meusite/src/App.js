import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  // Esse é executado uma unica vez quando o component é montado
  componentDidMount(){
    //atualiza hora de 1 em 1 segundo
    setInterval(()=>{
      this.setState({hora: new Date().toLocaleString()});
    }, 1000);
  }

  componentDidUpdate(){
    console.log('Atualizou !!!');
  }

  render() {
    return (
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;