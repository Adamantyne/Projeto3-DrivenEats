let comidaPronta=false, bebidaPronta=false, sobremesaPronta=false,precoComida=0, precoBebida=0, PrecoSobremesa=0,total=0, nomeCliente="", endereco="", sabor="";

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
    if(pratosEscolhidos[1].innerHTML === "Suco"){
        sabor = prompt("Qual sabor de suco você quer ?\nSabores: laranja, goiaba, abacaxi, maracujá")
    }
    else if(pratosEscolhidos[1].innerHTML === "Refrigerante"){
        sabor = prompt("Qual sabor de refrigerante você quer ?\nSabores: Coca cola, fanta laranja, fanta uva ou guaraná")
    }
    else{
        sabor = "normal"
    }
}
function cancelar(){
    conferindo.classList.add("escondido");
}
function confirmar(){
    mensagem="Cliente: "+nomeCliente+", "+"Eu gostaria de pedir os seguintes produtos: 1x sanduiche: "+pratosEscolhidos[0].innerHTML+", 1x "+pratosEscolhidos[1].innerHTML+" /"+sabor+" e 1x "+pratosEscolhidos[2].innerHTML+", para o endereço: "+endereco;
    let encoded = encodeURIComponent(mensagem);
    window.open("https://wa.me/+5562995445555?text="+encoded);
}
function entrar(){
    let abertura = document.querySelector(".abertura");
    abertura.classList.add("escondido");
    let aparecer = document.querySelector(".aparecer");
    aparecer.classList.remove("escondido");
}
