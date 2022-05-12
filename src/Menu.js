import Cadastro from "./Cadastro";

const Menu = ( props ) => {

    const quantidade_itens = props.quantidade_itens;

    require("./Menu.css");

    return(
        
        <div className="menu" >

            <div>
                <a href="#" onClick={()=>props.alteraTela(<Cadastro/>)} > LOGO </a>
            </div>

            <div className="carrinho">
                <a href="#">
                    Carrinho <strong> { quantidade_itens } </strong>
                </a>
            </div>

            <div>
                <a href="#" > Cadastro </a>
                <a href="#" > Login </a>
                <a href="#" > Pesquisar </a>
            </div>

        </div>

    );
}

export default Menu;