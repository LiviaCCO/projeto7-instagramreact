export default function Stories(){

    const listaStory = [
        {imagem: "assets/img/9gag.svg", texto: "9gag"},
        {imagem: "assets/img/meowed.svg", texto: "meowed"},
        {imagem: "assets/img/barked.svg", texto: "barked"},
        {imagem: "assets/img/nathanwpylestrangeplanet.svg" , texto: "nathanwpylestrangeplanet"},
        {imagem: "assets/img/wawawicomics.svg", texto: "wawawicomic"},
        {imagem: "assets/img/respondeai.svg", texto: "respondeai"},
        {imagem: "assets/img/filomoderna.svg", texto: "filomoderna"},
        {imagem: "assets/img/memeriagourmet.svg", texto: "memeriagourmet"}
    ];

    return (
        <ul class="stories">   
            {listaStory.map((s)=>(
                <li class="story">
                    <div class="imagem">
                        <img src={s.imagem} alt={s.texto} />
                    </div>
                    <div class="usuario">{s.texto}</div>   
                </li>
            ))}  
    
        <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
        </ul>
    )
}