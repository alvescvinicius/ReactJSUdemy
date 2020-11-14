import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    // Super usa as props do pai no caso render(){}
    super(props);
    // States referentes ao object App no caso
    this.state = {
      nome: 'Matheus',
      contador: 0
    };

    // Faz funcao aumentar atualizar o valor
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);

  }

  aumentar() {

    let state = this.state;
    state.contador += 1;
    this.state.nome = 'Jose';
    this.setState(state);
  }

  diminuir() {

    let state = this.state;

    if (state.contador === 0) {
      alert('Opa chegou a zero !');
      return;
    }

    state.contador -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Contador</h1>
        {this.state.nome}
        <h3>
          <button onClick={this.diminuir}>-</button>
          {this.state.contador}
          <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    );
  }
}

export default App;