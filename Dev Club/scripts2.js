let circulo = document.querySelector(".circulo")
let imagem = document.querySelector(".copo")
let span = document.querySelector("h2 span");

function cor(cores) {
    circulo.style.backgroundColor = cores;
}
function trocaimagem (novaimagem) {
    console.log (novaimagem);

    imagem.src = novaimagem;
}
function trocacordotexto (nova){
    span.style.color = nova;
}
