let listaDinamica = [];
let palavraSecretaCategoria;
let palavraSecretaSorteada;
let tentativas = 6;

const palavras = [
    palavra001 = {
        nome: "LURAY",
        categoria: "NOME DE CASAL"
    },
    palavra002 = {
        nome: "AGOSTO",
        categoria: "MÊS DO NAMORO"
    },
    palavra003 = {
        nome: "DOIS",
        categoria: "TEMPO JUNTOS"
    },
    palavra004 = {
        nome: "THOR",
        categoria: "ANIMAL DELE"
    },
    palavra005 = {
        nome: "AMORA",
        categoria: "ANIMAL DELA"
    },
    palavra006 = {
        nome: "ELE",
        categoria: "QUEM AMA MAIS"
    },
    palavra007 = {
        nome: "ELA",
        categoria: "MAIS TEIMOSO"
    },
    palavra008 = {
        nome: "ELA",
        categoria: "MAIS RECLAMÃO"
    },
    palavra009 = {
        nome: "ELA",
        categoria: "QUEM SEMPRE PERDE"
    },
    palavra0010 = {
        nome: "CACHORRO",
        categoria: "ANIMAL FAVORITO DELE"
    },
    palavra011 = {
        nome: "AMINO",
        categoria: "ONDE NOS CONHECEMOS"
    },
    palavra012 = {
        nome: "LASANHA",
        categoria: "COMIDA FAVORITA DELE"
    },
    palavra013 = {
        nome: "ELA",
        categoria: "QUEM SEMPRE PERDE"
    },
];

criarPalavraSecreta();
function criarPalavraSecreta(){
    const indexPalavra = parseInt(Math.random() * palavras.length)
    
    palavraSecretaSorteada = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

    console.log(palavraSecretaSorteada);
    console.log(palavraSecretaCategoria);
}

montarPalavraNaTela();
function montarPalavraNaTela(){
    const cat = document.getElementById("categoria");
    cat.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = "";

    for (i = 0; i < palavraSecretaSorteada.length; i++){
        if (listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        } else {
            palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
        }
    }

}

function verificaLetraEscolhida(letra){
    document.getElementById("tecla-" + letra).disabled = true;
    if(tentativas > 0) {
        mudarStyleLetra("tecla-" + letra);
        comparaListas(letra);
        montarPalavraNaTela();
    }
}

function mudarStyleLetra(tecla){
    document.getElementById(tecla).style.background = "#cc88f9"
    document.getElementById(tecla).style.color = "#ffffff"
}

function comparaListas(letra){
    const pos = palavraSecretaSorteada.indexOf(letra)
    if(pos < 0){
        tentativas--
        carregaImgForca();
        if(tentativas == 0){
            abreModal("VIDA?&*??&$#??@#%?!!$#%¨#", "COMO VOCÊ ME ERRA ISSO AMOR???? <br><br> A resposta era " + palavraSecretaSorteada + ", obviamente. <br><br> Aperte no '🎮' para reiniciar o jogo.");
        }

    }else {
        for(i = 0; i < palavraSecretaSorteada.length; i++) {
            if(palavraSecretaSorteada[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for(i=0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listaDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
        abreModal("BOA VIDAAAA!", "TU ACERTO PORRA BOA VIDA GOSTOSA 👄💦🍌. <br><br> Aperte no '🎮' para reiniciar o jogo.")
        tentativas = 0;
    }

}

function carregaImgForca() {
    switch(tentativas){
        case 5:
            document.getElementById("imagem").style.background = "url('/img/forca01.png')";
            break;
        case 4:
            document.getElementById("imagem").style.background = "url('/img/forca02.png')";
            break;
        case 3:
            document.getElementById("imagem").style.background = "url('/img/forca03.png')";
            break;
        case 2:
            document.getElementById("imagem").style.background = "url('/img/forca04.png')";
            break;
        case 1:
            document.getElementById("imagem").style.background = "url('/img/forca05.png')";
            break;
        case 0:
            document.getElementById("imagem").style.background = "url('/img/forca06.png')";
            break;
        default:
            document.getElementById("imagem").style.background = "url('/img/forca0.png')";
            break;
    }
}

function abreModal(titulo, mensagem){
    let modalTitulo = document.getElementById("exampleModalLabel");
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById("modalBody")
    modalBody.innerHTML = mensagem;

    $("#myModal").modal({
        show: true
    });
}


let bntReiniciar = document.querySelector("#btnReiniciar")
bntReiniciar.addEventListener("click", function(){
    location.reload();
});