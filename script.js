let comidaPronta=false, bebidaPronta=false, sobremesaPronta=false;

//acionando botão
function acionarBotão(){
    if(comidaPronta==true && bebidaPronta==true && sobremesaPronta==true){
        alert("escolhido");
    }
}

//escolhendo 1 prato
function escolherComida(prato){
    comidaPronta=true;
    let todos = document.querySelectorAll(".comida");
    for(let i=0;i<todos.length;i++){
        todos[i].classList.remove("escolhido");
    }
    let pratoEscolhido = document.querySelector(prato);
    pratoEscolhido.classList.add("escolhido");
    acionarBotão();
}

//escolhendo 2 prato
function escolherBebida(bebida){
    bebidaPronta=true;
    let todos = document.querySelectorAll(".bebida");
    for(let i=0;i<todos.length;i++){
        todos[i].classList.remove("escolhido");
    }
    let pratoEscolhido = document.querySelector(bebida);
    pratoEscolhido.classList.add("escolhido");
    acionarBotão();
}

//escolhendo 3 prato
function escolherSobremesa(sobremesa){
    sobremesaPronta=true;
    let todos = document.querySelectorAll(".sobremesa");
    for(let i=0;i<todos.length;i++){
        todos[i].classList.remove("escolhido");
    }
    let pratoEscolhido = document.querySelector(sobremesa);
    pratoEscolhido.classList.add("escolhido");
    acionarBotão();
}

