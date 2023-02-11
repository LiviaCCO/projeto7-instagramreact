export default function Corpo(){

    const listaSugestoes=[
        {imagem:"assets/img/bad.vibes.memes.svg", nome:"bad.vibes.memes"},
        {imagem:"assets/img/chibirdart.svg", nome:"chibirdart"},
        {imagem:"assets/img/razoesparaacreditar.svg", nome:"razoesparaacreditar"},
        {imagem:"assets/img/adorable_animals.svg", nome:"adorable_animals"},
        {imagem:"assets/img/smallcutecats.svg", nome:"smallcutecats"}
    ];

    return (
        
        <ul class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {listaSugestoes.map((s)=>(
                <li>
                    <div class="sugestao">
                        <div class="usuario">
                        <img src={s.imagem} alt={s.nome}/>
                        <div class="texto">
                            <div class="nome">{s.nome}</div>
                            <div class="razao">Segue você</div>
                        </div>
                        </div>

                        <div class="seguir">Seguir</div>
                    </div>
                </li>
            ))}

            {/* <div class="usuario">
            <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
            <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
            </div> 
            </div> */}

           {/*  <div class="seguir">Seguir</div> */}
            
        </ul>
    )
}