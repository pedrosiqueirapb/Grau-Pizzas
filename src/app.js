/* Botões "+ Mostrar mais" e "- Mostrar menos" da section Cardápio */

let btnMais = document.querySelector("#btn")
let btnMenos = document.querySelector("#btn-Menos")
let linhaRemovida = document.querySelector("#novaLinha")

btnMais.addEventListener('click', function (){
    linhaRemovida.style.display = "block"
    btnMais.style.display = "none"
    btnMenos.style.display = "block"
});

btnMenos.addEventListener("click", function(){
    let someLinha = linhaRemovida.style.display = "none"
    if(someLinha === "none"){
        btnMenos.style.display = "none"
        btnMais.style.display = "block"
    }
});

/* Botões "+ Mostrar mais" e "- Mostrar menos" da section Bebidas */

let btnMaisDois = document.querySelector("#btn-Mais")
let btnMenosDois = document.querySelector("#btn-MenosDois")
let linhaRemovidaDois = document.querySelector("#novaLinhaDois")

btnMaisDois.addEventListener('click', function(){
    linhaRemovidaDois.style.display = "block"
    btnMaisDois.style.display = "none"
    btnMenosDois.style.display = "block"
});

btnMenosDois.addEventListener('click', function(){
    let someLinhaDois = linhaRemovidaDois.style.display = "none"
    if(someLinhaDois === "none"){
        btnMenosDois.style.display = "none"
        btnMaisDois.style.display = "block"
    }
});