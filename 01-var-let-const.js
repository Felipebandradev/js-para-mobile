// 01-var-let-const.js

var idade = 18 ; // ESCOPO GLOBL
// let mensagem; declarando essa variavel antes do if, o escopo dela vira global no caso do let

if( idade >= 18){
    var mensagem = "É adulto"; // Global
   // let mensagem = "É adulto"; // ESCOPO BLOCO
} else{
    var mensagem = "É menor"; // Global
 //   let mensagem = "É menor"; //ESCOPO BLOCO
}

console.log(idade);
// vai dar erro com let
console.log(mensagem);



const meuNome = "Felipe";
console.log(meuNome);

// Reatribuição NÃO é possível em constantes
// meuNome = "Felipe Barbosa";
// console.log(meuNome);

// constantes não podem começar vazias, zeradas elas precisam ser declaradas
// e este valor NÃO PODE SER MODIFICADO
const escola = "SENAC";