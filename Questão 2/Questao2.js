/* ESCRITO POR: JANYSSON TEIXEIRA DA SILVA
Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 
Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na 
equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais.
Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”. */

// Seleciona os elementos da tela
const a = document.querySelector("#a");
const b = document.querySelector("#b");
const c = document.querySelector("#c");
const rest = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const lab1 = document.querySelector("#lab1");
const lab2 = document.querySelector("#lab2");
const lab3 = document.querySelector("#lab3");
const aviso = document.querySelector("#aviso")

// Indica ao usuário que um ou mais campos não foram preenchido corretamente:
a.onblur = () => {
    if(a.value == ""){
        lab1.style = "color: #FF0000";
        a.style = "border-color: #FF0000";
    }else{
        lab1.style = "color: #000000";
        a.style = "border-color: #000000";
    }
}
b.onblur = () => {
    if(b.value == ""){
        lab2.style = "color: #FF0000";
        b.style = "border-color: #FF0000";
    }else{
        lab2.style = "color: #000000";
        b.style = "border-color: #000000";
    }
}
c.onblur = () => {
    if(c.value == ""){
        lab3.style = "color: #FF0000";
        c.style = "border-color: #FF0000";
    }else{
        lab3.style = "color: #000000";
        c.style = "border-color: #000000";
    }
}

btn.onclick = () => {
    if(a.value == ""){
        a.focus();
    }else if(b.value == ""){
        b.focus();
    }else if(c.value == ""){
        c.focus();
    }else{
        rest.value = calculaDelta(a.value, b.value, c.value);
    }
}

// Método que utliza Bhaskara para resolver uma equação quadrada
const calculaDelta = (a,b,c) => {
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    c = Number.parseFloat(c);

    let resultDelta = [];
    let delta = (b ** 2) - (4 * a * c);
    if (delta < 0) {
        return "Delta é negativo";
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    x1 = x1.toFixed(3)
    x2 = x2.toFixed(3)

    resultDelta.push(x1);
    resultDelta.push(x2);

    resultDelta = String(resultDelta);

    return resultDelta;
}
