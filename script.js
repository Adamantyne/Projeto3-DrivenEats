let comidaPronta=false, bebidaPronta=false, sobremesaPronta=false,precoComida=0, precoBebida=0, PrecoSobremesa=0,total=0, nomeCliente="", endereco="";

let mensagem="";

let valoresFinais = document.querySelectorAll(".valoresFinais p");
let pratosEscolhidos = document.querySelectorAll(".pratosEscolhidos p");
let conferindo = document.querySelector(".conferirPedido");

//acionando botão
function acionarBotão(){
    if(comidaPronta==true && bebidaPronta==true && sobremesaPronta==true){
        let botaoConfirmar = document.querySelector(".botaoConfirmar");
        botaoConfirmar.classList.add("acionarBotao");
        botaoConfirmar.innerHTML="Fechar pedido";
        botaoConfirmar.removeAttribute("disabled");
    }
}

//escolhendo 1 prato
function escolherComida(comida,preco,nome){
    comidaPronta=true;
    let todos = document.querySelector(".comida .escolhido");
    if(todos !== null){
        todos.classList.remove("escolhido");
    }
    comida.classList.add("escolhido");
    precoComida=parseInt(preco);
    pratosEscolhidos[0].innerHTML=nome;
    valoresFinais[0].innerHTML=preco+",00";
    acionarBotão();
    atualizarSacola()
}

//escolhendo 2 prato
function escolherBebida(bebida,preco,nome){
    bebidaPronta=true;
    let todos = document.querySelector(".bebida .escolhido");
    if(todos !== null){
        todos.classList.remove("escolhido");
    }
    bebida.classList.add("escolhido");
    precoBebida=parseInt(preco);
    pratosEscolhidos[1].innerHTML=nome;
    valoresFinais[1].innerHTML=preco+",00";
    acionarBotão();
    atualizarSacola()
}

//escolhendo 3 prato
function escolherSobremesa(sobremesa,preco,nome){
    sobremesaPronta=true;
    let todos = document.querySelector(".sobremesa .escolhido");
    if(todos !== null){
        todos.classList.remove("escolhido");
    }
    sobremesa.classList.add("escolhido");
    PrecoSobremesa=parseInt(preco);
    pratosEscolhidos[2].innerHTML=nome;
    valoresFinais[2].innerHTML=preco+",00";
    acionarBotão();
    atualizarSacola()
}
function atualizarSacola(){
    total=precoComida+precoBebida+PrecoSobremesa;
    let sacola = document.querySelector(".sacola");
    sacola.classList.remove("escondido");
    let valorSacola = sacola.querySelector(".sacola p");
    valorSacola.innerHTML="R$ "+total+",00";
    pratosEscolhidos[3].innerHTML="TOTAL";
    valoresFinais[3].innerHTML="R$ "+total+",00";
}
function conferirPedido(){
    conferindo.classList.remove("escondido");
    nomeCliente = prompt("Quel é o seu nome ?");
    endereco = prompt("Qual é o seu endereço ?");
}
function cancelar(){
    conferindo.classList.add("escondido");
}
function confirmar(){
    mensagem="De "+nomeCliente+"\n"+"Eu gostaria de pedir os seguintes produtos: 1x sanduiche: "+pratosEscolhidos[0].innerHTML+", 1x "+pratosEscolhidos[1].innerHTML+" e 1x "+pratosEscolhidos[2].innerHTML+", para o endereço: "+endereco;
    alert(mensagem);
}

