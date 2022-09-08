/* Botões "+ Mostrar mais" e "- Mostrar menos" da section Cardápio */

let mostrarMais = document.querySelector("#btn-Mais")
let mostrarMenos = document.querySelector("#btn-Menos")
let removerLinha = document.querySelector("#maisPizzas")

mostrarMais.addEventListener('click', function (){
    removerLinha.style.display = "block"
    mostrarMais.style.display = "none"
    mostrarMenos.style.display = "block"
});

mostrarMenos.addEventListener("click", function(){
    let linhaRemovida = removerLinha.style.display = "none"
    if(linhaRemovida === "none"){
        mostrarMenos.style.display = "none"
        mostrarMais.style.display = "block"
    }
});

/* Botões "+ Mostrar mais" e "- Mostrar menos" da section Bebidas */

let botaoMais = document.querySelector("#mostrarMais")
let botaoMenos = document.querySelector("#mostrarMenos")
let apagarLinha = document.querySelector("#maisBebidas")

botaoMais.addEventListener('click', function(){
    apagarLinha.style.display = "block"
    botaoMais.style.display = "none"
    botaoMenos.style.display = "block"
});

botaoMenos.addEventListener('click', function(){
    let linhaApagada = apagarLinha.style.display = "none"
    if(linhaApagada === "none"){
        botaoMenos.style.display = "none"
        botaoMais.style.display = "block"
    }
});