/* ESCRITO POR: JANYSSON TEIXEIRA DA SILVA
Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição
que possui a seguinte política de classificação: 
* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse
      próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação
      do aluno. 
Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40
e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. */

// Seleciona os elementos da tela
const nota = document.querySelector("#nota");
const rest = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");
const lab1 = document.querySelector("#lab1");
const aviso = document.querySelector("#aviso")

// Indica ao usuário que um ou mais campos não foram preenchido corretamente:
nota.onblur = () => {
    if(nota.value == ""){
        lab1.style = "color: #FF0000";
        nota.style = "border-color: #FF0000";
    }else{
        lab1.style = "color: #000000";
        nota.style = "border-color: #000000";
    }
}

btn.onclick = () => {
    if(nota.value == ""){
        nota.focus();
    }else if(nota.value < 0 || nota.value > 100){
        nota.value = "";
        aviso.innerText = "Digite apenas valores entre 0 e 100";
    }else{
        rest.value = calculaMedia(nota.value);
        aviso.innerText = "";
    }
}

// Método que faz o arredendamento da média caso seja possível
const calculaMedia = (nota) => {
    let aux = 0;
    if(nota >= 38){
        while(nota % 5 != 0){
            nota++;
            aux++;
        }
    }
    if(aux >= 3){
        nota = nota - aux;
    }
    if(nota >= 40){
        nota = `Parabéns! Você foi aprovado e sua média foi de ${nota}`;
    }else{
        nota = `Infelizmente você reprovou, sua média foi de ${nota}`;
    }
    
    return nota;
}
