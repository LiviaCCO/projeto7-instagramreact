import {useState} from 'react'

export default function Usuario(){
    const [nome, setNome] = useState("catanacomics");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");  

    function trocarNome(){
        let novoNome=prompt("Qual o seu nome?");
        if(novoNome!=""){
            setNome(novoNome);
        }
    }
    function trocarImagem(){
        let novaImagem=prompt("Digite aqui a url da imagem");
        if(novaImagem!=""){
            setImagem(novaImagem);
        }
    }

    return (
        <div class="usuario">
            <img onClick={trocarImagem} src={imagem} alt="imagem de perfil"/>
            <div class="texto">
                <span>
                <strong>{nome}</strong>
                <ion-icon onClick={trocarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}