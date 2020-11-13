import React, { Component } from 'react';

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre
          nome={this.props.nome}
          cargo={this.props.cargo}
          idade={this.props.idade}
        />
      </div>
    );
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2> Olá eu sou o(a) {this.props.nome} </h2>
        <h3> Cargo: {this.props.cargo} </h3>
        <h3> Idade: {this.props.idade} </h3>
        <Social />
      </div>
    );
  }
}

const Social = () => {
  return (
    <div>
      <a>Facebook </a>
      <a>LinkedIn </a>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe
        nome="Matheus"
        cargo="Dev"
        idade="19"
      />
      <Equipe
        nome="Lucas"
        cargo="Treinee"
        idade="20"
      />
      <Equipe
        nome="Fernanda"
        cargo="Administrativo"
        idade="19"
      />
    </div>
  );
}

// Exporta para poder ser acesso em outra lugar
export default App;