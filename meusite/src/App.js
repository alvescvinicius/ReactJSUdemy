import React from 'react';

// Criando stateless component (só uma linha não precisa de {})
// const Bemvindo = () => <h2>Bem-vindo(a)</h2>
const Bemvindo = () => {
    return (
        <div>
            <h2>Bem-vindo(a)</h2>
        </div> 
    );
}

function App(){
    return (

      <div>
            Olá Mundo !
            <Bemvindo/>
            <h1>Curso React</h1>
      </div>  

    );
}

// Exporta para poder ser acesso em outra lugar
export default App;