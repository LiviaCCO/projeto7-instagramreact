import {useState} from 'react'

export default function CardPost(props){

    const [salvo, setSalvo] = useState(false);
    const [curtir, setCurtir] = useState(false);
    let [numeroCurtidas, setNumeroCurtidas] = useState(Number(props.numero));

    function paraCurtir(){
        setCurtir(!curtir);
        console.log(curtir);
        if(curtir ===true){
            numeroCurtidas = Number(numeroCurtidas);
            setNumeroCurtidas((numeroCurtidas - (0.001)).toFixed(3));
        }
        else if(curtir ===false){
            numeroCurtidas = Number(numeroCurtidas);
            setNumeroCurtidas((numeroCurtidas + (0.001)).toFixed(3));
        }
    }


    return (
        <div data-test="post" class="post">
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
                        <img data-test="post-image" src={props.conteudoImg} alt={props.conteudo}/>
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon data-test="like-post" onClick={paraCurtir} class={curtir ? "md hydrated vermelho" : "md hydrated"} name={curtir ? "heart" : "heart-outline"}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                        <div>
                        <ion-icon data-test="save-post" onClick={()=>(setSalvo(!salvo))} name={salvo ? "bookmark" : "bookmark-outline"}></ion-icon>
                        </div>
                    </div>
                    <div class="curtidas">
                        <img src={props.curtImg} alt={props.quem}/>
                        <div data-test="likes-number" class="texto">
                        Curtido por <strong>{props.quem}</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                        </div>
                    </div>
                    </div>
        </div>
    )
    
}