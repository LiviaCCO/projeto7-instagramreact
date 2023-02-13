
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