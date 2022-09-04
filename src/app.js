let btn = document.getElementById("btn").addEventListener('click', function mostrarMais(){
    document.querySelector(".cardapio").innerHTML = `<h1><a name="Cardapio"></a>Cardápio<hr class="line-one"></h1>
    <div class="container">
        <div class="row">
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Frango com catupiry</h5>
                </div>
                <img src="imgs/frango-catupiry.png" alt="" class="frango-catupiry">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Calabresa</h5>
                </div>
                <img src="imgs/calabresa.png" alt="" class="calabresa">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Portuguesa</h5>
                </div>
                <img src="imgs/portuguesa.png" alt="" class="portuguesa">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Marguerita</h5>
                </div>
                <img src="imgs/marguerita.png" alt="" class="marguerita">
            </div>
        </div>
        <div class="row">
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Quatro queijos</h5>
                </div>
                <img src="imgs/quatro-queijos.png" alt="" class="quatro-queijos">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Milho com bacon</h5>
                </div>
                <img src="imgs/milho-bacon.png" alt="" class="milho-bacon">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Pepperoni</h5>
                </div>
                <img src="imgs/pepperoni.png" alt="" class="pepperoni">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Chocolate</h5>
                </div>
                <img src="imgs/chocolate.png" alt="" class="chocolate">
            </div>
        <div class="row">
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Banana</h5>
                </div>
                <img src="imgs/banana.png" alt="" class="banana">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Bacon</h5>
                </div>
                <img src="imgs/bacon.png" alt="" class="bacon">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Lombo</h5>
                </div>
                <img src="imgs/lombo.png" alt="" class="lombo">
            </div>
            <div id="infosPizza" class="col-3">
                <div class="saborPizza">
                    <h5>🍴 Mussarela</h5>
                </div>
                <img src="imgs/mussarela.png" alt="" class="mussarela">
            </div>
        </div>
    </div>
    <button id="btn-Menos" type="button" class="btn btn-danger">- Mostrar menos</button>`;
});