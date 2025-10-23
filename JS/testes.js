/*variavel: 
é como uma caixa que serve para armazenar informações. 
É um espaço no programa/computador que armazena dados.

*/

// pode mudar o valor dentro do código
let nomevariavel = 1; // inteiro
let nomevariavel2 = "jhessik"; // varchar
let nomevariavel3 = 2.7; // double
let nomevariavel4 = true; // boolean

// variavel constante, que não altera o valor

const nome = "jhessik";

let soma = 3+5; // 8
let subtração = 5-3; // 2
let multiplicacao = 3*5; // 15
let divisao = 10/2; // 5

// juntar textos

let primeironome = "jhessik";
let sobrenome = "Leal";
let nomecompleto = primeironome+sobrenome = "Jhessik Leal";

// funções

// função ela imprime o Olá Mundo
function imprimirMsg(){
    // console é utilizado para mostrar textos
    console.log("Hello Word");
    console.log(primeironome+"Bem vinda");
}

function somarValores(let a, let b){

}
// função com parametros
187, 76
function somarValores(valor1, valor2){
    let soma = valor1+valor2;
    console.log("O Resultado da soma é:"+soma);
}
function imc(altura,peso,nome){
    let resultado = (altura/peso)*altura;
    console.log(nomepessoa+"o seu IMC ´[e:"+resultado);
}

imc (1.80,70,"Rhauan");

// condicional
/* é uma ação que é executada com base em um critério
 - se chover irei ao cinema, se fizer sol irei a praia
 - hoje choveu! (ir ao cinema)
 - hoje fez sol! (ir a praia)

 Se fizer sol  e eu tiver dinheiro, irei a praia, se não ficarei em casa.
  - Fez sol e tenho dinheiro(irei a praia)
  - Fez sol mas nao tenho dinheiro(ficarei em casa)
  - Choveu mas eu tenho dinheiro(ficarei em casa)

  Se fizer sol  ou eu tiver dinheiro, irei a praia, se não ficarei em casa.
  - Fez sol e tenho dinheiro(praia)
  - Fez sol mas nao tenho dinheiro(praia)
  - Choveu mas eu tenho dinheiro(praia)
  - Choveu e estou desprevenida(casa)
*/

let  n1 = 15;
let n2 = 45;
// if - SE else - Senão

//se (if=10)
if(n1=10){
    console.log("Ir a praia");
}else{
    console.log("Fico em casa!");
}

// se n1 for maior que 10 E n2 for menor 40
if(n1=10 & n2<40){
    console.log("Irei  a praia");
}else{
    console.log("Fico em casa!");
}

// se n1 for maior que 10 OU n2 menor que 40
if(n1=10 || n2<40){
    console.log("Irei  a praia");
}else{
    console.log("Fico em casa!");
}

// if aninhado
// se n1 é maior que 12 E n2 maior que 48
if(n1>12 & n2>48){
    console.log("Irei a praia!");
    // se n1 é maior ou igual a 15 E n2 menor que 45
}else if(n1>=15 & n2<45){
    console.log("Vou ao cinema!");
/* se n1 é maior que 14 E n2 igual a 45
               E
 se n2 for maior que n1 OU n1 maior ou igual a 15
 */
}else if ((n1>14 && n2==45) && (n2>n1 || n1>=15)){
    console.log("Vou ao Shoppinh!")
}

// Objeto Carro

let carro = {
    cor: "preto"
    placa: "KJH9876"
    modelo: "fusca"
    kmRodado:12000,
    som: true
    arcondicionado: false

}
console.log(carro.cor+carro.modelo+carro.placa);