export default function NavBar(){

    const listaIcones = [
        <ion-icon name="paper-plane-outline"></ion-icon>,
        <ion-icon name="compass-outline"></ion-icon>,
        <ion-icon name="heart-outline"></ion-icon>,
        <ion-icon name="person-outline"></ion-icon>
    ];

  /*   export default function Lista() {
        const itens = ["Item 1", "Item 2", "Item 3"]
    
        return (
            <ul>
                {itens.map((item) => <li>{item}</li>)}
            </ul>
        )
    } */

    return(
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt="logo"/>
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    <ul>
                        {listaIcones.map((icone) => <li>{icone}</li>)}
                    </ul>
                </div>

                <div class="icones-mobile">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}