import React from 'react';

// Criando stateless component (só uma linha não precisa de {})
// const Bemvindo = () => <h2>Bem-vindo(a)</h2>
const Equipe = (props) => {
  return (
    <div>

      <Sobre
        nome={props.nome}
        cargo={props.cargo}
        idade={props.idade} 
      />

      <Social 
        facebook={props.facebook}
        linkedin={props.linkedin}
        youtube={props.youtube}
      />
      <hr />

    </div>
  );
}

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>idade: {props.idade}</h3>
    </div>
  );
}

const Social = (props) => {
  return(
    <div>
      <a href={props.facebook}>Facebook </a>
      <a href={props.linkedin}>LinkedIn </a>
      <a href={props.youtube}>Youtube </a>
    </div>
  );
}

function App() {
  return (

    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Lucas" 
              cargo="Progamador" 
              idade="29" 
              facebook="https://facebook.com/" 
              linkedin="https://linkedin.com "
              youtube="https://youtube.com.br"
      />
      <Equipe nome="Fernando" 
              cargo="Progamador" 
              idade="27" 
              facebook="https://facebook.com/" 
              linkedin="https://linkedin.com "
              youtube="https://youtube.com.br"
      />
    </div>
  );
}

// Exporta para poder ser acesso em outra lugar
export default App;