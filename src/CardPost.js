import {useState} from 'react'

export default function CardPost(props){

    const [salvo, setSalvo] = useState("bookmark-outline");
    const [curtir, setCurtir] = useState("heart-outline");
    const [numeroCurtidas, setNumeroCurtidas] = useState(Number(props.numero));

    function paraCurtir(){
        console.log(numeroCurtidas)
        console.log(typeof(numeroCurtidas))
        setCurtir(!curtir);
        console.log(numeroCurtidas.replace(".", ","))
        let numeroPronto = numeroCurtidas.replace(".", ",");
        console.log(numeroPronto)
        if(curtir ==="heart-outline"){
            numeroPronto=numeroPronto + 1;
            numeroCurtidas = numeroPronto.replace(",",".");
            setNumeroCurtidas(numeroCurtidas)
        }
        else if(curtir ==="heart"){
            numeroPronto--;
            numeroCurtidas = numeroPronto.replace(",",".");
            setNumeroCurtidas(numeroCurtidas)
        }
    }


    return (
        <div class="post">
                    <div class="topo">
                    <div class="usuario">
                        <img src={props.imagem} alt={props.usuario}/>
                        {props.usuario}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                    </div>
                    <div class="conteudo">
                        <img src={props.conteudoImg} alt={props.conteudo}/>
                    </div>
                    <div class="fundo">
                    <div class="acoes">
                        <div>
                        {/* <ion-icon onClick={()=>(setCurtir(!curtir))} class={curtir ? "" : "vermelho"} name={curtir ? "heart-outline" : "heart"}></ion-icon> */}
                        <ion-icon onClick={paraCurtir} class={curtir ? "" : ""} name={curtir ? "heart-outline" : "heart"}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div>
                        <ion-icon onClick={()=>(setSalvo(!salvo))} name={salvo ? "bookmark-outline" : "bookmark"}></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={props.curtImg} alt={props.quem}/>
                        <div class="texto">
                        Curtido por <strong>{props.quem}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                        </div>
                    </div>
                    </div>
        </div>
    )
    
}