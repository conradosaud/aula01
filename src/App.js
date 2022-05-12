import React from 'react';

import Inicio from './Inicio';
import Cadastro from './Cadastro';

function App() {

    require("./App.css");

    const [ tela, alteraTela ] = React.useState( 0 );

    return (
        <div>

            <Menu alteraTela={alteraTela}  />

            { tela == 0 ? <Inicio alteraTela={alteraTela} /> : <Cadastro alteraTela={alteraTela} /> }

        </div>
    );
}

export default App;
