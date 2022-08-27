/* ESCRITO POR: JANYSSON TEIXEIRA DA SILVA
Questão 01 - Tipos de Triângulo
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 

Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais.
Escaleno: Todos os lados são diferentes.

Crie um código JS que receba os comprimentos dos lados de um triângulo através de inputs
e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair
as condições matemáticas de existência de um triângulo) */

// Seleciona os elementos da tela
const L1 = document.querySelector("#lado1");
const L2 = document.querySelector("#lado2");
const L3 = document.querySelector("#lado3");
const rest = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const lab1 = document.querySelector("#lab1");
const lab2 = document.querySelector("#lab2");
const lab3 = document.querySelector("#lab3");
const aviso = document.querySelector("#aviso")

// Indica ao usuário que o campo não foi preenchido corretamente:
L1.onblur = () => {
    if(L1.value == ""){
        lab1.style = "color: #FF0000";
        L1.style = "border-color: #FF0000";
    }else{
        lab1.style = "color: #000000";
        L1.style = "border-color: #000000";
    }
}
L2.onblur = () => {
    if(L2.value == ""){
        lab2.style = "color: #FF0000";
        L2.style = "border-color: #FF0000";
    }else{
        lab2.style = "color: #000000";
        L2.style = "border-color: #000000";
    }
}
L3.onblur = () => {
    if(L3.value == ""){
        lab3.style = "color: #FF0000";
        L3.style = "border-color: #FF0000";
    }else{
        lab3.style = "color: #000000";
        L3.style = "border-color: #000000";
    }
}

btn.onclick = () => {
    if(L1.value == ""){
        L1.focus();
    }else if(L2.value == ""){
        L2.focus();
    }else if(L3.value == ""){
        L3.focus();
    }else if(L1.value <= 0 || L2.value <= 0 || L3.value <= 0){
        L1.value = "";
        L2.value = "";
        L3.value = "";
        rest.value = "";
        aviso.innerText = "Digite apenas valores positivos maiores que 0!";
    }else{
        rest.value = tiposTriangulo(L1.value, L2.value, L3.value);
        aviso.innerText = "";
    }
}

// Método que define o tipo de triângulo
const tiposTriangulo = (lado1, lado2, lado3) => {
    lado1 = Number.parseFloat(lado1);
    lado2 = Number.parseFloat(lado2);
    lado3 = Number.parseFloat(lado3);

    let tipoTriang = "";

    if(lado1 == lado2 && lado2 == lado3){
        tipoTriang = "O triângulo é equilátero!";
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        tipoTriang = "O triângulo é isósceles";
    }else{
        tipoTriang = "O triângulo é escaleno";
    };
    return tipoTriang;
}