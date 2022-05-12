import React from 'react';

import Menu from './Menu';
import Produtos from './Produtos';

const Inicio = ( props ) => {

    // Variáveis e funções do useState
    const [ quantidade_itens, adicionaItem ] = React.useState( 0 );

    return(
        <div>

            <Menu quantidade_itens={quantidade_itens} alteraTela={props.alteraTela} />

            <div className="container">
                <Produtos quantidade_itens={quantidade_itens} adicionaItem={adicionaItem} />+
            </div>

        </div>
    );
}
export default Inicio;