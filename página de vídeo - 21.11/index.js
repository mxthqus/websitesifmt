var setadireita = window.document.getElementById("setadireita");
var Leonardo = window.document.getElementById("leonardo");
var Bruna = window.document.getElementById("bruna");
var Samantha = window.document.getElementById("samantha");
var setaesquerda = window.document.getElementById("setaesquerda");

function, DeslizarParaDireita(){
    Leonardo.style = "display: none";
    Bruna.style = "flex";
    setadireita.style = "display: none";
    setaesquerda.style = "display: flex; margin-top=: 50px;";
}

function, DeslizarParaEsquerda(){
    Leonardo.style = "flex";
    Bruna.style = "display: none";
    setadireita.style = "display: flex; margin-top=: 50px;";
    setaesquerda.style = "display: none";
}