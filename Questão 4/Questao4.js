/* ESCRITO POR: JANYSSON TEIXEIRA DA SILVA
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma
contagem até o argumento como limite.
Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o
número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:
Entrada:
45
Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22,
23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42,
43, 44, LuidyMoura. */

// Seleciona os elementos da tela
const n = document.querySelector("#n");
const rest = document.querySelector("#resultado");
const btn = document.querySelector("#criar");
const lab1 = document.querySelector("#lab1");
const aviso = document.querySelector("#aviso")

// Indica ao usuário que um ou mais campos não foram preenchido corretamente:
n.onblur = () => {
    if(n.value == ""){
        lab1.style = "color: #FF0000";
        n.style = "border-color: #FF0000";
    }else{
        lab1.style = "color: #000000";
        n.style = "border-color: #000000";
    }
}

btn.onclick = () => {
    if(n.value == ""){
        n.focus();
    }else if(n.value <= 0){
        n.value = "";
        aviso.innerText = "Digite apenas valores positivos maiores que 0!";
    }else{
        rest.value = criaVetor(n.value);
        aviso.innerText = "";
    }
}

// Método que cria o vetor Luidy/Moura
const criaVetor = (n) => {
    let vetor = [];
    for(let i = 1; i <= n; i++){
        if(i % 5 == 0 && i % 9 == 0){
            vetor.push("LuidyMoura");
        }else if(i % 5 == 0){
            vetor.push("Luidy");
        }else if(i % 9 == 0){
            vetor.push("Moura");
        }else{vetor.push(i);}
    }
    return vetor
}