/* export default function Posts(){
    const listaPosts=[
        {usuarioImagem:"assets/img/meowed.svg", usuarioNome:"meowed", conteudoImagem: "assets/img/gato-telefone.svg", conteudo:"gato-telefone", curtidasImg: "assets/img/respondeai.svg", curtidasPor: "respondeai", numCurtidas:"101.523"},
        {usuarioImagem:"assets/img/barked.svg", usuarioNome:"barked", conteudoImagem: "assets/img/dog.svg", conteudo:"dog", curtidasImg: "assets/img/adorable_animals.svg", curtidasPor: "adorable_animals", numCurtidas:"99.159"},
        {usuarioImagem:"assets/img/meowed.svg", usuarioNome:"meowed", conteudoImagem: "assets/img/gato-telefone.svg", conteudo:"gato-telefone", curtidasImg: "assets/img/respondeai.svg", curtidasPor: "respondeai", numCurtidas:"10.503"},
    ];
    const [postSalvo, setPostSalvo] = useState("bookmark-outline");
    const [curtirPost, setCurtirPost] = useState("heart-outline");
    const [cor, setCor] = useState("none");
    const [salvo, setSalvo] = useState("bookmark-outline");

    function salvar(){
        if(postSalvo=="bookmark-outline"){
            setPostSalvo("bookmark");
        }
        else{
            setPostSalvo("bookmark-outline");
        } 
    }

    function curtir(){
        console.log("clicou")
        console.log(cor)
        if(curtirPost=="heart-outline"){
            setCor("vermelho"); 
            setCurtirPost("heart");
            
            console.log(cor)
        }
        else{
            setCurtirPost("heart-outline");
            setCor("none");
            console.log(cor)
        } 
        console.log(cor)
    }

    return (
        <ul class="posts">
            {listaPosts.map((p)=>(
                <li class="post">
                    <div class="topo">
                    <div class="usuario">
                        <img src={p.usuarioImagem} alt={p.usuarioNome}/>
                        {p.usuarioNome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    </div>
                    <div class="conteudo">
                        <img src={p.conteudoImagem} alt={p.conteudo}/>
                    </div>
                    <div class="fundo">
                    <div class="acoes">
                        <div>
                        <ion-icon onClick={curtir} class={cor} name={curtirPost}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                        <ion-icon onClick={()=>(setSalvo(!salvo))} name={salvo ? "bookmark-outline" : "bookmark"}></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={p.curtidasImg} alt={p.curtidasPor}/>
                        <div class="texto">
                        Curtido por <strong>{p.curtidasPor}</strong> e <strong>outras {p.numCurtidas} pessoas</strong>
                        </div>
                    </div>
                    </div>
                </li>
            ))}
        </ul>
        
    )
} */



import CardPost from './CardPost'

export default function Posts(){
    const listaPosts=[
        {usuarioImagem:"assets/img/meowed.svg", usuarioNome:"meowed", conteudoImagem: "assets/img/gato-telefone.svg", conteudo:"gato-telefone", curtidasImg: "assets/img/respondeai.svg", curtidasPor: "respondeai", numCurtidas:"101.523"},
        {usuarioImagem:"assets/img/barked.svg", usuarioNome:"barked", conteudoImagem: "assets/img/dog.svg", conteudo:"dog", curtidasImg: "assets/img/adorable_animals.svg", curtidasPor: "adorable_animals", numCurtidas:"99.159"},
        {usuarioImagem:"assets/img/meowed.svg", usuarioNome:"meowed", conteudoImagem: "assets/img/gato-telefone.svg", conteudo:"gato-telefone", curtidasImg: "assets/img/respondeai.svg", curtidasPor: "respondeai", numCurtidas:"10.503"},
    ];
    
    return (
        <div class="posts">
            {listaPosts.map((p)=>(
            <CardPost 
            imagem={p.usuarioImagem} 
            usuario={p.usuarioNome}
            conteudoImg = {p.conteudoImagem}
            conteudo = {p.conteudo}
            curtImg = {p.curtidasImg}
            quem = {p.curtidasPor}
            numero = {p.numCurtidas} />))
            }
            
        </div>
    )
            
}