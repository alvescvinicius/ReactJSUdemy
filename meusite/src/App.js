import React from 'react';

// Criando stateless component (só uma linha não precisa de {})
// const Bemvindo = () => <h2>Bem-vindo(a)</h2>
const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem-vindo(a) {props.nome}</h2>
            <h3>Tenho {props.anos} anos</h3>
        </div> 
    );
}

function App(){
    return (

      <div>
            Olá Mundo !
            <Bemvindo nome="Lucas" anos="24"/>
            <Bemvindo nome="Amanda" anos="19"/>
            <h1>Curso React</h1>
      </div>  

    );
}

// Exporta para poder ser acesso em outra lugar
export default App;