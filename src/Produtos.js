const Produtos = ( props ) => {

    const adicionaItem = props.adicionaItem;
    const quantidade_itens = props.quantidade_itens;

    require("./Produtos.css");

    // Códigos JavaScript
    const produtos = [
        {
            nome: "Parafuso Philips Rogério", 
            preco: 0.23,
            imagem: "https://static3.tcdn.com.br/img/img_prod/841507/parafuso_atarraxante_chata_philips_4_2_x_25_jomarca_8686_1_20200924122543.jpg"
        },
        {
            nome: "Prego simples", 
            preco: 0.11,
            imagem: "https://a-static.mlcdn.com.br/618x463/prego-polido-gerdau-c-c-13-x-18/rcdeletrica2/10058173/5c0fe01c97334947d90a48549a1bbfc7.jpg"
        },
        {
            nome: "Porca média", 
            preco: 0.09,
            imagem: "https://s2.glbimg.com/9crP_ws3APi0zrLXjAktX8v2tZ4=/9x18:720x927/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/f/J/8OStmLTyu1Z4lfzVMBNw/porca-santo-antonio-2.jpg"
        }
    ];

    const perguntas = [
        {
            alterna1: "aijsdiasjd"
        }
    ]

    return(
        <div>

            <h1>Novos produtos na loja </h1>
            <p>Conheça os produtos que acabaram de chegar</p>

            {
                // Aqui inicia o JavaScript
                produtos.map( p => {
                    return(

                        <div className="produto">
                            <img src={ p.imagem } />
                            <h2> { p.nome } </h2>
                            <p> R$ { p.preco } </p>
                            <button onClick={ ()=> adicionaItem( quantidade_itens + 1 ) } > Comprar </button>
                        </div>

                    )
                }) 
            }

        </div>
    );
}
export default Produtos;